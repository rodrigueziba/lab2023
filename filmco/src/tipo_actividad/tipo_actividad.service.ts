import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { tipo_actividad } from '@prisma/client';

@Injectable()
export class TipoActividadService {
  constructor(private prisma: PrismaService) {}

  async getAllTipoActividad(): Promise<tipo_actividad[]> {
    return this.prisma.tipo_actividad.findMany();
  }

  async getTipoActividadById(id: number): Promise<tipo_actividad> {
    return this.prisma.tipo_actividad.findUnique({
      where: {
        id: id,
      },
    });
  }
  
  async createTipoActividad(data: tipo_actividad): Promise<tipo_actividad> {
    return this.prisma.tipo_actividad.create({
      data,
    });
  }

  async updateTipoActividad(id: number, data: tipo_actividad): Promise<tipo_actividad> {
    return this.prisma.tipo_actividad.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteTipoActividad(id: number): Promise<tipo_actividad> {
    return this.prisma.tipo_actividad.delete({
      where: {
        id: id,
      },
    });
  }
}
