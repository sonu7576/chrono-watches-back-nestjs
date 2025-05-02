import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './Shemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  // Register
  async register(data: Partial<User>) {
    const hashedPassword = await bcrypt.hash(data.password, 10); 
    const newUser = new this.userModel({ ...data, password: hashedPassword });
    await newUser.save();

    
    const payload = { sub: newUser._id, email: newUser.email };
    const token = this.jwtService.sign(payload);

    return { user: newUser, token };
  }

  // login
  async validateUser(email: string, password: string) {
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser && await bcrypt.compare(password, existingUser.password)) {
      return existingUser; 
    }
    return null;
  }

 
  getToken(payload: any) {
    return this.jwtService.sign(payload);
  }
}
