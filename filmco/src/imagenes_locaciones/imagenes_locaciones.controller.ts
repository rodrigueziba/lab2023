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
import { ImagenesLocacionesService } from './imagenes_locaciones.service';
import { imagenes_locaciones } from '@prisma/client';

@Controller('imagenes_locaciones')
export class ImagenesLocacionesController {
  constructor(private readonly imagenesLocacionesService: ImagenesLocacionesService) {}

  @Get()
  async getAllImagenesLocaciones() {
    return this.imagenesLocacionesService.getAllImagenesLocaciones();
  }

  @Get(':id')
  async getImagenesLocacionById(@Param('id') id: string) {
    return this.imagenesLocacionesService.getImagenesLocacionById(Number(id));
  }
  
  @Post()
  async createImagenLocacion(@Body() data: imagenes_locaciones) {
    return this.imagenesLocacionesService.createImagenLocacion(data);
  }

  @Put(':id')
  async updateImagenLocacion(@Param('id') id: string, @Body() data: imagenes_locaciones) {
    try {
      return await this.imagenesLocacionesService.updateImagenLocacion(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Imagen de locación no encontrada');
    }
  }

  @Delete(':id')
  async deleteImagenLocacion(@Param('id') id: string) {
    try {
      return await this.imagenesLocacionesService.deleteImagenLocacion(Number(id));
    } catch (error) {
      throw new BadRequestException('Imagen de locación no encontrada');
    }
  }

}
