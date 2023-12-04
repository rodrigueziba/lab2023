import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { areas_desempenio } from '@prisma/client';

@Injectable()
export class AreasDesempenioService {
  constructor(private prisma: PrismaService) {}

  async getAllAreasDesempenio(): Promise<areas_desempenio[]> {
    return this.prisma.areas_desempenio.findMany();
  }

  async getAreaDesempenioById(id: number): Promise<areas_desempenio> {
    return this.prisma.areas_desempenio.findUnique({
      where: {
        id: id,
      },
    });
  }

  
  async createAreaDesempenio(data: areas_desempenio): Promise<areas_desempenio> {
    return this.prisma.areas_desempenio.create({
      data,
    });
  }

  async updateAreaDesempenio(id: number, data: areas_desempenio): Promise<areas_desempenio> {
    return this.prisma.areas_desempenio.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteAreaDesempenio(id: number): Promise<areas_desempenio> {
    return this.prisma.areas_desempenio.delete({
      where: {
        id: id,
      },
    });
  }
  
}
