import { PrismaService } from '../prisma/prisma.service';
import { permisos } from '@prisma/client';
export declare class PermisosService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllPermisos(): Promise<permisos[]>;
    getPermisoById(id: number): Promise<permisos>;
    createPermisos(data: permisos): Promise<permisos>;
    updatePermisos(id: number, data: permisos): Promise<permisos>;
    deletePermisos(id: number): Promise<permisos>;
}
