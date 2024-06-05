import Header from "./header";
import Chart from 'chart.js/auto';
import React, { useEffect,useRef } from 'react';
import 'chartjs-plugin-datalabels';





export default function Analytics(){
  const doughnutChartContainer = useRef(null);
  const barChartContainer = useRef(null);
  const pieChartContainer = useRef(null);
  const nestedPieChartContainer = useRef(null);
  const doughnutChartContainer2 = useRef(null); // Add another useRef for the second doughnut chart
  
    
  useEffect(() => {
    const doughnutChart = new Chart(doughnutChartContainer.current, {
      type: 'doughnut',
      data: {
        // labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'],
        
        datasets: [{
          data: [10, 20, 30, 40, 50, 60, 70],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#FFD700'
          ]
        }]
      },
     
      options: {
        cutout: 70, // Adjust this value to remove padding in between
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
          },
        
       
        },
      }, 
    });

    // half doughnut
    const doughnutChart2 = new Chart(doughnutChartContainer2.current, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [20, 30],
          backgroundColor: [
            '#FF6384',
            'grey',
          ],
          borderWidth: 0, // Set border width to 0 to hide the borders
          borderAlign: 'inner', // Align borders inside to create smooth curves
          tension: 0.4, // Adjust the tension to control the curvature of the lines
          circumference: 180,
          rotation: 270,
       
           
         
        }]
      },
      
      options: {
       // Adjust the cutout value to make it a half doughnut chart
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            aspectRatio: 2,
        
          },
          layout: {
            padding: 310, // Set padding to 0 to remove gaps
            borderRadius:20
          },
        },
      },
    });

    // Bar Graph
    const barChart = new Chart(barChartContainer.current, {
      type: 'bar',
      data: {
        labels: ['Target', 'Achieved'], // X-axis labels 
        datasets: [{
          label: ['target','achieved'],
          data: [100, 200], // Dummy data for target and achieved values  
          backgroundColor: [
            'rgba(0, 128, 0, 0.5)', // Red for target
            'rgba(255, 165, 0, 0.5)',// Red for target 
         ],
       
          borderWidth: 1,
        
       
          
        }],
      },
      options: {
        indexAxis: 'y', // Display bars horizontally
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false, // Remove background lines for X-axis
              drawBorder: false,
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false, // Remove background lines for Y-axis
              borderWidth: 3,
             
            },
          },
        },
        plugins: {
          legend: {
            display: false,
            position: 'top',
           
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => { // Customize the label format if needed
              return value; // Display the value of the data point
            },
          },
        }, 
      },
    });

   
    const pieChart = new Chart(pieChartContainer.current, {
      type: 'pie',
      data: {
        // labels: ['Data 1', 'Data 2'], // Labels for the two datasets
        datasets: [{
          label: ['Data 1', 'Data 2'],
          data: [150, 290], // Dummy data for the two datasets
          backgroundColor: [
           'transparent',
            'rgba(54, 162, 235, 0.5)', // Blue for Data 2
          ],
          borderWidth: 0,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      
      },
    });  // Second Pie Chart (Nested within the First Pie Chart)
    const nestedPieChart = new Chart(nestedPieChartContainer.current, {
      type: 'pie',
      data: {
      // Labels for the nested datasets
        datasets: [{
          label: ['Nested Data 1', 'Nested Data 2'],
          data: [170, 330], // Dummy data for the nested datasets
          backgroundColor: [
            'rgba(255, 205, 86, 0.5)', // Yellow for Nested Data 1
             'transparent',
          ],
          borderWidth: 0,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    });
    

    return () => {
      doughnutChart.destroy();
      barChart.destroy();
      pieChart.destroy();
      nestedPieChart.destroy();
      doughnutChart2.destroy();

    };
  }, []);
      
       
      
    

    return (
    <>
         <header className='mainn-header'>
        <div className='task-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path fill="currentColor" d="m10.95 16.866l4.958-4.958l-.72-.72l-4.244 4.245l-2.138-2.139l-.714.714zM6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8V4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.424V8zM6 4v4zv16z" />
</svg>Analytics

</div>   
      </div>
 
        
    </header>
 {/* content card */}
    <div className="maindiv-t">
    <div className="analytics-maincard">
    <div className='main-card-2'>
    <div className='card-leads'>
              <div className='lead-status'>Leads this month  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-1.5 -2.5 24 24">
                <path fill="currentColor" d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z" />
              </svg></div>
              <div className='wrt-2'>
                <div className='lead-arrow'>15<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40">
                  <path fill="currentColor" d="M4.659 28.167h30.682L20 7.833z" />
                </svg></div>
                <div className='percent0'>89%</div>
              </div>
            </div>




            {/* revenue  */}
            <div className='card-revenue'>
              <div className='lead-status'>Revenue this month  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-1.5 -2.5 24 24">
                <path fill="currentColor" d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z" />
              </svg></div>
              <div className='wrt'>
                <div className='rupee'>₹25,000 </div>
                <div className='percent1'>20%</div>
              </div>
            </div>

            {/* Deals */}
            <div className='card-deals'>
              <div className='lead-status'>Deals in pipeline <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-1.5 -2.5 24 24">
                <path fill="currentColor" d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z" />
              </svg></div>
              <div className='content-deals'>12</div>
             
            </div>
           
          </div>
         
          <div className="analytics4-card">
            <div className="leadgene-chart">Leads Generation Target - This Year&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-1.5 -2.5 24 24">
                <path fill="currentColor" d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z" />
              </svg></div>
            <div className="half-doughnut">
          <canvas ref={doughnutChartContainer2}></canvas>
          </div>
          </div>
          <div className="analytics5-card">
          <div className="analyc5-head">Revenue Generation Target - This Year&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-1.5 -2.5 24 24">
                <path fill="currentColor" d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z" />
              </svg></div>
              <div className='barchart-svg'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
	<path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3" />
</svg></div>
          <div className="barchart">
          <canvas ref={barChartContainer}></canvas>
          </div>
          </div>
          <div className="analytics6-card">
          <div className="analyc6-head">Last three Months perfomance Monitor<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-1.5 -2.5 24 24">
                <path fill="currentColor" d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z" />
              </svg></div>
          <div class="table-container">
          <div className="analytics-table">
            <table>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>December 2024</th>
                        <th>january 2024</th> 
                        <th>February 2024</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>LEADS CREATED</td>
                        <td>8</td>
                        <td>8</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>DEALS CREATED</td>
                        <td>8</td>
                        <td>10</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>DEALS WON</td>
                        <td>10</td>
                        <td>15</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>REVENUE WON</td>
                        <td>$2500</td>
                        <td>2500</td>
                        <td>4500</td>
                    </tr>
                    <tr>
                        <td>OPEN AMOUNT</td>
                        <td>4300</td>
                        <td>2500</td>
                        <td>6500</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
        </div>

          </div>
          <div className="analytics7-card">
            <div className="analyc7-head">Lead by source <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-1.5 -2.5 24 24">
                <path fill="currentColor" d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z" />
              </svg></div>
          <div className="analytics-doughnutchart">
          <canvas ref={doughnutChartContainer}></canvas>
           </div>
         </div>
         <div className="analytics8-card">
          <div className="analyc8-head">Revenue Collection <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-1.5 -2.5 24 24">
                <path fill="currentColor" d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z" />
              </svg></div>
              <div className="both-piechart">
          <div className="analytics-piechart">
          <canvas ref={pieChartContainer}></canvas>
          </div>
          <div className="stacked-piechart">
          <canvas ref={nestedPieChartContainer}></canvas>
          </div>
          </div>
          
          <div className="tot-rev">
          <div className="card8-1">Total Revenue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;$78,000</div>
          <div className="card8-2">Collected Revenue &nbsp;:&nbsp;$78,000</div>
          <div className="card8-3">Pending Revenue &nbsp;&nbsp;&nbsp;:&nbsp;$28,000</div>
          <div className="indicationpie-alighn">
          <div className="pieindic-dot"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 15 15">
	<path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0" />
</svg>collected</div>
          <div className="pieindic1-dot"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 15 15">
	<path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0" />
</svg>pending</div>
</div>
        </div>    
        </div>
          </div> 
           

            </div>
            

    </>
    )
}