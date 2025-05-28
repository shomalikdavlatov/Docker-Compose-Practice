import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import PrismaService from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  async create(body: CreateTodoDto) {
    return await this.prisma.todo.create({data: body});
  }

  async getAll() {
    return await this.prisma.todo.findMany();
  }

  async getOne(id: string) {
    const todo = await this.prisma.todo.findFirst({where: {id}});
    if (!todo) throw new NotFoundException("Todo not found!");
    return await this.prisma.todo.findFirst({where: {id}});
  }
  
  async update(id: string, body: UpdateTodoDto) {
    const todo = await this.prisma.todo.findFirst({where: {id}});
    if (!todo) throw new NotFoundException("Todo not found!");
    return await this.prisma.todo.update({where: {id}, data: body});
  }
  
  async delete(id: string) {
    const todo = await this.prisma.todo.findFirst({where: {id}});
    if (!todo) throw new NotFoundException("Todo not found!");
    await this.prisma.todo.delete({where: {id}});
  }
}
