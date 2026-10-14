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
  Sparkles,
  User 
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
              CARD 01: MOVEMENT & BIOMECHANICS
              Mobile: col-span-2
              Desktop: lg:col-span-4
             ---------------------------------------------------- */}
          <div 
            onClick={openCart}
            className="col-span-2 lg:col-span-4 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border-2 border-[#FF353D] shadow-[0_0_30px_rgba(255,53,61,0.25)] overflow-hidden flex flex-col justify-between min-h-[280px] sm:min-h-[340px] lg:min-h-[580px] cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,53,61,0.4)]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/movement_biomechanics.webp"
                alt="Movement and Biomechanics Coaching"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Dark Gradient Overlay for Crisp Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/60 to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Top Badge: 01 MOVEMENT */}
            <div className="relative z-10 p-3.5 sm:p-5">
              <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#FF353D] text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md shadow-md">
                <span>01</span>
                <span>•</span>
                <span>MOVEMENT</span>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-3.5 sm:p-5 lg:p-6">
              <div className="flex items-end justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                <div>
                  <h3 className="text-base sm:text-lg lg:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                    MOVEMENT &amp; <br className="hidden sm:inline" />
                    <span className="text-[#FF353D]">BIOMECHANICS</span>
                  </h3>
                  <p className="text-[#a8a09b] text-[10.5px] sm:text-xs font-normal mt-1 leading-snug line-clamp-3 sm:line-clamp-2">
                    Understand how you move. Improve technique, address movement limitations and build strength with greater control.
                  </p>
                </div>

                {/* Circular Arrow Button */}
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#1c1816]/90 border border-[#FF353D]/50 flex items-center justify-center shrink-0 group-hover:bg-[#FF353D] group-hover:text-white transition-all shadow-lg">
                  <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-center flex-wrap gap-1.5 sm:gap-3 text-[8px] sm:text-[10px] text-[#88807b] font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1 text-white/90">
                  <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF353D]" /> Movement
                </span>
                <span className="flex items-center gap-1 text-white/90">
                  <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF353D]" /> Technique
                </span>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------
              RIGHT SIDE CONTAINER (6 CARDS IN 2 ROWS OF 3)
              On mobile (<lg): contents lets cards flow seamlessly 2-per-row in parent grid
              On desktop (lg): lg:flex lg:flex-col lg:col-span-8 lg:gap-5
             ---------------------------------------------------- */}
          <div className="contents lg:flex lg:flex-col lg:col-span-8 lg:gap-5">
            
            {/* ROW 1: 3 Cards on Desktop (Cards 02, 03, 04) */}
            <div className="contents lg:grid lg:grid-cols-3 lg:gap-5">
              
              {/* CARD 02: ATHLETIC PERFORMANCE */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[275px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/athletic_performance.jpg"
                    alt="Athletic Performance Coaching"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/75 to-black/30"></div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">02</span>
                    <span>•</span>
                    <span>PERFORMANCE</span>
                  </div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <div>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-tight text-white leading-tight">
                        ATHLETIC <br className="hidden sm:inline" />
                        <span className="text-[#FF353D]">PERFORMANCE</span>
                      </h3>
                      <p className="text-[#a8a09b] text-[9px] sm:text-[10px] font-normal mt-0.5 leading-snug line-clamp-2">
                        Develop the conditioning, speed, endurance and work capacity to perform when it matters.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] text-white/70 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-0.5"><Activity className="w-2.5 h-2.5 text-[#FF353D]" /> Conditioning</span>
                    <span className="flex items-center gap-0.5"><Zap className="w-2.5 h-2.5 text-[#FF353D]" /> Endurance</span>
                  </div>
                </div>
              </div>

              {/* CARD 03: PROGRESSIVE STRENGTH */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[275px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/progressive_strength.png"
                    alt="Progressive Strength Coaching"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/75 to-black/30"></div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">03</span>
                    <span>•</span>
                    <span>STRENGTH</span>
                  </div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <div>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-tight text-white leading-tight">
                        PROGRESSIVE <br className="hidden sm:inline" />
                        <span className="text-[#FF353D]">STRENGTH</span>
                      </h3>
                      <p className="text-[#a8a09b] text-[9px] sm:text-[10px] font-normal mt-0.5 leading-snug line-clamp-2">
                        Build strength through structured programming, progressive overload and measurable performance.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] text-white/70 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-0.5"><Dumbbell className="w-2.5 h-2.5 text-[#FF353D]" /> Strength</span>
                    <span className="flex items-center gap-0.5"><TrendingUp className="w-2.5 h-2.5 text-[#FF353D]" /> Progression</span>
                  </div>
                </div>
              </div>

              {/* CARD 04: MUSCLE & BODY COMPOSITION */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[275px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/muscle_body_composition.jpg"
                    alt="Muscle & Body Composition"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/80 to-black/30"></div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="inline-flex items-center gap-1 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">04</span>
                    <span>•</span>
                    <span>PHYSIQUE</span>
                  </div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <div>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-tight text-white leading-tight">
                        MUSCLE &amp; BODY <br className="hidden sm:inline" />
                        <span className="text-[#FF353D]">COMPOSITION</span>
                      </h3>
                      <p className="text-[#a8a09b] text-[9px] sm:text-[10px] font-normal mt-0.5 leading-snug line-clamp-2">
                        Build muscle, improve body composition and develop a physique through purposeful training.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] text-white/70 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-0.5"><Flame className="w-2.5 h-2.5 text-[#FF353D]" /> Hypertrophy</span>
                    <span className="flex items-center gap-0.5"><Layers className="w-2.5 h-2.5 text-[#FF353D]" /> Composition</span>
                  </div>
                </div>
              </div>

            </div>

            {/* ROW 2: 3 Cards on Desktop (Cards 05, 06, 07) */}
            <div className="contents lg:grid lg:grid-cols-3 lg:gap-5">
              
              {/* CARD 05: INJURY RECOVERY & RETURN TO TRAINING */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[275px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/rehabilitation.png"
                    alt="Injury Recovery & Return to Training"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/80 to-black/30"></div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="inline-flex items-center gap-1 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">05</span>
                    <span>•</span>
                    <span>REHABILITATION</span>
                  </div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <div>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-tight text-white leading-tight">
                        INJURY RECOVERY &amp; <br className="hidden sm:inline" />
                        <span className="text-[#FF353D]">RETURN TO TRAINING</span>
                      </h3>
                      <p className="text-[#a8a09b] text-[9px] sm:text-[10px] font-normal mt-0.5 leading-snug line-clamp-2">
                        Adapt training to your recovery needs, rebuild strength progressively, and return to movement.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] text-white/70 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-0.5"><ShieldCheck className="w-2.5 h-2.5 text-[#FF353D]" /> Adapted</span>
                    <span className="flex items-center gap-0.5"><Activity className="w-2.5 h-2.5 text-[#FF353D]" /> Recovery</span>
                  </div>
                </div>
              </div>

              {/* CARD 06: COMPETITION PREPARATION */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[275px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/competition_prep_gold.jpg"
                    alt="Competition Preparation"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/75 to-black/30"></div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="inline-flex items-center gap-1 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">06</span>
                    <span>•</span>
                    <span>COMPETITION</span>
                  </div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <div>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-tight text-white leading-tight">
                        COMPETITION <br className="hidden sm:inline" />
                        <span className="text-[#FF353D]">PREPARATION</span>
                      </h3>
                      <p className="text-[#a8a09b] text-[9px] sm:text-[10px] font-normal mt-0.5 leading-snug line-clamp-2">
                        Prepare with structured training, performance-focused programming and stage readiness.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] text-white/70 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-0.5"><Trophy className="w-2.5 h-2.5 text-[#FF353D]" /> Periodisation</span>
                    <span className="flex items-center gap-0.5"><Crosshair className="w-2.5 h-2.5 text-[#FF353D]" /> Peak</span>
                  </div>
                </div>
              </div>

              {/* CARD 07: PERSONALISED COACHING */}
              <div 
                onClick={openCart}
                className="col-span-1 group relative bg-[#0e0c0b] rounded-[14px] sm:rounded-[18px] border border-white/10 hover:border-[#FF353D]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[275px] cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(255,53,61,0.25)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/personalised_coaching.webp"
                    alt="Personalised Coaching"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/80 to-black/30"></div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="inline-flex items-center gap-1 bg-[#1a1412]/90 border border-white/10 text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                    <span className="text-[#FF353D]">07</span>
                    <span>•</span>
                    <span>INDIVIDUAL</span>
                  </div>
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <div>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-tight text-white leading-tight">
                        PERSONALISED <br className="hidden sm:inline" />
                        <span className="text-[#FF353D]">COACHING</span>
                      </h3>
                      <p className="text-[#a8a09b] text-[9px] sm:text-[10px] font-normal mt-0.5 leading-snug line-clamp-2">
                        A training approach shaped around your goals, capabilities and circumstances—not a template.
                      </p>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1c1816]/90 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#FF353D] group-hover:bg-[#FF353D] transition-all">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] text-white/70 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-0.5"><User className="w-2.5 h-2.5 text-[#FF353D]" /> Individual</span>
                    <span className="flex items-center gap-0.5"><CheckCircle2 className="w-2.5 h-2.5 text-[#FF353D]" /> Long-Term</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
