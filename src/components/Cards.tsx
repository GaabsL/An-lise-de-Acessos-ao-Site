import React from 'react';

export function PeriodCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-9">
      <div className="bg-brand-blue rounded-[10px] p-5 md:p-6 border-l-[5px] border-brand-yellow shadow-[0_2px_12px_rgba(3,73,145,0.08)]">
        <div className="font-condensed text-[11px] font-bold uppercase tracking-[2px] text-brand-yellow mb-1.5">
          ⭐ Período atual
        </div>
        <div className="font-condensed text-[22px] font-extrabold text-white leading-tight">
          04/05 – 22/05/2026
        </div>
        <div className="text-[12px] text-white/50 mt-1">
          19 dias
        </div>
      </div>

      <div className="bg-white rounded-[10px] p-5 md:p-6 border-l-[5px] border-brand-orange shadow-[0_2px_12px_rgba(232,89,42,0.08)]">
        <div className="font-condensed text-[11px] font-bold uppercase tracking-[2px] text-brand-orange mb-1.5">
          📅 Período anterior
        </div>
        <div className="font-condensed text-[22px] font-extrabold text-brand-blue leading-tight">
          13/04 – 03/05/2026
        </div>
        <div className="text-[12px] text-[#888] mt-1">
          21 dias
        </div>
      </div>

      <div className="bg-white rounded-[10px] p-5 md:p-6 border-l-[5px] border-brand-orange shadow-[0_2px_12px_rgba(232,89,42,0.08)]">
        <div className="font-condensed text-[11px] font-bold uppercase tracking-[2px] text-brand-orange mb-1.5">
          📆 Mesmo período 2025
        </div>
        <div className="font-condensed text-[22px] font-extrabold text-brand-blue leading-tight">
          04/05 – 22/05/2025
        </div>
        <div className="text-[12px] text-[#888] mt-1">
          19 dias · Base histórica anual
        </div>
      </div>
    </div>
  );
}

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-9">
      <KPICard
        icon="🌐"
        label="Site Geral"
        value="3.319.473"
        var1={{ label: 'vs. Período anterior (13/04–03/05)', varLabel: '▼ 15,8%', up: false }}
        var2={{ label: 'vs. Mesmo período 2025', varLabel: '▼ 0,2%', up: false }}
      />
      <KPICard
        icon="🏷️"
        label="Páginas de Ofertas"
        value="1.811.196"
        var1={{ label: 'vs. Período anterior (13/04–03/05)', varLabel: '▼ 16,0%', up: false }}
        var2={{ label: 'vs. Mesmo período 2025', varLabel: '▲ 1,0%', up: true }}
      />
      <KPICard
        icon="📍"
        label="Páginas de Lojas"
        value="135.419"
        var1={{ label: 'vs. Período anterior (13/04–03/05)', varLabel: '▼ 46,0%', up: false }}
        var2={{ label: 'vs. Mesmo período 2025', varLabel: '▲ 5,3%', up: true }}
      />
    </div>
  );
}

function KPICard({ 
  icon, 
  label, 
  value, 
  var1, 
  var2 
}: { 
  icon: string; 
  label: string; 
  value: string; 
  var1: { label: string; varLabel: string; up: boolean };
  var2: { label: string; varLabel: string; up: boolean };
}) {
  return (
    <div className="bg-white rounded-xl py-6 px-6 shadow-[0_3px_16px_rgba(3,73,145,0.09)] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange-light" />
      <span className="text-[28px] mb-3 block">{icon}</span>
      <div className="font-condensed text-[11px] font-extrabold uppercase tracking-[2px] text-[#888] mb-1.5">
        {label}
      </div>
      <div className="font-condensed text-[36px] font-black text-brand-blue leading-none mb-4">
        {value}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between py-1.5 px-2.5 rounded-md bg-cinza-claro">
          <span className="text-[11px] text-[#666] font-semibold">{var1.label}</span>
          <span className={`font-condensed text-[15px] font-extrabold flex items-center gap-[3px] ${var1.up ? 'text-up' : 'text-down'}`}>
            {var1.varLabel}
          </span>
        </div>
        <div className="flex items-center justify-between py-1.5 px-2.5 rounded-md bg-cinza-claro">
          <span className="text-[11px] text-[#666] font-semibold">{var2.label}</span>
          <span className={`font-condensed text-[15px] font-extrabold flex items-center gap-[3px] ${var2.up ? 'text-up' : 'text-down'}`}>
            {var2.varLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
