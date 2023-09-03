import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name } = await request.json();
  try {
    
    console.log('====================================');
    console.log(name);
    console.log('====================================');
    return NextResponse.json({message: "Created successfully", status: 200 });

  } catch (err) {
    return NextResponse.json({
      message: `Internal Server Error`,
      status: 500,
    });
  }
}


export async function GET(request: NextRequest) {
  try {
    const categories = [{
      id: 1,
      name: 'test',
      description: "lorem daskdp asdoij aso doashdi ashdi has"
    }, {
      id: 2,
      name: 'test',
      description: "Adding the Tag Input: After installing the package, we can easily add a tag input on any page in our app. For this example,"
    }
    ]

    console.log('====================================');
    console.log(categories);
    console.log('====================================');

    return NextResponse.json({categories: categories});
    

  } catch (err) {
    return NextResponse.json({
      message: `Internal Server Error`,
    }, {status: 500});
  }
}
