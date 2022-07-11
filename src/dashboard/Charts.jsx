import React, {useState} from 'react'
import { ChartsContainer, ChartTitle } from '../components/styles'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';






const Charts = () => {
    const data = [
        {
          name: 'Monday',
          "Commuters": 0,
        },
        {
          name: 'Tuesday',
          "Commuters": 0,
        },
        {
          name: 'Wednesday',
          "Commuters": 0,
        },
        {
          name: 'Thursday',
          "Commuters": 0,
        },
        {
          name: 'Friday',
          "Commuters": 0,
        },
        {
          name: 'Saturday',
          "Commuters": 0,
        },
        {
          name: 'Sunday',
          "Commuters": 0,
        },
      ];
  return (
    <ChartsContainer>
        <ChartTitle>Daily Commuters' Statistics</ChartTitle>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#1126E3'/>
                <Line type="monotone" dataKey="Commuters" stroke="#1126E3"/>
                <Tooltip/>
                <CartesianGrid stroke="#e0dfdf" strokeDasharray=" 5 5"/>
            </LineChart>
        </ResponsiveContainer>
    </ChartsContainer>
  )
}

export default Charts