import { DataSource } from "typeorm"
import path from "path"

export const databaseProviders = [
    {
        provide: 'DATABASE_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: "mysql",
                host: "localhost",
                username: "user",
                password: "12345",
                database: "db",
                entities: [path.join(__dirname, "../../../**/*.entity{.ts,.js}")],
                synchronize: true,
                logging: true,
            })

            return dataSource.initialize()
        }
    }
]