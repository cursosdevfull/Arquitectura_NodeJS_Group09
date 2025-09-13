import { IsEmail, IsOptional, MinLength } from "class-validator";

export class TeacherUpdateDto {
    @IsOptional()
    @MinLength(3)
    name: string

    @IsOptional()
    @MinLength(3)
    lastname: string

    @IsOptional()
    @MinLength(5)
    @IsEmail()
    email: string
}