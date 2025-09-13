import { Module } from '@nestjs/common';
import { SessionsController } from './sessions.controller';
import { sessionProviders } from './session.provider';
import { DatabaseModule } from '../core/modules/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [SessionsController],
    providers: [...sessionProviders],
})
export class SessionsModule { }
