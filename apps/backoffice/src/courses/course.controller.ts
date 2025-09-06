import { BadRequestException, Body, Controller, Delete, Get, Inject, NotFoundException, Param, Post, Put, Req, ValidationPipe } from "@nestjs/common";
import { IsNull, Repository } from "typeorm";
import { CourseEntity } from "./models/course.entity";
import { CourseCreateDto } from "./dtos/course-create.dto";
import { type CourseIdDto } from "./dtos/course-id.dto";
import { type CourseUpdateDto } from "./dtos/course-update.dto";
import { validate } from "class-validator";

@Controller("course")
export class CourseController {
    constructor(@Inject("COURSE_REPOSITORY") private repository: Repository<CourseEntity>) { }

    @Post()
    async add(@Body() body: CourseCreateDto) {

        /*         if (!body.title) {
                    throw new Error("Title is required");
                }
        
                if (body.title.length < 5) {
                    throw new Error("Title must be at least 5 characters long");
                } */


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

    @Put(":id")
    async update(@Param() params: CourseIdDto, @Body() body: CourseUpdateDto) {
        const { id } = params
        const course = await this.repository.findOne({ where: { courseId: +id, deletedAt: IsNull() } });

        if (!course) {
            throw new NotFoundException();
        }

        Object.assign(course, body)

        return this.repository.save(course);
    }

    @Delete(":id")
    async delete(@Param() params: CourseIdDto) {
        const { id } = params
        const course = await this.repository.findOne({ where: { courseId: +id, deletedAt: IsNull() } });

        if (!course) {
            throw new NotFoundException();
        }

        course.deletedAt = new Date();

        return this.repository.save(course);
    }
}