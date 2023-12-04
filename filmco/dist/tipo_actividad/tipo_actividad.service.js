"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoActividadService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TipoActividadService = class TipoActividadService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllTipoActividad() {
        return this.prisma.tipo_actividad.findMany();
    }
    async getTipoActividadById(id) {
        return this.prisma.tipo_actividad.findUnique({
            where: {
                id: id,
            },
        });
    }
    async createTipoActividad(data) {
        return this.prisma.tipo_actividad.create({
            data,
        });
    }
    async updateTipoActividad(id, data) {
        return this.prisma.tipo_actividad.update({
            where: {
                id: id,
            },
            data,
        });
    }
    async deleteTipoActividad(id) {
        return this.prisma.tipo_actividad.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.TipoActividadService = TipoActividadService;
exports.TipoActividadService = TipoActividadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TipoActividadService);
//# sourceMappingURL=tipo_actividad.service.js.map