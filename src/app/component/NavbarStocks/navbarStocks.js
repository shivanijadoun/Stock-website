'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './navbar.css'; // Import the custom CSS

export default function Navbar() {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get('/api/navbarapi');
        console.log(response);
        const formattedData = response.data.map((item) => ({
          symbol: item.symbol,
          price: item.data.c, // Current price
          percentChange: item.data.dp, // Percent change
        }));
        setMarketData(formattedData);
      } catch (error) {
        console.error('Error fetching market data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <nav className="bg-blue-100 text-blue-900 px-6 py-2 h-12 w-full flex items-center overflow-hidden">
      {loading && <div className="text-white">Loading market data...</div>}
      {error && <div className="text-red-500">Error loading market data.</div>}
      {!loading && !error && (
        <div className="relative w-full">
          <div className="flex animate-marquee space-x-8">
            {marketData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="font-bold">{item.symbol}</span>
                <span className="text-blue-600 text-sm">{item.price}</span>
                <span
                  className={`flex items-center ${
                    item.percentChange > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {item.percentChange > 0 ? (
                    <FaArrowUp className="mr-1" />
                  ) : (
                    <FaArrowDown className="mr-1" />
                  )}
                  {item.percentChange}%
                </span>
              </div>
            ))}
            {/* Duplicate items for seamless scrolling */}
            {marketData.map((item, index) => (
              <div key={`dup-${index}`} className="flex items-center space-x-2">
                <span className="font-bold">{item.symbol}</span>
                <span className="text-blue-600 text-sm">{item.price}</span>
                <span
                  className={`flex items-center ${
                    item.percentChange > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {item.percentChange > 0 ? (
                    <FaArrowUp className="mr-1" />
                  ) : (
                    <FaArrowDown className="mr-1" />
                  )}
                  {item.percentChange}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
