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
import { LocacionesService } from './locaciones.service';
import { locaciones } from '@prisma/client';

@Controller('locaciones')
export class LocacionesController {
  constructor(private readonly locacionesService: LocacionesService) {}

  @Get()
  async getAllLocaciones() {
    return this.locacionesService.getAllLocaciones();
  }

  @Get(':id')
  async getLocacionById(@Param('id') id: string) {
    return this.locacionesService.getLocacionById(Number(id));
  }
  
  
    @Post()
    async createLocacion(@Body() data: locaciones) {
      return this.locacionesService.createLocacion(data);
    }
  
    @Put(':id')
    async updateLocacion(@Param('id') id: string, @Body() data: locaciones) {
      try {
        return await this.locacionesService.updateLocacion(Number(id), data);
      } catch (error) {
        throw new BadRequestException('Locacion does not exist');
      }
    }
  
    @Delete(':id')
    async deleteLocacion(@Param('id') id: string) {
      try {
        return await this.locacionesService.deleteLocacion(Number(id));
      } catch (error) {
        throw new BadRequestException('Locacion does not exist');
      }
    }
}
