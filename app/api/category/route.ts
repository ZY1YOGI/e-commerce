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

    return NextResponse.json({ message: "Created successfully", status: 200 });
  } catch (err) {
    console.log("================= CategoryModel.Error ===================");
    console.table(Object.values(err.errors).map(val => val.message))
    return NextResponse.json({
      message: "Internal Server Error",
      errors: Object.values(err.errors).map(val => val.message)
    });
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const categories = await CategoryModel.find({})

    console.log("==================================== categories");
    console.log(categories);

    return NextResponse.json({ categories: categories });
  } catch (err) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
