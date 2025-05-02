import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // register
  @Post('register')
  async register(@Body() body: { username: string; email: string; password: string }) {
    return this.userService.register(body); 
  }

  // login
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const existingUser = await this.userService.validateUser(body.email, body.password);
    if (!existingUser) {
      throw new UnauthorizedException('Invalid credentials'); 
    }

    
    const payload = { sub: existingUser._id, email: existingUser.email };
    const token = this.userService.getToken(payload);

    return { existingUser, token };
  }
}
