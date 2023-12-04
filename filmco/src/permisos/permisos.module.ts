import { Module } from '@nestjs/common';
import { PermisosController } from './permisos.controller';
import { PermisosService } from './permisos.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PermisosController],
  providers: [PermisosService],
  imports: [PrismaModule],
})
export class PermisosModule {}
