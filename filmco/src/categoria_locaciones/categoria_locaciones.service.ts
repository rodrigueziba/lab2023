import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { categoria_locaciones } from '@prisma/client';

@Injectable()
export class CategoriaLocacionesService {
  constructor(private prisma: PrismaService) {}

  async getAllCategoriaLocaciones(): Promise<categoria_locaciones[]> {
    return this.prisma.categoria_locaciones.findMany();
  }

  async getCategoriaLocacionById(id: number): Promise<categoria_locaciones> {
    return this.prisma.categoria_locaciones.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createCategoriaLocacion(data: categoria_locaciones): Promise<categoria_locaciones> {
    return this.prisma.categoria_locaciones.create({
      data,
    });
  }

  async updateCategoriaLocacion(id: number, data: categoria_locaciones): Promise<categoria_locaciones> {
    return this.prisma.categoria_locaciones.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteCategoriaLocacion(id: number): Promise<categoria_locaciones> {
    return this.prisma.categoria_locaciones.delete({
      where: {
        id: id,
      },
    });
  }
  
}
