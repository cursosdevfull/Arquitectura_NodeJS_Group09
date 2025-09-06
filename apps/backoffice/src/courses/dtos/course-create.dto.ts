import { IsNotEmpty, MinLength } from "class-validator";

export class CourseCreateDto {
    @IsNotEmpty()
    @MinLength(5)
    title: string;
}
