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
exports.TipoServicioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TipoServicioService = class TipoServicioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllTipoServicio() {
        return this.prisma.tipo_servicio.findMany();
    }
    async getTipoServicioById(id) {
        return this.prisma.tipo_servicio.findUnique({
            where: {
                id: id,
            },
        });
    }
    async createTipoServicio(data) {
        return this.prisma.tipo_servicio.create({
            data,
        });
    }
    async updateTipoServicio(id, data) {
        return this.prisma.tipo_servicio.update({
            where: {
                id: id,
            },
            data,
        });
    }
    async deleteTipoServicio(id) {
        return this.prisma.tipo_servicio.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.TipoServicioService = TipoServicioService;
exports.TipoServicioService = TipoServicioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TipoServicioService);
//# sourceMappingURL=tipo_servicio.service.js.map