import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  // 查询所有todo
  @Get('getAll')
  getAll() {
    return this.todoService.getAll();
  }
  // 查询单个todo
  @Get('/getTodoById/:id')
  getTodoById(@Param('id') id: number) {
    return this.todoService.getTodoById(Number(id));
  }

  // 新增todo
  @Post('create')
  create(@Body() req: object) {
    return this.todoService.create(req);
  }

  // 删除todo
  @Get('/del/:id')
  delete(@Param('id') id: number) {
    return this.todoService.delete(Number(id));
  }

  // 修改
  @Post('update')
  update(@Body() req: object) {
    return this.todoService.update(req);
  }
}
