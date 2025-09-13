import { Type } from "class-transformer";
import { ArrayMinSize, IsDate, IsNotEmpty, IsNumber, IsOptional, Max, MaxLength, Min, MinLength } from "class-validator";
import { CourseType } from "../types/course.type";
import { TeacherType } from "../types/teacher.type";

export class ScheduleCreateDto {
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(4000)
    summary: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    startDate: Date;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(720)
    @Type(() => Number)
    duration: number;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    frequency: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    price: number;

    @IsOptional()
    @MinLength(3, { each: true })
    @MaxLength(4000, { each: true })
    @ArrayMinSize(1)
    content: string[];

    @IsOptional()
    @MinLength(3, { each: true })
    @MaxLength(4000, { each: true })
    @ArrayMinSize(1)
    requirements: string[];

    @IsOptional()
    @MinLength(3, { each: true })
    @MaxLength(4000, { each: true })
    @ArrayMinSize(1)
    syllabus: string[];

    @IsNotEmpty()
    @Type(() => CourseType)
    course: CourseType

    @IsNotEmpty()
    @Type(() => TeacherType)
    teacher: TeacherType
}