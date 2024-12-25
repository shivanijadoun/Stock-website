'use client';

import React, { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

import axios from 'axios';

export default function StockCard() {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // State to toggle metrics visibility
   const [modalOpen, setModalOpen] = useState(false);
     const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get('/api/topcard'); // Ensure this returns only 1 stock
        console.log(response.data);
        if (response.status === 200) {
          setStock(response.data);
        } else {
          console.error(`Error: Received status code ${response.status}`);
          setError(true);
        }
      } catch (error) {
        console.error('Error in fetching the data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStock();
  }, []);

  const onHandleShow = (stock) => {
    setSelectedStock(stock);
    setShowDetails((prev) => !prev);
    setModalOpen(true);
  };

 
  const closeModal = () => {
    setModalOpen(false);
    setShowDetails(null)
    setSelectedStock(null);
  };
  if (loading) {
    return <div className=" flex flex-col space-y-3 m-10">
    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className=" h-4 w-[250px]" />
      <Skeleton className=" h-4 w-[200px]" />
    </div>
  </div>  }

  if (error || !stock) {
    return (
      <p className="text-center text-red-500 py-10">
        Failed to load stock data. Please try again later.
      </p>
    );
  }

  return (
    <div className="  container mx-auto py-10 w-96">
      <div className="flex-col space-2 border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h1 className="text-2xl font-bold mb-5 text-center text-white">Best Performing Stock</h1>
      <div >
        <h2 className="text-lg text-white items-center font-bold">{stock.symbol}</h2>
        <p className="text-gray-400">Score: {stock.score}</p>
        <button
          onClick={onHandleShow}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
        </div>
        {showDetails && stock.metrics && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-1/3 h-1/2 overflow-y-auto">
              <button
                onClick={closeModal}
                className="ml-72 p-4 py-2  bg-red-500 text-white rounded-md hover:bg-red-600 fixed"
              >
                Close
              </button>
              <h3 className="text-xl font-semibold mb-4">
                Metrics for {stock.symbol}
              </h3>
              <ul className="list-disc pl-5 max-h-72">
                {Object.entries(stock.metrics.metric).map(([key, value]) => (
                  <li key={key} className="text-sm text-gray-700">
                    {key}: {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}