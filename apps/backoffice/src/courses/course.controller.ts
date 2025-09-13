import { Body, Controller, Delete, Get, HttpException, Inject, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { IsNull, Repository } from "typeorm";
import { CourseEntity } from "./models/course.entity";
import { CourseCreateDto } from "./dtos/course-create.dto";
import { CourseIdDto } from "./dtos/course-id.dto";
import { CourseUpdateDto } from "./dtos/course-update.dto";

@Controller("course")
export class CourseController {
    constructor(@Inject("COURSE_REPOSITORY") private repository: Repository<CourseEntity>) { }

    @Post()
    async add(@Body() body: CourseCreateDto) {
        const course = new CourseEntity();
        course.title = body.title;

        return this.repository.save(course);
    }

    @Get()
    listAll(): Promise<CourseEntity[]> {
        return this.repository.find({ where: { deletedAt: IsNull() } });
    }

    @Get(":id")
    async getOne(@Param() params: any): Promise<CourseEntity> {
        console.log(params);
        const course = await this.repository.findOne({ where: { courseId: +params.id, deletedAt: IsNull() } });
        if (!course) {
            throw new NotFoundException();
        }
        return course;
    }

    @Put(":courseId")
    async update(@Param() params: CourseIdDto, @Body() body: CourseUpdateDto) {
        try {
            const { courseId } = params

            const course = await this.repository.findOne({ where: { courseId: +courseId, deletedAt: IsNull() } });

            if (!course) {
                throw new NotFoundException();
            }

            Object.assign(course, body)

            course.updatedAt = new Date();

            return this.repository.save(course);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error updating course", status, { cause: error });
        }
    }

    @Delete(":courseId")
    async delete(@Param() params: CourseIdDto) {
        try {
            const { courseId } = params
            const course = await this.repository.findOne({ where: { courseId: +courseId, deletedAt: IsNull() } });

            if (!course) {
                throw new NotFoundException();
            }

            course.deletedAt = new Date();

            return this.repository.save(course);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error deleting course", status, { cause: error });
        }
    }
}