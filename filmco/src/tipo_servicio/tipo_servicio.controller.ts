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
import { TipoServicioService } from './tipo_servicio.service';
import { tipo_servicio } from '@prisma/client';

@Controller('tipo_servicio')
export class TipoServicioController {
  constructor(private readonly tipoServicioService: TipoServicioService) {}

  @Get()
  async getAllTipoServicio() {
    return this.tipoServicioService.getAllTipoServicio();
  }

  @Get(':id')
  async getTipoServicioById(@Param('id') id: string) {
    const tipoServicioFound = await this.tipoServicioService.getTipoServicioById(Number(id));
    if (!tipoServicioFound) throw new BadRequestException('Tipo de servicio no encontrado');
    return tipoServicioFound;
  }

  @Post()
  async createTipoServicio(@Body() data: tipo_servicio) {
    return this.tipoServicioService.createTipoServicio(data);
  }

  @Put(':id')
  async updateTipoServicio(@Param('id') id: string, @Body() data: tipo_servicio) {
    try {
      return await this.tipoServicioService.updateTipoServicio(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Tipo de servicio no encontrado');
    }
  }

  @Delete(':id')
  async deleteTipoServicio(@Param('id') id: string) {
    try {
      return await this.tipoServicioService.deleteTipoServicio(Number(id));
    } catch (error) {
      throw new BadRequestException('Tipo de servicio no encontrado');
    }
  }
}
