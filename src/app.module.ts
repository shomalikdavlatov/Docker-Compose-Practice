import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import PrismaService from './prisma/prisma.service';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
