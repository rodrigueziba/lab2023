import { PrismaService } from '../prisma/prisma.service';
import { perfil } from '@prisma/client';
export declare class PerfilService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllPerfiles(): Promise<perfil[]>;
    getPerfilById(id: number): Promise<perfil>;
    createPerfil(data: perfil): Promise<perfil>;
    updatePerfil(id: number, data: perfil): Promise<perfil>;
    deletePerfil(id: number): Promise<perfil>;
}
