import { ScheduleEntity } from "src/schedules/models/schedule.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from '../../core/entities/base';

@Entity("session")
export class SessionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    sessionId: number;

    @Column({ type: "uuid" })
    zoomSessionId: string;

    @Column({ type: "date" })
    dateMetting: Date;

    @Column({ type: "time" })
    timeStart: string;

    @Column({ type: "int" })
    duration: number;

    @ManyToOne(() => ScheduleEntity, schedule => schedule.sessions)
    @JoinColumn({ name: "scheduleId" })
    schedule: ScheduleEntity
}
