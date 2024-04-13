import { Model, FilterQuery } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
export declare class UserRepository {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findOne(usersFilterQuery: FilterQuery<User>): Promise<User>;
    find(usersFilterQuery: FilterQuery<User>): Promise<User[]>;
    create(user: User): Promise<User>;
    findOneAndUpdate(usersFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User>;
    remove(usersFilterQuery: FilterQuery<User>): Promise<User>;
    removeId(usersFilterQuery: FilterQuery<User>): Promise<User>;
}
