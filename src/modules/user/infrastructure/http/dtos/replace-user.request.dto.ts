

import cv from "class-validator";
import { Gender, UserRole } from "@modules/user/domain/enums";


export class ReplaceUserRequestDTO  {

    @cv.IsNotEmpty({message:"O Nome é obrigatorio."})    
    @cv.IsString({message:"O Nome deve ser uma string."})
    @cv.MinLength(3,{message:"O nome deve ter no minímo 3 caracteres."})
    @cv.MaxLength(100,{message:"O nome deve ter no maximo 100 caracteres."})   
    name: string;
    @cv.IsNotEmpty({message:"O apelido é obrigatorio."})    
    @cv.IsString({message:"O apelido deve ser uma string."})
    @cv.MinLength(2,{message:"O apelido deve ter no minímo 2 caracteres."})
    @cv.MaxLength(50,{message:"O apelido deve ter no maximo 50 caracteres."})      
    nickname: string;
    @cv.IsNotEmpty({message:"A informação emailVerified é obrigatoria."})
    emailVerified: boolean;
    @cv.IsOptional()
    @cv.IsString({message:"O gênero deve ser uma string."})
    @cv.IsEnum(Gender,{message:"O gênero deve ser um dos seguintes valores: MALE, FEMALE."})
    gender?: Gender | null ;
    @cv.IsOptional()
    @cv.IsDateString({}, {message:"A data de nascimento deve ser uma string de data ISO."})
    birthDate?: Date | string | null;
    @cv.IsOptional()
    userRole?: UserRole | null;
    @cv.IsOptional()
    profilePicture?: string | null;

}
