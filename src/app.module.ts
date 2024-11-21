import { Module } from '@nestjs/common';
import { FoodsModule } from './foods/foods.module';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Food } from './foods/entities/food.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    FoodsModule,
    TypeOrmModule.forFeature([Food]),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "user_crud",
      password: "root",
      database: "db_crud",
      autoLoadEntities: true,
      synchronize: true,
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
