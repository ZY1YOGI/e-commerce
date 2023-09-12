import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connect-db";
import BrandModel from "@/models/Brand.model";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { name, keywords, description } = await request.json();

    const brand = await BrandModel.create({
      name,
      keywords,
      description,
    });

    return NextResponse.json({
      message: `Created ${brand.name} successfully`,
    });
  } catch (err: any) {
    return NextResponse.json({
      message: "Internal Server Error",
      errors: err.errors,
    });
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const brands = await BrandModel.find({});

    return NextResponse.json({ brands });
  } catch (err) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await connectDB();
    const { _id } = await request.json();

    const brand = await BrandModel.findOneAndDelete({ _id });
    if (!brand) return NextResponse.json({ message: "Id Not Fond" });

    return NextResponse.json({
      message: `Deleted ${brand.name} successfully`,
    });
  } catch (err) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
