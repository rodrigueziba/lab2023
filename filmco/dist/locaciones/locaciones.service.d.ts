import { PrismaService } from '../prisma/prisma.service';
import { locaciones } from '@prisma/client';
export declare class LocacionesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllLocaciones(): Promise<locaciones[]>;
    getLocacionById(id: number): Promise<locaciones>;
    createLocacion(data: locaciones): Promise<locaciones>;
    updateLocacion(id: number, data: locaciones): Promise<locaciones>;
    deleteLocacion(id: number): Promise<locaciones>;
}
