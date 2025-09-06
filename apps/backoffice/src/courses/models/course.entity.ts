import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "course" })
export class CourseEntity {
    @PrimaryGeneratedColumn()
    courseId: number;

    @Column({ type: "varchar", length: 100 })
    title: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ type: "timestamp", nullable: true })
    updatedAt: Date

    @Column({ type: "timestamp", nullable: true })
    deletedAt: Date;
}