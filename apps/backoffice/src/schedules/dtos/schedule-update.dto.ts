import { Type } from "class-transformer";
import { ArrayMinSize, IsDate, IsNumber, IsOptional, Max, MaxLength, Min, MinLength } from "class-validator";
import { CourseType } from "../types/course.type";
import { TeacherType } from "../types/teacher.type";

export class ScheduleUpdateDto {
    @IsOptional()
    @MinLength(3)
    title: string;

    @IsOptional()
    @MinLength(10)
    @MaxLength(4000)
    summary: string;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    startDate: Date;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(720)
    @Type(() => Number)
    duration: number;

    @IsOptional()
    @MinLength(3)
    @MaxLength(50)
    frequency: string;

    @IsOptional()
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

    @IsOptional()
    @Type(() => CourseType)
    course: CourseType;

    @IsOptional()
    @Type(() => TeacherType)
    teacher: TeacherType

}