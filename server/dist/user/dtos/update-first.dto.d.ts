import { CoordsUserDto } from "./coords-user.dto";
import { RolesUserDto } from "./roles-user.dto";
export declare class UpdateReportDto {
    readonly age: number;
    readonly password: string;
    readonly name: string;
    readonly email: string;
    readonly coords: CoordsUserDto;
    readonly role: RolesUserDto;
}
