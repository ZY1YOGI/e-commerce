import { models, model, Schema } from "mongoose";

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The Name is required."],
      minlength: [3, "The Name is less than three letters."],
      unique: true,
      validate(name: String, next: any) {
        CategoryModel.findOne({ name }, (err: any, category: any) => {
          if (err) throw new Error("Error -> Category validate: ", err);
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

// CategorySchema.path("name").validate((name: string, next: any) => {
//   CategoryModel.findOne({ name }, (err: any, category: any) => {
//     if (err) return next(false);
//     if (category) return next(false);
//     return next(true);
//   });
// }, "The Name is already exists");

const CategoryModel = models?.Category || model("Category", CategorySchema);

export default CategoryModel;
