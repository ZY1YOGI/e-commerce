import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class User {
  @prop({ default: () => nanoid(9) })
  public _id: string;

  @prop({ required: [true, 'The Name Is Required'] })
  public name: string;

  @prop({ required: [true, 'The E-mail Is Required'] })
  public email: string;

  @prop({ required: [true, 'The Password Is Required'] })
  public password: string;

  @prop({ default: () => new Date() })
  public createdAt: Date;
}
