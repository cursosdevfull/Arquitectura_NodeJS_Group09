import { DataSource } from "typeorm";
import { CourseEntity } from "./models/course.entity";
import { CourseService } from "./course.service";

export const courseProviders = [
    {
        provide: "COURSE_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(CourseEntity),
        inject: ["DATABASE_CONNECTION"]
    },
    CourseService
]