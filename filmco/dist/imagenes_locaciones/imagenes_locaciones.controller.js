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
exports.ImagenesLocacionesController = void 0;
const common_1 = require("@nestjs/common");
const imagenes_locaciones_service_1 = require("./imagenes_locaciones.service");
let ImagenesLocacionesController = class ImagenesLocacionesController {
    constructor(imagenesLocacionesService) {
        this.imagenesLocacionesService = imagenesLocacionesService;
    }
    async getAllImagenesLocaciones() {
        return this.imagenesLocacionesService.getAllImagenesLocaciones();
    }
    async getImagenesLocacionById(id) {
        return this.imagenesLocacionesService.getImagenesLocacionById(Number(id));
    }
    async createImagenLocacion(data) {
        return this.imagenesLocacionesService.createImagenLocacion(data);
    }
    async updateImagenLocacion(id, data) {
        try {
            return await this.imagenesLocacionesService.updateImagenLocacion(Number(id), data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Imagen de locación no encontrada');
        }
    }
    async deleteImagenLocacion(id) {
        try {
            return await this.imagenesLocacionesService.deleteImagenLocacion(Number(id));
        }
        catch (error) {
            throw new common_1.BadRequestException('Imagen de locación no encontrada');
        }
    }
};
exports.ImagenesLocacionesController = ImagenesLocacionesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagenesLocacionesController.prototype, "getAllImagenesLocaciones", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImagenesLocacionesController.prototype, "getImagenesLocacionById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImagenesLocacionesController.prototype, "createImagenLocacion", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ImagenesLocacionesController.prototype, "updateImagenLocacion", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImagenesLocacionesController.prototype, "deleteImagenLocacion", null);
exports.ImagenesLocacionesController = ImagenesLocacionesController = __decorate([
    (0, common_1.Controller)('imagenes_locaciones'),
    __metadata("design:paramtypes", [imagenes_locaciones_service_1.ImagenesLocacionesService])
], ImagenesLocacionesController);
//# sourceMappingURL=imagenes_locaciones.controller.js.map