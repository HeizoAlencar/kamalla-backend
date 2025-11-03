

import cv from "class-validator";
import { Gender, UserRole } from "@modules/user/domain/enums";


export class CreateUserRequestDTO  {

    @cv.IsNotEmpty({message:"O Nome é obrigatorio."})    
    @cv.IsString({message:"O Nome deve ser uma string."})
    @cv.MinLength(3,{message:"O nome deve ter no minímo 3 caracteres."})
    @cv.MaxLength(100,{message:"O nome deve ter no maximo 100 caracteres."})
    firstName: string;
    @cv.IsNotEmpty({message:"O nome de usuario é obrigatorio."})    
    @cv.IsString({message:"O nome de usuario deve ser uma string."})
    @cv.MinLength(2,{message:"O nome de usuario deve ter no minímo 2 caracteres."})
    @cv.MaxLength(50,{message:"O nome de usuario deve ter no maximo 50 caracteres."})      
    username: string;
    @cv.IsNotEmpty({message:"O lastName é obrigatorio."})    
    @cv.IsString({message:"O lastName deve ser uma string."})
    @cv.MinLength(3,{message:"O lastName deve ter no minímo 3 caracteres."})
    @cv.MaxLength(100,{message:"O lastName deve ter no maximo 100 caracteres."})
    lastName: string;

    @cv.IsNotEmpty({message:"O email é obrigatorio."})
    @cv.IsEmail()
    email: string;
    @cv.IsNotEmpty({message:"A senha é obrigatoria."})
    @cv.MinLength(8,{message: "A senha deve ter no minímo 8 caracteres."})
    password: string;
    @cv.IsNotEmpty({message:"A informação emailVerified é obrigatoria."})
    emailVerified: boolean;
    @cv.IsOptional()
    @cv.IsString({message:"O gênero deve ser uma string."})
    @cv.IsEnum(Gender,{message:"O gênero deve ser um dos seguintes valores: MALE, FEMALE."})
    gender?: Gender | null ;
    @cv.IsOptional()
    @cv.IsDateString({}, {message:"A data de nascimento deve ser uma string de data ISO."})
    birthDate?: Date | null;
    @cv.IsOptional()
    userRole: UserRole ;
    @cv.IsOptional()
    profilePicture?: string | null;

}
