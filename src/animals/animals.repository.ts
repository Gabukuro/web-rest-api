import { InternalServerErrorException } from "@nestjs/common";
import { SaveAnimalDto } from "src/dto/animals/save-animal.dto";
import { EntityRepository, Repository } from "typeorm";
import { Animal, ClasseAnimais, GrupoAnimais } from "./animals.entity";

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal> {
    async saveAnimal(
        saveAnimalDto: SaveAnimalDto
    ): Promise<Animal> {
        const {descricaoAnimal, grupoAnimais, classeAnimais} = saveAnimalDto;

        const animal = this.create();
        animal.descricaoAnimal = descricaoAnimal;
        animal.grupoAnimais = GrupoAnimais[grupoAnimais];
        animal.classeAnimais = ClasseAnimais[classeAnimais];
        try {
            await animal.save();
            return animal;
        } catch (error) {
            throw new InternalServerErrorException('Erro ao salvar o animal no banco');
        }
    }
}