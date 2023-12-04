import { Module } from '@nestjs/common';
import { AreasDesempenioController } from './areas_desempenio.controller';
import { AreasDesempenioService } from './areas_desempenio.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [AreasDesempenioController],
  providers: [AreasDesempenioService],
  imports: [PrismaModule]
})
export class AreaDesempenioModule {}