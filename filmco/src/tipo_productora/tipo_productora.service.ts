import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { tipo_productora } from '@prisma/client';

@Injectable()
export class TipoProductoraService {
  constructor(private prisma: PrismaService) {}

  async getAllTipoProductora(): Promise<tipo_productora[]> {
    return this.prisma.tipo_productora.findMany();
  }

  async getTipoProductoraById(id: number): Promise<tipo_productora> {
    return this.prisma.tipo_productora.findUnique({
      where: {
        id: id,
      },
    });
  }
  async createTipoProductora(data: tipo_productora): Promise<tipo_productora> {
    return this.prisma.tipo_productora.create({
      data,
    });
  }

  async updateTipoProductora(id: number, data: tipo_productora): Promise<tipo_productora> {
    return this.prisma.tipo_productora.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteTipoProductora(id: number): Promise<tipo_productora> {
    return this.prisma.tipo_productora.delete({
      where: {
        id: id,
      },
    });
  }
}
