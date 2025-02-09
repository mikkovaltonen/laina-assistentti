'use client'

import React from 'react'
import Image from 'next/image'

interface CompanyLogoProps {
  name: string
}

export default function CompanyLogo({ name }: CompanyLogoProps) {
  // Remove the previous displayName handling
  const formattedName = name.replace('.fi', '').trim();
  const logoKey = formattedName.toLowerCase().replace(/\s/g, '');

  const logosMapping: { [key: string]: string } = {
    "lainaopas": "lainaopas.svg",
    "etua": "etua.svg",
    "lainakone": "lainakone.svg",
    "lainojenvertailu": "lainojen-vertailu-logo.jpg",
    "vertaalainat": "vertaalainat.svg",
    "zmarta": "zmarta_logo.png",
  };

  if (logosMapping[logoKey]) {
    const logoPath = `/images/logos/${logosMapping[logoKey]}`;
    return (
      <div className="flex items-center justify-center w-full h-full min-h-[40px]">
        <Image 
          src={logoPath} 
          alt={`${formattedName} logo`} 
          width={128}
          height={48}
          className="object-contain" 
        />
      </div>
    );
  }

  return (
    <div 
      data-testid="company-logo-text"
      className="font-bold text-lg text-blue-800 whitespace-nowrap overflow-hidden text-ellipsis"
    >
      {formattedName}
    </div>
  );
} 