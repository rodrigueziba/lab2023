import { AreasDesempenioService } from './areas_desempenio.service';
import { areas_desempenio } from '@prisma/client';
export declare class AreasDesempenioController {
    private readonly areasDesempenioService;
    constructor(areasDesempenioService: AreasDesempenioService);
    getAllAreasDesempenio(): Promise<{
        id: number;
        nombre: string;
        area_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }[]>;
    getAreaDesempenioById(id: string): Promise<{
        id: number;
        nombre: string;
        area_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    createAreaDesempenio(data: areas_desempenio): Promise<{
        id: number;
        nombre: string;
        area_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    updateAreaDesempenio(id: string, data: areas_desempenio): Promise<{
        id: number;
        nombre: string;
        area_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    deleteAreaDesempenio(id: string): Promise<{
        id: number;
        nombre: string;
        area_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
}
