'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function Navbar() {

    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchMarketData = async () => {
        try {
          // Replace with your API endpoint
          const response = await axios.get('/api/navbarapi');
          console.log(response)
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
    // if (loading) return <div className="text-white">Loading market data...</div>;
    // if (error) return <div className="text-red-500">Error loading market data.</div>;
  
    return (
      <nav className="bg-blue-100 text-blue-900 px-6 py-4 h-10 w-full flex items-center">
        
        <div
  className="flex space-x-8 overflow-x-auto"
  style={{
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE and Edge
  }}>

          {marketData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="font-bold">{item.symbol}</span>
              <span className="text-blue-600 text-sm">{item.price}  </span>
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
      </nav>
    );
  };
  