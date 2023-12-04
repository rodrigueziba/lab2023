import { ImagenesPrestadoresService } from './imagenes_prestadores.service';
import { imagenes_prestadores } from '@prisma/client';
export declare class ImagenesPrestadoresController {
    private readonly imagenesPrestadoresService;
    constructor(imagenesPrestadoresService: ImagenesPrestadoresService);
    getAllImagenesPrestadores(): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }[]>;
    getImagenPrestadorById(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    createImagenPrestador(data: imagenes_prestadores): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    updateImagenPrestador(id: string, data: imagenes_prestadores): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
    deleteImagenPrestador(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        link: string;
        perfil_id: number;
        creado_por: number;
        created_at: Date;
        update_at: Date;
    }>;
}
