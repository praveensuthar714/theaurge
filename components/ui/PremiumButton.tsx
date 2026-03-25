import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PremiumButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({ 
  href, 
  onClick, 
  children, 
  className = "",
  type = 'button'
}) => {
  const content = (
    <>
      <span className="pl-1">{children}</span>
      <div className="relative w-8 h-8 rounded-none bg-black/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/premium:w-12 group-hover/premium:bg-black text-black group-hover/premium:text-white shrink-0">
        <ArrowRight className="w-3.5 h-3.5 -translate-x-4 opacity-0 absolute transition-all duration-500 group-hover/premium:translate-x-0 group-hover/premium:opacity-100" />
        <ArrowRight className="w-3.5 h-3.5 translate-x-0 opacity-100 absolute transition-all duration-500 group-hover/premium:translate-x-4 group-hover/premium:opacity-0" />
      </div>
    </>
  );

  const baseClass = `group/premium relative inline-flex items-center justify-between gap-5 bg-[#E6FF00] pl-6 pr-1 py-1 rounded-none text-black text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:scale-[1.02] ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {content}
    </button>
  );
};
