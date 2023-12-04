import { Module } from '@nestjs/common';
import { ImagenesLocacionesController } from './imagenes_locaciones.controller';
import { ImagenesLocacionesService } from './imagenes_locaciones.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ImagenesLocacionesController],
  providers: [ImagenesLocacionesService],
  imports: [PrismaModule],
})
export class ImagenesLocacionesModule {}
