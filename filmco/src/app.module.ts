import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { LocacionesModule } from './locaciones/locaciones.module';
import { PerfilModule } from './perfil/perfil.module';
import { AreaDesempenioModule } from './areas_desempenio/area_desempenio.module';
import { CategoriasLocacionesModule } from './categoria_locaciones/categoria_locaciones.module';
import { ImagenesLocacionesModule } from './imagenes_locaciones/imagenes_locaciones.module';
import { PermisosModule } from './permisos/permisos.module';
import { TipoActividadModule } from './tipo_actividad/tipo_actividad.module';
import { TipoProductoraModule } from './tipo_productora/tipo_productora.module';
import { TipoServicioModule } from './tipo_servicio/tipo_servicio.module';


@Module({
  imports: [UserModule, LocacionesModule, PerfilModule, AreaDesempenioModule,CategoriasLocacionesModule,ImagenesLocacionesModule,PermisosModule,TipoActividadModule,TipoProductoraModule,TipoServicioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
