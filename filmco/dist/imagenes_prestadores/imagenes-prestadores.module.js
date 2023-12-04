"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenesPrestadoresModule = void 0;
const common_1 = require("@nestjs/common");
const imagenes_prestadores_controller_1 = require("./imagenes_prestadores.controller");
const imagenes_prestadores_service_1 = require("./imagenes_prestadores.service");
const prisma_module_1 = require("../prisma/prisma.module");
let ImagenesPrestadoresModule = class ImagenesPrestadoresModule {
};
exports.ImagenesPrestadoresModule = ImagenesPrestadoresModule;
exports.ImagenesPrestadoresModule = ImagenesPrestadoresModule = __decorate([
    (0, common_1.Module)({
        controllers: [imagenes_prestadores_controller_1.ImagenesPrestadoresController],
        providers: [imagenes_prestadores_service_1.ImagenesPrestadoresService],
        imports: [prisma_module_1.PrismaModule],
    })
], ImagenesPrestadoresModule);
//# sourceMappingURL=imagenes-prestadores.module.js.map