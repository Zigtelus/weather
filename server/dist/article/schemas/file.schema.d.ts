import { Document } from 'mongoose';
export type FileThisDocument = FileThis & Document;
export declare class FileThis {
    name: string;
    type: string;
    accessLink: string;
    size: Number;
    path: string;
    date: Date;
}
export declare const FileThisSchema: import("mongoose").Schema<FileThis, import("mongoose").Model<FileThis, any, any, any, Document<unknown, any, FileThis, any, {}> & FileThis & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FileThis, Document<unknown, {}, import("mongoose").FlatRecord<FileThis>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FileThis> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
