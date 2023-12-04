import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { permisos } from '@prisma/client';

@Injectable()
export class PermisosService {
  constructor(private prisma: PrismaService) {}

  async getAllPermisos(): Promise<permisos[]> {
    return this.prisma.permisos.findMany();
  }

  async getPermisoById(id: number): Promise<permisos> {
    return this.prisma.permisos.findUnique({
      where: {
        id: id,
      },
    });
  }
  
  async createPermisos(data: permisos): Promise<permisos> {
    return this.prisma.permisos.create({
      data,
    });
  }

  async updatePermisos(id: number, data: permisos): Promise<permisos> {
    return this.prisma.permisos.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deletePermisos(id: number): Promise<permisos> {
    return this.prisma.permisos.delete({
      where: {
        id: id,
      },
    });
  }
}
