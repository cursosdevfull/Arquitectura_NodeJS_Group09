import { IsEmail, IsNotEmpty, Min, MinLength } from "class-validator";

export class TeacherCreateDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string

    @IsNotEmpty()
    @MinLength(3)
    lastname: string

    @IsNotEmpty()
    @MinLength(5)
    @IsEmail()
    email: string
}