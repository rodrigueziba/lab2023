import { Module } from '@nestjs/common';
import { ImagenesPrestadoresController } from './imagenes_prestadores.controller';
import { ImagenesPrestadoresService } from './imagenes_prestadores.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ImagenesPrestadoresController],
  providers: [ImagenesPrestadoresService],
  imports: [PrismaModule],
})
export class ImagenesPrestadoresModule {}
