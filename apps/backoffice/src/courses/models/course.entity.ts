import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ScheduleEntity } from '../../schedules/models/schedule.entity';
import { BaseEntity } from '../../core/entities/base';

@Entity({ name: "course" })
//@Index("IDX_COURSE_TITLE", ["title", "courseId"], { unique: true })
export class CourseEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    courseId: number;

    @Column({ type: "varchar", length: 100 })
    title: string;

    @OneToMany(() => ScheduleEntity, schedule => schedule.course)
    schedules: ScheduleEntity[];
}