import { Module } from '@nestjs/common';
import { TipoActividadController } from './tipo_actividad.controller';
import { TipoActividadService } from './tipo_actividad.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TipoActividadController],
  providers: [TipoActividadService],
  imports: [PrismaModule],
})
export class TipoActividadModule {}
