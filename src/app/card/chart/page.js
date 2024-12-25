"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function MultiStockPieChart() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAndPrepareData = async () => {
      try {
        const response = await axios.get("/api/chartapi");
        console.log(response.data);

        if (!Array.isArray(response.data)) {
          throw new Error("Unexpected API response format");
        }

        // Prepare pie chart data for the first stock (example)
        const firstStock = response.data[0];
        const labels = ["Previous Close", "Open", "Low", "High", "Current"];
        const data = [
          firstStock.data.pc, // Previous Close
          firstStock.data.o,  // Open
          firstStock.data.l,  // Low
          firstStock.data.h,  // High
          firstStock.data.c,  // Current Price
        ];

        const backgroundColors = [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ];

        const borderColors = [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ];

        setChartData({
          labels,
          datasets: [
            {
              label: firstStock.symbol,
              data,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAndPrepareData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching chart data.</div>;

  return (
    <div className="h-96">
      <h2>Stock Metrics Proportion</h2>
      {chartData && <Pie data={chartData} />}
    </div>
  );
}
