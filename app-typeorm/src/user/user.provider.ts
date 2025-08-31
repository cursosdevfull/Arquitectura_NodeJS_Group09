import { DataSource } from "typeorm";
import { UserEntity } from './models/user.entity';
import { RoleEntity } from './models/role.entity';

export const userProviders = [
    {
        provide: "USER_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
        inject: ["DATABASE_SOURCE"]
    },
    {
        provide: "ROLE_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(RoleEntity),
        inject: ["DATABASE_SOURCE"]
    }
]