import { NextRequest, NextResponse } from "next/server";

class Api {
  constructor(
    public msg: String = "",
    public status: Number = 200,
    public errors: String[] = []
  ) {}

  json() {
    return NextResponse.json({
      message: this.msg,
      errors: this.errors,
      status: this.status,
    });
  }
}

export { Api };
