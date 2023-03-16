import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
@Controller()
export class AuthController{
    //auth service được tạo tự động khi khởi tạo controller
    constructor(private authService: AuthService){
        
    }
}