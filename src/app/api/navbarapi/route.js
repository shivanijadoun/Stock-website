import { NextResponse } from "next/server";
import { fetchChartData ,fetchSymbols} from '../utils/finhubAPI';

export async function GET() {
    try {
      const exchange = "US"; // Default exchange
      const symbolsData = await fetchSymbols(exchange);
      // console.log(symbolsData)
  
      // Extract and limit to 10 symbols for testing
      const symbols =  [
   'AAPL',      // Apple Inc.
  'MSFT',      // Microsoft Corp.
  'AMZN',      // Amazon.com Inc.
  'GOOGL',     // Alphabet Inc. (Google)
  'TSLA',      // Tesla Inc.
  'META',      // Meta Platforms (Facebook)
  'NFLX',      // Netflix
  'NVDA',  
          
      ];
  
      // Fetch stock data for these symbols
      const stockData = await fetchChartData(symbols);
      // console.log(stockData)
  
      return NextResponse.json(stockData);
    } catch (error) {
      console.error("Error fetching stock data:", error);
      return NextResponse.json(
        { error: "Internal Server Error", details: error.message },
        { status: 500 }
      );
    }
  }