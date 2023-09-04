import { CategoryModel } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connect-db";
import { Category } from "@/models/Category.model";

type UpdateCategoryBody = Partial<Category>;

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { name, keywords, description } = await request.json();
    const category = await CategoryModel.create({name, keywords, description})
    console.log("====================================");
    console.log(category);
    console.log("====================================");

    return NextResponse.json({ message: "Created successfully", status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "Internal Server Error This is not a post",
    });
  }
}

export async function GET(request: NextRequest) {
  try {
    const categories = [
      {
        id: 1,
        name: "Web",
        keywords: "text,admin,lol,nice,lol man,hi",
        description: "lorem daskdp asdoij aso doashdi ashdi has",
      },
      {
        id: 2,
        name: "Admin",
        keywords: "text,admin,lol,nice,lol man,hi",
        description:
          "Adding the Tag Input: After installing the package, we can easily add a tag input on any page in our app. For this example,",
      },
    ];
    console.log("====================================");
    console.log(categories);
    console.log("====================================");

    return NextResponse.json({ categories: categories });
  } catch (err) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
