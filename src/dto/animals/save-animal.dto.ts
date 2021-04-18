import { IsString } from "class-validator";
import { ClasseAnimais, GrupoAnimais } from "src/animals/animals.entity";

export class SaveAnimalDto {
    @IsString({
        message: 'Informe uma descrição válida'
    })
    descricaoAnimal: string;

    grupoAnimais: GrupoAnimais;
    classeAnimais: ClasseAnimais;
}