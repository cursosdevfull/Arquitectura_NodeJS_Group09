import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class SessionIdDto {
    @Type(() => Number)
    @IsNumber()
    sessionId: number;
}
