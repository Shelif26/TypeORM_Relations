import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from "typeorm";
import { Partner } from "./Partner";

@Entity()
export class Patient {
    @PrimaryGeneratedColumn({
        type:"int"
    })
    id:number

    @Column({
        type:'varchar'
    })
    PatientFirstname:string

    @Column({
        type:'varchar'
    })
    PatientLastname:string

    @Column({
        type:'int'
    })
    age:string

    @OneToOne( () => Partner, (Partner) => Partner.details, {onDelete: 'CASCADE', cascade: ['insert']} )
    contact: Partner
}