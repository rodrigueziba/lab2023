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
import { CategoriaLocacionesService } from './categoria_locaciones.service';
import { categoria_locaciones } from '@prisma/client';

@Controller('categoria_locaciones')
export class CategoriaLocacionesController {
  constructor(private readonly categoriaLocacionesService: CategoriaLocacionesService) {}

  @Get()
  async getAllCategoriaLocaciones() {
    return this.categoriaLocacionesService.getAllCategoriaLocaciones();
  }

  @Get(':id')
  async getCategoriaLocacionById(@Param('id') id: string) {
    return this.categoriaLocacionesService.getCategoriaLocacionById(Number(id));
  }

  
  @Post()
  async createCategoriaLocacion(@Body() data: categoria_locaciones) {
    return this.categoriaLocacionesService.createCategoriaLocacion(data);
  }

  @Put(':id')
  async updateCategoriaLocacion(@Param('id') id: string, @Body() data: categoria_locaciones) {
    try {
      return await this.categoriaLocacionesService.updateCategoriaLocacion(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Categoría de locación no encontrada');
    }
  }

  @Delete(':id')
  async deleteCategoriaLocacion(@Param('id') id: string) {
    try {
      return await this.categoriaLocacionesService.deleteCategoriaLocacion(Number(id));
    } catch (error) {
      throw new BadRequestException('Categoría de locación no encontrada');
    }
  }

  
}
