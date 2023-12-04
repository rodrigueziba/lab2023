import { TipoServicioService } from './tipo_servicio.service';
import { tipo_servicio } from '@prisma/client';
export declare class TipoServicioController {
    private readonly tipoServicioService;
    constructor(tipoServicioService: TipoServicioService);
    getAllTipoServicio(): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }[]>;
    getTipoServicioById(id: string): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    createTipoServicio(data: tipo_servicio): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    updateTipoServicio(id: string, data: tipo_servicio): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    deleteTipoServicio(id: string): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
}
