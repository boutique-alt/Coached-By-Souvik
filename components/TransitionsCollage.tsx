'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { 
  Flame, 
  LayoutGrid, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  BarChart2, 
  Star, 
  ArrowRight, 
  Hourglass, 
  X, 
  ChevronsLeftRight,
  Sparkles,
  Trophy
} from 'lucide-react';

export interface TransformationItem {
  id: string;
  name: string;
  category: 'FAT LOSS' | 'MUSCLE GAIN' | 'STRENGTH' | 'BODY RECOMPOSITION';
  weightLost: string;
  duration: string;
  beforeWeight: string;
  afterWeight: string;
  showcaseImg: string;
  beforeImg: string;
  afterImg: string;
  splitImg: string;
  thumbnail: string;
  story: string;
  tag: string;
}

export const TRANSFORMATION_ITEMS: TransformationItem[] = [
  {
    id: 'trans-1',
    name: 'Fat Loss & Silhouette Recomp',
    category: 'FAT LOSS',
    weightLost: '- 27 KG',
    duration: '6 Months',
    beforeWeight: '116 KG',
    afterWeight: '89 KG',
    showcaseImg: '/transitions/showcase_1.jpg',
    beforeImg: '/transitions/c1_before.jpg',
    afterImg: '/transitions/c1_after.jpg',
    splitImg: '/transitions/c1_composite.jpg',
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
    beforeImg: '/transitions/c2_before.jpg',
    afterImg: '/transitions/c2_after.jpg',
    splitImg: '/transitions/c2_composite.jpg',
    thumbnail: '/transitions/thumb_2.jpg',
    story: 'Dropped from 98 kg to 76 kg in 7.5 months without starvation diets. Rebuilt energy, stamina, and daily habits.',
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
    beforeImg: '/transitions/c3_before.jpg',
    afterImg: '/transitions/c3_after.jpg',
    splitImg: '/transitions/c3_composite.jpg',
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
    beforeImg: '/transitions/c4_before.jpg',
    afterImg: '/transitions/c4_after.jpg',
    splitImg: '/transitions/c4_composite.jpg',
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
    beforeImg: '/transitions/c5_before.jpg',
    afterImg: '/transitions/c5_after.jpg',
    splitImg: '/transitions/c5_composite.jpg',
    thumbnail: '/transitions/thumb_5.jpg',
    story: 'Sculpted core definition and functional upper body strength through progressive resistance training.',
    tag: 'Core & Tone'
  },
  {
    id: 'trans-6',
    name: 'Sustainable Body Transformation',
    category: 'FAT LOSS',
    weightLost: '- 10 KG',
    duration: '4 Months',
    beforeWeight: '108 KG',
    afterWeight: '98 KG',
    showcaseImg: '/transitions/showcase_6.jpg',
    beforeImg: '/gallery/trans_108kg_before.jpg',
    afterImg: '/gallery/trans_98kg_after.jpg',
    splitImg: '/transitions/showcase_6.jpg',
    thumbnail: '/transitions/thumb_6.jpg',
    story: 'From 108 kg down to 98 kg with visible muscle definition and boosted strength through structured, sustainable coaching.',
    tag: '108 KG → 98 KG'
  }
];

const CATEGORIES = ['ALL', 'FAT LOSS', 'MUSCLE GAIN', 'STRENGTH', 'BODY RECOMPOSITION'] as const;
type CategoryFilter = typeof CATEGORIES[number];

export default function TransitionsCollage() {
  const [activeTab, setActiveTab] = useState<'transition' | 'collage'>('transition');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('ALL');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [sliderPos, setSliderPos] = useState<number>(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Filter items based on selected category
  const filteredItems = TRANSFORMATION_ITEMS.filter(item => {
    if (selectedCategory === 'ALL') return true;
    return item.category === selectedCategory;
  });

  const activeItem = TRANSFORMATION_ITEMS[currentIndex] || TRANSFORMATION_ITEMS[0];

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? TRANSFORMATION_ITEMS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev === TRANSFORMATION_ITEMS.length - 1 ? 0 : prev + 1));
  }, []);

  // Drag handlers for the Before / After slider
  const handlePointerMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const onGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handlePointerMove(e.clientX);
    };
    const onGlobalMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };
    const onGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      handlePointerMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', onGlobalMouseMove);
      window.addEventListener('mouseup', onGlobalMouseUp);
      window.addEventListener('touchmove', onGlobalTouchMove);
      window.addEventListener('touchend', onGlobalMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onGlobalMouseMove);
      window.removeEventListener('mouseup', onGlobalMouseUp);
      window.removeEventListener('touchmove', onGlobalTouchMove);
      window.removeEventListener('touchend', onGlobalMouseUp);
    };
  }, [isDragging, handlePointerMove]);

  return (
    <div className="w-full h-full relative flex flex-col justify-between">
      {/* Outer Glow Container matching reference styling */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#070202] border border-[#ff3333]/40 shadow-[0_0_50px_rgba(255,51,51,0.2)] p-2.5 sm:p-4 md:p-5 overflow-hidden font-sans select-none h-full flex flex-col justify-between">
        
        {/* Ambient Red Smoke & Light flares in corners */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(255,51,51,0.35)_0%,_transparent_70%)] pointer-events-none blur-3xl z-0"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(circle_at_top_right,_rgba(255,51,51,0.35)_0%,_transparent_70%)] pointer-events-none blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,51,51,0.18)_0%,_transparent_75%)] pointer-events-none blur-2xl z-0"></div>

        {/* ========================================================
            TOP BAR: Tabs on Left, Counter & Arrow Navigation on Right
           ======================================================== */}
        <div className="relative z-10 flex items-center justify-between gap-3 shrink-0 mb-1 sm:mb-2">
          
          {/* Left Pill Switchers */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('transition')}
              className={`px-3.5 sm:px-5 py-1.5 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'transition'
                  ? 'bg-gradient-to-r from-[#2a0707] to-[#1a0505] border border-[#ff3333] text-white shadow-[0_0_15px_rgba(255,51,51,0.6)]'
                  : 'bg-[#140808] border border-white/10 text-white/70 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-[#ff3333] fill-[#ff3333]" />
              <span>TRANSITION</span>
            </button>

            <button
              onClick={() => setActiveTab('collage')}
              className={`px-3.5 sm:px-5 py-1.5 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'collage'
                  ? 'bg-gradient-to-r from-[#2a0707] to-[#1a0505] border border-[#ff3333] text-white shadow-[0_0_15px_rgba(255,51,51,0.6)]'
                  : 'bg-[#140808] border border-white/10 text-white/70 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-white/60" />
              <span>COLLAGE VIEW</span>
            </button>
          </div>

          {/* Right Counter & Arrows */}
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-[11px] sm:text-xs tracking-widest mr-0.5">
              {currentIndex + 1} / {TRANSFORMATION_ITEMS.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous Transformation"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#180808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Transformation"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#180808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ========================================================
            VIEW MODE 1: TRANSITION VIEW (Exact Mockup Layout)
           ======================================================== */}
        {activeTab === 'transition' && (
          <div className="relative z-10 flex flex-col flex-1 min-h-0 justify-between">
            
            {/* Center Showcase: Uncropped Interactive Before/After Split Slider */}
            <div className="flex-1 min-h-0 flex items-center justify-center my-auto w-full">
              <div 
                ref={sliderRef}
                onMouseDown={onMouseDown}
                onTouchStart={onMouseDown}
                className="relative w-full max-w-4xl lg:max-w-4xl aspect-[16/10] max-h-[380px] sm:max-h-[440px] md:max-h-[430px] lg:max-h-[460px] mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl cursor-ew-resize group/slider select-none"
              >
                {/* Ambient Blurred Backdrop for edge beauty */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <Image
                    src={activeItem.showcaseImg}
                    alt=""
                    fill
                    className="object-cover blur-2xl scale-110 opacity-30 md:opacity-15"
                  />
                </div>

                {/* Clean Authentic Client Split Image - Pure Uncropped */}
                <div className="relative w-full h-full">
                  <Image
                    src={activeItem.showcaseImg}
                    alt={activeItem.name}
                    fill
                    priority
                    className="object-contain object-center"
                  />
                </div>

                {/* Top-Right Category / Tag Pill */}
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 bg-black/85 backdrop-blur-md border border-[#ff3333]/40 px-2.5 py-0.5 sm:py-1 rounded-full pointer-events-none">
                  <span className="text-[#ff3333] font-black text-[9px] sm:text-[10px] uppercase tracking-wider block leading-none">
                    {activeItem.tag}
                  </span>
                </div>

                {/* Top-Center Instruction */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 sm:top-3 z-20 bg-black/75 backdrop-blur-md border border-white/10 px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] font-bold text-white/80 uppercase tracking-widest flex items-center gap-1 pointer-events-none">
                  <Sparkles className="w-3 h-3 text-[#ff3333]" />
                  <span>Drag to Compare</span>
                </div>

                {/* Conditional Floating Labels: Hide for Client 1 whose image already has baked-in labels */}
                {activeItem.id !== 'trans-1' && (
                  <>
                    {/* Left Label: BEFORE Weight */}
                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-20 pointer-events-none drop-shadow-lg">
                      <span className="text-white font-black text-sm sm:text-xl uppercase tracking-wider block leading-none">
                        BEFORE
                      </span>
                      <span className="text-white/80 font-bold text-[9px] sm:text-xs uppercase tracking-widest block leading-none mt-1">
                        {activeItem.beforeWeight}
                      </span>
                    </div>

                    {/* Right Label: AFTER Weight */}
                    <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-20 pointer-events-none text-right drop-shadow-lg">
                      <span className="text-[#ff3333] font-black text-sm sm:text-xl uppercase tracking-wider block drop-shadow-[0_0_12px_rgba(255,51,51,0.7)] leading-none">
                        AFTER
                      </span>
                      <span className="text-white font-bold text-[9px] sm:text-xs uppercase tracking-widest block leading-none mt-1">
                        {activeItem.afterWeight}
                      </span>
                    </div>
                  </>
                )}

                {/* Central Vertical Divider Line & Slider Circle Handle */}
                <div 
                  className="absolute top-0 bottom-0 z-30 pointer-events-none transition-all duration-75"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-[#ff3333] shadow-[0_0_15px_3px_rgba(255,51,51,0.9)]"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#8b0000] border-2 border-white/90 shadow-[0_0_20px_rgba(255,51,51,1)] flex items-center justify-center text-white pointer-events-auto cursor-ew-resize group-hover/slider:scale-110 transition-transform">
                    <ChevronsLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                BOTTOM ROW: Large & Clear Transformation Cards
                Mobile: Smooth swipeable cards (w-36 h-28), Desktop: Centered 6 cards row
               ======================================================== */}
            <div className="flex overflow-x-auto md:overflow-visible md:justify-center md:items-center gap-2.5 sm:gap-3 md:gap-3 lg:gap-3.5 shrink-0 py-1 scrollbar-none snap-x w-full max-w-6xl mx-auto">
              {TRANSFORMATION_ITEMS.map((card, idx) => {
                const isSelected = activeItem.id === card.id;
                return (
                  <div
                    key={card.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col bg-[#0f0505] w-[140px] sm:w-[160px] md:w-[145px] lg:w-[160px] xl:w-[172px] h-[105px] sm:h-[115px] md:h-[125px] lg:h-[136px] shrink-0 snap-start group ${
                      isSelected
                        ? 'border-2 border-[#ff3333] shadow-[0_0_20px_rgba(255,51,51,0.6)] scale-[1.03]'
                        : 'border border-white/10 hover:border-[#ff3333]/60 hover:scale-[1.02]'
                    }`}
                  >
                    {/* Main Image Container */}
                    <div className="relative flex-1 w-full overflow-hidden bg-black">
                      <Image
                        src={card.thumbnail}
                        alt={card.name}
                        fill
                        sizes="(max-width: 768px) 140px, 200px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
                      
                      {/* Floating Badge (Top-Right): Clean & Never Overlaps Subject */}
                      <div className="absolute top-1.5 right-1.5 z-10">
                        <span className="bg-black/90 backdrop-blur-md border border-[#ff3333]/50 text-[#ff3333] font-black text-[9px] sm:text-[10px] md:text-[11px] px-2 py-0.5 rounded-md shadow-md whitespace-nowrap block leading-none">
                          {card.weightLost}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Information Footer Bar */}
                    <div className="bg-[#140606] border-t border-[#ff3333]/30 py-1 md:py-1.5 px-2 md:px-2.5 flex items-center justify-between gap-1 shrink-0 text-white">
                      <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black text-white/90 truncate max-w-[70%]">
                        {card.tag}
                      </span>
                      <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-[#ff3333] flex items-center gap-1 shrink-0">
                        <Hourglass className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#ff3333]" />
                        <span>{card.duration}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ========================================================
                BOTTOM FILTER BAR & NAVIGATION:
                Progress indicator + Category pills + Arrows
               ======================================================== */}
            <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-white/10 shrink-0 w-full max-w-5xl mx-auto">
              
              {/* Category Filter Buttons - Scrollable on mobile without wrapping */}
              <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-none py-0.5">
                <div className="w-6 h-1 bg-[#ff3333] rounded-full shadow-[0_0_8px_#ff3333] shrink-0 hidden sm:block"></div>

                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      if (cat === 'ALL') {
                        setCurrentIndex(0);
                      } else {
                        const foundIdx = TRANSFORMATION_ITEMS.findIndex(item => item.category === cat);
                        if (foundIdx !== -1) setCurrentIndex(foundIdx);
                      }
                    }}
                    className={`text-[9px] sm:text-[11px] font-black uppercase tracking-wider transition-colors cursor-pointer shrink-0 whitespace-nowrap px-1 py-0.5 rounded ${
                      selectedCategory === cat
                        ? 'text-[#ff3333] drop-shadow-[0_0_8px_rgba(255,51,51,0.6)]'
                        : 'text-[#888] hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Bottom Arrows */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Transformation"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#160808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Transformation"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#160808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================
            VIEW MODE 2: FULL COLLAGE VIEW
           ======================================================== */}
        {activeTab === 'collage' && (
          <div className="relative z-10 py-2 flex-1 overflow-y-auto max-h-[75vh] pr-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[#ff3333] text-[10px] font-black uppercase tracking-widest block mb-1">
                  Full Athlete Gallery
                </span>
                <h4 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  All Client Transformations Collage
                </h4>
              </div>
              <button
                onClick={() => setActiveTab('transition')}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#ff3333] text-white text-xs font-bold uppercase transition-all cursor-pointer"
              >
                Back to Slider
              </button>
            </div>

            {/* Collage Bento / Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TRANSFORMATION_ITEMS.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setCurrentIndex(i);
                    setActiveTab('transition');
                  }}
                  className="relative rounded-2xl overflow-hidden bg-[#0a0505] border border-white/10 hover:border-[#ff3333] transition-all duration-300 group cursor-pointer shadow-xl flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.showcaseImg || item.thumbnail}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-[#ff3333]/90 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-black text-sm">{item.tag}</span>
                        <span className="text-[#ff3333] font-black text-xs">{item.weightLost}</span>
                      </div>
                      <p className="text-[#888] text-xs line-clamp-2">{item.story}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-white/70 pt-2 border-t border-white/10">
                      <span>{item.duration}</span>
                      <span className="text-[#ff3333] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Compare &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ========================================================
          FULL COLLAGE LIGHTBOX MODAL
         ======================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-5xl bg-[#0a0505] border border-[#ff3333]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(255,51,51,0.3)] my-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-[#ff3333] text-xs font-black uppercase tracking-widest block mb-1">
                  Verified Transformations
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Transitions Master Collage
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content: Master Collage Image & Gallery Grid */}
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-black">
                <Image
                  src="/transitions/transitions_master_collage.jpg"
                  alt="Transitions Master Showcase"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {TRANSFORMATION_ITEMS.map((item) => (
                  <div key={item.id} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group cursor-pointer" onClick={() => { setCurrentIndex(TRANSFORMATION_ITEMS.findIndex(c => c.id === item.id)); setIsModalOpen(false); }}>
                    <Image
                      src={item.showcaseImg || item.thumbnail}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                      <span className="text-white font-black text-xs">{item.tag}</span>
                      <span className="text-[#ff3333] font-bold text-[10px]">{item.weightLost} • {item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#ff3333] text-white text-xs font-black uppercase tracking-wider hover:bg-[#cc0000] transition-all cursor-pointer"
              >
                Close Showcase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
