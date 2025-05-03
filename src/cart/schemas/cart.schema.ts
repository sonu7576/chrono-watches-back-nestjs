import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";




export type CartDocument = Cart & Document;

@Schema()
export class Cart {

  @Prop({ required: true })
  userId: string; 

  @Prop({ required: true })
  watchname: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  about: string; 

  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  warranty: string;
}

export const cartSchema = SchemaFactory.createForClass(Cart);
