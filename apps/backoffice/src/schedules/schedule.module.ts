import { Module } from "@nestjs/common";
import { DatabaseModule } from '../core/modules/database/database.module';
import { ScheduleController } from "./schedule.controller";
import { scheduleProviders } from "./schedule.provider";


@Module({
    imports: [DatabaseModule],
    controllers: [ScheduleController],
    providers: [...scheduleProviders],
})
export class ScheduleModule { }