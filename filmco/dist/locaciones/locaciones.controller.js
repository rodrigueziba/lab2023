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
exports.LocacionesController = void 0;
const common_1 = require("@nestjs/common");
const locaciones_service_1 = require("./locaciones.service");
let LocacionesController = class LocacionesController {
    constructor(locacionesService) {
        this.locacionesService = locacionesService;
    }
    async getAllLocaciones() {
        return this.locacionesService.getAllLocaciones();
    }
    async getLocacionById(id) {
        return this.locacionesService.getLocacionById(Number(id));
    }
    async createLocacion(data) {
        return this.locacionesService.createLocacion(data);
    }
    async updateLocacion(id, data) {
        try {
            return await this.locacionesService.updateLocacion(Number(id), data);
        }
        catch (error) {
            throw new common_1.BadRequestException('Locacion does not exist');
        }
    }
    async deleteLocacion(id) {
        try {
            return await this.locacionesService.deleteLocacion(Number(id));
        }
        catch (error) {
            throw new common_1.BadRequestException('Locacion does not exist');
        }
    }
};
exports.LocacionesController = LocacionesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocacionesController.prototype, "getAllLocaciones", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocacionesController.prototype, "getLocacionById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocacionesController.prototype, "createLocacion", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LocacionesController.prototype, "updateLocacion", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocacionesController.prototype, "deleteLocacion", null);
exports.LocacionesController = LocacionesController = __decorate([
    (0, common_1.Controller)('locaciones'),
    __metadata("design:paramtypes", [locaciones_service_1.LocacionesService])
], LocacionesController);
//# sourceMappingURL=locaciones.controller.js.map