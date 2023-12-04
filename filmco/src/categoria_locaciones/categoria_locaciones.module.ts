import { Module } from '@nestjs/common';
import { CategoriaLocacionesController } from './categoria_locaciones.controller';
import { CategoriaLocacionesService } from './categoria_locaciones.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CategoriaLocacionesController],
  providers: [CategoriaLocacionesService],
  imports: [PrismaModule],
})
export class CategoriasLocacionesModule {}
