import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WelcomeShowcase from '@/components/WelcomeShowcase';
import ServicesSection from '@/components/ServicesSection';
import CertificationsSection from '@/components/CertificationsSection';
import ClientReviewCard from '@/components/ClientReviewCard';
import TransitionsCard from '@/components/TransitionsCard';
import FeedbackMarqueeSection from '@/components/FeedbackMarqueeSection';
import Footer from '@/components/Footer';
import { Play, ArrowRight, User, BarChart2, Settings, TrendingUp, Heart, Zap, Trophy, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-[#ff3333] selection:text-white overflow-x-hidden w-full relative">
      <Navbar />
      
      <main className="overflow-x-hidden w-full relative flex flex-col">
        <div className="order-1">
          <Hero />
        </div>

        {/* Welcome Showcase: On mobile it renders AFTER About (order-3), on desktop (md:) it renders BEFORE About (md:order-2) */}
        <div className="order-3 md:order-2">
          <WelcomeShowcase />
        </div>

        {/* About Section: On mobile it renders immediately UNDER Hero (order-2), on desktop (md:) it renders AFTER WelcomeShowcase (md:order-3) */}
        <div className="order-2 md:order-3">
          <section id="about" className="py-20 md:py-32 relative overflow-hidden">
          {/* Background Brand Watermark */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none select-none z-0 flex justify-start -ml-20 opacity-5">
             <span className="text-[15rem] md:text-[25rem] font-black text-[#ff3333] leading-none whitespace-nowrap">SOUVIK</span>
          </div>
          
          {/* subtle background red glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ff3333] blur-[150px] opacity-10 rounded-full pointer-events-none z-0"></div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Column: Text Content */}
            <div className="relative">
              <span className="text-[#ff3333] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">01 / About</span>
              
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                <span className="text-white block">The Goal Is Yours.</span>
                <span className="text-[#ff3333] block">The Approach Is Mine.</span>
              </h2>
              
              {/* Red Accent Line */}
              <div className="w-16 h-1.5 bg-[#ff3333] mb-8"></div>
              
              <p className="text-lg md:text-xl text-white font-semibold mb-6 max-w-lg leading-snug">
                Every person brings a different starting point. Good coaching knows what to do with it.
              </p>
              
              <div className="space-y-4 text-[#b8b8b8] text-sm md:text-base leading-relaxed font-medium max-w-lg mb-10">
                <p>
                  I'm Souvik Banerjee. For seven years, I've worked with people pursuing different versions of progress — building strength and muscle, losing fat, preparing to compete, improving performance, and returning to training after injury.
                </p>
                <p>
                  The work isn't simply about prescribing exercises. It's about understanding the person, recognising what the goal demands, and developing the right strategy to get there.
                </p>
                <p className="text-white font-semibold">
                  Different goals call for different approaches. My job is to know the difference.
                </p>
              </div>
              
              <Link href="#contact" className="inline-flex items-center space-x-3 text-white bg-[#ff3333] hover:bg-[#cc0000] px-8 py-4 rounded-xl font-bold uppercase tracking-[0.1em] text-sm shadow-[0_0_20px_rgba(255,51,51,0.3)] transition-all">
                <span>Meet Your Coach</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Right Column: Image with Floating Cards */}
            <div className="relative pt-10 md:pt-0 px-4 md:px-0">
              {/* The Image Container */}
              <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden border-2 border-[#ff3333]/70 shadow-[0_0_40px_rgba(255,51,51,0.2)]">
                <Image src="/coach_14.png" alt="Coach Souvik" fill className="object-cover" />
                
                {/* Inner red glow / vignette effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(255,51,51,0.2)] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Top-Right Badge: Years Coaching */}
              <div className="absolute -top-6 -right-2 md:-right-8 bg-[#0a0505]/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col items-center justify-center z-20 w-28 md:w-32 border-t-[#ff3333]/50">
                <div className="w-8 h-8 rounded-lg bg-transparent border border-[#ff3333]/50 flex items-center justify-center mb-2 text-[#ff3333]">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>
                </div>
                <span className="text-white font-black text-2xl md:text-3xl mb-1">7+</span>
                <span className="text-[#a0a0a0] text-[8px] md:text-[10px] font-bold tracking-widest uppercase text-center leading-tight">Years<br/>Coaching</span>
              </div>
              
              {/* Bottom-Left Badge: Quote */}
              <div className="absolute -bottom-8 -left-2 md:-left-12 p-6 md:p-8 bg-[#0a0505]/95 backdrop-blur-xl border border-white/10 border-l-[#ff3333] border-l-2 rounded-2xl md:max-w-[320px] max-w-[280px] shadow-[0_20px_40px_rgba(0,0,0,0.9)] z-20">
                 <span className="text-[#ff3333] font-black text-5xl md:text-6xl leading-[0] absolute top-6 left-6 block">"</span>
                 <p className="text-xs md:text-sm font-black text-white uppercase tracking-wider mt-6 leading-relaxed">
                   You are not a template.<br/>
                   Your training <span className="text-[#ff3333]">shouldn't be one either.</span>
                 </p>
              </div>
            </div>
          </div>
        </section>
      </div>

        {/* Remaining sections on page (order-4 on both mobile and desktop) */}
        <div className="order-4">
          {/* Approach Section */}
          <section id="approach" className="py-20 md:py-32 relative overflow-hidden">
          {/* Background Brand Watermark */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none z-0 flex justify-center opacity-[0.03]">
             <span className="text-[12rem] md:text-[20rem] font-black text-[#ff3333] leading-none whitespace-nowrap tracking-tighter">APPROACH</span>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
            {/* Left Column */}
            <div className="flex flex-col">
              {/* Section Label */}
              <div className="flex items-center gap-4 mb-6">
                 <span className="text-[#ff3333] text-xs font-bold tracking-[0.2em] uppercase">02 / The Approach</span>
                 <div className="h-0.5 w-16 bg-[#ff3333]"></div>
              </div>
              
              {/* Headline */}
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                <span className="text-white block">Coaching</span>
                <span className="text-white block">With <span className="text-[#ff3333]">Context.</span></span>
              </h2>
              
              {/* Intro Paragraph */}
              <p className="text-sm md:text-base text-[#a0a0a0] font-medium leading-relaxed mb-12 max-w-sm">
                Because the best plan isn't necessarily the hardest plan.<br className="hidden md:block"/>
                It's the one that makes sense for you.
              </p>
              
              {/* Image */}
              <div className="relative mt-auto w-full max-w-md self-start">
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden border border-[#ff3333]/50 shadow-[0_0_40px_rgba(255,51,51,0.15)] group">
                   <Image src="/coach_10.jpg" alt="Coach Souvik" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                   {/* Inner dark vignette */}
                   <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                </div>

                {/* Floating Badge (Bottom Right) */}
                <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[#0a0505]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col z-20 w-44">
                  <div className="w-10 h-10 rounded-lg bg-[#ff3333] flex items-center justify-center mb-4 shadow-[0_5px_15px_rgba(255,51,51,0.4)]">
                     <BarChart2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-black text-lg leading-tight mb-1 uppercase tracking-wider">Real<br/>Progress</span>
                  <span className="text-[#808080] text-[9px] font-bold tracking-[0.1em] uppercase leading-tight">Built on<br/>Discipline</span>
                </div>
              </div>
            </div>
            
            {/* Right Column: The 4 Principles */}
            <div className="flex flex-col gap-4 justify-center md:pt-16">
              
              {/* Principle 1 */}
              <div className="group relative bg-[#0a0505] rounded-2xl border border-[#ff3333]/20 hover:border-[#ff3333]/50 p-6 md:p-8 overflow-hidden flex items-start gap-6 transition-colors shadow-lg">
                 {/* Number Watermark */}
                 <div className="absolute right-6 top-1/2 -translate-y-1/2 z-0">
                    <span className="text-7xl md:text-8xl font-black text-[#ff3333]/10 select-none">01</span>
                 </div>
                 
                 <div className="w-12 h-12 rounded-xl border border-[#ff3333] bg-[#ff3333]/5 flex items-center justify-center shrink-0 z-10">
                    <User className="w-5 h-5 text-[#ff3333]" />
                 </div>
                 
                 <div className="relative z-10 flex-1">
                    <h3 className="text-lg md:text-xl font-black uppercase text-white mb-2 tracking-wide">Individualised</h3>
                    <p className="text-[#a0a0a0] text-xs md:text-sm leading-relaxed max-w-[85%] font-medium">Your training is built around your body, goal, experience and circumstances.</p>
                 </div>
              </div>

              {/* Principle 2 */}
              <div className="group relative bg-[#0a0505] rounded-2xl border border-[#ff3333]/20 hover:border-[#ff3333]/50 p-6 md:p-8 overflow-hidden flex items-start gap-6 transition-colors shadow-lg">
                 <div className="absolute right-6 top-1/2 -translate-y-1/2 z-0">
                    <span className="text-7xl md:text-8xl font-black text-[#ff3333]/10 select-none">02</span>
                 </div>
                 
                 <div className="w-12 h-12 rounded-xl border border-[#ff3333] bg-[#ff3333]/5 flex items-center justify-center shrink-0 z-10">
                    <BarChart2 className="w-5 h-5 text-[#ff3333]" />
                 </div>
                 
                 <div className="relative z-10 flex-1">
                    <h3 className="text-lg md:text-xl font-black uppercase text-white mb-2 tracking-wide">Evidence-led</h3>
                    <p className="text-[#a0a0a0] text-xs md:text-sm leading-relaxed max-w-[85%] font-medium">Programming decisions are made with a focus on sound training principles—not trends.</p>
                 </div>
              </div>

              {/* Principle 3 */}
              <div className="group relative bg-[#0a0505] rounded-2xl border border-[#ff3333]/20 hover:border-[#ff3333]/50 p-6 md:p-8 overflow-hidden flex items-start gap-6 transition-colors shadow-lg">
                 <div className="absolute right-6 top-1/2 -translate-y-1/2 z-0">
                    <span className="text-7xl md:text-8xl font-black text-[#ff3333]/10 select-none">03</span>
                 </div>
                 
                 <div className="w-12 h-12 rounded-xl border border-[#ff3333] bg-[#ff3333]/5 flex items-center justify-center shrink-0 z-10">
                    <Settings className="w-5 h-5 text-[#ff3333]" />
                 </div>
                 
                 <div className="relative z-10 flex-1">
                    <h3 className="text-lg md:text-xl font-black uppercase text-white mb-2 tracking-wide">Practical</h3>
                    <p className="text-[#a0a0a0] text-xs md:text-sm leading-relaxed max-w-[85%] font-medium">A plan only works if you can actually live with it.</p>
                 </div>
              </div>

              {/* Principle 4 */}
              <div className="group relative bg-[#0a0505] rounded-2xl border border-[#ff3333]/20 hover:border-[#ff3333]/50 p-6 md:p-8 overflow-hidden flex items-start gap-6 transition-colors shadow-lg">
                 <div className="absolute right-6 top-1/2 -translate-y-1/2 z-0">
                    <span className="text-7xl md:text-8xl font-black text-[#ff3333]/10 select-none">04</span>
                 </div>
                 
                 <div className="w-12 h-12 rounded-xl border border-[#ff3333] bg-[#ff3333]/5 flex items-center justify-center shrink-0 z-10">
                    <TrendingUp className="w-5 h-5 text-[#ff3333]" />
                 </div>
                 
                 <div className="relative z-10 flex-1">
                    <h3 className="text-lg md:text-xl font-black uppercase text-white mb-2 tracking-wide">Long-term</h3>
                    <p className="text-[#a0a0a0] text-xs md:text-sm leading-relaxed max-w-[85%] font-medium">The goal is not simply to finish a programme. It's to build sustainable progress.</p>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* Credentials & Certifications Section */}
        <CertificationsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Results Section */}
        <section id="results" className="py-32 relative overflow-hidden">
          {/* Background Brand Watermark */}
          <div className="absolute top-10 right-0 w-[150%] md:w-[120%] overflow-hidden pointer-events-none select-none z-0 flex justify-end opacity-[0.03]">
             <span className="text-[12rem] md:text-[22rem] font-black text-[#ff3333] leading-none whitespace-nowrap tracking-tighter">RESULTS</span>
          </div>

          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 relative z-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-[#ff3333] text-xs font-bold tracking-[0.2em] uppercase">04 / Results</span>
                   <div className="h-0.5 w-12 bg-[#ff3333]"></div>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.9] mb-4">
                  <span className="text-white block">Real People.</span>
                  <span className="text-[#ff3333] block">Real Work.</span>
                </h2>
                <p className="text-[#b8b8b8] font-medium text-sm max-w-md">
                  The stage doesn't lie. See the results our athletes bring when they commit to the process.
                </p>
              </div>
              
              {/* Top Right Benefit Indicators */}
              <div className="flex flex-wrap gap-6 items-center">
                 <div className="flex items-center gap-3">
                    <BarChart2 className="w-5 h-5 text-[#ff3333]" />
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight">Stronger<br/>People</span>
                 </div>
                 <div className="w-px h-8 bg-white/10 hidden md:block"></div>
                 <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-[#ff3333]" />
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight">Better<br/>Habits</span>
                 </div>
                 <div className="w-px h-8 bg-white/10 hidden md:block"></div>
                 <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#ff3333]" />
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight">Real<br/>Progress</span>
                 </div>
              </div>
            </div>
            
            {/* The 3 Cards */}
            <div className="grid md:grid-cols-3 gap-6 relative z-10 mb-16">
              
              {/* Card 1: MuscleMania India */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-[#ff3333]/50 shadow-[0_20px_50px_rgba(255,51,51,0.1)] group">
                 <Image src="/client_6.jpg" alt="Muscle Mania India" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050101] via-[#050101]/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-3 drop-shadow-md">MuscleMania India</h3>
                    <div className="flex items-center gap-2 text-[#ff3333]">
                       <Trophy className="w-4 h-4" />
                       <span className="text-xs font-black uppercase tracking-widest">Competitive Athlete</span>
                    </div>
                 </div>
              </div>

              {/* Card 2: Interactive Client Testimonials & Reviews */}
              <ClientReviewCard />

              {/* Card 3: Transition Card (Replaced Men's Physique) */}
              <TransitionsCard />
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-b border-white/10 bg-[#050101]/50 rounded-3xl px-8 mt-12">
               <div className="text-center md:text-left">
                  <h4 className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-md">7+</h4>
                  <p className="text-[10px] font-black text-[#ff3333] uppercase tracking-[0.2em]">Years in Fitness</p>
               </div>
               <div className="text-center md:text-left">
                  <h4 className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-md">1:1</h4>
                  <p className="text-[10px] font-black text-[#ff3333] uppercase tracking-[0.2em]">Individualised</p>
               </div>
               <div className="text-center md:text-left">
                  <h4 className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-md">100%</h4>
                  <p className="text-[10px] font-black text-[#ff3333] uppercase tracking-[0.2em]">Consultation First</p>
               </div>
               <div className="text-center md:text-left">
                  <h4 className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-md">∞</h4>
                  <p className="text-[10px] font-black text-[#ff3333] uppercase tracking-[0.2em]">Ongoing Support</p>
               </div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-32 relative overflow-hidden bg-[#050101] border-t border-white/5 min-h-[800px] flex items-center">
          
          {/* Background Brand Watermark */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none z-0 flex justify-center opacity-[0.03]">
             <span className="text-[12rem] md:text-[20rem] font-black text-[#ff3333] leading-none whitespace-nowrap tracking-tighter">MY STORY</span>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left Column: Scrapbook Image */}
            <div className="relative w-full md:w-[25%] hidden md:block">
               {/* Handwritten Annotation */}
               <div className="absolute -top-20 -left-4 z-20 rotate-[-10deg]">
                  <p className="font-['Caveat',cursive,sans-serif] text-2xl text-white/90 leading-tight">From a skinny kid<br/>in Kolkata</p>
                  <svg className="w-12 h-12 text-white/70 absolute -bottom-8 -left-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
                  <div className="w-16 h-1 bg-[#ff3333] mt-1 rotate-[-2deg]"></div>
               </div>

               {/* Scrapbook Photo */}
               <div className="bg-[#e0e0e0] p-3 pb-10 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.9)] transform rotate-[-4deg] relative z-10">
                  <div className="relative aspect-[3/4] overflow-hidden grayscale contrast-125 sepia-[0.2]">
                     <Image src="/coach_3.jpg" alt="Early Days" fill className="object-cover" />
                  </div>
                  {/* Tape / Texture effects could go here */}
               </div>
            </div>

            {/* Center Column: Story Text */}
            <div className="w-full md:w-[50%] text-center flex flex-col items-center">
               <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-[#ff3333]"></div>
                  <span className="text-[#ff3333] text-xs font-bold tracking-[0.2em] uppercase">05 / My Story</span>
                  <div className="h-px w-12 bg-[#ff3333]"></div>
               </div>
               
               <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tighter mb-10 text-white leading-[0.95]">
                 I started with <br/>
                 a question: <br/>
                 <span className="text-[#ff3333] drop-shadow-[0_0_15px_rgba(255,51,51,0.3)] block mt-2">"How do I become <br/> a trainer?"</span>
               </h2>
               
               <div className="space-y-6 text-sm md:text-base text-[#a0a0a0] leading-relaxed font-medium max-w-xl mx-auto">
                 <p>
                   I was a skinny kid in Kolkata trying to figure out how to enter the fitness industry. I searched online, emailed gyms, turned up for interviews—and kept learning.
                 </p>
                 <p>
                   Seven years later, I'm still learning. The difference is that now I get to help other people navigate their own journey.
                 </p>
                 <p className="font-bold text-lg mt-8">
                   <span className="text-white">This isn't a story about becoming perfect.</span><br/>
                   <span className="text-[#ff3333] drop-shadow-[0_0_10px_rgba(255,51,51,0.2)]">It's about staying in the game long enough to get better at the work.</span>
                 </p>
               </div>
            </div>

            {/* Right Column: Cinematic Coach Image */}
            <div className="relative w-full md:w-[25%] hidden md:block">
               {/* Handwritten Annotation */}
               <div className="absolute -top-16 right-0 z-20 rotate-[5deg] text-right">
                  <p className="font-['Caveat',cursive,sans-serif] text-2xl text-white/90 leading-tight">Now Helping<br/>Others</p>
                  <svg className="w-12 h-12 text-white/70 absolute -bottom-10 right-0 transform scale-x-[-1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
                  <div className="w-16 h-1 bg-[#ff3333] mt-1 ml-auto rotate-[2deg]"></div>
               </div>

               {/* Cinematic Photo */}
               <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-10 border-r border-[#ff3333]/30">
                  <Image src="/coach_9.jpg" alt="Coach Today" fill className="object-cover object-center" />
                  {/* Cinematic dark vignette and red rim light */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050101]/40 to-[#050101]/90"></div>
                  <div className="absolute inset-0 shadow-[inset_-20px_0_50px_rgba(255,51,51,0.3)] pointer-events-none"></div>
               </div>
               
               {/* External Red Glow */}
               <div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-64 bg-[#ff3333] opacity-30 blur-[80px] pointer-events-none z-0"></div>
            </div>

          </div>
        </section>

        {/* User Feedback & Real Stories (Infinite Moving Marquee) - Right Above Footer */}
        <FeedbackMarqueeSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
