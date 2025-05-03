import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor( private readonly cartService:CartService ) {}

    // Add a watch to the cart
     @Post('add')
     async addToCart(@Body() cartData: any) {
        console.log('Received data:', cartData); 
        return this.cartService.addTocart(cartData);
     }

     @Get('all')
     async getAllCartItems() {
        return this.cartService.getAllCarts(); 
     }

     @Delete('remove/:id')
        async removeFromCart(@Param('id') id: string) {
            return this.cartService.removeFromCart(id);
        }


}
