"use client";

import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [stock, setStock] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchStockData = async (query) => {
    try {
      const response = await axios.get(`/api/searchapi?symbol=${query}`);
      if (response.status === 200 && response.data) {
        return response.data;
      }
      throw new Error("Symbol not found.");
    } catch (error) {
      throw error;
    }
  };

  const onHandleClick = async () => {
    if (!searchQuery.trim()) {
      setError("Please enter a valid search query.");
      return;
    }

    setLoading(true);
    setError(null);
    setStock(null);
    setModalOpen(false); // Reset modal state

    try {
      const data = await fetchStockData(searchQuery);
      setStock(data);
      setModalOpen(true); // Open modal after successful fetch
    } catch (err) {
      setError(err.message || "An error occurred while searching.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onHandleClick();
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onHandleClickTrend = async (e) => {
    const symbol = e.target.innerText;
    setSearchQuery(symbol);  // Corrected: use setSearchQuery instead of direct assignment
    if (!symbol.trim()) {
      setError("Please enter a valid search query.");
      return;
    }
    setLoading(true);
    setError(null);
    setStock(null);
    setModalOpen(false); // Reset modal state
  
    try {
      const data = await fetchStockData(symbol);
      setStock(data);
      setModalOpen(true); // Open modal after successful fetch
    } catch (err) {
      setError(err.message || "An error occurred while searching.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 py-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center w-full max-w-[800px]">
        Stock ka Search Engine
      </h1>
      <h3 className="text-blue-700 font-semibold text-lg md:text-2xl mt-2 text-center w-full max-w-[800px]">
        The Modern Stock Screener that helps you pick the best Stock
      </h3>

      <div className="w-full max-w-[800px] mt-6">
        <div className="bg-white flex w-full items-center border-none rounded-full overflow-hidden shadow-2xl">
          <input
            className="bg-transparent placeholder:text-blue-800 border-none text-blue-700 text-lg p-4 md:p-6 w-full text-[16px] md:text-[20px] focus:outline-none focus:ring-0"
            placeholder="Search stocks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={onHandleClick}
            className="flex items-center justify-center border-none p-3 md:pr-4"
          >
            <svg
              fill=""
              width="25px"
              height="20px"
              viewBox="0 -0.24 28.423 28.423"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.953,2.547A12.643,12.643,0,1,0,27.6,15.19,12.649,12.649,0,0,0,14.953,2.547Zm0,2A10.643,10.643,0,1,1,4.31,15.19,10.648,10.648,0,0,1,14.953,4.547Z" />
              <path d="M30.441,28.789l-6.276-6.276a1,1,0,1,0-1.414,1.414L29.027,30.2a1,1,0,1,0,1.414-1.414Z" />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
          <div className="flex items-center font-bold ">What's Trending:</div>
          {["AAPL", "GOOG", "MSFT", "AMZN", "TSLA"].map((symbol) => (
            <button
              key={symbol}
              onClick={onHandleClickTrend}
              className="bg-blue-200 m-2 px-4 py-2 text-sm text-blue-700 font-bold rounded-full"
            >
              {symbol}
            </button>
          ))}
        </div>
      </div>

      {loading && <p className="mt-4 text-slate-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {/* <div className="flex bg-blue-300 m-4">
  {/* Company Essentials Section */}
  {/* <div className="w-[600px] bg-white h-96 p-4 m-4 rounded-2xl">
    <h1 className="text-xl font-bold mb-4">Company Essentials</h1>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-bold mb-2">Book Value & Assets:</h3>
        <h5>Book Value Per Share Annual: 19.4428</h5>
        <h5>Book Value Per Share Quarterly: 24.6552</h5>
        <h5>Tangible Book Value Per Share Annual: 18.7025</h5>
        <h5>Tangible Book Value Per Share Quarterly: 18.7025</h5>
      </div>
      <div>
        <h3 className="font-bold mb-2">Profitability:</h3>
        <h5>Gross Margin Annual: 46.98%</h5>
        <h5>Gross Margin TTM: 48.41%</h5>
        <h5>Net Profit Margin Annual: 5.29%</h5>
        <h5>Net Profit Margin TTM: 8.04%</h5>
      </div>
    </div>
  </div> */}
{/* 
  {/* Price Summary Section */}
  {/* <div className="w-[600px] bg-white h-auto p-4 m-4 rounded-2xl">
    <h1 className="text-xl font-bold mb-4">Price Summary</h1>
    <div className="grid grid-cols-5 gap-2 text-sm">
      <div>
        <h3 className="font-bold mb-2">52-Week</h3>
        <h5>High: 233</h5>
        <h5>High Date: 2024-12-16</h5>
        <h5>Low: 144.05</h5>
        <h5>Low Date: 2024-01-04</h5>
      </div>
      <div>
        <h3 className="font-bold mb-2">Returns</h3>
        <h5>5-Day: -2.6347%</h5>
        <h5>13-Week: 16.0821%</h5>
        <h5>26-Week: 20.935%</h5>
        <h5>52-Week: 46.6953%</h5>
      </div>
      <div>
        <h3 className="font-bold mb-2">Volume</h3>
        <h5>10-Day Avg Volume: 39.66074</h5>
        <h5>3-Month Avg Volume: 37.67912</h5>
        <h5>Std Dev (3M): 29.093246</h5>
        <h5>Beta: 1.4126666</h5>
      </div>
      <div>
        <h3 className="font-bold mb-2">Valuation</h3>
        <h5>PE Annual: 77.7333</h5>
        <h5>PE TTM: 47.4259</h5>
        <h5>PB Annual: 7.7778</h5>
        <h5>PS TTM: 3.8138</h5>
      </div>
      <div>
        <h3 className="font-bold mb-2">Year-to-Date</h3>
        <h5>YTD Return: 48.1243%</h5>
        <h5>Month-to-Date: 8.2592%</h5>
        <h5>Price Rel. S&P 500 (13W): 11.6901%</h5>
        <h5>Price Rel. S&P 500 (52W): 21.1406%</h5>
      </div>
    </div>
  </div>
</div>   */}

      {stock && modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 md:p-6 rounded-md shadow-lg w-full max-w-[90%] sm:max-w-lg h-auto max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className=" bg-red-500 text-white rounded-md px-4 py-2 ml-96 hover:bg-red-600 fixed"
            >
              Close
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Metrics for {stock.symbol}
            </h3>
            {stock.metric ? (
              <ul className="list-disc pl-5">
                {Object.entries(stock.metric).map(([key, value]) => (
                  <li key={key} className="text-sm text-gray-700">
                    {key}: {value}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-700">
                No metrics available for this stock.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
