

import { NextResponse } from "next/server";
import { findWorstPerformingStock } from '../utils/finhubAPI';

export async function GET() {
  try {
    const exchange = "US"; // Default to US stocks
    const bestStock = await findWorstPerformingStock(exchange);
  
    console.log(bestStock)
    if (bestStock) {
      return NextResponse.json({
        symbol: bestStock.symbol,
        score: bestStock.score,
        metrics: bestStock.metrics,
      });

    } else {
      return NextResponse.json(
        { error: "No best-performing stock found" },
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
