import { models, model, Schema, MongooseError } from "mongoose";
import { ErrorCallback } from "typescript";

const BrandSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The Name is required."],
      minlength: [3, "The Name is less than 3 letters."],
      unique: true,
    },
    keywords: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

BrandSchema.path("name").validate(async (name: string, next: any) => {
  try {
    const brand = await BrandModel.findOne({ name });
    if (brand) return false;
    return true;
  } catch (err: any) {
    throw new Error(err);
  }
}, "The Name is already exists");

const BrandModel = models?.Brand || model("Brand", BrandSchema);

export default BrandModel;
