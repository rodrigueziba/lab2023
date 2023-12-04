import { PrismaService } from '../prisma/prisma.service';
import { areas_desempenio } from '@prisma/client';
export declare class AreasDesempenioService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllAreasDesempenio(): Promise<areas_desempenio[]>;
    getAreaDesempenioById(id: number): Promise<areas_desempenio>;
    createAreaDesempenio(data: areas_desempenio): Promise<areas_desempenio>;
    updateAreaDesempenio(id: number, data: areas_desempenio): Promise<areas_desempenio>;
    deleteAreaDesempenio(id: number): Promise<areas_desempenio>;
}
