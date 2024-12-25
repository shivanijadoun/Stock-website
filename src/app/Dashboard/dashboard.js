'use client'

import React, { useEffect, useState } from 'react'
import NavbarStocks from '../component/NavbarStocks/navbarStocks'
import Navbark from '../component/Navbar/navbar'
import Footer from '../component/Footer/footer'
import Search from '../card/search/search'
// import Card1 from '../card/Card1/card1'
// import Card2 from '../card/Card2/card2'
// import Watchlist from '../card/watchlist/watchlist'
// import News from '../card/news/page'
// import axios from 'axios'

export default function Dashboard() {
  // Uncomment and use the state below if API integration is required
  // const [data, setData] = useState({
  //   topCard: null,
  //   lastCard: null,
  //   news: null,
  //   top20Stocks: null,
  // });
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [topCardRes, lastCardRes, newsRes] = await Promise.all([
  //         axios.get('/api/topcard'),
  //         axios.get('/api/lastcard'),
  //         axios.get('/api/newsapi'),
  //       ]);

  //       if (topCardRes.status === 200 && lastCardRes.status === 200 && newsRes.status === 200) {
  //         setData({
  //           topCard: topCardRes.data,
  //           lastCard: lastCardRes.data,
  //           news: newsRes.data,
  //         });
  //       } else {
  //         console.error('Error: One or more requests failed.');
  //         setError(true);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <NavbarStocks />
      <Navbark />
      <Search />
      <Footer />
      <section className="flex space-x-2">
        {/* <Card1 /> */}
        {/* <Card2 /> */}
      </section>
      <section className="flex space-x-2">
        <div className="w-1/2">
          {/* <Watchlist /> */}
        </div>
        <div className="w-1/2">
          {/* <News /> */}
        </div>
      </section>
    </div>
  )
}
