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
import { PermisosService } from './permisos.service';
import { permisos } from '@prisma/client';

@Controller('permisos')
export class PermisosController {
  constructor(private readonly permisosService: PermisosService) {}

  @Get()
  async getAllPermisos() {
    return this.permisosService.getAllPermisos();
  }

  @Get(':id')
  async getPermisoById(@Param('id') id: string) {
    return this.permisosService.getPermisoById(Number(id));
  }
  
  @Post()
  async createPermisos(@Body() data: permisos) {
    return this.permisosService.createPermisos(data);
  }

  @Put(':id')
  async updatePermisos(@Param('id') id: string, @Body() data: permisos) {
    try {
      return await this.permisosService.updatePermisos(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Permisos no encontrados');
    }
  }

  @Delete(':id')
  async deletePermisos(@Param('id') id: string) {
    try {
      return await this.permisosService.deletePermisos(Number(id));
    } catch (error) {
      throw new BadRequestException('Permisos no encontrados');
    }
  }
}

