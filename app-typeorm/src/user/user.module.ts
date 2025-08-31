import { Module } from "@nestjs/common";
import { DatabaseModule } from '../core/modules/database/database.module';
import { userProviders } from "./user.provider";
import { UserController } from "./user.controller";

@Module({
    imports: [DatabaseModule],
    providers: [...userProviders],
    controllers: [UserController],
})
export class UserModule { }