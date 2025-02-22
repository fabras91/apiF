import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.foodsService.findOne(id);
  }
  
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCatDto: UpdateFoodDto) {
    return this.foodsService.update(id, updateCatDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.foodsService.remove(id);
  }
  
}
