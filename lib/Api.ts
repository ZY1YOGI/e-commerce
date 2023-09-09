import { NextRequest, NextResponse } from "next/server";

class Api {
  public msg: String = "";
  public status: Number = 200;
  public errors: String[] = [];

  error() {
    return NextResponse.json({
      message: this.msg,
      errors: this.errors,
      status: this.status,
    });
  }
}

export { Api };
