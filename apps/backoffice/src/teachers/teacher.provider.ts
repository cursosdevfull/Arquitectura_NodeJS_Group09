import { DataSource } from "typeorm";
import { TeacherEntity } from "./models/teacher.entity";

export const teacherProvider =
{
    provide: 'TEACHER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TeacherEntity),
    inject: ['DATABASE_CONNECTION'],
}
