import { Module } from "@nestjs/common";
import { DatabaseModule } from '../core/modules/database/database.module';
import { ScheduleController } from "./schedule.controller";
import { scheduleProvider } from "./schedule.provider";


@Module({
    imports: [DatabaseModule],
    controllers: [ScheduleController],
    providers: [scheduleProvider],
})
export class ScheduleModule { }