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
exports.CategoriaLocacionesController = void 0;
const common_1 = require("@nestjs/common");
const categoria_locaciones_service_1 = require("./categoria_locaciones.service");
let CategoriaLocacionesController = class CategoriaLocacionesController {
    constructor(categoriaLocacionesService) {
        this.categoriaLocacionesService = categoriaLocacionesService;
    }
    async getAllCategoriaLocaciones() {
        return this.categoriaLocacionesService.getAllCategoriaLocaciones();
    }
    async getCategoriaLocacionById(id) {
        return this.categoriaLocacionesService.getCategoriaLocacionById(Number(id));
    }
    async createCategoriaLocacion(data) {
        return this.categoriaLocacionesService.createCategoriaLocacion(data);
    }
    async updateCategoriaLocacion(id, data) {
        try {
            return await this.categoriaLocacionesService.updateCategoriaLocacion(Number(id), data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Categoría de locación no encontrada');
        }
    }
    async deleteCategoriaLocacion(id) {
        try {
            return await this.categoriaLocacionesService.deleteCategoriaLocacion(Number(id));
        }
        catch (error) {
            throw new common_1.BadRequestException('Categoría de locación no encontrada');
        }
    }
};
exports.CategoriaLocacionesController = CategoriaLocacionesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriaLocacionesController.prototype, "getAllCategoriaLocaciones", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriaLocacionesController.prototype, "getCategoriaLocacionById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoriaLocacionesController.prototype, "createCategoriaLocacion", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CategoriaLocacionesController.prototype, "updateCategoriaLocacion", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriaLocacionesController.prototype, "deleteCategoriaLocacion", null);
exports.CategoriaLocacionesController = CategoriaLocacionesController = __decorate([
    (0, common_1.Controller)('categoria_locaciones'),
    __metadata("design:paramtypes", [categoria_locaciones_service_1.CategoriaLocacionesService])
], CategoriaLocacionesController);
//# sourceMappingURL=categoria_locaciones.controller.js.map