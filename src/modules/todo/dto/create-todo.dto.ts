import { IsOptional, IsString, Length } from "class-validator";

export class CreateTodoDto {
    @Length(1, 255)
    @IsString()
    name: string;
    @IsOptional()
    status?: boolean;
}
