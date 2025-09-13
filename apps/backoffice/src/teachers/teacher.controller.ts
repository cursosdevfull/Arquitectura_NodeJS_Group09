import { Body, Controller, Delete, Get, HttpException, Inject, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { TeacherEntity } from "./models/teacher.entity";
import { IsNull, Repository } from "typeorm";
import { TeacherCreateDto } from "./dtos/teacher-create.dto";
import { plainToInstance } from "class-transformer";
import { TeacherIdDto } from "./dtos/teacher-id.dto";
import { TeacherUpdateDto } from "./dtos/teacher-update.dto";

@Controller("teacher")
export class TeacherController {
    constructor(@Inject('TEACHER_REPOSITORY') private repository: Repository<TeacherEntity>) { }

    @Post()
    async add(@Body() body: TeacherCreateDto) {
        try {
            const teacher = plainToInstance(TeacherEntity, body);
            return this.repository.save(teacher);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error saving teacher", status, { cause: error });
        }
    }

    @Get()
    listAll(): Promise<TeacherEntity[]> {
        try {
            return this.repository.find({ where: { deletedAt: IsNull() } });
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error listing teachers", status, { cause: error });
        }
    }

    @Get(":teacherId")
    async getOne(@Param() params: TeacherIdDto): Promise<TeacherEntity> {
        try {
            const { teacherId } = params
            const teacher = await this.repository.findOne({ where: { teacherId: +teacherId, deletedAt: IsNull() } });
            if (!teacher) {
                throw new NotFoundException("Teacher not found");
            }
            return teacher
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error get one teacher", status, { cause: error });
        }
    }

    @Put(":teacherId")
    async update(@Param() params: TeacherIdDto, @Body() body: TeacherUpdateDto) {
        try {
            const { teacherId } = params
            const teacher = await this.repository.findOne({ where: { teacherId, deletedAt: IsNull() } });

            if (!teacher) {
                throw new NotFoundException("Teacher not found");
            }

            Object.assign(teacher, body)

            teacher.updatedAt = new Date();
            return this.repository.save(teacher);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error updating teacher", status, { cause: error });
        }
    }

    @Delete(":teacherId")
    async delete(@Param() params: TeacherIdDto) {
        try {
            const { teacherId } = params
            const teacher = await this.repository.findOne({ where: { teacherId, deletedAt: IsNull() } });

            if (!teacher) {
                throw new NotFoundException("Teacher not found");
            }
            teacher.deletedAt = new Date();
            return this.repository.save(teacher);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error deleting teacher", status, { cause: error });
        }
    }

}