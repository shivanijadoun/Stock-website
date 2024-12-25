import { NextResponse } from "next/server";
import { find200StockMetrics } from "../utils/finhubAPI";

export async function GET() {
    try {
    
      const top200stocks= await find200StockMetrics();
       console.log(top200stocks);
      return NextResponse.json(top200stocks);
    
  } catch (error) {
    console.error("Error fetching best stock data:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}