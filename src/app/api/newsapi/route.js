import { NextResponse } from "next/server";
import { fetchNews } from "../utils/finhubAPI";

export async function GET() {
  try {
    const response = await fetchNews();

    if (response) {
    //   console.log("News fetched successfully:", response);
      return NextResponse.json(response);
    } else {
      console.error("No data received from fetchNews");
      return NextResponse.json(
        { error: "No news data found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching news data:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
