import { IsDecimal, IsInt, IsNumber, IsPositive, IsString } from "class-validator";
import { Transform } from 'class-transformer';

export class CreateFoodDto {

    @IsString()
    "NOMBRE": string;
    
    @IsString()
    "CATEGORIA": string;
    
    @IsNumber({}, { message: 'PROTEINA debe ser un número' }) 
    @IsPositive({ message: 'PROTEINA debe ser un número positivo' }) 
    @Transform(({ value }) => parseFloat(value))
    "PROTEINA": number;
    
    @IsNumber({}, { message: 'PROTEINA debe ser un número' }) 
    @IsPositive({ message: 'PROTEINA debe ser un número positivo' }) 
    @Transform(({ value }) => parseFloat(value))
    "GRASA": number;
    
    @IsNumber({}, { message: 'PROTEINA debe ser un número' }) 
    @IsPositive({ message: 'PROTEINA debe ser un número positivo' }) 
    @Transform(({ value }) => parseFloat(value))
    "CARBOHIDRATO": number;

    @IsNumber({}, { message: 'PROTEINA debe ser un número' }) 
    @IsPositive({ message: 'PROTEINA debe ser un número positivo' }) 
    @Transform(({ value }) => parseFloat(value))
    "ENERGIA": number;
}
