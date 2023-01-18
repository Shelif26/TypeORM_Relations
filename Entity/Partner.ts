import { PrimaryGeneratedColumn, Column, Entity, OneToOne , JoinColumn} from "typeorm";
import { Patient } from "./Patient";

@Entity()
export class Partner{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    partner: string

    @OneToOne(() => Patient, {cascade:true, onDelete: 'CASCADE'})
    @JoinColumn()
    details:Patient
    static details: any;
    
}