import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entity/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ){}

    async deleteStudent(id: number): Promise<void> {
        const student = await this.studentRepository.findOne({ where: { id } });
        await this.studentRepository.delete(id);
      }
}
