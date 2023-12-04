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
exports.AreasDesempenioController = void 0;
const common_1 = require("@nestjs/common");
const areas_desempenio_service_1 = require("./areas_desempenio.service");
let AreasDesempenioController = class AreasDesempenioController {
    constructor(areasDesempenioService) {
        this.areasDesempenioService = areasDesempenioService;
    }
    async getAllAreasDesempenio() {
        return this.areasDesempenioService.getAllAreasDesempenio();
    }
    async getAreaDesempenioById(id) {
        return this.areasDesempenioService.getAreaDesempenioById(Number(id));
    }
    async createAreaDesempenio(data) {
        return this.areasDesempenioService.createAreaDesempenio(data);
    }
    async updateAreaDesempenio(id, data) {
        try {
            return await this.areasDesempenioService.updateAreaDesempenio(Number(id), data);
        }
        catch (error) {
            throw new common_1.BadRequestException('AreaDesempenio does not exist');
        }
    }
    async deleteAreaDesempenio(id) {
        try {
            return await this.areasDesempenioService.deleteAreaDesempenio(Number(id));
        }
        catch (error) {
            throw new common_1.BadRequestException('AreaDesempenio does not exist');
        }
    }
};
exports.AreasDesempenioController = AreasDesempenioController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AreasDesempenioController.prototype, "getAllAreasDesempenio", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AreasDesempenioController.prototype, "getAreaDesempenioById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AreasDesempenioController.prototype, "createAreaDesempenio", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AreasDesempenioController.prototype, "updateAreaDesempenio", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AreasDesempenioController.prototype, "deleteAreaDesempenio", null);
exports.AreasDesempenioController = AreasDesempenioController = __decorate([
    (0, common_1.Controller)('areas_desempenio'),
    __metadata("design:paramtypes", [areas_desempenio_service_1.AreasDesempenioService])
], AreasDesempenioController);
//# sourceMappingURL=areas_desempenio.controller.js.map