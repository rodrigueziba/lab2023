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
import { TipoProductoraService } from './tipo_productora.service';
import { tipo_productora } from '@prisma/client';

@Controller('tipo_productora')
export class TipoProductoraController {
  constructor(private readonly tipoProductoraService: TipoProductoraService) {}

  @Get()
  async getAllTipoProductora() {
    return this.tipoProductoraService.getAllTipoProductora();
  }

  @Get(':id')
  async getTipoProductoraById(@Param('id') id: string) {
    return this.tipoProductoraService.getTipoProductoraById(Number(id));
  }
  
  @Post()
  async createTipoProductora(@Body() data: tipo_productora) {
    return this.tipoProductoraService.createTipoProductora(data);
  }

  @Put(':id')
  async updateTipoProductora(@Param('id') id: string, @Body() data: tipo_productora) {
    try {
      return await this.tipoProductoraService.updateTipoProductora(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Tipo de productora no encontrada');
    }
  }

  @Delete(':id')
  async deleteTipoProductora(@Param('id') id: string) {
    try {
      return await this.tipoProductoraService.deleteTipoProductora(Number(id));
    } catch (error) {
      throw new BadRequestException('Tipo de productora no encontrada');
    }
  }
}
