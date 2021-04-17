import { 
    BaseEntity, 
    Column, 
    Entity, 
    CreateDateColumn, 
    UpdateDateColumn, 
    PrimaryGeneratedColumn 
} from "typeorm";

export enum GrupoAnimais {
    TERRESTRE = "terrestre",
    AQUATICO = "aquático"
}

export enum ClasseAnimais {
    MAMIFERO = "mamífero",
    REPTIL = "réptil"
}

@Entity()
export class Animal extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: bigint;

    @Column({nullable: false, type: 'varchar', length: 200})
    descricaoAnimal: string;

    @Column({nullable: false, type: "enum", enum: GrupoAnimais})
    grupoAnimais: GrupoAnimais;

    @Column({nullable: false, type: "enum", enum: ClasseAnimais})
    classeAnimais: ClasseAnimais;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}