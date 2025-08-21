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





// 'use client';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '@/app/component/Navbar/navbar';
// import NavbarStocks from '@/app/component/NavbarStocks/navbarStocks';
// import { Skeleton } from "@/components/ui/skeleton";

// export default function Page() {
//   const [metrics, setMetrics] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchStockMetrics = async () => {
//     try {
//       setError(null);
//       setLoading(true);
//       const response = await axios.get('/api/marketMoversapi');
//       setMetrics(response.data);
//     } catch (err) {
//       setError(err.message || 'Failed to fetch data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStockMetrics();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex flex-col space-y-3 m-10 p-5">
//         <div className="space-y-2 p-5 gap-4">
         
//             <Skeleton className="h-4 w-[250px]" />
//             <Skeleton className="h-4 w-[250px]" />
//             <Skeleton className="h-4 w-[250px]" />
//             <Skeleton  className="h-4 w-[250px]" />
      
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-10">
//         <p className="text-red-500">{error}</p>
//         <button
//           onClick={fetchStockMetrics}
//           className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <NavbarStocks />
//       <Navbar />
//       <div>
       
//         <div className="flex flex-wrap justify-around">
//           {/* Top Gainers Table */}
          
//           <div >
//           <div className="flex justify-center">
//           <h1 className="text-2xl font-bold text-black text-center m-5 p-4 w-96 rounded-full bg-white">
//             Top Gainers
//           </h1>
//         </div>
//         <div className="bg-white overflow-x-auto w-[550px] rounded-lg m-5 shadow">
//             <table className="table-auto w-full border-collapse">
//               <thead>
//                 <tr className="bg-blue-300 text-black">
//                   <th className="p-3 rounded-tl-lg">Symbol</th>
//                   <th className="p-3">Price</th>
//                   <th className="p-3 rounded-tr-lg">Change %</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {metrics?.top_gainers?.map((stock, index) => (
//                   <tr key={index} className="hover:bg-blue-100 border">
//                     <td className="text-blue-900 font-bold p-3 text-center">{stock.ticker || 'N/A'}</td>
//                     <td className="text-blue-600 p-3 text-center">{stock.price || 'N/A'}</td>
//                     <td className="text-blue-600 p-3 text-center">{stock.change_percentage || 'N/A'}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
           
//           {/* Most Actively Traded Table */}

          
//           <div >
            
//           <div className="flex justify-center">
//           <h1 className="text-2xl font-bold text-black text-center m-5 p-4 w-96 rounded-full bg-white">
//             Top Losers
//           </h1>
//         </div>
//         <div className="overflow-x-auto bg-white w-[550px] rounded-lg m-5 shadow">
//             <table className="table-auto w-full border-collapse">
//               <thead>
//                 <tr className="bg-blue-300 text-black">
//                   <th className="p-3 rounded-tl-lg">Symbol</th>
//                   <th className="p-3">Volume</th>
//                   <th className="p-3 rounded-tr-lg">Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {metrics?.most_actively_traded?.map((stock, index) => (
//                   <tr key={index} className="hover:bg-blue-100 border">
//                     <td className="text-blue-900 font-bold p-3 text-center">{stock.ticker || 'N/A'}</td>
//                     <td className="text-blue-600 p-3 text-center">{stock.volume || 'N/A'}</td>
//                     <td className="text-blue-600 p-3 text-center">{stock.price || 'N/A'}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }
