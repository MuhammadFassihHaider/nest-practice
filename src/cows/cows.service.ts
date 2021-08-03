import { Injectable } from '@nestjs/common';
import { CreateCowDto } from './dto/create-cow.dto';
import { UpdateCowDto } from './dto/update-cow.dto';

@Injectable()
export class CowsService {
  create(createCowDto: CreateCowDto) {
    return 'This action adds a new cow';
  }

  findAll() {
    return `This action returns all cows`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cow`;
  }

  update(id: number, updateCowDto: UpdateCowDto) {
    return `This action updates a #${id} cow`;
  }

  remove(id: number) {
    return `This action removes a #${id} cow`;
  }
}
