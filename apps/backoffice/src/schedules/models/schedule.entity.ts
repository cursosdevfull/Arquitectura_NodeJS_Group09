import { CourseEntity } from "src/courses/models/course.entity";
import { TeacherEntity } from "src/teachers/models/teacher.entity";
import { SessionEntity } from "src/sessions/models/session.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from '../../core/entities/base';

@Entity("schedule")
export class ScheduleEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    scheduleId: number;

    @Column({ type: "varchar", length: 100 })
    title: string;

    @Column({ type: "text" })
    summary: string;

    @Column({ type: "timestamp" })
    startDate: Date;

    @Column({ type: "int" })
    duration: number;

    @Column({ type: "varchar", length: 50 })
    frequency: string;

    @Column({ type: "int" })
    price: number;

    @Column({ type: "json" })
    content: string[];

    @Column({ type: "json" })
    requirements: string[];

    @Column({ type: "json" })
    syllabus: string[];

    @ManyToOne(() => CourseEntity, course => course.schedules, /* { eager: true } */)
    @JoinColumn({ name: "courseId" })
    course: CourseEntity

    @ManyToOne(() => TeacherEntity, teacher => teacher.schedules)
    @JoinColumn({ name: "teacherId" })
    teacher: TeacherEntity

    @OneToMany(() => SessionEntity, session => session.schedule)
    sessions: SessionEntity[];
}