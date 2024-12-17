import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class taskDTO {
    @ApiProperty({
        description: 'The title of the task'
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    title: string;

    @ApiProperty({
        description: "The task's description"
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(500)
    description: string;

    @ApiProperty({
        description: "How many hours will the task be done"
    })
    @IsNotEmpty()
    @IsNumber()
    allocatedHours: number;


    @ApiPropertyOptional({
        description: "The status of the task"
    })
    @IsString()
    status: string;
}