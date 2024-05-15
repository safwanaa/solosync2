import React, { useState, useEffect } from 'react';
import "./App.css";
import Card from '@mui/material/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// import StackedDoughnutChart from './StackedDoughnutChart';








const App = () => {
  const [greeting, setGreeting] = useState('');

  const getGreeting = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      setGreeting('Good morning!');
    } else if (currentTime < 18) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good evening!');
    }
  };

  useEffect(() => {
    getGreeting(); // Call getGreeting to set the initial greeting
  }, []);


  const data = [
    { name: 'M', revenue: 10 },
    { name: 'T', revenue: 20 },
    { name: 'W', revenue: 15 },
    { name: 'T', revenue: 30 },
    { name: 'F', revenue: 25 },
    { name: 'S', revenue: 30 },
  ];


  const COLOR = ['#F8C646'];
  const COLORS = ['#39EBFF'];
  const COLORSS = ['#7E64F1'];




  const data1 = [
    { name: 'Group D', value: 200 },
  ];

  const data2 = [
    { name: 'Group E', value: 100 },
  ];

  const data3 = [
    { name: 'Group F', value: 150 },
  ];

  // const pieChartData = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  //   { name: 'Group D', value: 200 },
  // ];

  // const COLORS = ['#7E64F1', '#7E64F1','#7E64F1','#7E64F1'];

  return (
    <div className="scrollable-container">
      <div className='main-div'>

        <Card className='main-card'>

          <div className='div-greeting'>
            {greeting}, Novo-X
          </div>

          <div className="flex-container">
            <div className='div-task'>
              <div className='upcoming-main'>
                <div className='task0'>Upcoming tasks</div>

                <div className='uptask-svg'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
	<path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3" />
</svg></div>
              </div>


              <br /><br />

              <div className="task1"><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a937d7abc3ba5c278a460cfa7e5a53b3779775d856f967ef7499e5309ea42?"
                className="img" />Task 1</div>
              <div className="task2"><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a937d7abc3ba5c278a460cfa7e5a53b3779775d856f967ef7499e5309ea42?"
                className="img" />Task 2</div>
              <div className="task3"><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a937d7abc3ba5c278a460cfa7e5a53b3779775d856f967ef7499e5309ea42?"
                className="img" />Task 3</div>
              <div className="task4"><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a937d7abc3ba5c278a460cfa7e5a53b3779775d856f967ef7499e5309ea42?"
                className="img" />Task 4</div>
            </div>

            {/* linechaer card */}

            <div className='div-linechart'>
              <div className='line-rev'>
                <div className="line-main">Weekly Revenue</div>


                <div className='side-part'>
                  $ 230/-<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40">
                    <path fill="currentColor" d="M4.659 28.167h30.682L20 7.833z" />
                  </svg>
                </div>
              </div>
              <div className='linechart-container'>
                <div className='linechart-cell'>
                  <ResponsiveContainer width="80%" height={180}>
                    <LineChart data={data}>
                      {/* Customizing grid lines */}
                      <CartesianGrid stroke="#ccc" />

                      {/* Customizing X-axis */}
                      <XAxis dataKey="name" stroke="#8884d8" />

                      {/* Customizing Y-axis */}
                      <YAxis dataKey="revenue" stroke="#8884d8" />

                      {/* Customizing Tooltip */}
                      <Tooltip wrapperStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }} />

                      {/* Customizing Legend */}
                      <Legend wrapperStyle={{ color: '#333', fontSize: '7px' }} />

                      {/* Customizing Line */}
                      <Line type="monotype" dataKey="revenue" stroke="#7E64F1" strokeWidth={1} dot={{ fill: '#A793FF' }} activeDot={{ r: 8 }} legendType="circle" animationDuration={200} animationBegin={200} />
                    </LineChart>
                  </ResponsiveContainer >
                </div>

              </div>
            </div>
          </div>
          <div className="flex-container-2">

            {/* piechart card */}
            <div className='div-piechart'>
              <div className='pie-main'>Deal Generated</div>
              <div className='pie-flex'>
               
                <div className='piechart-align'>
                  <ResponsiveContainer  height={240}>
                    <PieChart style={{ width: '50%', height: '60%' }}>

                      {/* First Doughnut Chart */}
                      <Pie
                        data={data1}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={200}
                        dataKey="value"
                        cornerRadius={10}
                      >
                        {data1.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLOR[index % COLOR.length]} />
                        ))}
                      </Pie>
                      {/* Second Doughnut Chart */}
                      <Pie
                        data={data2}
                        cx="50%"
                        cy="50%"
                        innerRadius={85}
                        outerRadius={110}
                        fill="#82ca9d"
                        paddingAngle={110}
                        dataKey="value"
                        cornerRadius={10}
                      >
                        {data2.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      {/* Third Doughnut Chart */}
                      <Pie
                        data={data3}
                        cx="50%"
                        cy="50%"
                        innerRadius={115}
                        outerRadius={140}
                        fill="#ffc658"
                        paddingAngle={0}
                        dataKey="value"
                        cornerRadius={10}
                      >
                        {data3.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORSS[index % COLORSS.length]} />
                        ))}

                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className='ind-line'>
                  <div className='custom-hr1'>&nbsp;</div>
                  <div className='custom-hr2'>&nbsp;</div>
                  <div className='custom-hr3'>&nbsp;</div>

                </div>

              </div>
            </div>




            {/* meeting card */}
            <div className='div-meeting'>
              <div className='upcoming-main'>
                <div className='meet0'>Upcoming meetings</div>
                <div className='uptask-svg'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
	<path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3" />
</svg></div>
              </div>
              <br /><br />

              <div className='div-meet1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z" /></svg>   Meeting 1
              </div>
              <div className='div-meet2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z" /></svg>   Meeting 2
              </div>
              <div className='div-meet3'>

                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z" /></svg>   Meeting 3
              </div>

              <div className='div-meet4'>

                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z" /></svg>   Meeting  4
              </div>





            </div>
          </div>

          {/* 2nd content */}

          {/* leads */}


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


          <div className='table-card'>
            <div className='today-lead'> Todays lead <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-1.5 -2.5 24 24">
              <path fill="currentColor" d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z" />
            </svg></div>



            <table className="lead-table">
              <thead>
                <tr>
                  <th>Lead Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Lead Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>ABC Company</td>
                  <td>john.doe@example.com</td>
                  <td>1234567890</td>
                  <td>Website</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>ABC Company</td>
                  <td>john.doe@example.com</td>
                  <td>1234567890</td>
                  <td>Website</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>ABC Company</td>
                  <td>john.doe@example.com</td>
                  <td>1234567890</td>
                  <td>Website</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>ABC Company</td>
                  <td>john.doe@example.com</td>
                  <td>1234567890</td>
                  <td>Website</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>


  );
};

export default App;
