import { Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
@Controller('auth')
export class AuthController{
    //auth service được tạo tự động khi khởi tạo controller
    constructor(private authService: AuthService){
        
    }
    @Post("register")
    register(@Req() request:Request){
        return this.authService.do();
    }
}