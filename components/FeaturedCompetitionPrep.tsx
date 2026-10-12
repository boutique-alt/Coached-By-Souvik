'use client';

import Image from 'next/image';
import { ArrowRight, Trophy, Sparkles } from 'lucide-react';
import { useBooking, ALL_SERVICES } from '@/context/BookingContext';

export default function FeaturedCompetitionPrep() {
  const { openBookingForService } = useBooking();
  const competitionService = ALL_SERVICES[0]; // Competition Prep

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#050101] border border-white/10 shadow-2xl mb-12 flex flex-col lg:flex-row min-h-[500px]">
      
      {/* ========================================================
          DESKTOP VIEW (lg and above): 100% Identical to original 
          diagonal split composition with clip-path
         ======================================================== */}
      <div className="hidden lg:contents">
        {/* Left Side (Content & Before) */}
        <div 
          className="relative w-[58%] z-10 flex flex-col justify-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}
        >
          {/* Background Image (Before half) */}
          <div className="absolute inset-0">
            <Image src="/client_5.jpg" alt="Before Transformation" fill className="object-cover object-left opacity-90 scale-105" priority />
          </div>
          
          {/* Backlight / Red Flare */}
          <div className="absolute top-0 left-[20%] w-[320px] h-[320px] bg-[#ff3333] opacity-25 blur-[90px] rounded-full mix-blend-screen pointer-events-none z-0"></div>

          {/* Dark Overlays for Ultra-crisp Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050101] via-[#050101]/95 to-[#050101]/30 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050101] via-transparent to-transparent opacity-70 z-10"></div>

          {/* Content Box */}
          <div className="relative z-20 w-full p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#ff3333] font-black text-[10px] tracking-[0.25em] uppercase px-3 py-1 bg-[#ff3333]/10 border border-[#ff3333]/30 rounded-full inline-flex items-center gap-1.5">
                <Trophy className="w-3 h-3 text-[#ff3333]" />
                Featured Coaching
              </span>
              <span className="text-[#808080] text-[10px] font-bold tracking-widest uppercase">
                Athlete Readiness
              </span>
            </div>

            <div className="leading-[0.88] mb-6">
              <h3 className="text-5xl lg:text-[4.8rem] font-black uppercase text-white tracking-tighter">
                Competition
              </h3>
              <h3 className="text-5xl lg:text-[4.8rem] font-black uppercase text-[#ff3333] tracking-tighter drop-shadow-[0_0_20px_rgba(255,51,51,0.3)]">
                Prep
              </h3>
            </div>

            <p className="text-[#c0c0c0] font-medium max-w-md text-xs sm:text-sm leading-relaxed mb-8">
              Specialised coaching for athletes preparing to compete, with a structured approach to training, nutrition, and performance. Programmes are tailored to the athlete, their competitive goals, and the demands of their sport, with a focus on strength, conditioning, physique development, and stage readiness.
            </p>
            
            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button 
                onClick={() => openBookingForService(competitionService)}
                className="inline-flex items-center space-x-3 text-white bg-gradient-to-r from-[#ff3333] to-[#cc0000] hover:from-[#ff1a1a] hover:to-[#990000] px-8 py-4 rounded-xl font-black uppercase tracking-[0.12em] text-xs shadow-[0_0_25px_rgba(255,51,51,0.5)] hover:shadow-[0_0_35px_rgba(255,51,51,0.8)] hover:-translate-y-0.5 transition-all group/btn"
              >
                <span>Select & Book Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex flex-col">
                <span className="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#ff3333]" /> Fees Discussed On Call
                </span>
                <span className="text-[#808080] text-[9px] font-medium">Checkout strictly covers consultation session</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Glowing Diagonal Accent */}
        <div 
          className="absolute top-0 bottom-0 left-[58%] w-[2px] bg-gradient-to-b from-transparent via-[#ff3333] to-transparent z-30 shadow-[0_0_20px_3px_rgba(255,51,51,0.7)]" 
          style={{ transform: 'translateX(-50%) rotate(7deg)', transformOrigin: 'top center' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[35%] bg-white blur-[1px] shadow-[0_0_12px_rgba(255,51,51,1)]"></div>
        </div>

        {/* Right Side (After) */}
        <div 
          className="absolute top-0 right-0 bottom-0 w-[48%] h-full z-0 overflow-hidden" 
          style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <div className="absolute inset-0">
            <Image src="/client_5.jpg" alt="After Transformation" fill className="object-cover object-right opacity-95 scale-105" />
          </div>
          <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-[#ff3333] opacity-30 blur-[90px] rounded-full mix-blend-screen pointer-events-none z-10"></div>
        </div>
      </div>

      {/* ========================================================
          MOBILE & TABLET VIEW (below lg): Beautiful responsive stack
          showing Before & After comparison clearly + full text
         ======================================================== */}
      <div className="lg:hidden flex flex-col w-full">
        {/* Top Visual on Mobile: Displays the complete transformation photo clearly without distortion or cutting */}
        <div className="relative w-full aspect-[4/5] sm:h-96 overflow-hidden border-b border-white/10 bg-[#050101]">
          <Image 
            src="/client_5.jpg" 
            alt="Competition Prep Transformation" 
            fill 
            className="object-cover object-top" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080202] via-transparent to-transparent opacity-40 pointer-events-none"></div>
        </div>

        {/* Text & Booking Details below photo on mobile */}
        <div className="p-6 sm:p-8 flex flex-col bg-[#080202]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#ff3333] font-black text-[9px] tracking-widest uppercase px-2.5 py-1 bg-[#ff3333]/10 border border-[#ff3333]/30 rounded-full inline-flex items-center gap-1">
              <Trophy className="w-3 h-3 text-[#ff3333]" /> Featured Coaching
            </span>
            <span className="text-[#808080] text-[9px] font-bold uppercase tracking-wider">
              Athlete Readiness
            </span>
          </div>

          <div className="leading-[0.9] mb-4">
            <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Competition <span className="text-[#ff3333]">Prep</span>
            </h3>
          </div>

          <p className="text-[#b0b0b0] text-xs leading-relaxed mb-6 font-medium">
            Specialised coaching for athletes preparing to compete, with a structured approach to training, nutrition, and performance tailored to stage readiness and competitive goals.
          </p>

          <button 
            onClick={() => openBookingForService(competitionService)}
            className="w-full inline-flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-[#ff3333] to-[#cc0000] py-3.5 px-4 rounded-xl font-black uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(255,51,51,0.4)]"
          >
            <span>Select & Book Consultation</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
          
          <div className="mt-3 text-center">
            <span className="text-[#808080] text-[10px]">
              Coaching fee discussed on call • ₹499 consultation due today
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
