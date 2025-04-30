import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WatchDocument = Watches & Document;

@Schema()
export class Watches {
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

export const WatchSchema = SchemaFactory.createForClass(Watches);
