import { Module } from '@nestjs/common';
import { ReadService } from './read.service';
import { ReadController } from './read.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [ReadService],
  controllers: [ReadController]
})
export class ReadModule {}
