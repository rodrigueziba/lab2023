import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { imagenes_prestadores } from '@prisma/client';

@Injectable()
export class ImagenesPrestadoresService {
  constructor(private prisma: PrismaService) {}

  async getAllImagenesPrestadores(): Promise<imagenes_prestadores[]> {
    return this.prisma.imagenes_prestadores.findMany();
  }

  async getImagenesPrestadorById(id: number): Promise<imagenes_prestadores> {
    return this.prisma.imagenes_prestadores.findUnique({
      where: {
        id: id,
      },
    });
  }
  
  
  async createImagenPrestador(data: imagenes_prestadores): Promise<imagenes_prestadores> {
    return this.prisma.imagenes_prestadores.create({
      data,
    });
  }

  async updateImagenPrestador(id: number, data: imagenes_prestadores): Promise<imagenes_prestadores> {
    return this.prisma.imagenes_prestadores.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteImagenPrestador(id: number): Promise<imagenes_prestadores> {
    return this.prisma.imagenes_prestadores.delete({
      where: {
        id: id,
      },
    });
  }
}
