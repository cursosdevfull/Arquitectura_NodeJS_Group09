import { DataSource } from "typeorm"
import path from "path"

export const databaseProviders = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: () => {
            const databaSource = new DataSource({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "user",
                password: "12345",
                database: "db",
                entities: [path.join(__dirname, "../../../**/*.entity{.ts,.js}")],
                synchronize: true,
                logging: true
            })
            return databaSource.initialize()
        }
    }
]