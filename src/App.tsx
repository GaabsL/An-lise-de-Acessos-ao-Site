/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header, AlertBar } from './components/Header';
import { SectionLabel } from './components/SectionLabel';
import { PeriodCards, KPICards } from './components/Cards';
import { MainChart, CompChart } from './components/Charts';
import { HardsellContext, Insights, Footer } from './components/LayoutExt';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AlertBar />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-9 pb-16">
        <SectionLabel text="Períodos de referência" />
        <PeriodCards />

        <SectionLabel text="Totais e variações — 04/05 a 22/05/2026" />
        <KPICards />

        <SectionLabel text="Evolução diária de acessos — 04/05 a 22/05/2026" />
        <MainChart />

        <CompChart />

        <SectionLabel text="Contexto — Ações identificadas" />
        <HardsellContext />

        <SectionLabel text="Análise interpretativa" />
        <Insights />
      </main>

      <Footer />
    </div>
  );
}

