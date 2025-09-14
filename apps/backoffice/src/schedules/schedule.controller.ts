import { Body, Controller, Delete, Get, HttpException, Inject, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { IsNull, Repository } from "typeorm";
import { ScheduleEntity } from "./models/schedule.entity";
import { plainToInstance } from "class-transformer";
import { ScheduleIdDto } from "./dtos/schedule-id.dto";
import { ScheduleCreateDto } from "./dtos/schedule-create.dto";
import { ScheduleUpdateDto } from "./dtos/schedule-update.dto";
import { ScheduleService } from "./schedule.service";

@Controller("schedule")
export class ScheduleController {
    constructor(private scheduleService: ScheduleService) { }

    @Post()
    async add(@Body() body: ScheduleCreateDto) {
        const schedule = plainToInstance(ScheduleEntity, body);
        return this.scheduleService.add(schedule);
    }

    @Get()
    listAll(): Promise<ScheduleEntity[]> {
        return this.scheduleService.listAll();
    }

    @Get(":scheduleId")
    async getOne(@Param() params: ScheduleIdDto): Promise<ScheduleEntity> {
        return this.scheduleService.getOne(params.scheduleId);
    }

    @Put(":scheduleId")
    async update(@Param() params: ScheduleIdDto, @Body() body: ScheduleUpdateDto) {
        return this.scheduleService.update(params.scheduleId, body);
    }

    @Delete(":scheduleId")
    async delete(@Param() params: ScheduleIdDto) {
        return this.scheduleService.delete(params.scheduleId);
    }

}