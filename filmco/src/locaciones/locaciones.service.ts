import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { locaciones } from '@prisma/client';

@Injectable()
export class LocacionesService {
  constructor(private prisma: PrismaService) {}

  async getAllLocaciones(): Promise<locaciones[]> {
    return this.prisma.locaciones.findMany();
  }

  async getLocacionById(id: number): Promise<locaciones> {
    return this.prisma.locaciones.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createLocacion(data: locaciones): Promise<locaciones> {
    return this.prisma.locaciones.create({
      data,
    });
  }

  async updateLocacion(id: number, data: locaciones): Promise<locaciones> {
    return this.prisma.locaciones.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteLocacion(id: number): Promise<locaciones> {
    return this.prisma.locaciones.delete({
      where: {
        id: id,
      },
    });
  }
  
}
