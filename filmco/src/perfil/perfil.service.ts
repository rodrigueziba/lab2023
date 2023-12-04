import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { perfil } from '@prisma/client';

@Injectable()
export class PerfilService {
  constructor(private prisma: PrismaService) {}

  async getAllPerfiles(): Promise<perfil[]> {
    return this.prisma.perfil.findMany();
  }

  async getPerfilById(id: number): Promise<perfil> {
    return this.prisma.perfil.findUnique({
      where: {
        id: id,
      },
    });
  }
  
  async createPerfil(data: perfil): Promise<perfil> {
    return this.prisma.perfil.create({
      data,
    });
  }

  async updatePerfil(id: number, data: perfil): Promise<perfil> {
    return this.prisma.perfil.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deletePerfil(id: number): Promise<perfil> {
    return this.prisma.perfil.delete({
      where: {
        id: id,
      },
    });
  }
}
