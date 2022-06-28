import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ConfigService } from './config.service';

@Controller()
export class ConfigController {
  constructor(private configervice: ConfigService) {}

  // 查询所有config
  @Get('/api/business-config/list')
  async getAll(@Query('uid') uid: string) {
    if (uid === 'DC824863CBA2B5A931E85C1278FB146F') {
      const data = await this.configervice.getAll();
      return {
        code: 0,
        message: '正常',
        data,
      };
    } else {
      return {
        code: -1000,
        message: '您没有操作权限，请联系管理员',
      };
    }
  }
  // 修改
  @Post('/api/business-config/update')
  async update(@Body() req: any) {
    console.log('uid__', req);
    if (req?.uid === 'DC824863CBA2B5A931E85C1278FB146F') {
      delete req.uid;
      const data = await this.configervice.update(req);
      return {
        code: 0,
        message: '正常',
        data,
      };
    } else {
      return {
        code: -1000,
        message: '您没有操作权限，请联系管理员',
      };
    }
    // return this.configervice.update(req);
  }
  // 查询单个config
  @Get('/getconfigById/:id')
  getconfigById(@Param('id') id: number) {
    return this.configervice.getconfigById(Number(id));
  }

  // 新增config
  @Post('create')
  create(@Body() req: object) {
    console.log(req);
    // return 'ok';
    return this.configervice.create(req);
  }

  // 删除config
  @Get('/del/:id')
  delete(@Param('id') id: number) {
    return this.configervice.delete(Number(id));
  }

  
}
