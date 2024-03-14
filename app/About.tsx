'use client'
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const Dashboard = () => {
  useEffect(() => {
    const initializeCharts = async () => {
      // Dynamically import ApexCharts library
      const ApexCharts = (await import('apexcharts')).default;

      // chart 1
      var options1 = {
        series: [
          { name: 'San Francisco', data: [400, 300, 150, 200, 350] },
          { name: 'San Diego', data: [420, 350, 180, 230, 380] },
          { name: 'Los Angels', data: [380, 270, 200, 180, 300] }
        ],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: { show: false },
          zoom: { enabled: false }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            dataLabels: {
              total: {
                enabled: false,
                style: {
                  fontSize: '12px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        xaxis: {
          type: 'datetime',
          categories: ['01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT']
        },
        legend: { position: 'bottom', offsetY: 10 },
        fill: { opacity: 1 }
      };

      // chart 2
      var options2 = {
        series: [65, 35],
        chart: { height: 350, type: 'radialBar' },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: { fontSize: '22px' },
              value: { fontSize: '16px' },
              total: {
                show: true,
                label: 'Total',
                formatter: () => 539
              }
            }
          }
        },
        colors: ['#1ab7ea', '#39539E'],
        labels: ['Sent', 'Receive'],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'bottom',
          offsetX: 0,
          offsetY: 5,
          labels: { useSeriesColors: true },
          markers: { size: 0 },
          formatter: function (seriesName: string, opts: { w: { globals: { series: { [x: string]: string; }; }; }; seriesIndex: string | number; }) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: { vertical: 3 }
        },
        responsive: [{
          breakpoint: 480,
          options: { legend: { show: false } }
        }]
      };


      // chart 3
      var options3 = {
        series: [{ name: "Revenue ($)", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }],
        chart: { height: 350, type: 'line', zoom: { enabled: false } },
        stroke: { curve: 'straight' },
        grid: { row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 } },
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] }
      };

      var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
      chart3.render();

      // Cleanup function
      return () => {
        chart3.destroy();
      };
    };

    initializeCharts();
  }, []);

  return (
    <section className="container w-full mx-auto items-center py-16">
      {/* Card 3 */}
      <div className="max-w-4xl md:mx-auto mx-6 bg-white rounded-lg shadow-md overflow-hidden mt-8 w-full">
        <div className="px-6 py-4">
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">$556K</h2>
              <p className="text-gray-600 font-normal">Overall Revenue</p>
            </div>
            <button className="text-gray-400 hover:text-gray-800 rounded-md inline-flex items-center">
              <span className="mr-2">This Year</span>
              <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
          </div>
          <div id="chart3" className="max-w-5xl mx-auto mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
