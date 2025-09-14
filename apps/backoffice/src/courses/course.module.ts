import { Module } from "@nestjs/common";
import { CourseController } from "./course.controller";
import { DatabaseModule } from '../core/modules/database/database.module';
import { courseProviders } from './course.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [CourseController],
    providers: [...courseProviders]
})
export class CourseModule { }