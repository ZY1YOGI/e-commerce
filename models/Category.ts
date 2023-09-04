import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Category {
  @prop({ default: () => nanoid(9) })
  public _id: string;

  @prop({ type: () => String, required: [true, "The Name Is Required"], unique: true })
  public name: string;

  @prop({ type: () => String })
  public keywords?: string;

  @prop({ type: () => String })
  public description?: string;

  @prop({ default: () => new Date() })
  public createdAt: Date;
}
