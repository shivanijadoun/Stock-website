import Link from "next/link";
import Dashboard from "./Dashboard/dashboard";
import React, { Suspense } from 'react'

export default function Home() {
  return (
    <div>
      {/* <Suspense fallback={<p>loading..</p>}> */}
      <Dashboard/>
      {/* </Suspense> */}
    <div className="container mx-auto py-10">
      {/* <h1 className="text-2xl font-bold mb-5">Welcome to the Stock Dashboard</h1> */}
      {/* <Link
        href="/SuperInvestors"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
 
      </Link> */}
      {/* <Link
        href="/Bundles"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
           
      </Link> */}
      {/* <Link
        href="/card/watchlist"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
         Screener
      </Link> */}
      {/* <Link
        href="/MarketMovers"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        search
      </Link> */}
      {/* <Link
        href="/card/news"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
       news
      </Link> */}
      {/* <Link
        href="/card/chart"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
       chart
      </Link> */}
    </div>
    </div>
  );
}
