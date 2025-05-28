import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() body: CreateTodoDto) {
    return await this.todoService.create(body);
  }

  @Get()
  async getAll() {
    return await this.todoService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.todoService.getOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTodoDto) {
    return await this.todoService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.todoService.delete(id);
    return {message: "Todo deleted successfully"};
  }
}
