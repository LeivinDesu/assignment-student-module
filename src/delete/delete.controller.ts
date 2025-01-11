import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteService } from './delete.service';

@Controller('delete')
export class DeleteController {
    constructor(private readonly deleteService: DeleteService){}

    @Delete(':id')
    async deleteStudent(@Param('id') id: number): Promise<void>{
        await this.deleteService.deleteStudent(id);
    }
}
