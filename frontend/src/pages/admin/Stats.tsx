import React from 'react';
import { motion } from 'framer-motion';
import { ImpactChart } from '../../components/admin/ImpactChart';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid } from
'recharts';
const categoryData = [
{
  name: 'Sensibilisation',
  value: 45
},
{
  name: 'Formation',
  value: 25
},
{
  name: 'Communauté',
  value: 20
},
{
  name: 'Santé',
  value: 10
}];

const COLORS = ['#0099DC', '#6CC24A', '#FFC107', '#8B5CF6'];
const growthData = [
{
  month: 'Jan',
  users: 500
},
{
  month: 'Fév',
  users: 800
},
{
  month: 'Mar',
  users: 1200
},
{
  month: 'Avr',
  users: 1500
},
{
  month: 'Mai',
  users: 2100
},
{
  month: 'Juin',
  users: 2450
}];

export function Stats() {
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
        duration: 0.4
      }}
      className="space-y-6">
      
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#1E293B]">
          Statistiques Détaillées
        </h2>
        <select className="text-sm border-gray-200 rounded-md text-[#64748B] focus:ring-[#0099DC] focus:border-[#0099DC] px-3 py-2 bg-white border">
          <option>Année 2024</option>
          <option>Année 2023</option>
          <option>Tous les temps</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Impact Chart (Reused from dashboard) */}
        <div className="lg:col-span-2 h-[400px]">
          <ImpactChart />
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-[350px] flex flex-col">
          <h3 className="text-lg font-bold text-[#1E293B] mb-4">
            Répartition des Événements
          </h3>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value">
                  
                  {categoryData.map((entry, index) =>
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]} />

                  )}
                </Pie>
                <RechartsTooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} />
                
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Growth */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-[350px] flex flex-col">
          <h3 className="text-lg font-bold text-[#1E293B] mb-4">
            Croissance des U-Reporters
          </h3>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={growthData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5
                }}>
                
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0" />
                
                <XAxis
                  dataKey="month"
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
                
                <RechartsTooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} />
                
                <Line
                  type="monotone"
                  dataKey="users"
                  name="Utilisateurs"
                  stroke="#0099DC"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: '#0099DC',
                    strokeWidth: 2,
                    stroke: '#fff'
                  }}
                  activeDot={{
                    r: 6
                  }} />
                
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>);

}