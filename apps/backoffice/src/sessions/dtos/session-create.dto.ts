import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { ScheduleType } from '../types/schedule.type';

export class SessionCreateDto {

    @IsNotEmpty()
    @IsUUID()
    zoomSessionId: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    dateMetting: Date;

    @IsNotEmpty()
    @IsString()
    timeStart: string;

    @IsNotEmpty()
    @IsNumber()
    duration: number;

    @IsNotEmpty()
    @Type(() => ScheduleType)
    schedule: ScheduleType;
}
