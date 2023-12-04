import { TipoActividadService } from './tipo_actividad.service';
import { tipo_actividad } from '@prisma/client';
export declare class TipoActividadController {
    private readonly tipoActividadService;
    constructor(tipoActividadService: TipoActividadService);
    getAllTipoActividad(): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }[]>;
    getTipoActividadById(id: string): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    createTipoActividad(data: tipo_actividad): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    updateTipoActividad(id: string, data: tipo_actividad): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    deleteTipoActividad(id: string): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
}
