import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReturnAnimalDto } from 'src/dto/animals/return-animal.dto';
import { SaveAnimalDto } from 'src/dto/animals/save-animal.dto';
import { Animal } from './animals.entity';
import { AnimalsService } from './animals.service';

@Controller('animals')
export class AnimalsController {
    constructor(private animalsService: AnimalsService) {}

    @Post()
    async saveAnimal(
        @Body() saveAnimalDto: SaveAnimalDto,
    ): Promise<ReturnAnimalDto> {
        const animal = await this.animalsService.saveAnimal(saveAnimalDto);
        return {
            animal, 
            message: 'Animal salvo com sucesso!'
        }
    }

    @Get()
    async getAllAnimals():  Promise<{ animals: Animal[], message: string }> {
        const animals = await this.animalsService.getAllAnimals();
        return {
            animals: animals,
            message: 'Animais encontrados com sucesso!'
        }
    }

    @Get(':id')
    async getAnimalById(
        @Param('id') id
    ): Promise<ReturnAnimalDto> {
        const animal = await this.animalsService.getAnimalById(id);
        return {
            animal,
            message: 'Animal encontrado'
        }
    }
}
