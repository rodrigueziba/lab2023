import { user } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<user[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number): Promise<user> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createUser(data: user): Promise<user> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(id: number, data: user): Promise<user> {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteUser(id: number): Promise<user> {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}