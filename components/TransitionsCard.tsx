'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { 
  Flame, 
  LayoutGrid, 
  ChevronLeft, 
  ChevronRight, 
  Hourglass, 
  X, 
  ChevronsLeftRight
} from 'lucide-react';

export interface TransformationCardData {
  id: string;
  name: string;
  category: 'FAT LOSS' | 'MUSCLE GAIN' | 'STRENGTH' | 'BODY RECOMPOSITION';
  weightLost: string;
  duration: string;
  beforeWeight: string;
  afterWeight: string;
  showcaseImg: string;
  thumbnail: string;
  story: string;
  tag: string;
}

export const TRANSFORMATION_CARDS: TransformationCardData[] = [
  {
    id: 'trans-1',
    name: 'Fat Loss & Silhouette Recomp',
    category: 'FAT LOSS',
    weightLost: '- 27 KG',
    duration: '6 Months',
    beforeWeight: '116 KG',
    afterWeight: '89 KG',
    showcaseImg: '/transitions/showcase_1.jpg',
    thumbnail: '/transitions/thumb_1.jpg',
    story: 'From 116 kg down to 89 kg with dense muscular definition through progressive overload and structured nutrition.',
    tag: '116 KG → 89 KG'
  },
  {
    id: 'trans-2',
    name: 'Sustainable Lifestyle Transformation',
    category: 'BODY RECOMPOSITION',
    weightLost: '- 22 KG',
    duration: '7.5 Months',
    beforeWeight: '98 KG',
    afterWeight: '76 KG',
    showcaseImg: '/transitions/showcase_2.jpg',
    thumbnail: '/transitions/thumb_2.jpg',
    story: 'Dropped from 98 kg to 76 kg in 7.5 months without starvation diets. Rebuilt energy, stamina, and habits.',
    tag: '98 KG → 76 KG'
  },
  {
    id: 'trans-3',
    name: "Men's Physique Competition Athlete",
    category: 'MUSCLE GAIN',
    weightLost: 'Stage Ready',
    duration: '8 Months',
    beforeWeight: 'Bulk',
    afterWeight: '#293 Stage',
    showcaseImg: '/transitions/showcase_3.jpg',
    thumbnail: '/transitions/thumb_3.jpg',
    story: "From gym bulking to competing on the Men's Physique stage in competition board shorts with peak conditioning.",
    tag: "Men's Physique"
  },
  {
    id: 'trans-4',
    name: 'Female Lifestyle Waistline Recomp',
    category: 'BODY RECOMPOSITION',
    weightLost: '- 14 KG',
    duration: '6 Months',
    beforeWeight: 'Day 1',
    afterWeight: 'Tapered',
    showcaseImg: '/transitions/showcase_4.jpg',
    thumbnail: '/transitions/thumb_4.jpg',
    story: 'Noticeable silhouette tapering and waist reduction wearing the same signature dress with tailored biomechanics.',
    tag: 'Waistline Taper'
  },
  {
    id: 'trans-5',
    name: 'Female Core & Athletic Tone',
    category: 'STRENGTH',
    weightLost: 'Toned Abs',
    duration: '5 Months',
    beforeWeight: 'Start',
    afterWeight: 'Sculpted',
    showcaseImg: '/transitions/showcase_5.jpg',
    thumbnail: '/transitions/thumb_5.jpg',
    story: 'Sculpted core definition and functional upper body strength through progressive resistance training.',
    tag: 'Core & Tone'
  }
];

const FILTER_TAGS = ['ALL', 'FAT LOSS', 'MUSCLE GAIN', 'STRENGTH', 'BODY RECOMPOSITION'] as const;

export default function TransitionsCard() {
  const [activeTab, setActiveTab] = useState<'transition' | 'collage'>('transition');
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const activeItem = TRANSFORMATION_CARDS[currentIndex] || TRANSFORMATION_CARDS[0];

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? TRANSFORMATION_CARDS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev === TRANSFORMATION_CARDS.length - 1 ? 0 : prev + 1));
  }, []);

  // Filter selection handler
  const handleFilterClick = (tag: string) => {
    setSelectedFilter(tag);
    if (tag === 'ALL') {
      setCurrentIndex(0);
      return;
    }
    const foundIdx = TRANSFORMATION_CARDS.findIndex(item => item.category === tag);
    if (foundIdx !== -1) {
      setCurrentIndex(foundIdx);
    }
  };

  // Slider drag controls
  const handlePointerMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(8, Math.min(92, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (isDragging) handlePointerMove(e.clientX);
    };
    const onEnd = () => {
      if (isDragging) setIsDragging(false);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handlePointerMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging, handlePointerMove]);

  return (
    <>
      {/* ========================================================
          CARD 3 CONTAINER: Replaces Men's Physique Card Directly
          Dimensions and styling perfectly integrated into 3-card grid
         ======================================================== */}
      <div className="relative rounded-2xl bg-[#070202] border border-[#ff3333]/50 shadow-[0_20px_50px_rgba(255,51,51,0.15)] p-3 sm:p-4 flex flex-col justify-between overflow-hidden min-h-[460px] md:min-h-[500px] select-none group/trans font-sans">
        
        {/* Ambient Corner Flares (Exact Reference Match) */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-[radial-gradient(circle_at_top_left,_rgba(255,51,51,0.35)_0%,_transparent_70%)] pointer-events-none blur-2xl z-0"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_top_right,_rgba(255,51,51,0.35)_0%,_transparent_70%)] pointer-events-none blur-2xl z-0"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,51,51,0.15)_0%,_transparent_70%)] pointer-events-none blur-xl z-0"></div>

        {/* --------------------------------------------------------
            TOP BAR: Tabs on Left | Counter & Arrows on Right
           -------------------------------------------------------- */}
        <div className="relative z-10 flex items-center justify-between gap-2 mb-3">
          {/* Left Tabs */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('transition')}
              className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                activeTab === 'transition'
                  ? 'bg-gradient-to-r from-[#2a0707] to-[#1a0505] border border-[#ff3333] text-white shadow-[0_0_12px_rgba(255,51,51,0.6)]'
                  : 'bg-[#140808] border border-white/10 text-white/70 hover:text-white'
              }`}
            >
              <Flame className="w-3 h-3 text-[#ff3333] fill-[#ff3333]" />
              <span>TRANSITION</span>
            </button>

            <button
              onClick={() => setActiveTab('collage')}
              className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                activeTab === 'collage'
                  ? 'bg-gradient-to-r from-[#2a0707] to-[#1a0505] border border-[#ff3333] text-white shadow-[0_0_12px_rgba(255,51,51,0.6)]'
                  : 'bg-[#140808] border border-white/10 text-white/70 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3 h-3 text-white/60" />
              <span>COLLAGE VIEW</span>
            </button>
          </div>

          {/* Right Counter & Mini Arrows */}
          <div className="flex items-center gap-1.5">
            <span className="text-white font-black text-[10px] tracking-widest mr-0.5">
              {currentIndex + 1} / {TRANSFORMATION_CARDS.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="w-6 h-6 rounded-full bg-[#160808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="w-6 h-6 rounded-full bg-[#160808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* --------------------------------------------------------
            MODE 1: MAIN SLIDER VIEW (Exact Mockup Layout)
           -------------------------------------------------------- */}
        {activeTab === 'transition' && (
          <div className="relative z-10 flex flex-col flex-1 justify-between">
            
            {/* Main Interactive Before / After Transition Image (Full Card Width) */}
            <div className="relative w-full mb-3 flex-1 flex flex-col justify-center">
              <div 
                ref={sliderRef}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                className="relative w-full h-[270px] sm:h-[300px] md:h-[320px] rounded-xl overflow-hidden border border-white/15 bg-black cursor-ew-resize select-none shadow-xl group/slider"
              >
                {/* Clean Authentic Client Split Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={activeItem.showcaseImg}
                    alt={activeItem.name}
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>

                {/* Gradient overlays for crisp text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"></div>

                {/* Top Subtle Floating Tag Pill */}
                <div className="absolute top-2.5 right-2.5 z-20 bg-black/80 backdrop-blur-md border border-[#ff3333]/40 px-2.5 py-1 rounded-full pointer-events-none">
                  <span className="text-[#ff3333] font-black text-[9px] uppercase tracking-wider block leading-none">
                    {activeItem.tag}
                  </span>
                </div>

                {/* BEFORE Label */}
                <div className="absolute bottom-3 left-3 z-20 pointer-events-none drop-shadow-md">
                  <span className="text-white font-black text-sm uppercase tracking-wider block leading-none">
                    BEFORE
                  </span>
                  <span className="text-white/80 font-bold text-[9px] uppercase tracking-widest block leading-none mt-1">
                    {activeItem.beforeWeight}
                  </span>
                </div>

                {/* AFTER Label */}
                <div className="absolute bottom-3 right-3 z-20 pointer-events-none text-right drop-shadow-md">
                  <span className="text-[#ff3333] font-black text-sm uppercase tracking-wider block leading-none drop-shadow-[0_0_10px_rgba(255,51,51,0.6)]">
                    AFTER
                  </span>
                  <span className="text-white font-bold text-[9px] uppercase tracking-widest block leading-none mt-1">
                    {activeItem.afterWeight}
                  </span>
                </div>

                {/* Red Divider Line & Circular Red Handle <> */}
                <div 
                  className="absolute top-0 bottom-0 z-30 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute inset-y-0 -left-[1px] w-[2.5px] bg-[#ff3333] shadow-[0_0_12px_rgba(255,51,51,1)]"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#8b0000] border-2 border-white/90 shadow-[0_0_18px_rgba(255,51,51,1)] flex items-center justify-center text-white pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                    <ChevronsLeftRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------
                BOTTOM ROW: Thumbnail Cards (Real Client Images)
               -------------------------------------------------------- */}
            <div className="grid grid-cols-4 gap-1.5 mb-2.5">
              {TRANSFORMATION_CARDS.slice(0, 4).map((card, idx) => {
                const isSelected = activeItem.id === card.id;
                return (
                  <div
                    key={card.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative rounded-xl overflow-hidden cursor-pointer transition-all flex flex-col bg-[#0f0505] aspect-[3/4] group ${
                      isSelected
                        ? 'border border-[#ff3333] shadow-[0_0_12px_rgba(255,51,51,0.5)] scale-[1.02]'
                        : 'border border-white/10 hover:border-[#ff3333]/50'
                    }`}
                  >
                    <div className="relative flex-1 w-full overflow-hidden">
                      <Image
                        src={card.thumbnail}
                        alt={card.name}
                        fill
                        sizes="100px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
                      
                      {/* Floating Badge (e.g. - 27 KG) */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-black/90 backdrop-blur-md border border-white/20 text-white font-black text-[7px] px-1.5 py-0.5 rounded-full whitespace-nowrap block">
                          {card.weightLost}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Red Footer (e.g. ⏳ 7.5 Months) */}
                    <div className="bg-gradient-to-r from-[#8a0f0f] via-[#b31414] to-[#8a0f0f] text-white py-1 px-1 flex items-center justify-center gap-1 shrink-0">
                      <Hourglass className="w-2.5 h-2.5 text-white/90" />
                      <span className="font-black text-[7px] uppercase tracking-wider leading-none">
                        {card.duration}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* --------------------------------------------------------
                BOTTOM FILTER BAR & NAVIGATION:
                Red line + Filter pills + Mini Arrows
               -------------------------------------------------------- */}
            <div className="flex items-center justify-between gap-1 pt-2 border-t border-white/10">
              
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
                <div className="w-4 h-0.5 bg-[#ff3333] rounded-full shrink-0"></div>

                {FILTER_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleFilterClick(tag)}
                    className={`text-[6.5px] sm:text-[7.5px] font-black uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                      selectedFilter === tag
                        ? 'text-[#ff3333] drop-shadow-[0_0_8px_rgba(255,51,51,0.6)]'
                        : 'text-[#666] hover:text-white'
                    }`}
                  >
                    {tag === 'BODY RECOMPOSITION' ? 'RECOMP' : tag}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="w-5 h-5 rounded-full bg-[#160808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-2.5 h-2.5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="w-5 h-5 rounded-full bg-[#160808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-2.5 h-2.5" />
                </button>
              </div>

            </div>

          </div>
        )}

        {/* --------------------------------------------------------
            MODE 2: IN-CARD MINI COLLAGE VIEW
           -------------------------------------------------------- */}
        {activeTab === 'collage' && (
          <div className="relative z-10 flex flex-col flex-1 justify-between py-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#ff3333] text-[9px] font-black uppercase tracking-wider">
                Full Transformations Gallery
              </span>
              <button
                onClick={() => setActiveTab('transition')}
                className="text-[8px] text-white/80 hover:text-white underline cursor-pointer"
              >
                Back to Slider
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 flex-1 my-auto">
              {TRANSFORMATION_CARDS.map((card, idx) => (
                <div
                  key={card.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setActiveTab('transition');
                  }}
                  className="relative rounded-xl overflow-hidden border border-white/15 hover:border-[#ff3333] transition-all cursor-pointer group aspect-[3/4]"
                >
                  <Image
                    src={card.showcaseImg}
                    alt={card.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-1">
                    <span className="text-white font-black text-[7px] leading-tight">{card.weightLost}</span>
                    <span className="text-[#ff3333] font-bold text-[6px]">{card.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-[#ff3333] hover:text-white text-[8px] font-black uppercase tracking-wider"
              >
                Open Fullscreen HD Modal &rarr;
              </button>
            </div>
          </div>
        )}

      </div>

      {/* ========================================================
          FULL COLLAGE LIGHTBOX MODAL (On View Full Collage Click)
         ======================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-[#0a0505] border border-[#ff3333]/50 rounded-3xl p-5 sm:p-8 shadow-[0_0_80px_rgba(255,51,51,0.3)] my-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="text-[#ff3333] text-[10px] font-black uppercase tracking-widest block mb-0.5">
                  Verified Athlete Progress
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                  Transitions Master Collage
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5 max-h-[70vh] overflow-y-auto pr-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {TRANSFORMATION_CARDS.map((item) => (
                  <div key={item.id} className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-[#0d0505]">
                    <Image
                      src={item.showcaseImg}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-3">
                      <span className="text-white font-black text-xs leading-tight">{item.tag}</span>
                      <span className="text-[#ff3333] font-bold text-[10px]">{item.weightLost} • {item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 rounded-full bg-[#ff3333] text-white text-xs font-black uppercase tracking-wider hover:bg-[#cc0000] transition-all cursor-pointer"
              >
                Close Showcase
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
