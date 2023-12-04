import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ImagenesPrestadoresService } from './imagenes_prestadores.service';
import { imagenes_prestadores } from '@prisma/client';

@Controller('imagenes_prestadores')
export class ImagenesPrestadoresController {
  constructor(private readonly imagenesPrestadoresService: ImagenesPrestadoresService) {}

  @Get()
  async getAllImagenesPrestadores() {
    return this.imagenesPrestadoresService.getAllImagenesPrestadores();
  }

  @Get(':id')
  async getImagenPrestadorById(@Param('id') id: string) {
    const imagenPrestadorFound = await this.imagenesPrestadoresService.getImagenesPrestadorById(Number(id));
    if (!imagenPrestadorFound) throw new BadRequestException('Imagen de prestador no encontrada');
    return imagenPrestadorFound;
  }

  @Post()
  async createImagenPrestador(@Body() data: imagenes_prestadores) {
    return this.imagenesPrestadoresService.createImagenPrestador(data);
  }

  @Put(':id')
  async updateImagenPrestador(@Param('id') id: string, @Body() data: imagenes_prestadores) {
    try {
      return await this.imagenesPrestadoresService.updateImagenPrestador(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Imagen de prestador no encontrada');
    }
  }

  @Delete(':id')
  async deleteImagenPrestador(@Param('id') id: string) {
    try {
      return await this.imagenesPrestadoresService.deleteImagenPrestador(Number(id));
    } catch (error) {
      throw new BadRequestException('Imagen de prestador no encontrada');
    }
  }
  
}
