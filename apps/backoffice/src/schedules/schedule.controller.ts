import { Body, Controller, Delete, Get, HttpException, Inject, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { IsNull, Repository } from "typeorm";
import { ScheduleEntity } from "./models/schedule.entity";
import { plainToInstance } from "class-transformer";
import { ScheduleIdDto } from "./dtos/schedule-id.dto";
import { ScheduleCreateDto } from "./dtos/schedule-create.dto";
import { ScheduleUpdateDto } from "./dtos/schedule-update.dto";

@Controller("schedule")
export class ScheduleController {
    constructor(@Inject('SCHEDULE_REPOSITORY') private repository: Repository<ScheduleEntity>) { }

    @Post()
    async add(@Body() body: ScheduleCreateDto) {
        try {
            const schedule = plainToInstance(ScheduleEntity, body);

            return this.repository.save(schedule)
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error saving schedule", status, { cause: error });
        }
    }

    @Get()
    listAll(): Promise<ScheduleEntity[]> {
        try {
            return this.repository.find({ where: { deletedAt: IsNull() }, relations: ['course', 'teacher'] /*, select: { course: { courseId: true, title: true }, teacher: { teacherId: true, name: true, lastname: true } } */ });
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error listing schedules", status, { cause: error });
        }
    }

    @Get(":scheduleId")
    async getOne(@Param() params: ScheduleIdDto): Promise<ScheduleEntity> {
        try {
            const { scheduleId } = params
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

    @Put(":scheduleId")
    async update(@Param() params: ScheduleIdDto, @Body() body: ScheduleUpdateDto) {
        try {
            const { scheduleId } = params

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

    @Delete(":scheduleId")
    async delete(@Param() params: ScheduleIdDto) {
        try {
            const { scheduleId } = params
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