import { user } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<user[]>;
    getUserById(id: number): Promise<user>;
    createUser(data: user): Promise<user>;
    updateUser(id: number, data: user): Promise<user>;
    deleteUser(id: number): Promise<user>;
}
