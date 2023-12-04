import { PrismaService } from '../prisma/prisma.service';
import { tipo_servicio } from '@prisma/client';
export declare class TipoServicioService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTipoServicio(): Promise<tipo_servicio[]>;
    getTipoServicioById(id: number): Promise<tipo_servicio>;
    createTipoServicio(data: tipo_servicio): Promise<tipo_servicio>;
    updateTipoServicio(id: number, data: tipo_servicio): Promise<tipo_servicio>;
    deleteTipoServicio(id: number): Promise<tipo_servicio>;
}
