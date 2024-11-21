import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(Food)
    private foodsRepository: Repository<Food>,
  ) {}

  async create(createFoodDto: CreateFoodDto) {
    const food = this.foodsRepository.create(createFoodDto);
    return await this.foodsRepository.save(food);
  }

  async findAll() {
    return await this.foodsRepository.find();
  }

  async findOne(codigo: number) {
    return await this.foodsRepository.findOneBy({ CODIGO: codigo });
  }

  async update(codigo: number, updateFoodDto: UpdateFoodDto) {
    return await this.foodsRepository.update(codigo, updateFoodDto);
  }

  async remove(codigo: number) {
    return await this.foodsRepository.delete(codigo);
  }
}
