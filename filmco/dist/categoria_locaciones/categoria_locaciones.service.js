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
exports.CategoriaLocacionesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoriaLocacionesService = class CategoriaLocacionesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllCategoriaLocaciones() {
        return this.prisma.categoria_locaciones.findMany();
    }
    async getCategoriaLocacionById(id) {
        return this.prisma.categoria_locaciones.findUnique({
            where: {
                id: id,
            },
        });
    }
    async createCategoriaLocacion(data) {
        return this.prisma.categoria_locaciones.create({
            data,
        });
    }
    async updateCategoriaLocacion(id, data) {
        return this.prisma.categoria_locaciones.update({
            where: {
                id: id,
            },
            data,
        });
    }
    async deleteCategoriaLocacion(id) {
        return this.prisma.categoria_locaciones.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.CategoriaLocacionesService = CategoriaLocacionesService;
exports.CategoriaLocacionesService = CategoriaLocacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriaLocacionesService);
//# sourceMappingURL=categoria_locaciones.service.js.map