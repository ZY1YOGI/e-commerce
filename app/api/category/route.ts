import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connect-db";
import  CategoryModel  from "@/models/Category.model";


export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { name, keywords, description } = await request.json();

    const category = await CategoryModel.create({name, keywords, description})

    console.log("================= CategoryModel.create ===================");
    console.log(category);
    console.log("====================================");

    return NextResponse.json({ message: "Created successfully", status: 200 });
  } catch (err) {
    console.log("================= CategoryModel.Error ===================");
    console.log(err);
    console.log("====================================");
    return NextResponse.json({
      message: "Internal Server Error",
    });
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const categories = await CategoryModel.find({})

    console.log("==================================== categories");
    console.log(categories);
    console.log("====================================");

    return NextResponse.json({ categories: categories });
  } catch (err) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
