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
import { PerfilService } from './perfil.service';
import { perfil } from '@prisma/client';

@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get()
  async getAllPerfiles() {
    return this.perfilService.getAllPerfiles();
  }

  @Get(':id')
  async getPerfilById(@Param('id') id: string) {
    return this.perfilService.getPerfilById(Number(id));
  }
  
  @Post()
  async createPerfil(@Body() data: perfil) {
    return this.perfilService.createPerfil(data);
  }

  @Put(':id')
  async updatePerfil(@Param('id') id: string, @Body() data: perfil) {
    try {
      return await this.perfilService.updatePerfil(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Perfil does not exist');
    }
  }

  @Delete(':id')
  async deletePerfil(@Param('id') id: string) {
    try {
      return await this.perfilService.deletePerfil(Number(id));
    } catch (error) {
      throw new BadRequestException('Perfil does not exist');
    }
  }
}
