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
exports.PermisosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PermisosService = class PermisosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllPermisos() {
        return this.prisma.permisos.findMany();
    }
    async getPermisoById(id) {
        return this.prisma.permisos.findUnique({
            where: {
                id: id,
            },
        });
    }
    async createPermisos(data) {
        return this.prisma.permisos.create({
            data,
        });
    }
    async updatePermisos(id, data) {
        return this.prisma.permisos.update({
            where: {
                id: id,
            },
            data,
        });
    }
    async deletePermisos(id) {
        return this.prisma.permisos.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.PermisosService = PermisosService;
exports.PermisosService = PermisosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PermisosService);
//# sourceMappingURL=permisos.service.js.map