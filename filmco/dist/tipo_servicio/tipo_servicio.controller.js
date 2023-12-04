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
exports.TipoServicioController = void 0;
const common_1 = require("@nestjs/common");
const tipo_servicio_service_1 = require("./tipo_servicio.service");
let TipoServicioController = class TipoServicioController {
    constructor(tipoServicioService) {
        this.tipoServicioService = tipoServicioService;
    }
    async getAllTipoServicio() {
        return this.tipoServicioService.getAllTipoServicio();
    }
    async getTipoServicioById(id) {
        const tipoServicioFound = await this.tipoServicioService.getTipoServicioById(Number(id));
        if (!tipoServicioFound)
            throw new common_1.BadRequestException('Tipo de servicio no encontrado');
        return tipoServicioFound;
    }
    async createTipoServicio(data) {
        return this.tipoServicioService.createTipoServicio(data);
    }
    async updateTipoServicio(id, data) {
        try {
            return await this.tipoServicioService.updateTipoServicio(Number(id), data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Tipo de servicio no encontrado');
        }
    }
    async deleteTipoServicio(id) {
        try {
            return await this.tipoServicioService.deleteTipoServicio(Number(id));
        }
        catch (error) {
            throw new common_1.BadRequestException('Tipo de servicio no encontrado');
        }
    }
};
exports.TipoServicioController = TipoServicioController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoServicioController.prototype, "getAllTipoServicio", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TipoServicioController.prototype, "getTipoServicioById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TipoServicioController.prototype, "createTipoServicio", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TipoServicioController.prototype, "updateTipoServicio", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TipoServicioController.prototype, "deleteTipoServicio", null);
exports.TipoServicioController = TipoServicioController = __decorate([
    (0, common_1.Controller)('tipo_servicio'),
    __metadata("design:paramtypes", [tipo_servicio_service_1.TipoServicioService])
], TipoServicioController);
//# sourceMappingURL=tipo_servicio.controller.js.map