import { PrismaService } from '../prisma/prisma.service';
import { imagenes_locaciones } from '@prisma/client';
export declare class ImagenesLocacionesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllImagenesLocaciones(): Promise<imagenes_locaciones[]>;
    getImagenesLocacionById(id: number): Promise<imagenes_locaciones>;
    createImagenLocacion(data: imagenes_locaciones): Promise<imagenes_locaciones>;
    updateImagenLocacion(id: number, data: imagenes_locaciones): Promise<imagenes_locaciones>;
    deleteImagenLocacion(id: number): Promise<imagenes_locaciones>;
}
