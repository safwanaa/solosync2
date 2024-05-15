
// import React from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// const COLOR = ['#F8C646'];
// const COLORS = ['#39EBFF'];
// const COLORSS = ['#7E64F1'];




// const data1 = [
//   { name: 'Group D', value: 200 },
// ];

// const data2 = [
//   { name: 'Group E', value: 100 },
// ];

// const data3 = [
//   { name: 'Group F', value: 150 },
// ];

// const StackedDoughnutChart = () => {

//   return (
    
    
//     <ResponsiveContainer width="100%" height={300}>
   
//       <PieChart  style={{ width: '60%', height: '60%'}}> 
      
//         {/* First Doughnut Chart */}
//         <Pie
//           data={data1}
//           cx="50%"
//           cy="50%"
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={200}
//           dataKey="value"
//           cornerRadius={10}
//            >
//           {data1.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLOR[index % COLOR.length]} />
//           ))}
//         </Pie>
//         {/* Second Doughnut Chart */}
//         <Pie
//           data={data2}
//           cx="50%"
//           cy="50%"
//           innerRadius={85}
//           outerRadius={110}
//           fill="#82ca9d"
//           paddingAngle={110}
//           dataKey="value"
//           cornerRadius={10}
//         >
//           {data2.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         {/* Third Doughnut Chart */}
//         <Pie
//           data={data3}
//           cx="50%"
//           cy="50%"
//           innerRadius={115}
//           outerRadius={140}
//           fill="#ffc658"
//           paddingAngle={0}
//           dataKey="value"
//           cornerRadius={10}
//         >
//           {data3.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORSS[index % COLORSS.length]} />
//           ))}
        
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
   

  
      
//   );
// };

// export default StackedDoughnutChart;
