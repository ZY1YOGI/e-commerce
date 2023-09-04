import { models, model, Schema } from "mongoose";

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
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

const CategoryModel = models.Category || model("Category", CategorySchema);

export default CategoryModel;
