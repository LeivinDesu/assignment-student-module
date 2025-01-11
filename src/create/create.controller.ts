import { Body, Controller, Post } from '@nestjs/common';
import { CreateService } from './create.service';
import { Student } from 'src/entity/student.entity';

@Controller('create')
export class CreateController {
    constructor(private readonly createService: CreateService){}

    @Post()
    create(@Body() data: Partial<Student>): Promise<Student>{
        return this.createService.create(data);
    }
}
