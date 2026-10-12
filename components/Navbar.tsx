'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useBooking } from '@/context/BookingContext';
import { Calendar, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const { openCart, selectedService } = useBooking();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-3 pb-2 sm:pb-3 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent backdrop-blur-md">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Logo - Perfectly balanced size so it doesn't touch hero content */}
        <Link href="/" className="group flex items-center">
          <div className="relative w-14 h-14 sm:w-16 md:w-20 sm:h-16 md:h-20 rounded-full overflow-hidden border-2 border-[#ff3333] shadow-[0_0_25px_rgba(255,51,51,0.5)] group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(255,51,51,0.8)] transition-all bg-black shrink-0">
            <Image 
              src="/logo.jpg" 
              alt="Coached by Souvik" 
              fill 
              className="object-cover scale-105" 
              priority 
            />
          </div>
        </Link>
        
        {/* Center Links */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link href="#services" className="text-[10px] font-bold tracking-widest uppercase text-white hover:text-white transition-colors relative group">
            SERVICES
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#ff3333]"></span>
          </Link>
          <Link href="#about" className="text-[10px] font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors">ABOUT</Link>
          <Link href="#certifications" className="text-[10px] font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors">CERTIFICATIONS</Link>
          <Link href="#results" className="text-[10px] font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors">RESULTS</Link>
          <Link href="#contact" className="text-[10px] font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors">CONTACT</Link>
        </nav>
        
        {/* Right CTA Group */}
        <div className="flex items-center gap-4">
          <button 
            onClick={openCart}
            className="relative bg-[#140606] hover:bg-[#1f0a0a] border border-[#ff3333]/40 text-white text-[10px] font-bold py-2.5 px-4 rounded-lg flex items-center space-x-2 transition-all uppercase tracking-widest group shadow-[0_0_15px_rgba(255,51,51,0.2)]"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#ff3333]" />
            <span className="hidden sm:inline">Consultation Cart</span>
            {selectedService && (
              <span className="w-2 h-2 rounded-full bg-[#ff3333] shadow-[0_0_8px_#ff3333] animate-ping ml-1" />
            )}
          </button>

          <button 
            onClick={openCart}
            className="bg-gradient-to-r from-[#ff3333] to-[#cc0000] hover:from-[#ff1a1a] hover:to-[#990000] text-white text-[10px] font-bold py-2.5 px-6 rounded-md flex items-center space-x-2 transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,51,51,0.4)]"
          >
            <span>Book Now</span>
            <span className="text-lg leading-none ml-1">→</span>
          </button>
        </div>
      </div>
    </header>
  );
}
