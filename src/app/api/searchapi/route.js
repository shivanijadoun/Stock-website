import { NextResponse } from "next/server";
import { findSearchStock } from "../utils/finhubAPI";

export async function GET(request) {
  try {
    // Extract the query parameter from the request URL
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get("symbol");

    if (!symbol) {
      return NextResponse.json(
        { error: "Symbol query parameter is required." },
        { status: 400 }
      );
    }

    // Fetch the stock data
    const bestStock = await findSearchStock(symbol);

    // Debugging (optional, remove in production)
    console.log("Best stock data:", bestStock);

    if (bestStock) {
      return NextResponse.json(bestStock);
    } else {
      return NextResponse.json(
        { error: "No best-performing stock found." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching best stock data:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
