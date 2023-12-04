"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const locaciones_module_1 = require("./locaciones/locaciones.module");
const perfil_module_1 = require("./perfil/perfil.module");
const area_desempenio_module_1 = require("./areas_desempenio/area_desempenio.module");
const categoria_locaciones_module_1 = require("./categoria_locaciones/categoria_locaciones.module");
const imagenes_locaciones_module_1 = require("./imagenes_locaciones/imagenes_locaciones.module");
const permisos_module_1 = require("./permisos/permisos.module");
const tipo_actividad_module_1 = require("./tipo_actividad/tipo_actividad.module");
const tipo_productora_module_1 = require("./tipo_productora/tipo_productora.module");
const tipo_servicio_module_1 = require("./tipo_servicio/tipo_servicio.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, locaciones_module_1.LocacionesModule, perfil_module_1.PerfilModule, area_desempenio_module_1.AreaDesempenioModule, categoria_locaciones_module_1.CategoriasLocacionesModule, imagenes_locaciones_module_1.ImagenesLocacionesModule, permisos_module_1.PermisosModule, tipo_actividad_module_1.TipoActividadModule, tipo_productora_module_1.TipoProductoraModule, tipo_servicio_module_1.TipoServicioModule],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map