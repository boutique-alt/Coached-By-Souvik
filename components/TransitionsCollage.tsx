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
  beforeImg: string;
  afterImg: string;
  splitImg?: string;
  thumbnail: string;
  story: string;
  tag: string;
}

export const TRANSFORMATION_ITEMS: TransformationItem[] = [
  {
    id: 'trans-1',
    name: 'Aesthetic Recomp & 30 KG Drop',
    category: 'FAT LOSS',
    weightLost: '- 30 KG',
    duration: '6 Months',
    beforeWeight: '116 KG',
    afterWeight: '86 KG',
    beforeImg: '/transitions/clean_feat_before.jpg',
    afterImg: '/transitions/clean_feat_after.jpg',
    splitImg: '/transitions/feat_perfect.jpg',
    thumbnail: '/transitions/card_thumb_2.jpg',
    story: 'From 116 kg to 86 kg with razor-sharp core definition and sculpted shoulders through progressive overload and structured nutrition.',
    tag: 'Fat Loss & Core Sculpt'
  },
  {
    id: 'trans-2',
    name: 'Sustainable Lifestyle Recomp',
    category: 'BODY RECOMPOSITION',
    weightLost: '- 18 KG',
    duration: '7.5 Months',
    beforeWeight: '98 KG',
    afterWeight: '80 KG',
    beforeImg: '/transitions/transition_2.jpg',
    afterImg: '/transitions/transition_2.jpg',
    thumbnail: '/transitions/card_thumb_1.jpg',
    story: 'Dropped from 98 kg to 80 kg in 7.5 months without starving. Solid lean muscle preservation and restored daily stamina.',
    tag: 'Sustainable Body Recomp'
  },
  {
    id: 'trans-3',
    name: 'Athletic Lean Bulk to Shred',
    category: 'MUSCLE GAIN',
    weightLost: '- 12 KG',
    duration: '5 Months',
    beforeWeight: '88 KG',
    afterWeight: '76 KG',
    beforeImg: '/transitions/card_thumb_3.jpg',
    afterImg: '/transitions/card_thumb_3.jpg',
    thumbnail: '/transitions/card_thumb_3.jpg',
    story: 'Focused hypertrophy period followed by disciplined cutting. Gained dense chest, capped deltoids, and deep abdominal etching.',
    tag: 'Hypertrophy & Shred'
  },
  {
    id: 'trans-4',
    name: 'Arms & Upper Body Power',
    category: 'STRENGTH',
    weightLost: '- 15 KG',
    duration: '4 Months',
    beforeWeight: '95 KG',
    afterWeight: '80 KG',
    beforeImg: '/transitions/card_thumb_4.jpg',
    afterImg: '/transitions/card_thumb_4.jpg',
    thumbnail: '/transitions/card_thumb_4.jpg',
    story: 'Specialised strength periodisation. Major arm circumference growth and chest density while cutting 15 kg of visceral fat.',
    tag: 'Upper Body Power'
  },
  {
    id: 'trans-5',
    name: "Men's Physique Contest Athlete",
    category: 'MUSCLE GAIN',
    weightLost: 'Stage Ready',
    duration: '8 Months',
    beforeWeight: 'Offseason',
    afterWeight: 'Contest #293',
    beforeImg: '/transitions/transition_5_before.jpg',
    afterImg: '/transitions/transition_5_after.jpg',
    splitImg: '/transitions/transition_5_composite.jpg',
    thumbnail: '/transitions/transition_5_after.jpg',
    story: "From gym bulking to competing on the Men's Physique stage in competition board shorts. Peak conditioning and stage presentation.",
    tag: "Men's Physique Winner"
  },
  {
    id: 'trans-6',
    name: 'Female Core & Waist Sculpting',
    category: 'BODY RECOMPOSITION',
    weightLost: '- 14 KG',
    duration: '6 Months',
    beforeWeight: 'Before',
    afterWeight: 'After',
    beforeImg: '/transitions/transition_3_before.jpg',
    afterImg: '/transitions/transition_3_after.jpg',
    splitImg: '/transitions/transition_3_composite.jpg',
    thumbnail: '/transitions/transition_3_after.jpg',
    story: 'Dramatic waistline tapering and hourglass athletic posture achieved with tailored biomechanics and trauma-informed training.',
    tag: 'Lifestyle Body Recomp'
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
    <div className="w-full relative">
      {/* Outer Glow Container matching reference styling */}
      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-[#070202] border border-[#ff3333]/40 shadow-[0_0_60px_rgba(255,51,51,0.22)] p-5 sm:p-8 md:p-10 overflow-hidden font-sans select-none">
        
        {/* Ambient Red Smoke & Light flares in corners (Exact reference aesthetics) */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(255,51,51,0.35)_0%,_transparent_70%)] pointer-events-none blur-3xl z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,_rgba(255,51,51,0.35)_0%,_transparent_70%)] pointer-events-none blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,51,51,0.18)_0%,_transparent_75%)] pointer-events-none blur-2xl z-0"></div>

        {/* ========================================================
            TOP BAR: Tabs on Left, Counter & Arrow Navigation on Right
           ======================================================== */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
          
          {/* Left Pill Switchers */}
          <div className="flex items-center gap-3">
            {/* Active TRANSITION Tab */}
            <button
              onClick={() => setActiveTab('transition')}
              className={`px-5 sm:px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'transition'
                  ? 'bg-gradient-to-r from-[#2a0707] to-[#1a0505] border border-[#ff3333] text-white shadow-[0_0_20px_rgba(255,51,51,0.6)]'
                  : 'bg-[#140808] border border-white/10 text-white/70 hover:text-white hover:border-white/30'
              }`}
            >
              <Flame className="w-4 h-4 text-[#ff3333] fill-[#ff3333]" />
              <span>TRANSITION</span>
            </button>

            {/* COLLAGE VIEW Tab */}
            <button
              onClick={() => setActiveTab('collage')}
              className={`px-5 sm:px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'collage'
                  ? 'bg-gradient-to-r from-[#2a0707] to-[#1a0505] border border-[#ff3333] text-white shadow-[0_0_20px_rgba(255,51,51,0.6)]'
                  : 'bg-[#140808] border border-white/10 text-white/70 hover:text-white hover:border-white/30'
              }`}
            >
              <LayoutGrid className="w-4 h-4 text-white/60" />
              <span>COLLAGE VIEW</span>
            </button>
          </div>

          {/* Right Counter & Arrows */}
          <div className="flex items-center gap-3">
            <span className="text-white font-black text-xs sm:text-sm tracking-widest mr-1">
              {currentIndex + 1} / {TRANSFORMATION_ITEMS.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous Transformation"
              className="w-9 h-9 rounded-full bg-[#180808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(255,51,51,0.5)]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Transformation"
              className="w-9 h-9 rounded-full bg-[#180808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(255,51,51,0.5)]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================
            VIEW MODE 1: TRANSITION VIEW (Exact Mockup Layout)
           ======================================================== */}
        {activeTab === 'transition' && (
          <div className="relative z-10 flex flex-col">
            
            {/* Middle Grid: Left Text/Stats + Right Interactive Before/After Split */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
              
              {/* Left Column (5 Cols): Eyebrow, Big Headline, Stats Box, View Collage Button */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 text-white/80 text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase mb-3">
                  <span>REAL PEOPLE</span>
                  <span className="text-[#ff3333] font-black text-sm">✕</span>
                  <span>REAL JOURNEY</span>
                </div>

                {/* Massive Bold Headline */}
                <h3 className="text-4xl sm:text-5xl lg:text-[4rem] font-black uppercase tracking-tight leading-[0.88] text-white mb-2">
                  TRANSITIONS
                  <span className="block text-[#ff3333] drop-shadow-[0_0_30px_rgba(255,51,51,0.6)]">
                    COLLAGE
                  </span>
                </h3>

                {/* Subtitle */}
                <p className="text-[#a0a0a0] text-xs sm:text-sm font-medium mt-2 mb-6 leading-snug max-w-sm">
                  Real People. Tailored Science.<br />
                  Real Results.
                </p>

                {/* Stats Container (Rounded Dark Card with 3 Metrics) */}
                <div className="rounded-2xl bg-[#0e0505]/95 border border-white/10 p-5 space-y-4 mb-7 shadow-2xl backdrop-blur-md max-w-md">
                  
                  {/* Metric 1 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#ff3333]/15 border border-[#ff3333]/40 flex items-center justify-center text-[#ff3333] shrink-0 shadow-[0_0_15px_rgba(255,51,51,0.2)]">
                      <Users className="w-5 h-5 text-[#ff3333]" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-lg leading-tight">100+</h4>
                      <p className="text-[#999] text-[11px] font-semibold tracking-wide">Client Transformations</p>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#ff3333]/15 border border-[#ff3333]/40 flex items-center justify-center text-[#ff3333] shrink-0 shadow-[0_0_15px_rgba(255,51,51,0.2)]">
                      <BarChart2 className="w-5 h-5 text-[#ff3333]" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-lg leading-tight">7.5 Months</h4>
                      <p className="text-[#999] text-[11px] font-semibold tracking-wide">Average Progress Time</p>
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#ff3333]/15 border border-[#ff3333]/40 flex items-center justify-center text-[#ff3333] shrink-0 shadow-[0_0_15px_rgba(255,51,51,0.2)]">
                      <Star className="w-5 h-5 text-[#ff3333] fill-[#ff3333]" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-lg leading-tight">Real & Natural</h4>
                      <p className="text-[#999] text-[11px] font-semibold tracking-wide">Results</p>
                    </div>
                  </div>
                </div>

                {/* View Full Collage Button */}
                <div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center space-x-3 text-white bg-gradient-to-r from-[#ff3333] to-[#cc0000] hover:from-[#ff4d4d] hover:to-[#e60000] px-8 py-4 rounded-full font-black uppercase tracking-wider text-xs shadow-[0_0_30px_rgba(255,51,51,0.5)] hover:shadow-[0_0_45px_rgba(255,51,51,0.8)] hover:-translate-y-0.5 transition-all cursor-pointer group"
                  >
                    <span>VIEW FULL COLLAGE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column (7 Cols): The Large Interactive Before / After Split Slider */}
              <div className="lg:col-span-7">
                <div 
                  ref={sliderRef}
                  onMouseDown={onMouseDown}
                  onTouchStart={onMouseDown}
                  className="relative h-[420px] sm:h-[480px] md:h-[530px] rounded-2xl overflow-hidden border border-white/15 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.9)] cursor-ew-resize group/slider"
                >
                  {/* If active item has a dedicated split composite image like feat_perfect.jpg */}
                  {activeItem.id === 'trans-1' && activeItem.splitImg ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={activeItem.splitImg}
                        alt="Transformation Comparison"
                        fill
                        priority
                        className="object-cover object-center"
                      />
                      {/* Dynamic Interactive Split Overlay using clipPath */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src="/transitions/clean_feat_before.jpg"
                            alt="Before Transformation"
                            fill
                            className="object-cover object-left"
                          />
                        </div>
                      </div>

                      {/* Right After Portion */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src="/transitions/clean_feat_after.jpg"
                            alt="After Transformation"
                            fill
                            className="object-cover object-right"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Default Dynamic Split Slider for other items */
                    <div className="relative w-full h-full">
                      {/* After Image (Full background) */}
                      <Image
                        src={activeItem.afterImg}
                        alt={`${activeItem.name} After`}
                        fill
                        className="object-cover object-center"
                      />
                      {/* Before Image (Clipped Left portion) */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
                        }}
                      >
                        <Image
                          src={activeItem.beforeImg}
                          alt={`${activeItem.name} Before`}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  )}

                  {/* Top Subtle Gradients for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

                  {/* Left Label: BEFORE 116 KG */}
                  <div className="absolute bottom-6 left-6 z-20 pointer-events-none drop-shadow-lg">
                    <span className="text-white font-black text-xl sm:text-2xl uppercase tracking-wider block">
                      BEFORE
                    </span>
                    <span className="text-white/80 font-black text-xs sm:text-sm uppercase tracking-widest block">
                      {activeItem.beforeWeight}
                    </span>
                  </div>

                  {/* Right Label: AFTER 86 KG */}
                  <div className="absolute bottom-6 right-6 z-20 pointer-events-none text-right drop-shadow-lg">
                    <span className="text-[#ff3333] font-black text-xl sm:text-2xl uppercase tracking-wider block drop-shadow-[0_0_15px_rgba(255,51,51,0.6)]">
                      AFTER
                    </span>
                    <span className="text-white font-black text-xs sm:text-sm uppercase tracking-widest block">
                      {activeItem.afterWeight}
                    </span>
                  </div>

                  {/* Central Vertical Divider Line & Slider Circle Handle */}
                  <div 
                    className="absolute top-0 bottom-0 z-30 pointer-events-none transition-all duration-75"
                    style={{ left: `${sliderPos}%` }}
                  >
                    {/* Glowing Red Vertical Line */}
                    <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-[#ff3333] shadow-[0_0_15px_3px_rgba(255,51,51,0.9)]"></div>
                    
                    {/* Circular Red Slider Handle with <> */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#8b0000] border-2 border-white/90 shadow-[0_0_25px_rgba(255,51,51,1)] flex items-center justify-center text-white pointer-events-auto cursor-ew-resize group-hover/slider:scale-110 transition-transform">
                      <ChevronsLeftRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Subtle Top-Center Tag */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-white/80 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#ff3333]" />
                    <span>Drag Slider to Compare</span>
                  </div>
                </div>
              </div>

            </div>

            {/* ========================================================
                BOTTOM ROW: 4 Thumbnail Transformation Cards
               ======================================================== */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {TRANSFORMATION_ITEMS.slice(0, 4).map((card, idx) => {
                const isSelected = activeItem.id === card.id;
                return (
                  <div
                    key={card.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col bg-[#0f0505] aspect-[4/5] sm:aspect-[3/4] group ${
                      isSelected
                        ? 'border-2 border-[#ff3333] shadow-[0_0_25px_rgba(255,51,51,0.5)] scale-[1.02]'
                        : 'border border-white/10 hover:border-[#ff3333]/60 hover:scale-[1.01]'
                    }`}
                  >
                    {/* Main Image */}
                    <div className="relative flex-1 w-full overflow-hidden">
                      <Image
                        src={card.thumbnail}
                        alt={card.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                      
                      {/* Floating Badge (e.g. - 18 KG) */}
                      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-black/90 backdrop-blur-md border border-white/20 text-white font-black text-[10px] sm:text-xs px-3 py-1 rounded-full shadow-lg whitespace-nowrap block">
                          {card.weightLost}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Red Footer Bar (e.g. ⏳ 7.5 Months) */}
                    <div className="bg-gradient-to-r from-[#8a0f0f] via-[#b31414] to-[#8a0f0f] text-white py-2 px-2 flex items-center justify-center gap-1.5 shrink-0 border-t border-[#ff3333]/40">
                      <Hourglass className="w-3.5 h-3.5 text-white/90" />
                      <span className="font-black text-[10px] sm:text-xs uppercase tracking-wider leading-none">
                        {card.duration}
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
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-4 border-t border-white/10">
              
              {/* Category Filter Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center sm:justify-start">
                {/* Red Indicator Pill */}
                <div className="w-12 h-1 bg-[#ff3333] rounded-full shadow-[0_0_10px_#ff3333] hidden sm:block"></div>

                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-black uppercase tracking-wider transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'text-[#ff3333] drop-shadow-[0_0_10px_rgba(255,51,51,0.5)]'
                        : 'text-[#777] hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Bottom Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Transformation"
                  className="w-9 h-9 rounded-full bg-[#160808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Transformation"
                  className="w-9 h-9 rounded-full bg-[#160808] hover:bg-[#ff3333] border border-white/15 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================
            VIEW MODE 2: FULL COLLAGE VIEW
           ======================================================== */}
        {activeTab === 'collage' && (
          <div className="relative z-10 py-6">
            <div className="flex items-center justify-between mb-8">
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
                      src={item.splitImg || item.thumbnail}
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
                  src="/transitions/feat_perfect.jpg"
                  alt="Transitions Master Showcase"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {TRANSFORMATION_ITEMS.map((item) => (
                  <div key={item.id} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={item.splitImg || item.thumbnail}
                      alt={item.name}
                      fill
                      className="object-cover"
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
