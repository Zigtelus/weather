import { CoordsUserDto } from './dtos/coords-user.dto';
import { RolesUserDto } from './dtos/roles-user.dto';
export declare class UpdateUser {
    age: number;
    password: string;
    name: string;
    email: string;
    lastVisit: string;
    role: RolesUserDto;
    coords: CoordsUserDto;
    constructor({ age, password, name, email, role, coords }: {
        age: any;
        password: any;
        name: any;
        email: any;
        role: any;
        coords: any;
    });
    getPassword: (text: string) => string;
    getEmail(email: string): string;
    getRole(role: RolesUserDto): RolesUserDto;
}
export declare class NewUser extends UpdateUser {
    userId: string;
    dateRegistration: string;
    lastVisit: string;
    constructor({ age, password, name, email, role, coords }: {
        age: any;
        password: any;
        name: any;
        email: any;
        role: any;
        coords: any;
    });
}
