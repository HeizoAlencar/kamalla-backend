import {IsNotEmpty} from "class-validator"

export class CreateUserBodyDTO {
    @IsNotEmpty({
        message:"O nome é obrigatorio"
    })
    name:string
}