import { Body, Controller, Delete, Get, HttpException, Inject, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { IsNull, Repository } from "typeorm";
import { CourseEntity } from "./models/course.entity";
import { CourseCreateDto } from "./dtos/course-create.dto";
import { CourseIdDto } from "./dtos/course-id.dto";
import { CourseUpdateDto } from "./dtos/course-update.dto";
import { CourseService } from "./course.service";

@Controller("course")
export class CourseController {
    constructor(@Inject("COURSE_REPOSITORY") private repository: Repository<CourseEntity>, private courseService: CourseService) { }

    @Post()
    async add(@Body() body: CourseCreateDto) {
        return this.courseService.save(body.title)
    }

    @Get()
    listAll(): Promise<CourseEntity[]> {
        return this.courseService.listAll();
    }

    @Get(":id")
    async getOne(@Param() params: CourseIdDto): Promise<CourseEntity> {
        return this.courseService.getOne(params.courseId);
    }

    @Put(":courseId")
    async update(@Param() params: CourseIdDto, @Body() body: CourseUpdateDto) {
        return this.courseService.update(params.courseId, body);
    }

    @Delete(":courseId")
    async delete(@Param() params: CourseIdDto) {
        return this.courseService.delete(params.courseId);
    }
}