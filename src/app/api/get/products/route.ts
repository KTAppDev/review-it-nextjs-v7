import { prisma } from "@/app/util/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("POST /api/products");
  // interface Body {
  //   isPublic: boolean;
  //   user: boolean;
  //   product: boolean;
  //
  // }

  // const body: Body = await request.json();
  // console.log(body);
  try {
    const products = await prisma.product.findMany({
      // include: {
      //   user: body.user,
      //   product: body.product,
      // },
    });
    console.log(products);
    return NextResponse.json({
      success: true,
      status: 200,
      dataLength: products.length,
      data: products,
    });
  } catch (error) {
    let e = error as Error;
    return NextResponse.json({
      success: false,
      status: 500,
      data: e.message.slice(0, 500) + "...",
    });
  }
}