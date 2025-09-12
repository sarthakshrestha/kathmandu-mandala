"use client";
import { Check, X } from "lucide-react";
import React from "react";

interface IncludeExcludePortalProps {
  include: string[];
  exclude: string[];
  title?: string;
}

export default function IncludeExcludePortal({
  include,
  exclude,
  title = "Included/Exclude",
}: IncludeExcludePortalProps) {
  return (
    <section className="w-full bg-transparent rounded-xl p-4 md:p-8">
      <h2 className="font-garamond text-lg md:text-3xl mb-8 text-[#23233B] md:font-semibold">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Included */}
        <ul className="space-y-3">
          {include.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-base text-[#23233B] font-links"
            >
              <Check className="text-[#C9A44A] w-6 h-6 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        {/* Excluded */}
        <ul className="space-y-3">
          {exclude.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-base text-[#761E25] font-links"
            >
              <X className="text-[#761E25] w-6 h-6 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
