"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoProductoraModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_productora_controller_1 = require("./tipo_productora.controller");
const tipo_productora_service_1 = require("./tipo_productora.service");
const prisma_module_1 = require("../prisma/prisma.module");
let TipoProductoraModule = class TipoProductoraModule {
};
exports.TipoProductoraModule = TipoProductoraModule;
exports.TipoProductoraModule = TipoProductoraModule = __decorate([
    (0, common_1.Module)({
        controllers: [tipo_productora_controller_1.TipoProductoraController],
        providers: [tipo_productora_service_1.TipoProductoraService],
        imports: [prisma_module_1.PrismaModule],
    })
], TipoProductoraModule);
//# sourceMappingURL=tipo_productora.module.js.map