import { Inject, NotFoundException, HttpException } from "@nestjs/common";
import { Repository, IsNull } from "typeorm";
import { SessionEntity } from "./models/session.entity";
import { SessionUpdateDto } from "./dtos/session-update.dto";

export class SessionService {
    constructor(@Inject('SESSION_REPOSITORY') private repository: Repository<SessionEntity>) { }

    add(session: SessionEntity) {
        try {
            this.repository.save(session);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error creating session", status, { cause: error });
        }
    }

    listAll() {
        try {
            return this.repository.find({ where: { deletedAt: IsNull() }, relations: ['schedule'] });
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error listing sessions", status, { cause: error });
        }
    }

    listBySchedule(scheduleId: number) {
        try {
            return this.repository.find({
                where: { deletedAt: IsNull(), schedule: { scheduleId } },
                relations: ['schedule']
            });
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error listing sessions by schedule", status, { cause: error });
        }
    }

    async getOne(sessionId: number) {
        try {
            const session = await this.repository.findOne({ where: { sessionId, deletedAt: IsNull() }, relations: ['schedule'] });
            if (!session) {
                throw new HttpException("Session not found", 404);
            }
            return session;
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error fetching session", status, { cause: error });
        }
    }

    async update(sessionId: number, body: SessionUpdateDto) {
        try {
            const session = await this.repository.findOne({ where: { sessionId, deletedAt: IsNull() } });

            if (!session) {
                throw new NotFoundException()
            }

            Object.assign(session, body)

            session.updatedAt = new Date();

            return this.repository.save(session);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error updating session", status, { cause: error });
        }
    }

    async delete(sessionId: number) {
        try {
            const session = await this.repository.findOne({ where: { sessionId, deletedAt: IsNull() } });

            if (!session) {
                throw new NotFoundException();
            }

            session.deletedAt = new Date();
            return this.repository.save(session);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error deleting session", status, { cause: error });
        }
    }
}