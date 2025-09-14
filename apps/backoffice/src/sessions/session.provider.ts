import { DataSource } from 'typeorm';
import { SessionEntity } from './models/session.entity';
import { SessionService } from './session.service';

export const sessionProviders = [
    {
        provide: 'SESSION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(SessionEntity),
        inject: ['DATABASE_CONNECTION'],
    },
    SessionService
];
