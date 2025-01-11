import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entity/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ){}

    async updateStudent(id: number, updatedData: Partial<Student>): Promise<Student>{
        
        const student = await this.studentRepository.findOne({where: {id}});

        await this.studentRepository.update(id, updatedData);

        return this.studentRepository.findOne({where:{id}});
    }
}
