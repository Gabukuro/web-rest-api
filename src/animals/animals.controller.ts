import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ReturnAnimalDto } from 'src/dto/animals/return-animal.dto';
import { SaveAnimalDto } from 'src/dto/animals/save-animal.dto';
import { UpdateAnimalDto } from 'src/dto/animals/update-animal.dto';
import { Animal } from './animals.entity';
import { AnimalsService } from './animals.service';

@Controller('anima*')
export class AnimalsController {
    constructor(private animalsService: AnimalsService) {}

    @Post()
    async saveAnimal(
        @Body(ValidationPipe) saveAnimalDto: SaveAnimalDto,
    ): Promise<ReturnAnimalDto> {
        const animal = await this.animalsService.saveAnimal(saveAnimalDto);
        return {
            animal, 
            message: 'Animal salvo com sucesso!'
        }
    }

    @Put(':id')
    async updateAnimal(
        @Body(ValidationPipe) updateAnimalDto: UpdateAnimalDto,
        @Param('id') id,
    ): Promise<ReturnAnimalDto> {
        const animal = await this.animalsService.updateAnimal(updateAnimalDto, id);
        return {
            animal: animal,
            message: 'Animal atualizado com sucesso!'
        }
    }

    @Get(':param')
    async getAnimalByParam(
        @Param('param') param: string
        ): Promise<{ animals: Animal[], message: string }> {
            const animals = await this.animalsService.getAnimalByParam(param);
            return {
                animals,
                message: 'Animal encontrado'
            }
        }

    @Get()
    async getAllAnimals():  Promise<{ animals: Animal[], message: string }> {
        const animals = await this.animalsService.getAllAnimals();
        return {
            animals,
            message: 'Animais encontrados com sucesso!'
        }
    }

    @Delete(':id')
    async deleteAnimal(
        @Param('id') id: string
    ) {
        await this.animalsService.deleteAnimal(id);
        return {message: 'Animal deletado com sucesso'};
    }
}
