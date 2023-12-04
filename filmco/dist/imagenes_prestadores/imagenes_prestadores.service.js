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
exports.ImagenesPrestadoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ImagenesPrestadoresService = class ImagenesPrestadoresService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllImagenesPrestadores() {
        return this.prisma.imagenes_prestadores.findMany();
    }
    async getImagenesPrestadorById(id) {
        return this.prisma.imagenes_prestadores.findUnique({
            where: {
                id: id,
            },
        });
    }
    async createImagenPrestador(data) {
        return this.prisma.imagenes_prestadores.create({
            data,
        });
    }
    async updateImagenPrestador(id, data) {
        return this.prisma.imagenes_prestadores.update({
            where: {
                id: id,
            },
            data,
        });
    }
    async deleteImagenPrestador(id) {
        return this.prisma.imagenes_prestadores.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.ImagenesPrestadoresService = ImagenesPrestadoresService;
exports.ImagenesPrestadoresService = ImagenesPrestadoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ImagenesPrestadoresService);
//# sourceMappingURL=imagenes_prestadores.service.js.map