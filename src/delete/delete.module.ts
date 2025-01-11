import { Module } from '@nestjs/common';
import { DeleteService } from './delete.service';
import { DeleteController } from './delete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [DeleteService],
  controllers: [DeleteController]
})
export class DeleteModule {}
