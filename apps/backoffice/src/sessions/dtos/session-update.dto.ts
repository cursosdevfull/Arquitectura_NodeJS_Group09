import { IsDate, IsNumber, IsString, IsOptional, IsUUID } from 'class-validator';
import { ScheduleType } from '../types/schedule.type';
import { Type } from 'class-transformer';

export class SessionUpdateDto {
    @IsOptional()
    @IsUUID()
    zoomSessionId: string;

    @IsOptional()
    @IsDate()
    dateMetting: Date;

    @IsOptional()
    @IsString()
    timeStart: string;

    @IsOptional()
    @IsNumber()
    duration: number;

    @IsOptional()
    @Type(() => ScheduleType)
    schedule: ScheduleType;
}
