import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Category {
  @prop({ default: () => nanoid(9) })
  public _id: string;

  @prop({ required: [true, 'The Name Is Required'] })
  public name: string;

  
  @prop({ default: () => new Date() })
  public createdAt: Date;
}
