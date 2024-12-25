import { NextResponse } from "next/server";
import { findBest10PerformingStock } from '../utils/finhubAPI';

export async function GET() {
  try {
    const exchange = "US"; // Default to US stocks
    const bestStock = await findBest10PerformingStock(exchange);
    
    if (bestStock && bestStock.length > 0) {
      // Slice the array to get the top 10 stocks
      const top10Stocks = bestStock.slice(0, 10);
      console.log(top10Stocks)

      // Map through the top 10 stocks and return the desired data
      const response = top10Stocks.map(stock => ({
        symbol: stock.symbol,
        score: stock.score,
        metrics: stock.metrics,
      }));

      return NextResponse.json(response);
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
