import { CreateReportDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { Response } from 'express';
export declare class UserController {
    private readonly firstService;
    constructor(firstService: UserService);
    getUsers(): Promise<User[]>;
    createUser(createUserDto: CreateReportDto, res: Response): Promise<User | boolean | string>;
    getUser(body: {
        password: string;
        email: string;
    }): Promise<User>;
    updateUser(updateUserDto: CreateReportDto, userId: string): Promise<User | boolean>;
    removeUser(userId: string): Promise<User>;
}
