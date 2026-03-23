import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer } from
'recharts';
const data = [
{
  name: 'Jan',
  événements: 4,
  participants: 120,
  partenaires: 1
},
{
  name: 'Fév',
  événements: 3,
  participants: 98,
  partenaires: 0
},
{
  name: 'Mar',
  événements: 5,
  participants: 210,
  partenaires: 2
},
{
  name: 'Avr',
  événements: 6,
  participants: 250,
  partenaires: 1
},
{
  name: 'Mai',
  événements: 4,
  participants: 180,
  partenaires: 3
},
{
  name: 'Juin',
  événements: 8,
  participants: 340,
  partenaires: 2
},
{
  name: 'Juil',
  événements: 7,
  participants: 290,
  partenaires: 1
}];

export function ImpactChart() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4,
        delay: 0.1
      }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-[#1E293B]">
          Statistiques d'Impact (2024)
        </h2>
        <select className="text-sm border-gray-200 rounded-md text-[#64748B] focus:ring-[#0099DC] focus:border-[#0099DC]">
          <option>6 derniers mois</option>
          <option>Cette année</option>
          <option>Année dernière</option>
        </select>
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5
            }}>
            
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0" />
            
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#64748B',
                fontSize: 12
              }}
              dy={10} />
            
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#64748B',
                fontSize: 12
              }} />
            
            <Tooltip
              cursor={{
                fill: '#F8FAFC'
              }}
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }} />
            
            <Legend
              wrapperStyle={{
                paddingTop: '20px'
              }} />
            
            <Bar
              dataKey="participants"
              name="Participants"
              fill="#0099DC"
              radius={[4, 4, 0, 0]} />
            
            <Bar
              dataKey="événements"
              name="Événements"
              fill="#6CC24A"
              radius={[4, 4, 0, 0]} />
            
            <Bar
              dataKey="partenaires"
              name="Nouveaux Partenaires"
              fill="#FFC107"
              radius={[4, 4, 0, 0]} />
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>);

}