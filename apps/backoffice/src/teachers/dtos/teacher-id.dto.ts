import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class TeacherIdDto {
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    teacherId: number;
}