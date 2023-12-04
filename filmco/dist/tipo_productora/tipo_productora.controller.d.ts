import { TipoProductoraService } from './tipo_productora.service';
import { tipo_productora } from '@prisma/client';
export declare class TipoProductoraController {
    private readonly tipoProductoraService;
    constructor(tipoProductoraService: TipoProductoraService);
    getAllTipoProductora(): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }[]>;
    getTipoProductoraById(id: string): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    createTipoProductora(data: tipo_productora): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    updateTipoProductora(id: string, data: tipo_productora): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    deleteTipoProductora(id: string): Promise<{
        id: number;
        nombre: string;
        tipo_padre_id: number;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
}
