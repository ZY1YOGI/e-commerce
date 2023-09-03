import { getModelForClass } from "@typegoose/typegoose";
import { User } from "@/models/User";
import { Category } from "@/models/Category";

export const UserModel = getModelForClass(User);
export const CategoryModel = getModelForClass(Category);