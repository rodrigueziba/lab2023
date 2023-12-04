import { PrismaService } from '../prisma/prisma.service';
import { tipo_actividad } from '@prisma/client';
export declare class TipoActividadService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTipoActividad(): Promise<tipo_actividad[]>;
    getTipoActividadById(id: number): Promise<tipo_actividad>;
    createTipoActividad(data: tipo_actividad): Promise<tipo_actividad>;
    updateTipoActividad(id: number, data: tipo_actividad): Promise<tipo_actividad>;
    deleteTipoActividad(id: number): Promise<tipo_actividad>;
}
