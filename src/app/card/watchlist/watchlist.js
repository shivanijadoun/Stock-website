'use client';

import React, { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

import axios from 'axios';

export default function StockCard() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get('/api/top20stocks');
        console.log(response.data);
        if (response.status === 200) {
          setStocks(response.data);
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
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedStock(null);
  };

  if (loading) {
    return (
       <div className="flex flex-col space-y-3 m-10 p-5 ">
          {/* <Skeleton className="h-[125px] w-[250px] rounded-xl" /> */}
          <div className="space-y-2 p-5">
            <Skeleton  className="h-4 w-[250px]" />
            <Skeleton className=" h-4 w-[200px]" />
          </div>
          <div className="space-y-2 p-5">
            <Skeleton className=" h-4 w-[250px]" />
            <Skeleton className=" h-4 w-[200px]" />
          </div>
          <div className="space-y-2 p-5">
            <Skeleton className=" h-4 w-[250px]" />
            <Skeleton className=" h-4 w-[200px]" />
          </div>
          <div className="space-y-2 p-5">
            <Skeleton className=" h-4 w-[250px]" />
            <Skeleton className=" h-4 w-[200px]" />
          </div>
          <div className="space-y-2 p-5">
            <Skeleton className=" h-4 w-[250px]" />
            <Skeleton className=" h-4 w-[200px]" />
          </div>
        </div>
    )}

  if (error || !stocks || stocks.length === 0) {
    return (
      <p className="text-center text-red-500 py-10">
        Failed to load stock data. Please try again later.
      </p>
    );
  }

  return (
    <div >
   
      <div className='w-auto m-4'>
        <h1 className="text-2xl font-bold text-white mb-5 text-center">Top Performing Stocks</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 ">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="  p-3">Symbol</th>
                <th className="border text-white border-gray-300 p-3">Score</th>
                <th className="border border-gray-300 p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock, index) => (
                <React.Fragment key={index}>
                  <tr className="hover:bg-gray-100">
                    <td className="border text-white border-gray-300 p-3 text-center">{stock.symbol}</td>
                    <td className="border text-white border-gray-300 p-3 text-center">{stock.score}</td>
                    <td className="border text-white border-gray-300 p-3 text-center">
                      <button
                        onClick={() => onHandleShow(stock)}
                        className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for showing stock metrics */}
      {modalOpen && selectedStock && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3 h-1/2 overflow-y-auto">
            <button
              onClick={closeModal}
              className="ml-72 p-4 py-2  bg-red-500 text-white rounded-md hover:bg-red-600 fixed"
            >
              Close
            </button>
            <h3 className="text-xl font-semibold mb-4">Metrics for {selectedStock.symbol}</h3>
            <ul className="list-disc pl-5 max-h-72">
              {Object.entries(selectedStock.metrics?.metric || {}).map(([key, value]) => (
                <li key={key} className="text-sm text-gray-700">
                  {key}: {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
