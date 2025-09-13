import { Column } from "typeorm";

export abstract class BaseEntity {
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ type: "timestamp", nullable: true })
    updatedAt: Date

    @Column({ type: "timestamp", nullable: true })
    deletedAt: Date;
}
