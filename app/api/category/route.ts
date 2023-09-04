import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connect-db";
import CategoryModel from "@/models/Category.model";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { name, keywords, description } = await request.json();

    const category = await CategoryModel.create({
      name,
      keywords,
      description,
    });

    console.log("================= POST ===================");
    console.log(category);

    return NextResponse.json({
      message: `Created ${category.name} successfully`,
    });
  } catch (err) {
    console.log("================= POST.Error ===================");
    console.error(err);    
    return NextResponse.json({
      message: "Internal Server Error",
      errors: err.errors,
    });
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const categories = await CategoryModel.find({});

    return NextResponse.json({ categories: categories });
  } catch (err) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await connectDB();
    const { _id } = await request.json();

    const category = await CategoryModel.findOneAndDelete({ _id: _id });
    if (!category) return NextResponse.json({ message: "Id Not Fond" });

    return NextResponse.json({
      message: "Deleted successfully",
      category: category.name,
    });
  } catch (err) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
