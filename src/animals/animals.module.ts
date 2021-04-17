import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalRepository } from './animals.repository';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AnimalRepository])],
    providers: [AnimalsService],
    controllers: [AnimalsController],
})
export class AnimalsModule {}
