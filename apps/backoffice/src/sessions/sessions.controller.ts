import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { SessionEntity } from "./models/session.entity";
import { plainToInstance } from "class-transformer";
import { SessionIdDto } from "./dtos/session-id.dto";
import { SessionCreateDto } from "./dtos/session-create.dto";
import { SessionUpdateDto } from "./dtos/session-update.dto";
import { SessionFilterDto } from "./dtos/session-filter.dto";
import { SessionService } from "./session.service";

@Controller("session")
export class SessionsController {
    constructor(private sessionService: SessionService) { }

    @Post()
    async add(@Body() body: SessionCreateDto) {
        const session = plainToInstance(SessionEntity, body);
        return this.sessionService.add(session);
    }

    @Get()
    listAll(@Query() query: SessionFilterDto): Promise<SessionEntity[]> {
        const { scheduleId } = query;
        if (scheduleId) {
            return this.sessionService.listBySchedule(scheduleId);
        }
        return this.sessionService.listAll();
    }

    @Get(":sessionId")
    async getOne(@Param() params: SessionIdDto): Promise<SessionEntity> {
        return this.sessionService.getOne(params.sessionId);
    }

    @Put(":sessionId")
    async update(@Param() params: SessionIdDto, @Body() body: SessionUpdateDto) {
        return this.sessionService.update(params.sessionId, body);
    }

    @Delete(":sessionId")
    async delete(@Param() params: SessionIdDto) {
        return this.sessionService.delete(params.sessionId);
    }

}
