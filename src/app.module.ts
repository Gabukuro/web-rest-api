import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsModule } from './animals/animals.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/db/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AnimalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
