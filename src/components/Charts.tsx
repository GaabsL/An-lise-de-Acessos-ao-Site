import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceArea } from 'recharts';
import { mainChartData, compChartData } from '../data';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a2e1a] p-3 rounded-md shadow-lg text-white">
        <p className="font-condensed text-[13px] font-extrabold mb-1">{label}</p>
        <div className="flex flex-col gap-1">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 font-sans text-xs">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: entry.color || entry.stroke }}
              />
              <span className="text-white/80">{entry.name}:</span>
              <span className="font-semibold">{entry.value.toLocaleString('pt-BR')}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function MainChart() {
  return (
    <div className="bg-white rounded-[14px] p-7 md:p-8 shadow-[0_4px_20px_rgba(3,73,145,0.09)] mb-9">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h3 className="font-condensed text-[22px] font-extrabold text-brand-blue uppercase tracking-[0.3px]">
            Acessos Diários por Categoria
          </h3>
          <p className="text-[12px] text-[#888] mt-0.5 font-medium">
            Site Geral · Ofertas · Lojas — Período atual (04/05 a 22/05/2026)
          </p>
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#555]">
            <div className="w-3 h-3 rounded-full bg-brand-blue shrink-0" />
            <span>Site Geral</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#555]">
            <div className="w-3 h-3 rounded-full bg-brand-yellow shrink-0" />
            <span>Ofertas</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#555]">
            <div className="w-3 h-3 rounded-full bg-brand-orange shrink-0" />
            <span>Lojas</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#555]">
            <div className="w-3 h-3 rounded-full border-2 border-dashed border-brand-yellow bg-[rgba(251,222,74,0.15)] shrink-0" />
            <span>Hardsell</span>
          </div>
        </div>
      </div>
      
      <div className="h-[340px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mainChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            {/* Hardsell background zones */}
            <ReferenceArea x1="04/05" x2="05/05" fillOpacity={0.12} fill="#FBDE4A" />
            <ReferenceArea x1="05/05" x2="06/05" fillOpacity={0.12} fill="#FBDE4A" />
            
            <CartesianGrid vertical={false} stroke="rgba(0,0,0,0.05)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontFamily: 'Barlow', fontSize: 11, fill: '#666' }}
              dy={10}
            />
            <YAxis 
              yAxisId="left" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontFamily: 'Barlow', fontSize: 11, fill: '#666' }}
              tickFormatter={(val) => val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}
              label={{ value: 'Geral / Ofertas', angle: -90, position: 'insideLeft', fill: '#999', fontSize: 11, dx: 10 }}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontFamily: 'Barlow', fontSize: 11, fill: '#E8592A' }}
              tickFormatter={(val) => val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}
              label={{ value: 'Lojas', angle: 90, position: 'insideRight', fill: '#E8592A', fontSize: 11, dx: -10 }}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            {/* We use Area and Line combinations to simulate filled line chart */}
            
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="geral" 
              name="Site Geral"
              stroke="#034991" 
              strokeWidth={3} 
              dot={{ r: 5, fill: '#034991' }} 
              activeDot={{ r: 7 }}
              isAnimationActive={false}
            />
            
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="ofertas" 
              name="Ofertas"
              stroke="#FBDE4A" 
              strokeWidth={2.5} 
              dot={{ r: 4, fill: '#FBDE4A' }}
              activeDot={{ r: 6 }}
              isAnimationActive={false}
            />
            
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="lojas" 
              name="Lojas"
              stroke="#E8592A" 
              strokeWidth={2}
              strokeDasharray="5 3"
              dot={{ r: 4, fill: '#E8592A' }}
              activeDot={{ r: 6 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function CompChart() {
  return (
    <div className="bg-white rounded-[14px] p-7 md:p-8 shadow-[0_4px_20px_rgba(3,73,145,0.09)] mb-9">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h3 className="font-condensed text-[22px] font-extrabold text-brand-blue uppercase tracking-[0.3px]">
            Comparativo: Site Geral — 3 Períodos
          </h3>
          <p className="text-[12px] text-[#888] mt-0.5 font-medium">
            Período atual vs. Período anterior vs. Mesmo período 2025
          </p>
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#555]">
            <div className="w-3 h-3 rounded-full bg-brand-blue shrink-0" />
            <span>Atual (mai/26)</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#555]">
            <div className="w-3 h-3 rounded-full bg-brand-yellow shrink-0" />
            <span>Anterior (abr/mai 26)</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#555]">
            <div className="w-3 h-3 rounded-full bg-[#8fbbe6] shrink-0" />
            <span>2025</span>
          </div>
        </div>
      </div>
      
      <div className="h-[340px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={compChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="rgba(0,0,0,0.05)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontFamily: 'Barlow', fontSize: 11, fill: '#666' }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontFamily: 'Barlow', fontSize: 11, fill: '#666' }}
              tickFormatter={(val) => val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Line 
              type="monotone" 
              dataKey="atual" 
              name="Atual (04/05–22/05/26)"
              stroke="#034991" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#034991' }} 
              isAnimationActive={false}
            />
            
            <Line 
              type="monotone" 
              dataKey="anterior" 
              name="Período anterior (últimos 19d)"
              stroke="#FBDE4A" 
              strokeWidth={2.5} 
              strokeDasharray="6 3"
              dot={{ r: 3, fill: '#FBDE4A' }}
              isAnimationActive={false}
            />
            
            <Line 
              type="monotone" 
              dataKey="ano2025" 
              name="Mesmo período 2025"
              stroke="#8fbbe6" 
              strokeWidth={2}
              strokeDasharray="3 3"
              dot={{ r: 3, fill: '#8fbbe6' }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
