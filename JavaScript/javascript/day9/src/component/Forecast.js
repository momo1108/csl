import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './Forecast.css'

const Forecast = ({ forecast, unit }) => {
  const cut = forecast.list.slice(0,10);
  const getHoursName = h => {
    return h > 12 ? `오후 ${h-12}시` : `오전 ${h}시`
  };

  const data = cut.map(e => {
    return {
      time: `${getHoursName(new Date(e.dt * 1000).getHours())}`,
      기온: Math.round(unit === 'c' ? e.main.temp : e.main.temp * 9 / 5 + 32)
    };
  });

  // TODO: 반응형 적용
  const responsiveWidth = () => {
    const maxWidth = 500;
    const width = window.innerWidth - 10;
    console.log(width);
    return width > maxWidth? maxWidth : width;
  }
  return (
    <div className="forecast">
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="기온"></Line>
        <XAxis dataKey="time"></XAxis>
        <YAxis domain={["dataMin -2", "dataMax + 2"]}></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </LineChart>
    </div>
  );
};

export default Forecast;