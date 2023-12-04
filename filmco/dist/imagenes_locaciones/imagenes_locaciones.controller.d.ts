import { ImagenesLocacionesService } from './imagenes_locaciones.service';
import { imagenes_locaciones } from '@prisma/client';
export declare class ImagenesLocacionesController {
    private readonly imagenesLocacionesService;
    constructor(imagenesLocacionesService: ImagenesLocacionesService);
    getAllImagenesLocaciones(): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        locacion_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }[]>;
    getImagenesLocacionById(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        locacion_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    createImagenLocacion(data: imagenes_locaciones): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        locacion_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    updateImagenLocacion(id: string, data: imagenes_locaciones): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        locacion_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    deleteImagenLocacion(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        locacion_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
}
