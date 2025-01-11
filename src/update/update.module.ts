import { Module } from '@nestjs/common';
import { UpdateService } from './update.service';
import { UpdateController } from './update.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [UpdateService],
  controllers: [UpdateController]
})
export class UpdateModule {}
