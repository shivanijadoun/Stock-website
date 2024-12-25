'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/app/component/Navbar/navbar';
import NavbarStocks from '@/app/component/NavbarStocks/navbarStocks';
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStockMetrics = async () => {
      try {
        const response = await axios.get('/api/marketMoversapi');
        setMetrics(response.data);
      } catch (error) {
        console.error('Error in fetching the data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchStockMetrics();
  }, []);

  const handleRetry = () => {
    setError(false);
    setLoading(true);
    fetchStockMetrics();
  };

  if (loading) {
    return (
      <div className="flex flex-col space-y-3 m-10 p-5">
        <div className="space-y-2 p-5 gap-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Failed to load stock data. Please try again later.</p>
        <button
          onClick={handleRetry}
          className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <NavbarStocks />
      <Navbar />

      <div className=" ">
        <div className='flex  justify-center'>

        <h1 className="text-2xl font-bold  text-black  text-center m-5 p-4 w-96 rounded-full bg-white ">
          Top Performing Stocks
        </h1>
        </div>
        <div className="flex flex-wrap justify-around">
          {/* First Table */}
          <div className="bg-white overflow-x-auto w-[550px] rounded-lg m-5 shadow ">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-blue-300 text-black">
                  <th className="p-3 rounded-tl-lg">Symbol</th>
                  <th className="p-3">52 Week High</th>
                  <th className="p-3 rounded-tr-lg">52 Week Low</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((stock, index) => (
                  <tr key={index} className="hover:bg-blue-100 border">
                    <td className="text-blue-900 font-bold p-3 text-center">{stock.symbol || 'N/A'}</td>
                    <td className="text-blue-600 p-3 text-center">
                      {stock.metric['52WeekHigh'] || 'N/A'}
                    </td>
                    <td className="text-blue-600 p-3 text-center">
                      {stock.metric['52WeekLow'] || 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Second Table */}
          <div className="overflow-x-auto bg-white w-[550px] rounded-lg m-5 shadow">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-blue-300 text-black">
                  <th className="p-3 rounded-tl-lg">Symbol</th>
                  <th className="p-3">10-Day Avg Volume</th>
                  <th className="p-3 rounded-tr-lg">Beta Value</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((stock, index) => (
                  <tr key={index} className="hover:bg-blue-100 border">
                    <td className="text-blue-900 font-bold p-3 text-center">{stock.symbol || 'N/A'}</td>
                    <td className="text-blue-600 p-3 text-center">
                      {stock.metric['10DayAverageTradingVolume'] || 'N/A'}
                    </td>
                    <td className="text-blue-600 p-3 text-center">{stock.metric['beta'] || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
