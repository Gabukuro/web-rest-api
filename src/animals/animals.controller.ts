import { Body, Controller, Post } from '@nestjs/common';
import { ReturnAnimalDto } from 'src/dto/animals/return-animal.dto';
import { SaveAnimalDto } from 'src/dto/animals/save-animal.dto';
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
}
