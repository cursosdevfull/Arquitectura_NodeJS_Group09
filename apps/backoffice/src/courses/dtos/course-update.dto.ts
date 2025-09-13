import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CourseUpdateDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    title: string;
};