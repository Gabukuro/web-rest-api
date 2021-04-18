import { IsOptional, IsString } from "class-validator";
import { ClasseAnimais, GrupoAnimais } from "src/animals/animals.entity";

export class UpdateAnimalDto {
    @IsOptional()
    @IsString({
        message: 'Infore uma descrição válida'
    })
    descricaoAnimal: string;
    
    @IsOptional()
    grupoAnimais: GrupoAnimais;

    @IsOptional()
    classeAnimais: ClasseAnimais;
}