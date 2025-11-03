
import { Gender, UserRole } from "@modules/user/domain/enums";

export interface CreateUserDTO  {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    emailVerified: boolean;
    gender: Gender | null ;
    birthDate: Date | null;
    userRole: UserRole ;
    profilePicture: string | null;
}
