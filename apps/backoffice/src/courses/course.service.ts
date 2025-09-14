import { HttpException, Inject, NotFoundException } from "@nestjs/common";
import { IsNull, Repository } from "typeorm";
import { CourseEntity } from "./models/course.entity";
import { CourseUpdateDto } from "./dtos/course-update.dto";

export class CourseService {
    constructor(@Inject("COURSE_REPOSITORY") private repository: Repository<CourseEntity>) { }

    save(title: string) {
        try {
            const course = new CourseEntity();
            course.title = title;

            return this.repository.save(course);
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error creating course", status, { cause: error });
        }
    }

    listAll(): Promise<CourseEntity[]> {
        try {
            return this.repository.find({ where: { deletedAt: IsNull() } });
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error listing course", status, { cause: error });
        }
    }

    async getOne(courseId: number) {
        try {
            const course = await this.repository.findOne({ where: { courseId, deletedAt: IsNull() } });
            if (!course) {
                throw new NotFoundException();
            }
            return course;
        } catch (error) {
            const status = error instanceof HttpException ? error.getStatus() : 500
            throw new HttpException("Error getting course", status, { cause: error });
        }
    }

    async update(courseId: number, body: CourseUpdateDto) {
        try {
            const course = await this.repository.findOne({ where: { courseId, deletedAt: IsNull() } });

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

    async delete(courseId: number) {
        try {
            const course = await this.repository.findOne({ where: { courseId, deletedAt: IsNull() } });

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