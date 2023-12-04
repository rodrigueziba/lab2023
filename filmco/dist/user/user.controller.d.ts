import { UserService } from './user.service';
import { user } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<{
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        rol: import(".prisma/client").$Enums.user_rol;
        created_at: Date;
        update_at: Date;
    }[]>;
    getUserById(id: string): Promise<{
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        rol: import(".prisma/client").$Enums.user_rol;
        created_at: Date;
        update_at: Date;
    }>;
    createUser(data: user): Promise<{
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        rol: import(".prisma/client").$Enums.user_rol;
        created_at: Date;
        update_at: Date;
    }>;
    updateUser(id: string, data: user): Promise<{
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        rol: import(".prisma/client").$Enums.user_rol;
        created_at: Date;
        update_at: Date;
    }>;
    deleteUser(id: string): Promise<{
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        rol: import(".prisma/client").$Enums.user_rol;
        created_at: Date;
        update_at: Date;
    }>;
}
