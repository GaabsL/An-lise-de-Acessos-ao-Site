import React from 'react';

export function HardsellContext() {
  return (
    <div className="bg-white rounded-[14px] p-7 md:p-8 shadow-[0_3px_16px_rgba(3,73,145,0.09)] mb-9">
      <div className="font-condensed text-[20px] font-extrabold text-brand-blue uppercase mb-4 flex items-center gap-2.5">
        ⚡ Dias com Ações
        <div className="flex-1 h-[2px] bg-cinza-medio" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <HardsellItem 
          date="05/05/2026"
          desc="Pico máximo de Ofertas no período atual — provável ação hardsell/encarte digital"
          value="Ofertas: 247.399 acessos"
        />
        <HardsellItem 
          date="06/05/2026"
          desc="Pico de acessos em Lojas — possível ativação de campanha geolocalizada"
          value="Lojas: 18.546 acessos"
        />
        <HardsellItem 
          date="30/04 – 01/05/2026"
          desc="Período anterior — picos expressivos inflam a base comparativa (feriado + hardsell)"
          value="Ofertas 30/04: 294.003 | Lojas 01/05: 29.204"
        />
        <HardsellItem 
          date="Fins de semana"
          desc="Quedas recorrentes todo fim de semana — padrão esperado de comportamento de tráfego"
          value="Domingos: queda ~55–65% vs. dias úteis"
        />
      </div>
    </div>
  );
}

function HardsellItem({ date, desc, value }: { date: string; desc: string; value: string }) {
  return (
    <div className="bg-cinza-claro rounded-lg p-3.5 border-l-[4px] border-brand-yellow flex flex-col gap-1">
      <div className="font-condensed text-[18px] font-extrabold text-brand-blue">{date}</div>
      <div className="text-[12px] text-[#555] font-medium leading-[1.4]">
        {desc}
      </div>
      <div className="font-condensed text-[14px] font-bold text-brand-orange mt-1">
        {value}
      </div>
    </div>
  );
}

export function Insights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-9">
      <div className="bg-white rounded-xl p-6 shadow-[0_3px_16px_rgba(3,73,145,0.09)]">
        <div className="font-condensed text-[16px] font-extrabold uppercase text-brand-blue tracking-[0.5px] mb-3.5 flex items-center gap-2">
          <div className="w-2 h-2 bg-brand-yellow rounded-full shrink-0" />
          Queda vs. Período Anterior — Contexto
        </div>
        <div className="text-[13.5px] leading-[1.7] text-[#444]">
          A variação negativa de <strong className="text-brand-blue">-15,8%</strong> no Site Geral e <strong className="text-brand-blue">-16%</strong> em Ofertas frente ao período anterior deve ser lida com cautela. O período de referência (13/04–03/05) foi <span className="bg-[#fff3cc] px-1.5 py-[1px] rounded-[3px] font-semibold text-[#7a5c00]">inflado por hardsells de 30/04 e feriado de 01/05</span>, que geraram picos de até 443k acessos/dia — valores atípicos que elevam artificialmente a base de comparação.
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-[0_3px_16px_rgba(3,73,145,0.09)]">
        <div className="font-condensed text-[16px] font-extrabold uppercase text-brand-blue tracking-[0.5px] mb-3.5 flex items-center gap-2">
          <div className="w-2 h-2 bg-brand-yellow rounded-full shrink-0" />
          Estabilidade vs. 2025 — Sinal Positivo
        </div>
        <div className="text-[13.5px] leading-[1.7] text-[#444]">
          Frente ao mesmo período do ano anterior, as páginas de <strong className="text-brand-blue">Lojas cresceram +5,3%</strong> e de <strong className="text-brand-blue">Ofertas +1,0%</strong>. O Site Geral ficou praticamente estável (<strong className="text-brand-blue">-0,2%</strong>). Isso indica que, sem infladores, a operação digital está <span className="bg-[#fff3cc] px-1.5 py-[1px] rounded-[3px] font-semibold text-[#7a5c00]">mantendo e crescendo levemente o patamar histórico</span>.
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-[0_3px_16px_rgba(3,73,145,0.09)] md:col-span-2">
        <div className="font-condensed text-[16px] font-extrabold uppercase text-brand-blue tracking-[0.5px] mb-3.5 flex items-center gap-2">
          <div className="w-2 h-2 bg-brand-yellow rounded-full shrink-0" />
          Impacto das Ações Casa do Patrão no Tráfego Digital
        </div>
        <div className="text-[13.5px] leading-[1.7] text-[#444]">
          O crescimento de <strong className="text-brand-blue">+5,3% em Lojas</strong> vs. 2025 sugere que as ações do Casa do Patrão podem estar gerando maior interesse dos consumidores nas páginas de localização de lojas — um comportamento típico de quem busca informação antes de ir ao PDV. O pico de <strong className="text-brand-blue">05/05 em Ofertas (247k)</strong> acompanhado do pico em Lojas em <strong className="text-brand-blue">06/05 (18,5k)</strong> indica uma jornada digital consistente: usuários que veem a oferta um dia buscam a loja mais próxima no dia seguinte. Para atribuir o crescimento diretamente às ações, recomenda-se cruzar as datas de ativação das campanhas Casa do Patrão com os dias de pico mapeados.
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-blue py-5 px-10 flex items-center justify-between flex-wrap gap-3">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        <div className="font-condensed text-[13px] text-white/45 font-semibold uppercase tracking-[1px]">
          Assaí Atacadista · Análise de Performance Digital · Mai/2026
        </div>
        <div className="bg-brand-yellow text-brand-blue font-condensed text-[11px] font-extrabold tracking-[2px] uppercase py-1 px-3.5 rounded-[3px]">
          
        </div>
      </div>
    </footer>
  );
}
