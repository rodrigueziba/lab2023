import { PrismaService } from '../prisma/prisma.service';
import { categoria_locaciones } from '@prisma/client';
export declare class CategoriaLocacionesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCategoriaLocaciones(): Promise<categoria_locaciones[]>;
    getCategoriaLocacionById(id: number): Promise<categoria_locaciones>;
    createCategoriaLocacion(data: categoria_locaciones): Promise<categoria_locaciones>;
    updateCategoriaLocacion(id: number, data: categoria_locaciones): Promise<categoria_locaciones>;
    deleteCategoriaLocacion(id: number): Promise<categoria_locaciones>;
}
