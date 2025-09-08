import { PrismaService } from '../../../shared/databases/prisma.database';
import { Injectable } from '@nestjs/common';


@Injectable()
export class ListRepository {
  constructor(private readonly prisma: PrismaService) {}

  async list () {
    const scenario = await this.prisma.scenario.findMany();
    return scenario
  }
}