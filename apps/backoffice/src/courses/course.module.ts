import { Module } from "@nestjs/common";
import { CourseController } from "./course.controller";
import { DatabaseModule } from '../core/modules/database/database.module';
import { courseProvider } from './course.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [CourseController],
    providers: [courseProvider]
})
export class CourseModule { }