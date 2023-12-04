import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { imagenes_locaciones } from '@prisma/client';

@Injectable()
export class ImagenesLocacionesService {
  constructor(private prisma: PrismaService) {}

  async getAllImagenesLocaciones(): Promise<imagenes_locaciones[]> {
    return this.prisma.imagenes_locaciones.findMany();
  }

  async getImagenesLocacionById(id: number): Promise<imagenes_locaciones> {
    return this.prisma.imagenes_locaciones.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createImagenLocacion(data: imagenes_locaciones): Promise<imagenes_locaciones> {
    return this.prisma.imagenes_locaciones.create({
      data,
    });
  }

  async updateImagenLocacion(id: number, data: imagenes_locaciones): Promise<imagenes_locaciones> {
    return this.prisma.imagenes_locaciones.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteImagenLocacion(id: number): Promise<imagenes_locaciones> {
    return this.prisma.imagenes_locaciones.delete({
      where: {
        id: id,
      },
    });
  }
  
}
