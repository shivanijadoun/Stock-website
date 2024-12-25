const FINNHUB_TOKEN = process.env.STOCK_API_KEY;


const fetchSymbols = async (exchange) => {
  const url = `https://finnhub.io/api/v1/stock/symbol?exchange=${exchange}&token=${FINNHUB_TOKEN}`;
  const response = await fetch(url);
  // console.log(response)
  return response.json();
};


const fetchNews =async()=>{
  const url = `https://finnhub.io/api/v1/news?category=general&token=${FINNHUB_TOKEN}`
  const response = await fetch(url)
  console.log(response)
  return response.json();
}



  const fetchChartData = async (symbols) => {
    const results = await Promise.all(
      symbols.map(async (symbol) => {
        const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_TOKEN}`;
        const response = await fetch(url);
        const data = await response.json();
        return { symbol, data };
      })
    );
    return results;
  };


  const fetchStockMetrics = async (symbol) => {
    const url = `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${FINNHUB_TOKEN}`;
    const response = await fetch(url);
    return response.json();
  };


  const calculatePerformanceScore = (metrics) => {
    const metric = metrics.metric || {};
    let score = 0;
    if ("52WeekHigh" in metric && "52WeekLow" in metric) {
        score += ((metric["52WeekHigh"] - metric["52WeekLow"]) / metric["52WeekLow"]) * 10;
      }
    
      if ("roe" in metric) {
        score += metric.roe * 20;
      }
    
      if ("peRatio" in metric) {
        score += Math.max(0, 100 - metric.peRatio);
      }
    
      if ("profitMargin" in metric) {
        score += metric.profitMargin * 30;
      }
    
      return score;
    };

    const findBestPerformingStock = async (exchange) => {
      const symbols = await fetchSymbols(exchange);
      const topSymbols = symbols.slice(0, 50); // Limit to 50 stocks for processing
    
      // Fetch metrics concurrently
      const metricPromises = topSymbols.map((stock) =>
        fetchStockMetrics(stock.symbol)
          .then((metrics) => ({
            symbol: stock.symbol,
            score: calculatePerformanceScore(metrics),
            metrics,
          }))
          .catch((error) => {
            console.error(`Error processing stock ${stock.symbol}:`, error);
            return null; // Return null on failure to handle gracefully
          })
      );
    
      // Wait for all promises to resolve
      const results = await Promise.all(metricPromises);
    
      // Filter out failed requests (null values)
      const validResults = results.filter((result) => result !== null);
    
      // Find the best-performing stock
      const bestStock = validResults.reduce((best, current) =>
        current.score > (best?.score || -Infinity) ? current : best,
        null
      );
    
      return bestStock;
    };
    
      
    const findWorstPerformingStock = async (exchange) => {
      try {
        const symbols = await fetchSymbols(exchange);
        const topSymbols = symbols.slice(0, 50); // Limit to 50 symbols for processing
    
        // Fetch metrics concurrently
        const metricPromises = topSymbols.map((stock) =>
          fetchStockMetrics(stock.symbol)
            .then((metrics) => ({
              symbol: stock.symbol,
              score: calculatePerformanceScore(metrics),
              metrics,
            }))
            .catch((error) => {
              console.error(`Error processing stock ${stock.symbol}:`, error);
              return null; // Skip failed stocks
            })
        );
    
        // Wait for all promises to resolve
        const results = await Promise.all(metricPromises);
    
        // Filter out null (failed) results
        const validResults = results.filter((result) => result !== null);
    
        if (validResults.length === 0) {
          console.error("No valid stock data available for analysis.");
          return null;
        }
    
        // Find the worst-performing stock
        const worstStock = validResults.reduce((worst, current) =>
          current.score < (worst?.score || Infinity) ? current : worst,
          null
        );
    
        return worstStock;
      } catch (error) {
        console.error("Error finding the worst-performing stock:", error);
        throw error; // Rethrow to handle errors higher up in the call stack
      }
    };

    const find200StockMetrics = async () => {
      const exchange = "US"; // Declare exchange variable
      const symbols = await fetchSymbols(exchange); // Fetch symbols for the exchange
      const metricsList = []; // Array to store metrics for each stock
    
      // Process up to 200 stocks
      for (const stock of symbols.slice(0, 20)) {
        const metrics = await fetchStockMetrics(stock.symbol);
        metricsList.push(metrics); // Add metrics to the list
      }
    
      return metricsList; // Return all metrics after the loop
    };
    
      const findBest10PerformingStock = async (exchange) => {
        const symbols = await fetchSymbols(exchange);
        let best10Stock = [];        
        for (const stock of symbols.slice(0, 50)) { // Limit to first 50 stocks
          try {
            const metrics = await fetchStockMetrics(stock.symbol);
            const score = calculatePerformanceScore(metrics);
            
            // Check if this stock should be added to the list of best-performing stocks
           
              best10Stock.push({ symbol: stock.symbol, score, metrics });
      
              // Keep the best 10 stocks in the array
              if (best10Stock.length > 10) {
                best10Stock.sort((a, b) => b.score - a.score); // Sort by highest score
                best10Stock = best10Stock.slice(0, 10); // Slice to keep only top 10 stocks
              } 
          } catch (error) {
            console.error(`Error processing stock ${stock.symbol}:`, error);
          }
        }
        return best10Stock;
      };
      
    


      const findSearchStock = async(symbol)=>{
        const details =await fetchStockMetrics(symbol);
        console.log(details)
        return details;
 
           
      }

      
    export { findBestPerformingStock ,findWorstPerformingStock,findBest10PerformingStock,findSearchStock,fetchNews,fetchChartData,fetchSymbols,find200StockMetrics};