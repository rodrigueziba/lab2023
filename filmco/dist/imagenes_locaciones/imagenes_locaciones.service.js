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
exports.ImagenesLocacionesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ImagenesLocacionesService = class ImagenesLocacionesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllImagenesLocaciones() {
        return this.prisma.imagenes_locaciones.findMany();
    }
    async getImagenesLocacionById(id) {
        return this.prisma.imagenes_locaciones.findUnique({
            where: {
                id: id,
            },
        });
    }
    async createImagenLocacion(data) {
        return this.prisma.imagenes_locaciones.create({
            data,
        });
    }
    async updateImagenLocacion(id, data) {
        return this.prisma.imagenes_locaciones.update({
            where: {
                id: id,
            },
            data,
        });
    }
    async deleteImagenLocacion(id) {
        return this.prisma.imagenes_locaciones.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.ImagenesLocacionesService = ImagenesLocacionesService;
exports.ImagenesLocacionesService = ImagenesLocacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ImagenesLocacionesService);
//# sourceMappingURL=imagenes_locaciones.service.js.map