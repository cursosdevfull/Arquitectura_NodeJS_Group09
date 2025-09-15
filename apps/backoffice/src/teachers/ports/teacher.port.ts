import { TeacherCreateDto } from "../dtos/teacher-create.dto";
import { TeacherEntity } from "../models/teacher.entity";

export interface TeacherPort {
    save(title: string, body: TeacherCreateDto): Promise<TeacherEntity>;
    listAll(): Promise<TeacherEntity[]>;
    getOne(teacherId: number): Promise<TeacherEntity>;
    update(teacherId: number, body: any): Promise<TeacherEntity>;
    delete(teacherId: number): Promise<TeacherEntity>;
}