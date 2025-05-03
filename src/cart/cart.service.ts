import { InjectModel } from "@nestjs/mongoose";
import { Cart, CartDocument } from "./schemas/cart.schema";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";

@Injectable()
export class CartService {
    constructor(@InjectModel(Cart.name) private cartmodel: Model<CartDocument>,) {}

    //   add watch
  async addTocart(cartData: any) {
    const newCart = new this.cartmodel(cartData); 
    return newCart.save();
  }

//   get all carts
  async getAllCarts() {
    return this.cartmodel.find().exec();
  }

//   remove from cart

  async removeFromCart(id: string) {
    return this.cartmodel.findByIdAndDelete(id).exec();
  }

}
