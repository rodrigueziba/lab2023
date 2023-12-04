import { PermisosService } from './permisos.service';
import { permisos } from '@prisma/client';
export declare class PermisosController {
    private readonly permisosService;
    constructor(permisosService: PermisosService);
    getAllPermisos(): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }[]>;
    getPermisoById(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    createPermisos(data: permisos): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    updatePermisos(id: string, data: permisos): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    deletePermisos(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
}
