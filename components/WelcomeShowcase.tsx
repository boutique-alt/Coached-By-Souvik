'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  ChevronRight, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Heart, 
  Flame, 
  Trophy, 
  Dumbbell, 
  TrendingUp, 
  Hourglass, 
  Layers, 
  Crosshair, 
  CheckCircle2, 
  Quote, 
  Sparkles 
} from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function WelcomeShowcase() {
  const { openCart } = useBooking();
  const [activeFilter, setActiveFilter] = useState<'all' | 'performance' | 'strength' | 'transformations'>('all');

  return (
    <section id="coaching" className="py-20 sm:py-24 bg-[#080706] text-white relative overflow-hidden font-sans">
      
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(255,53,61,0.06)_0%,_transparent_70%)] blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            TOP HEADER AREA (Matches Reference Exactly)
            Left: SCIENCE x DISCIPLINE x RESULTS + Built With Precision.
            Right: Description text + Filter Pills + Coach Silhouette Accent
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 sm:mb-14">
          
          {/* Left: Pretitle + Huge Athletic Heading */}
          <div className="max-w-2xl">
            {/* Small uppercase tag row */}
            <div className="flex items-center space-x-2 text-[#99908a] text-[10px] sm:text-[11px] font-black tracking-[0.25em] uppercase mb-3">
              <span>SCIENCE</span>
              <span className="text-[#FF353D]">&times;</span>
              <span>DISCIPLINE</span>
              <span className="text-[#FF353D]">&times;</span>
              <span>RESULTS</span>
            </div>

            {/* Massive Heading */}
            <h2 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black uppercase tracking-tight leading-[0.92] text-white">
              Built With <span className="text-[#FF353D]">Precision.</span>
            </h2>

            {/* Sub-headline */}
            <p className="text-[#a8a09b] text-sm sm:text-base font-medium mt-3 tracking-wide">
              Training systems. Measurable progress. Individual coaching.
            </p>
          </div>

          {/* Right: Paragraph + Filter Navigation Tabs */}
          <div className="lg:max-w-md flex flex-col items-start lg:items-end justify-between pt-1">
            <p className="text-[#88807b] text-xs sm:text-sm leading-relaxed mb-6 lg:text-right font-normal">
              Evidence based training, personalized programs and hands-on coaching to help you move, get stronger and perform better.
            </p>

            {/* Filter Pills matching Reference - Responsive scroll on mobile, no overflow */}
            <div className="w-full lg:w-auto overflow-x-auto no-scrollbar scrollbar-none py-1 flex lg:justify-end">
              <div className="inline-flex items-center bg-[#12100e] border border-white/10 p-1 rounded-full shadow-inner shrink-0">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                    activeFilter === 'all'
                      ? 'bg-[#FF353D] text-white shadow-[0_0_15px_rgba(255,53,61,0.5)]'
                      : 'text-[#88807b] hover:text-white'
                  }`}
                >
                  All programs
                </button>
                <button
                  onClick={() => setActiveFilter('performance')}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                    activeFilter === 'performance'
                      ? 'bg-[#FF353D] text-white shadow-[0_0_15px_rgba(255,53,61,0.5)]'
                      : 'text-[#88807b] hover:text-white'
                  }`}
                >
                  Performance
                </button>
                <button
                  onClick={() => setActiveFilter('strength')}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                    activeFilter === 'strength'
                      ? 'bg-[#FF353D] text-white shadow-[0_0_15px_rgba(255,53,61,0.5)]'
                      : 'text-[#88807b] hover:text-white'
                  }`}
                >
                  Strength
                </button>
                <button
                  onClick={() => setActiveFilter('transformations')}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                    activeFilter === 'transformations'
                      ? 'bg-[#FF353D] text-white shadow-[0_0_15px_rgba(255,53,61,0.5)]'
                      : 'text-[#88807b] hover:text-white'
                  }`}
                >
                  Transformations
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            THE ASYMMETRIC BENTO GRID (Matches Reference Exactly)
            - MOBILE: 2 Cards per row (grid-cols-2)
            - DESKTOP: Asymmetric Bento Grid (lg:grid-cols-12)
           ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 mb-5">
          
          {/* ----------------------------------------------------
              CARD 01: LARGE FEATURED LEFT CARD
              Mobile: col-span-1
              Desktop: lg:col-span-4
             ---------------------------------------------------- */}
          <div 
            onClick={openCart}
            className="col-span-1 lg:col-span-4 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border-2 border-[#FF353D] shadow-[0_0_30px_rgba(255,53,61,0.25)] overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[320px] lg:min-h-[580px] cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,53,61,0.4)]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/gallery/new_img_1.jpg"
                alt="Precision Biomechanics"
                fill
                sizes="(max-width: 1024px) 50vw, 35vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Dark Gradient Overlay for Crisp Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/60 to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Top Badge: 01 TECHNIQUE */}
            <div className="relative z-10 p-3 sm:p-5">
              <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#FF353D] text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md shadow-md">
                <span>01</span>
                <span>•</span>
                <span>TECHNIQUE</span>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-3 sm:p-5 lg:p-6">
              <div className="flex items-end justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                <div>
                  <h3 className="text-sm sm:text-lg lg:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                    PRECISION <br className="hidden sm:inline" />
                    <span className="text-[#FF353D]">BIOMECHANICS</span>
                  </h3>
                  <p className="text-[#a8a09b] text-[10px] sm:text-xs font-normal mt-1 leading-snug line-clamp-2">
                    Joint-friendly hypertrophy designed around structural levers.
                  </p>
                </div>

                {/* Circular Arrow Button */}
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#1c1816]/90 border border-[#FF353D]/50 flex items-center justify-center shrink-0 group-hover:bg-[#FF353D] group-hover:text-white transition-all shadow-lg">
                  <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              {/* Bottom Feature Badges / Meta Points */}
              <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-center flex-wrap gap-1.5 sm:gap-3 text-[8px] sm:text-[10px] text-[#88807b] font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1 text-white/90">
                  <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF353D]" /> Movement
                </span>
                <span className="flex items-center gap-1 text-white/90">
                  <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF353D]" /> Prevention
                </span>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------
              RIGHT SIDE CONTAINER
              On mobile (<lg): contents lets cards flow seamlessly 2-per-row in parent grid
              On desktop (lg): lg:flex lg:flex-col lg:col-span-8 lg:gap-5
             ---------------------------------------------------- */}
          <div className="contents lg:flex lg:flex-col lg:col-span-8 lg:gap-5">
            
            {/* ROW 1: 2 Cards (Desktop: 2 cards; Mobile: flows as cards 2 and 3) */}
            <div className="contents lg:grid lg:grid-cols-2 lg:gap-5">
              
              {/* CARD 02: PERFORMANCE | NATIONAL STAGE CONDITIONING */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[280px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/gallery/new_img_2.jpg"
                    alt="National Stage Conditioning"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/75 to-black/30"></div>
                </div>

                {/* Top Badge: 02 PERFORMANCE */}
                <div className="relative z-10 p-3 sm:p-4">
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">02</span>
                    <span>•</span>
                    <span>PERFORMANCE</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-3 sm:p-4 lg:p-5">
                  <div className="flex items-end justify-between gap-2 sm:gap-3 mb-2">
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-xl font-black uppercase tracking-tight text-white leading-none">
                        NATIONAL STAGE <br className="hidden sm:inline" />
                        <span className="text-[#FF353D]">CONDITIONING</span>
                      </h3>
                      <p className="text-[#a8a09b] text-[10px] sm:text-[11px] font-normal mt-1 leading-snug line-clamp-2">
                        Peak contest conditioning & vascularity protocol.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="pt-2 sm:pt-2.5 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-3 text-[8px] sm:text-[9px] text-white/80 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF353D]" /> Endurance
                    </span>
                    <span className="flex items-center gap-1">
                      <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF353D]" /> Conditioning
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 03: STRENGTH | PROGRESSIVE OVERLOAD */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[280px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/gallery/new_img_3.jpg"
                    alt="Progressive Overload"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/75 to-black/30"></div>
                </div>

                {/* Top Badge: 03 STRENGTH */}
                <div className="relative z-10 p-3 sm:p-4">
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">03</span>
                    <span>•</span>
                    <span>STRENGTH</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-3 sm:p-4 lg:p-5">
                  <div className="flex items-end justify-between gap-2 sm:gap-3 mb-2">
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-xl font-black uppercase tracking-tight text-white leading-none">
                        PROGRESSIVE <br className="hidden sm:inline" />
                        <span className="text-[#FF353D]">OVERLOAD</span>
                      </h3>
                      <p className="text-[#a8a09b] text-[10px] sm:text-[11px] font-normal mt-1 leading-snug line-clamp-2">
                        Compound power tracked through periodization.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="pt-2 sm:pt-2.5 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-3 text-[8px] sm:text-[9px] text-white/80 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Dumbbell className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF353D]" /> Stronger
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF353D]" /> Measurable
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* ROW 2: 3 Cards on Desktop, flows 2-per-row on Mobile */}
            <div className="contents lg:grid lg:grid-cols-3 lg:gap-5">
              
              {/* CARD 04: MUSCLE BUILDING | SCULPTED MUSCULARITY */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[260px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/gallery/new_img_4.jpg"
                    alt="Sculpted Muscularity"
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/80 to-black/30"></div>
                </div>

                <div className="relative z-10 p-3 sm:p-3.5">
                  <div className="inline-flex items-center gap-1 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">04</span>
                    <span>•</span>
                    <span>MUSCLE</span>
                  </div>
                </div>

                <div className="relative z-10 p-3 sm:p-3.5 lg:p-4">
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <div>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-tight text-white leading-tight">
                        SCULPTED MUSCULARITY
                      </h3>
                      <p className="text-[#a8a09b] text-[9px] sm:text-[10px] font-normal mt-0.5 line-clamp-2">
                        Symmetry, density & balanced shape.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] text-white/70 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-0.5"><Flame className="w-2.5 h-2.5 text-[#FF353D]" /> Aesthetic</span>
                    <span className="flex items-center gap-0.5"><Layers className="w-2.5 h-2.5 text-[#FF353D]" /> Symmetry</span>
                  </div>
                </div>
              </div>

              {/* CARD 05: COMPETITION PREP | ELITE COMPETITION PREP */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[260px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/gallery/new_img_5.jpg"
                    alt="Elite Competition Prep"
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/80 to-black/30"></div>
                </div>

                <div className="relative z-10 p-3 sm:p-3.5">
                  <div className="inline-flex items-center gap-1 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">05</span>
                    <span>•</span>
                    <span>COMPETITION</span>
                  </div>
                </div>

                <div className="relative z-10 p-3 sm:p-3.5 lg:p-4">
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <div>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-tight text-white leading-tight">
                        ELITE COMPETITION PREP
                      </h3>
                      <p className="text-[#a8a09b] text-[9px] sm:text-[10px] font-normal mt-0.5 line-clamp-2">
                        Peak week carb & water manipulation.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] text-white/70 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-0.5"><Trophy className="w-2.5 h-2.5 text-[#FF353D]" /> Peak</span>
                    <span className="flex items-center gap-0.5"><Crosshair className="w-2.5 h-2.5 text-[#FF353D]" /> Strategy</span>
                  </div>
                </div>
              </div>

              {/* CARD 06: MINDSET | MIND-MUSCLE CONNECTION */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[260px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/gallery/new_img_6.jpg"
                    alt="Mind-Muscle Connection"
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/80 to-black/30"></div>
                </div>

                <div className="relative z-10 p-3 sm:p-3.5">
                  <div className="inline-flex items-center gap-1 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">06</span>
                    <span>•</span>
                    <span>MINDSET</span>
                  </div>
                </div>

                <div className="relative z-10 p-3 sm:p-3.5 lg:p-4">
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <div>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-tight text-white leading-tight">
                        MIND-MUSCLE CONNECTION
                      </h3>
                      <p className="text-[#a8a09b] text-[9px] sm:text-[10px] font-normal mt-0.5 line-clamp-2">
                        Total focus and neurological recruitment.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] text-white/70 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-0.5"><Zap className="w-2.5 h-2.5 text-[#FF353D]" /> Focus</span>
                    <span className="flex items-center gap-0.5"><ShieldCheck className="w-2.5 h-2.5 text-[#FF353D]" /> Discipline</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================
            BOTTOM ROW: CARD 07 CLIENT TRANSFORMATION BANNER
            Matches Blueprint exactly:
            - Left: 07 TRANSFORMATION badge + CLIENT TRANSFORMATION + Subtitle + Action
            - Center: Before (108 KG) and After (98 KG) transformation split
            - Right: Stats (-10 KG, + Visible Definition, + Strength) + Testimonial Quote
           ======================================================== */}
        <div 
          onClick={openCart}
          className="group relative bg-[#0e0c0b] rounded-[18px] border border-white/10 hover:border-[#FF353D]/50 transition-all duration-300 p-5 sm:p-7 overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(255,53,61,0.2)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column (lg:col-span-3): Title & Tag */}
            <div className="lg:col-span-3 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#1a1412] border border-white/10 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-3">
                  <span className="text-[#FF353D]">07</span>
                  <span>•</span>
                  <span>TRANSFORMATION</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-none">
                  CLIENT <br />
                  <span className="text-[#FF353D]">TRANSFORMATION</span>
                </h3>
                
                <p className="text-[#88807b] text-xs font-normal mt-2 leading-relaxed">
                  Real people. Real progress. Guided, structured, and sustainable.
                </p>
              </div>

              {/* Circle Arrow Action Button */}
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF353D] text-white flex items-center justify-center shadow-[0_0_15px_rgba(255,53,61,0.5)] group-hover:scale-105 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 group-hover:text-[#FF353D] transition-colors">
                  Explore Transformations
                </span>
              </div>
            </div>

            {/* Center Column (lg:col-span-5): Dual Before & After Photos */}
            <div className="lg:col-span-5 relative flex items-center justify-center gap-2 sm:gap-3">
              
              {/* Before Photo Box */}
              <div className="relative w-1/2 h-[220px] sm:h-[250px] rounded-xl overflow-hidden border border-white/10 bg-black">
                <Image
                  src="/gallery/trans_108kg_before.jpg"
                  alt="Client Before Transformation - 108 KG"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-2.5 bg-black/80 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-md text-left z-10">
                  <span className="text-[9px] text-[#88807b] font-bold uppercase block leading-none">BEFORE</span>
                  <span className="text-xs font-black text-white leading-none">108 KG</span>
                </div>
              </div>

              {/* Middle Compare Divider Icon */}
              <div className="w-7 h-7 rounded-full bg-[#1c1816] border border-white/20 flex items-center justify-center shrink-0 z-10 shadow-md">
                <ChevronRight className="w-3.5 h-3.5 text-[#FF353D]" />
              </div>

              {/* After Photo Box */}
              <div className="relative w-1/2 h-[220px] sm:h-[250px] rounded-xl overflow-hidden border border-[#FF353D]/40 bg-black shadow-[0_0_15px_rgba(255,53,61,0.2)]">
                <Image
                  src="/gallery/trans_98kg_after.jpg"
                  alt="Client After Transformation - 98 KG"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 right-2.5 bg-[#FF353D]/90 backdrop-blur-md border border-[#FF353D] px-2.5 py-1 rounded-md text-right shadow-md z-10">
                  <span className="text-[9px] text-white/90 font-bold uppercase block leading-none">AFTER</span>
                  <span className="text-xs font-black text-white leading-none">98 KG</span>
                </div>
              </div>

            </div>

            {/* Right Column (lg:col-span-4): Stats Badges + Editorial Quote */}
            <div className="lg:col-span-4 flex flex-col justify-between pl-0 lg:pl-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0">
              
              {/* 3 Metric Rows */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3">
                  <Dumbbell className="w-4 h-4 text-[#FF353D] shrink-0" />
                  <div>
                    <span className="text-sm font-black text-white tracking-wide block leading-none">-10 KG</span>
                    <span className="text-[10px] text-[#88807b] font-medium uppercase tracking-wider">Body Weight</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Flame className="w-4 h-4 text-[#FF353D] shrink-0" />
                  <div>
                    <span className="text-sm font-black text-white tracking-wide block leading-none">+ Visible Definition</span>
                    <span className="text-[10px] text-[#88807b] font-medium uppercase tracking-wider">Leaner & Stronger</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-[#FF353D] shrink-0" />
                  <div>
                    <span className="text-sm font-black text-white tracking-wide block leading-none">+ Strength</span>
                    <span className="text-[10px] text-[#88807b] font-medium uppercase tracking-wider">Better Performance</span>
                  </div>
                </div>
              </div>

              {/* Editorial Quote matching Reference */}
              <div className="relative bg-[#14100e] border border-white/5 rounded-xl p-3.5">
                <Quote className="w-4 h-4 text-[#FF353D] mb-1 opacity-70" />
                <p className="text-[11px] text-[#c0b8b2] italic leading-relaxed">
                  "Structured coaching changed my body and mindset completely. The support and guidance made all the difference."
                </p>
                <span className="text-[9px] text-[#88807b] font-bold uppercase tracking-wider mt-2 block">
                  — A HAPPY CLIENT
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
