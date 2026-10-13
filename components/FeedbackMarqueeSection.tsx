'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, CheckCircle2, Quote, MessageSquareHeart } from 'lucide-react';
import { REVIEWS_DATA, Testimonial } from './ClientReviewCard';

export default function FeedbackMarqueeSection() {
  // Helper card renderer
  const renderCard = (review: Testimonial, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${review.id}`}
      className="w-[260px] xs:w-[285px] sm:w-[420px] bg-[#0c0606] border border-white/10 hover:border-[#ff3333]/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between shrink-0 shadow-lg sm:shadow-xl transition-all duration-300 hover:shadow-[0_10px_35px_rgba(255,51,51,0.2)] group select-none relative overflow-hidden"
    >
      {/* Subtle background red accent on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_rgba(255,51,51,0.12)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

      <div>
        {/* Top: Rating & Badge */}
        <div className="flex items-center justify-between mb-2.5 sm:mb-3">
          <div className="flex items-center gap-0.5 sm:gap-1 text-[#ff3333]">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            ))}
          </div>

          {review.badge && (
            <span className="inline-flex items-center gap-1 text-[7.5px] sm:text-[8.5px] font-black uppercase tracking-wider text-[#ff3333] bg-[#ff3333]/10 border border-[#ff3333]/30 px-1.5 py-0.5 sm:px-2 rounded-full">
              <CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              {review.badge}
            </span>
          )}
        </div>

        {/* Salutation Title */}
        {review.salutation && (
          <h4 className="text-white font-bold text-[11px] sm:text-sm mb-1.5 sm:mb-2 tracking-tight group-hover:text-[#ff3333] transition-colors leading-snug">
            {review.salutation}
          </h4>
        )}

        {/* Text paragraph */}
        <p className="text-[#a0a0a0] text-[10.5px] sm:text-[13px] leading-relaxed line-clamp-3 sm:line-clamp-4 font-normal">
          &ldquo;{review.paragraphs[0]} {review.paragraphs[1] || ''}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div className="flex items-center gap-2.5 sm:gap-3 pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-white/5">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden relative border border-[#ff3333] shrink-0 shadow-sm bg-[#1a0a0a]">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            sizes="(max-width: 640px) 32px, 40px"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-white font-black text-[11px] sm:text-sm truncate leading-tight">{review.name}</span>
          <span className="text-[#808080] text-[8px] sm:text-[9px] font-semibold tracking-wider uppercase truncate">
            {review.tag}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="feedback" className="py-24 sm:py-32 bg-[#050101] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(255,40,0,0.06)_0%,_transparent_70%)] blur-[100px] pointer-events-none z-0"></div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 sm:mb-16 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff3333]/10 border border-[#ff3333]/30 rounded-full text-[#ff3333] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-4">
          <MessageSquareHeart className="w-3.5 h-3.5" />
          <span>User Feedback &amp; Real Stories</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.92] max-w-4xl">
          Real People. Real Work. <br />
          <span className="text-[#ff3333] drop-shadow-[0_0_25px_rgba(255,51,51,0.3)]">
            Moving Forward.
          </span>
        </h2>

        <p className="text-[#a0a0a0] font-medium text-xs sm:text-base max-w-2xl mt-4 leading-relaxed">
          From competitive athletes and serious strength goals to chronic back pain rehabilitation and surgery avoidance — hear directly from those who committed to the process.
        </p>
      </div>

      {/* Full-width Carousel with Edge Fades (Single Infinite Row) */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Edge Gradient Fades for Smooth Infinite Illusion */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#050101] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#050101] to-transparent z-20 pointer-events-none"></div>

        {/* Single Row: Continuous Infinite Marquee with all reviews */}
        <div className="animate-marquee flex gap-3.5 sm:gap-7 py-3 cursor-grab active:cursor-grabbing">
          {REVIEWS_DATA.map((item) => renderCard(item, 'loop-1'))}
          {REVIEWS_DATA.map((item) => renderCard(item, 'loop-2'))}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="mt-8 text-center relative z-10">
        <span className="text-[10px] text-[#707070] uppercase font-bold tracking-widest">
          Hover or tap on any feedback card to pause and read
        </span>
      </div>
    </section>
  );
}
