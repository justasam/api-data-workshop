import React from 'react'
import { LineChart, Line, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const DATA_KEY = 'cases'

const Chart = ({ data }) => {
  if (!data) return null

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart width={300} height={100} data={data}>
        <CartesianGrid stroke="#8884d8" strokeDasharray="5 5" opacity={0.5} />
        <Line type="monotone" dataKey={DATA_KEY} stroke="#8884d8" strokeWidth={2} />
        <YAxis stroke="#8884d8" strokeOpacity={0.5} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart
