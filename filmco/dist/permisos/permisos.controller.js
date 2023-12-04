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
exports.PermisosController = void 0;
const common_1 = require("@nestjs/common");
const permisos_service_1 = require("./permisos.service");
let PermisosController = class PermisosController {
    constructor(permisosService) {
        this.permisosService = permisosService;
    }
    async getAllPermisos() {
        return this.permisosService.getAllPermisos();
    }
    async getPermisoById(id) {
        return this.permisosService.getPermisoById(Number(id));
    }
    async createPermisos(data) {
        return this.permisosService.createPermisos(data);
    }
    async updatePermisos(id, data) {
        try {
            return await this.permisosService.updatePermisos(Number(id), data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Permisos no encontrados');
        }
    }
    async deletePermisos(id) {
        try {
            return await this.permisosService.deletePermisos(Number(id));
        }
        catch (error) {
            throw new common_1.BadRequestException('Permisos no encontrados');
        }
    }
};
exports.PermisosController = PermisosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PermisosController.prototype, "getAllPermisos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermisosController.prototype, "getPermisoById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PermisosController.prototype, "createPermisos", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PermisosController.prototype, "updatePermisos", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermisosController.prototype, "deletePermisos", null);
exports.PermisosController = PermisosController = __decorate([
    (0, common_1.Controller)('permisos'),
    __metadata("design:paramtypes", [permisos_service_1.PermisosService])
], PermisosController);
//# sourceMappingURL=permisos.controller.js.map