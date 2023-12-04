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
exports.TipoActividadController = void 0;
const common_1 = require("@nestjs/common");
const tipo_actividad_service_1 = require("./tipo_actividad.service");
let TipoActividadController = class TipoActividadController {
    constructor(tipoActividadService) {
        this.tipoActividadService = tipoActividadService;
    }
    async getAllTipoActividad() {
        return this.tipoActividadService.getAllTipoActividad();
    }
    async getTipoActividadById(id) {
        return this.tipoActividadService.getTipoActividadById(Number(id));
    }
    async createTipoActividad(data) {
        return this.tipoActividadService.createTipoActividad(data);
    }
    async updateTipoActividad(id, data) {
        try {
            return await this.tipoActividadService.updateTipoActividad(Number(id), data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Tipo de actividad no encontrado');
        }
    }
    async deleteTipoActividad(id) {
        try {
            return await this.tipoActividadService.deleteTipoActividad(Number(id));
        }
        catch (error) {
            throw new common_1.BadRequestException('Tipo de actividad no encontrado');
        }
    }
};
exports.TipoActividadController = TipoActividadController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoActividadController.prototype, "getAllTipoActividad", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TipoActividadController.prototype, "getTipoActividadById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TipoActividadController.prototype, "createTipoActividad", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TipoActividadController.prototype, "updateTipoActividad", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TipoActividadController.prototype, "deleteTipoActividad", null);
exports.TipoActividadController = TipoActividadController = __decorate([
    (0, common_1.Controller)('tipo_actividad'),
    __metadata("design:paramtypes", [tipo_actividad_service_1.TipoActividadService])
], TipoActividadController);
//# sourceMappingURL=tipo_actividad.controller.js.map