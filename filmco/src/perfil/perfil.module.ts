import { Module } from '@nestjs/common';
import { PerfilController } from './perfil.controller';
import { PerfilService } from './perfil.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PerfilController],
  providers: [PerfilService],
  imports: [PrismaModule]
})
export class PerfilModule {}