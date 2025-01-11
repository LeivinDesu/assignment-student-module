import { Controller, Get } from '@nestjs/common';
import { ReadService } from './read.service';
import { Student } from 'src/entity/student.entity';
import { Param } from '@nestjs/common';

@Controller('read')
export class ReadController {
  constructor(private readonly readService: ReadService) {}

  @Get()
  async getAllStudents(): Promise<Student[]> {
    return await this.readService.findAll();
  }

  @Get(':id') // GET /read/:id
  async getStudentById(@Param('id') id: number): Promise<Student> {
    return this.readService.findById(id);
    }
}