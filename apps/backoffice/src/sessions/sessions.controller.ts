import { Body, Controller, Delete, Get, HttpException, Inject, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { IsNull, Repository } from "typeorm";
import { SessionEntity } from "./models/session.entity";
import { plainToInstance } from "class-transformer";
import { SessionIdDto } from "./dtos/session-id.dto";
import { SessionCreateDto } from "./dtos/session-create.dto";
import { SessionUpdateDto } from "./dtos/session-update.dto";
import { SessionFilterDto } from "./dtos/session-filter.dto";

@Controller("session")
export class SessionsController {
    constructor(@Inject('SESSION_REPOSITORY') private repository: Repository<SessionEntity>) { }

    @Post()
    async add(@Body() body: SessionCreateDto) {
        try {
            const session = plainToInstance(SessionEntity, body);

            return this.repository.save(session)
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error saving session", status, { cause: error });
        }
    }

    @Get()
    listAll(@Query() query: SessionFilterDto): Promise<SessionEntity[]> {
        try {
            const { scheduleId } = query;
            return this.repository.find({
                where: { deletedAt: IsNull(), schedule: { scheduleId } },
                relations: ['schedule']
            });
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error listing sessions", status, { cause: error });
        }
    }

    @Get(":sessionId")
    async getOne(@Param() params: SessionIdDto): Promise<SessionEntity> {
        try {
            const { sessionId } = params
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

    @Put(":sessionId")
    async update(@Param() params: SessionIdDto, @Body() body: SessionUpdateDto) {
        try {
            const { sessionId } = params

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

    @Delete(":sessionId")
    async delete(@Param() params: SessionIdDto) {
        try {
            const { sessionId } = params
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
