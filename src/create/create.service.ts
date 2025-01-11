import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/entity/student.entity';

@Injectable()
export class CreateService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ) {}

    async create(data: Partial<Student>): Promise<Student>{
        const student = this.studentRepository.create(data);
        return this.studentRepository.save(student);
    }
}

