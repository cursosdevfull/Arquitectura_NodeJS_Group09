import { HttpException } from "@nestjs/common";
import { TeacherEntity } from "../models/teacher.entity";
import { TeacherPort } from "../ports/teacher.port";
import { plainToInstance } from "class-transformer";
import { Repository } from "typeorm";
import { TeacherCreateDto } from "../dtos/teacher-create.dto";

export class TeacherService implements TeacherPort {
    constructor(private repository: Repository<TeacherEntity>) { }

    save(title: string, body: TeacherCreateDto): Promise<TeacherEntity> {
        try {
            const teacher = plainToInstance(TeacherEntity, body);
            return this.repository.save(teacher);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error creating teacher", status, { cause: error });
        }
    }
    listAll(): Promise<TeacherEntity[]> {
        throw new Error("Method not implemented.");
    }
    getOne(teacherId: number): Promise<TeacherEntity> {
        throw new Error("Method not implemented.");
    }
    update(teacherId: number, body: any): Promise<TeacherEntity> {
        throw new Error("Method not implemented.");
    }
    delete(teacherId: number): Promise<TeacherEntity> {
        throw new Error("Method not implemented.");
    }
}