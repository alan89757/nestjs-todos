/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConfigService {
  constructor(private readonly prismaService: PrismaService) {}
  // 获取所有的config
  async getAll() {
    const config = await this.prismaService.business_config.findMany();
    return config;
  }
  // 根据id获取config
  async getconfigById(id) {
    const config = await this.prismaService.business_config.findFirst({
      where: {
        business_config_id: id
      },
    });
    return config;
  }
  // 新增config
  async create(data) {
    const config = await this.prismaService.business_config.create({
      data,
    });
    return config;
  }
  // 删除config
  async delete(id) {
    const config = await this.prismaService.business_config.delete({
      where: { business_config_id: id },
    });
    return config;
  }
  // 更新config
  async update(data) {
    console.log("data___", data)
    // return 'ok';
    const config = await this.prismaService.business_config.update({
      where: {
        business_config_id: data.business_config_id,
      },
      data,
    });
    return config;
  }
}
