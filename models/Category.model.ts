import { models, model, Schema } from "mongoose";

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The Name is required."],
      minlength: [3, "The Name is less than three letters."],
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

CategorySchema.path("name").validate(async (name: string, next: any) => {
  try {
    const category = await CategoryModel.findOne({ name });
    if (category) return false;
    return true;
  } catch (err: any) {
    throw new Error(err);
  }
}, "The Name is already exists");

const CategoryModel = models?.Category || model("Category", CategorySchema);

export default CategoryModel;
