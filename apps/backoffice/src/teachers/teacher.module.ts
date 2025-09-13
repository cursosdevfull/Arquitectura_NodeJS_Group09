import { Module } from "@nestjs/common";
import { DatabaseModule } from '../core/modules/database/database.module';
import { teacherProvider } from "./teacher.provider";
import { TeacherController } from "./teacher.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [TeacherController],
    providers: [teacherProvider],
})
export class TeacherModule { }