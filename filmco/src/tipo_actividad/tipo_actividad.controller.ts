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
import { TipoActividadService } from './tipo_actividad.service';
import { tipo_actividad } from '@prisma/client';

@Controller('tipo_actividad')
export class TipoActividadController {
  constructor(private readonly tipoActividadService: TipoActividadService) {}

  @Get()
  async getAllTipoActividad() {
    return this.tipoActividadService.getAllTipoActividad();
  }

  @Get(':id')
  async getTipoActividadById(@Param('id') id: string) {
    return this.tipoActividadService.getTipoActividadById(Number(id));
  }
  
  @Post()
  async createTipoActividad(@Body() data: tipo_actividad) {
    return this.tipoActividadService.createTipoActividad(data);
  }

  @Put(':id')
  async updateTipoActividad(@Param('id') id: string, @Body() data: tipo_actividad) {
    try {
      return await this.tipoActividadService.updateTipoActividad(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Tipo de actividad no encontrado');
    }
  }

  @Delete(':id')
  async deleteTipoActividad(@Param('id') id: string) {
    try {
      return await this.tipoActividadService.deleteTipoActividad(Number(id));
    } catch (error) {
      throw new BadRequestException('Tipo de actividad no encontrado');
    }
  }
}
