import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { tipo_servicio } from '@prisma/client';

@Injectable()
export class TipoServicioService {
  constructor(private prisma: PrismaService) {}

  async getAllTipoServicio(): Promise<tipo_servicio[]> {
    return this.prisma.tipo_servicio.findMany();
  }

  async getTipoServicioById(id: number): Promise<tipo_servicio> {
    return this.prisma.tipo_servicio.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createTipoServicio(data: tipo_servicio): Promise<tipo_servicio> {
    return this.prisma.tipo_servicio.create({
      data,
    });
  }

  async updateTipoServicio(id: number, data: tipo_servicio): Promise<tipo_servicio> {
    return this.prisma.tipo_servicio.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteTipoServicio(id: number): Promise<tipo_servicio> {
    return this.prisma.tipo_servicio.delete({
      where: {
        id: id,
      },
    });
  }
}
