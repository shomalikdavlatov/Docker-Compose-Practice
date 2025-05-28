import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import PrismaModule from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
