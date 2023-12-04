import { Module } from '@nestjs/common';
import { TipoProductoraController } from './tipo_productora.controller';
import { TipoProductoraService } from './tipo_productora.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TipoProductoraController],
  providers: [TipoProductoraService],
  imports: [PrismaModule],
})
export class TipoProductoraModule {}
