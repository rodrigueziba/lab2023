import { PrismaService } from '../prisma/prisma.service';
import { imagenes_prestadores } from '@prisma/client';
export declare class ImagenesPrestadoresService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllImagenesPrestadores(): Promise<imagenes_prestadores[]>;
    getImagenesPrestadorById(id: number): Promise<imagenes_prestadores>;
    createImagenPrestador(data: imagenes_prestadores): Promise<imagenes_prestadores>;
    updateImagenPrestador(id: number, data: imagenes_prestadores): Promise<imagenes_prestadores>;
    deleteImagenPrestador(id: number): Promise<imagenes_prestadores>;
}
