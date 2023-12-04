import { Module } from '@nestjs/common';
import { LocacionesController } from './locaciones.controller';
import { LocacionesService } from './locaciones.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [LocacionesController],
  providers: [LocacionesService],
  imports: [PrismaModule]
})
export class LocacionesModule {}