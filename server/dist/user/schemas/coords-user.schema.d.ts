import { Document } from 'mongoose';
export type UserDocument = CoordsUser & Document;
export declare class CoordsUser {
    latitude: number;
    longitude: number;
    city: string;
}
export declare const CoordsUserSchema: import("mongoose").Schema<CoordsUser, import("mongoose").Model<CoordsUser, any, any, any, Document<unknown, any, CoordsUser, any, {}> & CoordsUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CoordsUser, Document<unknown, {}, import("mongoose").FlatRecord<CoordsUser>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CoordsUser> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
