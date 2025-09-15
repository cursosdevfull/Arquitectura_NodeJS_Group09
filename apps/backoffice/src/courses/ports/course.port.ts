import { CourseEntity } from "../models/course.entity";

export interface CoursePort {
    save(title: string): Promise<CourseEntity>;
    listAll(): Promise<CourseEntity[]>;
    getOne(courseId: number): Promise<CourseEntity>;
    update(courseId: number, body: any): Promise<CourseEntity>;
    delete(courseId: number): Promise<CourseEntity>;
}