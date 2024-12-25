'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Skeleton } from "@/components/ui/skeleton"

import axios from 'axios';
import Navbar from '@/app/component/Navbar/navbar';
import NavbarStocks from '@/app/component/NavbarStocks/navbarStocks'

export default function StockApi() {
  const [news, setNews] = useState([]); // Store news data
  const [error, setError] = useState(false); // Error state
  const [loading, setLoading] = useState(true); // Loading state
  const [visibleCount, setVisibleCount] = useState(10); // Number of items to display initially

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/newsapi');
        console.log(response.data);
        if (response.status === 200 && Array.isArray(response.data)) {
          setNews(response.data);
        } else {
          console.error(`Error: Received status code ${response.status}`);
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching the data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return  <div className="flex flex-col space-y-3 m-10 p-5 ">
    {/* <Skeleton className="h-[125px] w-[250px] rounded-xl" /> */}
    <div className="space-y-2 p-5">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
    <div className="space-y-2 p-5">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
    <div className="space-y-2 p-5">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
    <div className="space-y-2 p-5">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
    <div className="space-y-2 p-5">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>

  }

  // if (error) {
  //   return <div>Error fetching news. Please try again later.</div>;
  // }

  const onHandleClick = () => {
    // Show more items by increasing visible count
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div >
      <NavbarStocks/>
      <Navbar/>
      
      {/* <h1 className="text-2xl font-bold mb-5 text-center">news</h1> */}
      {news.length > 0 ? (
        news.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="news-item m-6 p-4 border rounded-xl bg-white ">
            {/* <h2 className="font-bold">{item.category}</h2> */}
            <h3 className="text-lg mb-2 font-bold text-black">{item.headline}</h3>
            {/* Uncomment this if the image is required */}
            {item.image && (
              <img
                src={item.image}
                alt={`Image for ${item.category}`}
                className="news-image mb-2 w-48 h-auto object-cover"
              />
            )}
            <p className="text-blue-800 mb-2">{item.summary}</p>
            <Link href={item.url}>
              <button className="rounded-md bg-blue-800 py-2 px-4 text-sm text-white">
                Read More
              </button>
            </Link>
          </div>
        ))
      ) : (
        <p className='flex items-center justify-center m-9'>Please refresh krlo ye api ka error h 😔</p>
      )}

      {visibleCount < news.length && (
        <button
          onClick={onHandleClick}
          className="rounded-md bg-blue-800 py-2 px-4 text-sm text-white mt-4"
        >
          Show More
        </button>
      )}
    </div>
  );
}
