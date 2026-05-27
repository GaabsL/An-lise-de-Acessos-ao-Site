import React from 'react';

export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex flex-row items-center gap-3 mb-5 mt-10 first:mt-0">
      <span className="font-condensed text-[12px] font-extrabold uppercase tracking-[3px] text-brand-orange whitespace-nowrap">
        {text}
      </span>
      <div className="flex-1 h-[2px] bg-brand-orange-light opacity-30" />
    </div>
  );
}
