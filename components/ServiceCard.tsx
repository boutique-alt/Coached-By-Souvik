'use client';

import { ArrowRight, Dumbbell, Laptop, FileText, Utensils, Users, MessageSquare, Trophy, Plus, Check } from 'lucide-react';
import { useBooking, ServiceItem } from '@/context/BookingContext';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { selectedService, openBookingForService } = useBooking();
  const isSelected = selectedService?.id === service.id;

  const getIcon = () => {
    switch(service.iconType) {
      case 'offline': return <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3333]" />;
      case 'online': return <Laptop className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3333]" />;
      case 'plan': return <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3333]" />;
      case 'nutrition': return <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3333]" />;
      case 'mentor': return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3333]" />;
      case 'chat': return <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3333]" />;
      case 'competition': return <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3333]" />;
      default: return <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3333]" />;
    }
  };

  return (
    <div className={`group relative overflow-hidden bg-[#0a0505] rounded-xl sm:rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[260px] sm:min-h-[320px] ${
      isSelected 
        ? 'border-[#ff3333] shadow-[0_0_35px_rgba(255,51,51,0.25)] bg-gradient-to-b from-[#140606] to-[#0a0505]' 
        : 'border-white/10 hover:border-[#ff3333]/50 hover:shadow-[0_0_30px_rgba(255,51,51,0.12)]'
    }`}>
      
      {/* Right side subtle gradient fade */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-white/5 to-transparent z-0 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
      
      {/* Massive Watermark Number */}
      <div className="absolute top-2 sm:top-4 right-3 sm:left-24 z-0 pointer-events-none">
        <span className="text-4xl sm:text-6xl font-black text-white/5 select-none">{service.number}</span>
      </div>

      <div className="relative z-10 p-4 sm:p-8 flex flex-col h-full justify-between">
        
        <div>
          {/* Header Row: Icon & Status Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-6">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border border-[#ff3333] bg-[#ff3333]/5 flex items-center justify-center shadow-[0_0_15px_rgba(255,51,51,0.1)] group-hover:shadow-[0_0_20px_rgba(255,51,51,0.3)] transition-shadow">
              {getIcon()}
            </div>
            <span className="text-[7.5px] sm:text-[9px] font-black tracking-wider uppercase text-[#808080] bg-white/5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/5 self-start sm:self-auto line-clamp-1">
              Discuss On Call
            </span>
          </div>
          
          <h3 className="text-sm sm:text-xl md:text-2xl font-black uppercase mb-1.5 sm:mb-3 text-white leading-tight">
            {service.title}
          </h3>
          
          <p className="text-[#a0a0a0] text-[10.5px] sm:text-xs md:text-sm leading-relaxed mb-4 sm:mb-6 font-medium line-clamp-3 sm:line-clamp-none">
            {service.description}
          </p>
        </div>

        {/* Action Button: Add to Cart / Select for Consultation */}
        <div className="pt-2 sm:pt-4 border-t border-white/5 flex items-center justify-between">
          <button
            onClick={() => openBookingForService(service)}
            className={`w-full inline-flex items-center justify-center space-x-1.5 sm:space-x-2 py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              isSelected 
                ? 'bg-[#ff3333] text-white shadow-[0_0_20px_rgba(255,51,51,0.4)]' 
                : 'bg-white/5 hover:bg-[#ff3333] text-white/90 hover:text-white border border-white/10 hover:border-[#ff3333]'
            }`}
          >
            {isSelected ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span className="truncate">Selected</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 text-[#ff3333] group-hover:text-white transition-colors" />
                <span className="truncate">Select</span>
                <ArrowRight className="w-3 h-3 ml-0.5 text-white/70 group-hover:translate-x-1 transition-transform hidden sm:inline" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
