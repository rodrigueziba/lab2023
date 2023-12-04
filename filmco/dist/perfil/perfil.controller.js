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
exports.PerfilController = void 0;
const common_1 = require("@nestjs/common");
const perfil_service_1 = require("./perfil.service");
let PerfilController = class PerfilController {
    constructor(perfilService) {
        this.perfilService = perfilService;
    }
    async getAllPerfiles() {
        return this.perfilService.getAllPerfiles();
    }
    async getPerfilById(id) {
        return this.perfilService.getPerfilById(Number(id));
    }
    async createPerfil(data) {
        return this.perfilService.createPerfil(data);
    }
    async updatePerfil(id, data) {
        try {
            return await this.perfilService.updatePerfil(Number(id), data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Perfil does not exist');
        }
    }
    async deletePerfil(id) {
        try {
            return await this.perfilService.deletePerfil(Number(id));
        }
        catch (error) {
            throw new common_1.BadRequestException('Perfil does not exist');
        }
    }
};
exports.PerfilController = PerfilController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "getAllPerfiles", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "getPerfilById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "createPerfil", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "updatePerfil", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "deletePerfil", null);
exports.PerfilController = PerfilController = __decorate([
    (0, common_1.Controller)('perfil'),
    __metadata("design:paramtypes", [perfil_service_1.PerfilService])
], PerfilController);
//# sourceMappingURL=perfil.controller.js.map