import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entity/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReadService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ){}

    async findAll(): Promise<Student[]> {
        return await this.studentRepository.find();
    }

    async findById(id: number): Promise<Student> {
        const student = await this.studentRepository.findOne({where: {id}}); // Find by ID
    
        return student;
      }
}
