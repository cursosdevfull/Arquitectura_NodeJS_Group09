import { IsNumber, IsNotEmpty } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class SessionFilterDto {
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    scheduleId: number;
}