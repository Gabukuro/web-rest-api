import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaveAnimalDto } from 'src/dto/animals/save-animal.dto';
import { Animal } from './animals.entity';
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

    async getAnimlaById(
        animalId: string
    ): Promise<Animal> {
        const user = await this.animalRepository.findOne(animalId, {
            select: ['descricaoAnimal', 'classeAnimais', 'grupoAnimais']
        });

        if(!user) throw new NotFoundException('Animal não encontrado');
        return user;
    }
}
