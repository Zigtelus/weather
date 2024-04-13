import { UserRepository } from './user.repository';
import { User } from './schemas/user.schema';
import { UpdateReportDto } from './dtos/update-first.dto';
import { CreateReportDto } from './dtos/create-user.dto';
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: UserRepository);
    getUserById(email: string): Promise<User>;
    getUsers(): Promise<User[]>;
    createUser(createUserDto: CreateReportDto, res: any): Promise<User | boolean | string>;
    updateUser(userId: string, userUpdates: UpdateReportDto): Promise<User | boolean>;
    removeUser(userId: string): Promise<User>;
    removeUserID(id: string): Promise<User>;
}
