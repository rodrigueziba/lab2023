import { CategoriaLocacionesService } from './categoria_locaciones.service';
import { categoria_locaciones } from '@prisma/client';
export declare class CategoriaLocacionesController {
    private readonly categoriaLocacionesService;
    constructor(categoriaLocacionesService: CategoriaLocacionesService);
    getAllCategoriaLocaciones(): Promise<{
        id: number;
        nombre: string;
        categoria_padre_id: number;
        locacion_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }[]>;
    getCategoriaLocacionById(id: string): Promise<{
        id: number;
        nombre: string;
        categoria_padre_id: number;
        locacion_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    createCategoriaLocacion(data: categoria_locaciones): Promise<{
        id: number;
        nombre: string;
        categoria_padre_id: number;
        locacion_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    updateCategoriaLocacion(id: string, data: categoria_locaciones): Promise<{
        id: number;
        nombre: string;
        categoria_padre_id: number;
        locacion_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    deleteCategoriaLocacion(id: string): Promise<{
        id: number;
        nombre: string;
        categoria_padre_id: number;
        locacion_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
}
