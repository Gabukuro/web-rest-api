import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEnum, isUUID} from 'class-validator';
import { SaveAnimalDto } from 'src/dto/animals/save-animal.dto';
import { UpdateAnimalDto } from 'src/dto/animals/update-animal.dto';
import { ILike } from 'typeorm';
import { Animal, ClasseAnimais, GrupoAnimais } from './animals.entity';
import { AnimalRepository } from './animals.repository';

@Injectable()
export class AnimalsService {
    constructor(
        @InjectRepository(AnimalRepository)
        private animalRepository: AnimalRepository
    ) {}

    async saveAnimal(
        saveAnimalDto: SaveAnimalDto
    ): Promise<Animal> {
        return this.animalRepository.saveAnimal(saveAnimalDto);
    }

    async updateAnimal(
        updateAnimalDto: UpdateAnimalDto,
        id: string,
    ): Promise<Animal> {
        const animal = await this.animalRepository.findOneOrFail(id);
        const {descricaoAnimal, grupoAnimais, classeAnimais} = updateAnimalDto;
        animal.descricaoAnimal = descricaoAnimal ?? animal.descricaoAnimal;
        animal.grupoAnimais = GrupoAnimais[grupoAnimais] ?? animal.grupoAnimais;
        animal.classeAnimais = ClasseAnimais[classeAnimais] ?? animal.classeAnimais;

        try {
            await animal.save();
            return animal;
        } catch (error) {
            throw new InternalServerErrorException('Erro ao salvar os dados no banco');
        }
    }

    async getAllAnimals(): Promise<Animal[]> {
        const animals = await this.animalRepository.find();
        return animals;
    }

    async getAnimalByParam(
        param: string
    ): Promise<Animal[]> {

        let fieldTypes = {
            'id': isUUID(param),
            'grupoAnimais': isEnum(param, GrupoAnimais),
            'classeAnimais': isEnum(param, ClasseAnimais)
        }

        let field = `descricaoAnimal`;
        if(Object.values(fieldTypes).includes(true)) {
            field = Object.keys(fieldTypes)[Object.values(fieldTypes).indexOf(true)];
        }

        const animals = await this.animalRepository.find({
            [field]: field != `descricaoAnimal` ? param : ILike(param) 
        });

        if(!animals) throw new NotFoundException('Animal não encontrado!');
        return animals;
    }

    async deleteAnimal(animalId: string) {
        const result = await this.animalRepository.delete({id: animalId});
        if(result.affected === 0) {
            throw new NotFoundException('Não foi encontrado uma animal com o ID informado');
        }
    }
}
