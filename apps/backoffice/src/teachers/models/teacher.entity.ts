import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ScheduleEntity } from '../../schedules/models/schedule.entity';
import { BaseEntity } from '../../core/entities/base';

@Entity({ name: "teacher" })
export class TeacherEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    teacherId: number;

    @Column({ type: "varchar", length: 100 })
    name: string;

    @Column({ type: "varchar", length: 100 })
    lastname: string;

    @Column({ type: "varchar", length: 150, unique: true })
    email: string;

    @OneToMany(() => ScheduleEntity, schedule => schedule.teacher)
    schedules: ScheduleEntity[];
}