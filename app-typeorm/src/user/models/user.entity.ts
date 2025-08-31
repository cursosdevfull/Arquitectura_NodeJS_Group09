import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "./role.entity";

@Entity({ name: "user" })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    name: string;

    @Column({ type: "int", nullable: true })
    age: number;

    @Column({ type: "varchar", length: 100, unique: true })
    email: string;

    @Column({ type: "varchar", length: 20 })
    password: string;

    @Column({ type: "boolean", default: true })
    isActive: boolean;

    @ManyToOne(() => RoleEntity, (role) => role.user)
    @JoinColumn({ name: "roleId" })
    role: RoleEntity;
}

