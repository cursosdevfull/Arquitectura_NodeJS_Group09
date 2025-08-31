import { Controller, Get, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "./models/user.entity";
import { RoleEntity } from './models/role.entity';

@Controller("users")
export class UserController {
    constructor(@Inject("USER_REPOSITORY") private repositoryUser: Repository<UserEntity>, @Inject("ROLE_REPOSITORY") private roleRepository: Repository<RoleEntity>) { }

    @Get()
    async operations() {
        const user = new UserEntity();
        user.name = "Sonia Revolledo";
        user.email = "sonia.revolledo@example.com";
        user.password = "securepassword";
        user.age = 30;
        user.isActive = true;

        //user.role = await this.roleRepository.findOneBy({ id: 1 }) as RoleEntity;
        user.role = { id: 2 } as RoleEntity

        await this.repositoryUser.save(user);

        return "ok"

        /*         const user = await this.repositoryUser.findOneBy({ id: 2 });
                if (user) {
                    user.isActive = false;
                    await this.repositoryUser.save(user);
                } */


        /* await this.repository.delete({ id: 3 });
        return "user deleted" */
        /*         const user = await this.repository.findOneBy({ id: 2 });
        
                if (user) {
                    user.age = 34
                    await this.repository.save(user);
                }
        
        
                return "ok" */


        /* const users = await this.repository.find();
        return users; */

        /* const user01 = new UserEntity();
        user01.name = "Javier";
        user01.email = "javier@example.com";
        user01.password = "securepassword";
        await this.repository.save(user01);

        const user02 = new UserEntity();
        user02.name = "Maria";
        user02.email = "maria@example.com";
        user02.password = "securepassword";
        await this.repository.save(user02);

        const user03 = new UserEntity();
        user03.name = "Pedro";
        user03.email = "pedro@example.com";
        user03.password = "securepassword";
        await this.repository.save(user03);

        return "ok" */
    }
}