import { ArrowRight, Target, Trophy, Dumbbell, Heart, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[750px] lg:min-h-[900px] lg:h-[100vh] flex flex-col justify-center pt-28 sm:pt-32 lg:pt-36 overflow-hidden bg-[#050101] selection:bg-[#ff3b30] selection:text-white">
      
      {/* 1. Fiery Smoke Background Effects */}
      {/* Ambient smoke glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,_rgba(180,20,0,0.15)_0%,_rgba(5,1,1,1)_70%)] z-0"></div>
      
      {/* Deep Red Fire at the bottom right */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(255,40,0,0.3)_0%,_rgba(150,0,0,0.1)_40%,_transparent_70%)] blur-[90px] z-0 pointer-events-none"></div>
      
      {/* Intense glow behind the guy's head / cards */}
      <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(255,20,0,0.2)_0%,_transparent_60%)] blur-[70px] z-0 pointer-events-none"></div>

      {/* 2. Massive Background Text - Raised higher like the reference */}
      <div className="absolute top-[20%] right-[-5%] w-[110%] text-right pointer-events-none z-0 hidden lg:flex flex-col items-end">
        <h1 className="text-[22vw] font-black tracking-tighter leading-[0.75] text-[#3a0000] mix-blend-screen opacity-70 uppercase font-sans">
          YOUR <br/> WORKOUT
        </h1>
      </div>

      {/* 3. Main Content Container */}
      <div className="max-w-[100rem] mx-auto px-6 sm:px-8 md:px-16 relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* LEFT COLUMN: Text and CTA */}
        <div className="w-full lg:flex-[0.55] flex flex-col justify-center space-y-6 z-30 pt-4 pb-12 lg:py-0">
          
          {/* Tagline */}
          <div className="inline-flex items-center space-x-3 text-[#ff3b30] text-xs font-bold tracking-[0.25em] uppercase drop-shadow-[0_0_10px_rgba(255,59,48,0.6)]">
            <span className="w-2 h-2 rounded-full bg-[#ff3b30] shadow-[0_0_10px_#ff3b30] animate-pulse"></span>
            <span>Personal Fitness Coach</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30]"></span>
            <span>INDIA</span>
          </div>
          
          {/* Massive Headline */}
          <h1 className="text-[2.75rem] sm:text-[3.8rem] md:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.88] lg:leading-[0.85] tracking-tighter uppercase font-sans drop-shadow-2xl">
            <span className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] block">Training</span>
            <span className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] block">That's</span>
            <span className="text-[#ff3333] drop-shadow-[0_0_25px_rgba(255,51,51,0.4)] block">Built</span>
            <span className="text-[#ff3333] drop-shadow-[0_0_25px_rgba(255,51,51,0.4)] block">Around You</span>
          </h1>
          
          {/* Paragraph */}
          <p className="text-[#a0a0a0] text-sm md:text-base max-w-xl leading-relaxed font-medium mt-2">
            Individualised coaching for people who want more than a generic workout plan. Strength, performance, movement, nutrition and real-world guidance — all built around your goals.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-6">
            <Link 
              href="#contact" 
              className="relative bg-gradient-to-r from-[#ff3333] to-[#cc0000] text-white text-xs font-black py-4 px-8 rounded-md flex items-center justify-center space-x-3 transition-all uppercase tracking-[0.15em] shadow-[0_0_30px_rgba(255,51,51,0.5)] hover:shadow-[0_0_50px_rgba(255,51,51,0.8)] hover:-translate-y-1 group overflow-hidden border border-[#ff6666]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
              <span>Book a free session</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#services" 
              className="text-white/80 hover:text-white text-xs font-bold py-4 flex items-center space-x-3 transition-colors uppercase tracking-[0.2em] group"
            >
              <span className="border-b-2 border-transparent group-hover:border-[#ff3333] transition-colors pb-1">Explore Coaching</span>
              <ArrowRight className="w-4 h-4 text-[#ff3333] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bottom Left Stats Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-12 mt-4 w-full">
             <div className="flex items-center gap-4 group cursor-pointer">
                <Dumbbell className="w-8 h-8 text-[#ff3333] drop-shadow-[0_0_10px_rgba(255,51,51,0.5)] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                   <span className="text-white text-sm font-black uppercase tracking-widest mb-0.5">Strength</span>
                   <span className="text-[#808080] text-[9px] font-bold uppercase tracking-[0.15em]">Build a stronger you</span>
                </div>
             </div>
             
             <div className="flex items-center gap-4 group cursor-pointer">
                <Heart className="w-8 h-8 text-[#ff3333] drop-shadow-[0_0_10px_rgba(255,51,51,0.5)] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                   <span className="text-white text-sm font-black uppercase tracking-widest mb-0.5">Health</span>
                   <span className="text-[#808080] text-[9px] font-bold uppercase tracking-[0.15em]">More energy daily</span>
                </div>
             </div>
             
             <div className="flex items-center gap-4 group cursor-pointer">
                <Zap className="w-8 h-8 text-[#ff3333] drop-shadow-[0_0_10px_rgba(255,51,51,0.5)] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                   <span className="text-white text-sm font-black uppercase tracking-widest mb-0.5">Performance</span>
                   <span className="text-[#808080] text-[9px] font-bold uppercase tracking-[0.15em]">Unlock your potential</span>
                </div>
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Image & Cards (Desktop Only so cards don't push mobile viewport) */}
        <div className="hidden lg:flex flex-[0.45] relative h-full w-full pointer-events-none items-end justify-center">
          
          {/* Glass Card 1: 100% (Left side - BEHIND IMAGE) */}
          <div className="absolute top-[15%] left-[-15%] xl:left-[-5%] z-20 p-7 flex flex-col items-start w-56 bg-gradient-to-br from-[#2a0505]/40 to-[#050000]/80 border border-t-white/30 border-l-white/30 border-r-white/10 border-b-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(255,0,0,0.05)] animate-float-blink pointer-events-auto transition-all">
            <Target className="w-6 h-6 text-[#ff3333] mb-5 drop-shadow-[0_0_8px_rgba(255,51,51,0.6)]" />
            <span className="text-5xl font-black tracking-tighter text-white mb-1">100%</span>
            <span className="text-[10px] text-[#ff3333] font-black uppercase tracking-[0.2em] mb-4">Personalized</span>
            <span className="text-[10px] text-[#808080] leading-relaxed font-semibold">
              Every program is built around your goals.
            </span>
          </div>
          
          {/* Glass Card 2: 7+ (Right side - BEHIND IMAGE) */}
          <div className="absolute top-[15%] right-[-15%] xl:right-[-5%] z-20 p-7 flex flex-col items-start w-56 bg-gradient-to-br from-[#2a0505]/40 to-[#050000]/80 border border-t-white/30 border-l-white/30 border-r-white/10 border-b-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(255,0,0,0.05)] animate-float-blink-delayed pointer-events-auto transition-all">
            <Trophy className="w-6 h-6 text-[#ff3333] mb-5 drop-shadow-[0_0_8px_rgba(255,51,51,0.6)]" />
            <span className="text-5xl font-black tracking-tighter text-white mb-1">7+</span>
            <span className="text-[10px] text-[#ff3333] font-black uppercase tracking-[0.2em] mb-4">Years Experience</span>
            <span className="text-[10px] text-[#808080] leading-relaxed font-semibold">
              Working with diverse backgrounds to get real results.
            </span>
          </div>

          {/* Intense Backlight Flare directly behind the athlete */}
          <div className="absolute top-[30%] right-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(255,30,0,0.3)_0%,_transparent_60%)] rounded-full blur-[80px] z-20 pointer-events-none mix-blend-screen"></div>

          {/* Main Image Container (Z-30 so it sits in FRONT of cards) */}
          <div className="absolute bottom-0 right-0 w-full h-[95%] z-30 flex items-end justify-center pointer-events-auto" style={{ maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)' }}>
             <Image 
               src="/coach_14_transparent.png" 
               alt="Souvik Fitness Coach" 
               width={1000} 
               height={1200}
               className="w-[110%] max-w-[800px] h-auto object-contain object-bottom transform -translate-y-[15%] mx-auto"
               style={{
                 filter: 'drop-shadow(0px 0px 30px rgba(255, 0, 0, 0.15)) brightness(1.05) contrast(1.05)'
               }}
               priority
             />
          </div>

        </div>
      </div>
    </section>
  );
}
