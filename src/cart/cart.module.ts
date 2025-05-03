import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { MongooseModule } from '@nestjs/mongoose';
import { cartSchema } from './schemas/cart.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cart', schema: cartSchema }])],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
