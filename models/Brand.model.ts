import { models, model, Schema } from "mongoose";

const BrandSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The Name is required."],
      minlength: [3, "The Name is less than three letters."],
      unique: true,
      validate(name: String, next: any) {
        BrandModel.findOne({ name }, (err: any, category: any) => {
          if (err) throw new Error("Error -> Brand validate: ", err);
          if (category) return new Error("The Name is already exists");
        });
      },
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

// BrandSchema.path("name").validate((name: string, next: any) => {
//   BrandModel.findOne({ name }, (err: any, brand: any) => {
//     if (err) return next(false);
//     if (brand) return next(false);
//     return next(true);
//   });
// }, "The Name is already exists");

const BrandModel = models?.Brand || model("Brand", BrandSchema);

export default BrandModel;
