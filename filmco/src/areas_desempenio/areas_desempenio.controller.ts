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
import { AreasDesempenioService } from './areas_desempenio.service';
import { areas_desempenio } from '@prisma/client';

@Controller('areas_desempenio')
export class AreasDesempenioController {
  constructor(private readonly areasDesempenioService: AreasDesempenioService) {}

  @Get()
  async getAllAreasDesempenio() {
    return this.areasDesempenioService.getAllAreasDesempenio();
  }

  @Get(':id')
  async getAreaDesempenioById(@Param('id') id: string) {
    return this.areasDesempenioService.getAreaDesempenioById(Number(id));
  }
  
  @Post()
  async createAreaDesempenio(@Body() data: areas_desempenio) {
    return this.areasDesempenioService.createAreaDesempenio(data);
  }
  
  @Put(':id')
  async updateAreaDesempenio(@Param('id') id: string, @Body() data: areas_desempenio) {
    try {
      return await this.areasDesempenioService.updateAreaDesempenio(Number(id), data);
    } catch (error) {
      throw new BadRequestException('AreaDesempenio does not exist');
    }
  }

  @Delete(':id')
  async deleteAreaDesempenio(@Param('id') id: string) {
    try {
      return await this.areasDesempenioService.deleteAreaDesempenio(Number(id));
    } catch (error) {
      throw new BadRequestException('AreaDesempenio does not exist');
    }
  }
}
