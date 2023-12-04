import { PrismaService } from '../prisma/prisma.service';
import { tipo_productora } from '@prisma/client';
export declare class TipoProductoraService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTipoProductora(): Promise<tipo_productora[]>;
    getTipoProductoraById(id: number): Promise<tipo_productora>;
    createTipoProductora(data: tipo_productora): Promise<tipo_productora>;
    updateTipoProductora(id: number, data: tipo_productora): Promise<tipo_productora>;
    deleteTipoProductora(id: number): Promise<tipo_productora>;
}
