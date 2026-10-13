import { Document } from 'mongoose';
import { RolesUserDto } from '../dtos/roles-user.dto';
import { CoordsUser } from './coords-user.schema';
export type UserDocument = User & Document;
export declare class User {
    userId: string;
    name: string;
    password: string;
    email: string;
    age: number;
    dateRegistration: string;
    lastVisit: string;
    coords: CoordsUser;
    role: RolesUserDto;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User, any, {}> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
