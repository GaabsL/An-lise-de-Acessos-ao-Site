import React from 'react';

export function Header() {
  return (
    <header className="bg-brand-blue relative overflow-hidden p-0">
      <div className="absolute -top-[60px] -right-[80px] w-[320px] h-[320px] bg-brand-yellow rounded-full opacity-10" />
      <div className="absolute -bottom-[40px] left-[10%] w-[200px] h-[200px] bg-brand-orange-light rounded-full opacity-10" />

      <div className="flex flex-col md:flex-row items-stretch relative z-10 w-full max-w-7xl mx-auto">
        <div className="bg-brand-yellow flex items-center justify-center py-6 px-9 shrink-0">
          <div className="font-condensed font-black text-[42px] text-brand-blue tracking-tight uppercase leading-none">
            Assaí
            <span className="block text-[13px] font-bold tracking-[3px] text-brand-orange uppercase mt-0.5">Atacadista</span>
          </div>
        </div>

        <div className="p-7 md:px-10 flex-1">
          <div className="inline-block bg-brand-yellow text-brand-blue font-condensed text-[11px] font-extrabold tracking-[3px] uppercase py-1 px-3 rounded-sm mb-2.5">
            📊 Relatório de Performance Digital
          </div>
          <h1 className="font-condensed text-[38px] font-extrabold text-white uppercase tracking-tight leading-[1.05] mb-2">
            Análise de <em className="text-brand-yellow not-italic">Acessos</em> ao Site — Impacto Digital<br /> 
          </h1>
          <p className="text-[13px] text-white/60 font-medium tracking-wide">
            Monitoramento de tráfego nas páginas: Site Geral · Ofertas · Lojas
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end justify-end gap-1 px-10 pb-7 md:px-0 md:pr-10 shrink-0">
          <div className="text-[11px] text-white/45 md:text-right font-medium">Período analisado: <strong className="text-white/80 font-bold">04/05 – 22/05/2026</strong></div>
          <div className="text-[11px] text-white/45 md:text-right font-medium">Comparativo anterior: <strong className="text-white/80 font-bold">13/04 – 03/05/2026</strong></div>
          <div className="text-[11px] text-white/45 md:text-right font-medium">Base histórica: <strong className="text-white/80 font-bold">Mesmo período 2025</strong></div>
        </div>
      </div>
    </header>
  );
}

export function AlertBar() {
  return (
    <div className="bg-brand-yellow py-2.5 px-10 flex items-center gap-3 border-b-3 border-brand-yellow-dark justify-center md:justify-start">
      <div className="w-full max-w-7xl mx-auto flex items-center gap-3 px-4 md:px-8">
        <span className="text-[18px] shrink-0">⚡</span>
        <div className="font-condensed text-[14px] font-bold text-brand-blue uppercase tracking-wide">
          Atenção — Ações no período:
          <span className="font-normal normal-case font-sans text-[13px] text-brand-orange ml-1">
            Os picos identificados nos dias 05/05 (Ofertas: 247k), 06/05 (Lojas: 18,5k) e 30/04 no período anterior (Ofertas: 294k) podem estar associados a ações hardsell. Considerar na leitura dos números.
          </span>
        </div>
      </div>
    </div>
  );
}
