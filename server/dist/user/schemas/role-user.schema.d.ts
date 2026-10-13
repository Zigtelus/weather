import { Document } from 'mongoose';
export type UserDocument = RoleUser & Document;
declare class RoleUser {
    readonly admin: string;
    readonly user: string;
}
export declare const RoleUserSchema: import("mongoose").Schema<RoleUser, import("mongoose").Model<RoleUser, any, any, any, Document<unknown, any, RoleUser, any, {}> & RoleUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoleUser, Document<unknown, {}, import("mongoose").FlatRecord<RoleUser>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<RoleUser> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export {};
