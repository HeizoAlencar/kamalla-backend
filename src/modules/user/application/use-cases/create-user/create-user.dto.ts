
import { Gender, UserRole } from "@modules/user/domain/enums";

export interface CreateUserDTO  {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    gender?: Gender | null | undefined ;
    birthDate?: Date | null | undefined;
    userRole: UserRole ;
    profilePicture?: string | null;
}
