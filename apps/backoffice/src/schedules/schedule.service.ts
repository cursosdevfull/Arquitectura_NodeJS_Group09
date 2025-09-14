import { Inject, NotFoundException, HttpException } from "@nestjs/common";
import { Repository, IsNull } from "typeorm";
import { ScheduleEntity } from "./models/schedule.entity";
import { ScheduleUpdateDto } from "./dtos/schedule-update.dto";

export class ScheduleService {
    constructor(@Inject('SCHEDULE_REPOSITORY') private repository: Repository<ScheduleEntity>) { }

    add(schedule: ScheduleEntity) {
        try {
            this.repository.save(schedule);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error creating schedule", status, { cause: error });
        }
    }

    listAll() {
        try {
            return this.repository.find({ where: { deletedAt: IsNull() }, relations: ['course', 'teacher'] /*, select: { course: { courseId: true, title: true }, teacher: { teacherId: true, name: true, lastname: true } } */ });
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error listing schedules", status, { cause: error });
        }
    }

    async getOne(scheduleId: number) {
        try {
            const schedule = await this.repository.findOne({ where: { scheduleId, deletedAt: IsNull() }, relations: ['course', "teacher"] });
            if (!schedule) {
                throw new HttpException("Schedule not found", 404);
            }
            return schedule;
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error fetching schedule", status, { cause: error });
        }
    }

    async update(scheduleId: number, body: ScheduleUpdateDto) {
        try {
            const schedule = await this.repository.findOne({ where: { scheduleId, deletedAt: IsNull() } });

            if (!schedule) {
                throw new NotFoundException()
            }

            Object.assign(schedule, body)

            schedule.updatedAt = new Date();

            return this.repository.save(schedule);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error updating schedule", status, { cause: error });
        }
    }


    async delete(scheduleId: number) {
        try {
            const schedule = await this.repository.findOne({ where: { scheduleId, deletedAt: IsNull() } });

            if (!schedule) {
                throw new NotFoundException();
            }

            schedule.deletedAt = new Date();
            return this.repository.save(schedule);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error deleting schedule", status, { cause: error });
        }
    }
}