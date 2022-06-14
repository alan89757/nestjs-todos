import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private readonly prismaService: PrismaService) {}
  // 获取所有的todos
  async getAll() {
    const todos = await this.prismaService.todo.findMany();
    return todos;
  }
  // 根据id获取todo
  async getTodoById(id) {
    const todo = await this.prismaService.todo.findFirst({
      where: {
        id,
      },
    });
    return todo;
  }
  // 新增todo
  async create(data) {
    const todo = await this.prismaService.todo.create({
      data,
    });
    return todo;
  }
  // 删除todo
  async delete(id) {
    const todo = await this.prismaService.todo.delete({
      where: { id },
    });
    return todo;
  }
  // 更新todo
  async update(data) {
    const todo = await this.prismaService.todo.update({
      where: {
        id: data.id,
      },
      data,
    });
    return todo;
  }
}
