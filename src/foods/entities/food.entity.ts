import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Food {
    
    @PrimaryGeneratedColumn()
    "CODIGO": number;
    
    @Column()
    "NOMBRE": string;
    
    @Column()
    "CATEGORIA": string;
    
    @Column("decimal", { precision: 10, scale: 2 })
    "PROTEINA": number;
    
    @Column("decimal", { precision: 10, scale: 2 })
    "GRASA": number;
    
    @Column("decimal", { precision: 10, scale: 2 })
    "CARBOHIDRATO": number;
    
    @Column("decimal", { precision: 10, scale: 2 })
    "ENERGIA": number;
}
