'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Lock, MessageCircle, Calendar, Users, Phone, Mail } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function Footer() {
  const { openCart } = useBooking();
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#050101] pt-32 pb-12 border-t border-white/5 min-h-[700px]">
      
      {/* Giant Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none z-0 flex justify-center opacity-[0.02]">
         <span className="text-[12rem] md:text-[22rem] font-black text-[#ff3333] leading-none whitespace-nowrap tracking-tighter">LET'S TALK</span>
      </div>

      {/* Red ambient glow in the center-right */}
      <div className="absolute top-[30%] right-[30%] w-[500px] h-[500px] bg-[#ff3333] opacity-20 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-32">
          
          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            
            <div className="flex items-center gap-4 mb-6">
               <span className="text-[#ff3333] text-xs font-bold tracking-[0.2em] uppercase">06 / Let's Talk</span>
               <div className="h-0.5 w-16 bg-[#ff3333]"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              <span className="text-white block">Start With A</span>
              <span className="text-[#ff3333] block drop-shadow-[0_0_15px_rgba(255,51,51,0.3)]">Conversation.</span>
            </h2>
            
            <p className="text-[#b8b8b8] text-sm md:text-base font-medium max-w-md leading-relaxed mb-10">
              Tell me what you're trying to achieve. We'll discuss your current situation, what you need and whether we're the right fit to work together.
            </p>
            
            <div className="mb-6">
              <button 
                onClick={openCart}
                className="inline-flex items-center space-x-4 text-white bg-gradient-to-r from-[#ff3333] to-[#cc0000] px-10 py-5 rounded-2xl font-black uppercase tracking-[0.1em] text-xs shadow-[0_0_20px_rgba(255,51,51,0.4)] hover:shadow-[0_0_30px_rgba(255,51,51,0.6)] hover:-translate-y-1 transition-all"
              >
                <span>Book a Consultation</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-start gap-3 mb-12">
               <Lock className="w-4 h-4 text-[#808080] shrink-0 mt-0.5" />
               <p className="text-[10px] md:text-xs text-[#808080] max-w-[280px] font-medium leading-relaxed">
                 Coaching fees and exact service options are discussed after the consultation.
               </p>
            </div>
            
            {/* Benefits Row */}
            <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
               <div className="flex items-center gap-3 group">
                  <MessageCircle className="w-6 h-6 text-[#ff3333]" strokeWidth={1.5} />
                  <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight">No Obligation<br/><span className="text-[#808080]">Conversation</span></span>
               </div>
               <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
               <div className="flex items-center gap-3 group">
                  <Calendar className="w-6 h-6 text-[#ff3333]" strokeWidth={1.5} />
                  <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight">Understand<br/><span className="text-[#808080]">Your Goals</span></span>
               </div>
               <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
               <div className="flex items-center gap-3 group">
                  <Users className="w-6 h-6 text-[#ff3333]" strokeWidth={1.5} />
                  <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight">Find The Right<br/><span className="text-[#808080]">Path Together</span></span>
               </div>
            </div>
          </div>
          


          {/* Right Column (Contact Cards) */}
          <div className="w-full lg:w-[40%] flex flex-col gap-4 relative z-10 lg:pt-16">
            
            {/* Instagram */}
            <a 
              href="https://instagram.com/coachsouvikofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#0a0505]/80 backdrop-blur-md rounded-2xl border border-[#ff3333]/30 hover:border-[#ff3333]/70 p-6 md:p-8 transition-colors shadow-lg"
            >
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-xl border-2 border-[#ff3333] flex items-center justify-center shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#ff3333]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div>
                     <h3 className="text-white font-black uppercase tracking-wide text-lg mb-1">Instagram</h3>
                     <p className="text-[#a0a0a0] text-xs font-medium leading-snug">@coachsouvikofficial<br/>Follow & send a direct message.</p>
                  </div>
               </div>
               <ArrowRight className="w-5 h-5 text-[#ff3333] transform group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Book Strategy Call Card (Replacing WhatsApp as requested) */}
            <button 
              onClick={openCart}
              className="group flex items-center justify-between bg-[#0a0505]/80 backdrop-blur-md rounded-2xl border border-[#ff3333]/30 hover:border-[#ff3333]/70 p-6 md:p-8 transition-colors shadow-lg text-left w-full"
            >
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-xl border-2 border-[#ff3333] bg-[#ff3333]/10 flex items-center justify-center shrink-0">
                     <Calendar className="w-6 h-6 text-[#ff3333]" />
                  </div>
                  <div>
                     <h3 className="text-white font-black uppercase tracking-wide text-lg mb-1">Strategy Call</h3>
                     <p className="text-[#a0a0a0] text-xs font-medium leading-snug">Book 1:1 Consultation<br/>Receive invitation via email.</p>
                  </div>
               </div>
               <ArrowRight className="w-5 h-5 text-[#ff3333] transform group-hover:translate-x-1 transition-transform" />
            </button>

            {/* YouTube */}
            <a 
              href="https://youtube.com/@souvikbanerjee-p7g?si=hKXBQGjBrKT8JXeD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#0a0505]/80 backdrop-blur-md rounded-2xl border border-[#ff3333]/30 hover:border-[#ff3333]/70 p-6 md:p-8 transition-colors shadow-lg"
            >
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-xl border-2 border-[#ff3333] flex items-center justify-center shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#ff3333]"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
                  </div>
                  <div>
                     <h3 className="text-white font-black uppercase tracking-wide text-lg mb-1">YouTube</h3>
                     <p className="text-[#a0a0a0] text-xs font-medium leading-snug">@souvikbanerjee-p7g<br/>Watch training & coaching videos.</p>
                  </div>
               </div>
               <ArrowRight className="w-5 h-5 text-[#ff3333] transform group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email */}
            <a 
              href="mailto:coachsouvikbanerjee@gmail.com" 
              className="group flex items-center justify-between bg-[#0a0505]/80 backdrop-blur-md rounded-2xl border border-[#ff3333]/30 hover:border-[#ff3333]/70 p-6 md:p-8 transition-colors shadow-lg"
            >
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-xl border-2 border-[#ff3333] flex items-center justify-center shrink-0">
                     <Mail className="w-6 h-6 text-[#ff3333]" />
                  </div>
                  <div>
                     <h3 className="text-white font-black uppercase tracking-wide text-lg mb-1">Email</h3>
                     <p className="text-[#a0a0a0] text-xs font-medium leading-snug">coachsouvikbanerjee@gmail.com<br/>Direct inquiries welcome.</p>
                  </div>
               </div>
               <ArrowRight className="w-5 h-5 text-[#ff3333] transform group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>
        
        {/* Footer Bottom Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-[#808080] font-medium uppercase tracking-widest gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#ff3333]/40">
              <Image src="/logo.jpg" alt="Coached by Souvik" fill className="object-cover" />
            </div>
            <p>&copy; 2026 Coached By Souvik. All rights reserved.</p>
          </div>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
