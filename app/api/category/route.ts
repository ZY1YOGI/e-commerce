import  { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
  const { name, keywords, description } = await req.json();



  



  try {
    return NextResponse.json({ message: "Created successfully", status: 200 });
  } catch (err) {
    return NextResponse.json({
      message: "This is not a post",
    });
  }
}










export async function GET(req: NextRequest, res: NextResponse) {
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

    return NextResponse.json({ categories: categories });
  } catch (err) {
    return NextResponse.json(
      {
        message: `Internal Server Error`,
      },
      { status: 500 }
    );
  }
}
