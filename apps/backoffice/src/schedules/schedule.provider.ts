import { DataSource } from "typeorm";
import { ScheduleEntity } from "./models/schedule.entity";

export const scheduleProvider = {
    provide: 'SCHEDULE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ScheduleEntity),
    inject: ['DATABASE_CONNECTION'],
}