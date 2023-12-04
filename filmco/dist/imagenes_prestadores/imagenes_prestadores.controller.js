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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenesPrestadoresController = void 0;
const common_1 = require("@nestjs/common");
const imagenes_prestadores_service_1 = require("./imagenes_prestadores.service");
let ImagenesPrestadoresController = class ImagenesPrestadoresController {
    constructor(imagenesPrestadoresService) {
        this.imagenesPrestadoresService = imagenesPrestadoresService;
    }
    async getAllImagenesPrestadores() {
        return this.imagenesPrestadoresService.getAllImagenesPrestadores();
    }
    async getImagenPrestadorById(id) {
        const imagenPrestadorFound = await this.imagenesPrestadoresService.getImagenesPrestadorById(Number(id));
        if (!imagenPrestadorFound)
            throw new common_1.BadRequestException('Imagen de prestador no encontrada');
        return imagenPrestadorFound;
    }
    async createImagenPrestador(data) {
        return this.imagenesPrestadoresService.createImagenPrestador(data);
    }
    async updateImagenPrestador(id, data) {
        try {
            return await this.imagenesPrestadoresService.updateImagenPrestador(Number(id), data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Imagen de prestador no encontrada');
        }
    }
    async deleteImagenPrestador(id) {
        try {
            return await this.imagenesPrestadoresService.deleteImagenPrestador(Number(id));
        }
        catch (error) {
            throw new common_1.BadRequestException('Imagen de prestador no encontrada');
        }
    }
};
exports.ImagenesPrestadoresController = ImagenesPrestadoresController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagenesPrestadoresController.prototype, "getAllImagenesPrestadores", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImagenesPrestadoresController.prototype, "getImagenPrestadorById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImagenesPrestadoresController.prototype, "createImagenPrestador", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ImagenesPrestadoresController.prototype, "updateImagenPrestador", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImagenesPrestadoresController.prototype, "deleteImagenPrestador", null);
exports.ImagenesPrestadoresController = ImagenesPrestadoresController = __decorate([
    (0, common_1.Controller)('imagenes_prestadores'),
    __metadata("design:paramtypes", [imagenes_prestadores_service_1.ImagenesPrestadoresService])
], ImagenesPrestadoresController);
//# sourceMappingURL=imagenes_prestadores.controller.js.map