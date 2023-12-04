import { Module } from '@nestjs/common';
import { TipoServicioController } from './tipo_servicio.controller';
import { TipoServicioService } from './tipo_servicio.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TipoServicioController],
  providers: [TipoServicioService],
  imports: [PrismaModule],
})
export class TipoServicioModule {}
