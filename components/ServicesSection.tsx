'use client';

import { useBooking, ALL_SERVICES } from '@/context/BookingContext';
import ServiceCard from '@/components/ServiceCard';
import FeaturedCompetitionPrep from '@/components/FeaturedCompetitionPrep';
import { ShieldCheck, Info } from 'lucide-react';

export default function ServicesSection() {
  const { consultationFee } = useBooking();
  // Filter out the first item (Competition Prep) which is featured in the top banner
  const gridServices = ALL_SERVICES.slice(1);

  return (
    <section id="services" className="py-32 bg-[#050101] relative border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-0 left-[50%] -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(circle_at_top,_rgba(255,20,0,0.12)_0%,_transparent_70%)] z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <span className="text-[#ff3333] text-sm font-bold tracking-widest uppercase mb-4 block">03 / Services & Consultation</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none max-w-2xl">
              Choose the kind of support you need.
            </h2>
            <p className="text-[#a0a0a0] font-medium max-w-xl text-sm md:text-base mt-4 leading-relaxed">
              Select the service you want to discuss before we connect. During our 1-on-1 consultation call, Coach Souvik will understand your requirements and communicate tailored charges.
            </p>
          </div>
          
          {/* Important Notice Box */}
          <div className="bg-[#120505] border border-[#ff3333]/40 rounded-2xl p-5 max-w-md shadow-[0_0_20px_rgba(255,51,51,0.1)]">
            <div className="flex items-center gap-2.5 text-[#ff3333] text-xs font-black uppercase tracking-wider mb-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparent Booking Notice</span>
            </div>
            <p className="text-[11px] text-[#b0b0b0] leading-relaxed">
              Payment at checkout is strictly for the <strong className="text-white">1:1 Consultation Call (₹{consultationFee})</strong>. Coaching service fees are discussed and confirmed during your call.
            </p>
          </div>
        </div>
        
        {/* The 6 Services Grid (2 columns on mobile, 3 columns on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 mb-12 sm:mb-16">
          {gridServices.map((service) => (
            <ServiceCard 
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* Featured Service Showcase: Competition Prep (Placed below the 6 services) */}
        <FeaturedCompetitionPrep />

      </div>
    </section>
  );
}
