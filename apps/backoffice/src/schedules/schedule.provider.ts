import { DataSource } from "typeorm";
import { ScheduleEntity } from "./models/schedule.entity";
import { ScheduleService } from "./schedule.service";

export const scheduleProviders = [
    {
        provide: 'SCHEDULE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ScheduleEntity),
        inject: ['DATABASE_CONNECTION'],
    },
    ScheduleService
];