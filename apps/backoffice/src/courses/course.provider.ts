import { DataSource } from "typeorm";
import { CourseEntity } from "./models/course.entity";

export const courseProvider = {
    provide: "COURSE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CourseEntity),
    inject: ["DATABASE_CONNECTION"]
}