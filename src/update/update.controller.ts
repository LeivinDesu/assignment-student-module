import { Controller, Put } from '@nestjs/common';
import { UpdateService } from './update.service';
import { Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Student } from 'src/entity/student.entity';

@Controller('update')
export class UpdateController {
    constructor(private readonly updateService: UpdateService){}

    @Put(':id')  // PUT /update/:id
    async updateStudent(
      @Param('id') id: number, 
      @Body() updatedData: Partial<Student>
    ): Promise<Student> {
      return this.updateService.updateStudent(id, updatedData);  // Call the service to update the student
    }
}
