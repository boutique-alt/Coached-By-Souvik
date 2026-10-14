'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  tag: string;
  avatar: string;
  rating: number;
  badge?: string;
  salutation?: string;
  paragraphs: string[];
}

export const REVIEWS_DATA: Testimonial[] = [
  {
    id: 'priyanka-sen',
    name: 'Priyanka Sen',
    tag: 'Competitive Tennis Player • 2 Years with Souvik',
    avatar: '/priyanka_sen_avatar.jpg',
    rating: 5,
    badge: 'Athletic & Strength Training',
    salutation: 'Game-Changing On-Court Endurance',
    paragraphs: [
      "I've been working out with Souvik for two years now. We focus on strength training Monday to Friday, and on Saturday we do crazy HIIT sessions.",
      "As a competitive tennis player, this training made a huge difference in my game — especially my strength, endurance, stamina, and on-court movement.",
      "When I first came to the gym, my primary goal was to gain weight and build muscle. I've seen tremendous improvement and feel energetic every single day. Souvik is a truly exceptional coach and mentor."
    ]
  },
  {
    id: 'rachna-kedia',
    name: 'Rachna Kedia',
    tag: 'Strength & Knee Rehab • Hyrox Mumbai Athlete',
    avatar: '/rachna_kedia_avatar.jpg',
    rating: 5,
    badge: 'Knee Care & Strength Progress',
    salutation: 'Stronger, Confident & In Safe Hands',
    paragraphs: [
      "Coach Souvik has been instrumental in starting my journey towards fitness. Right from the beginning he was mindful of my requirements, and since I've always had trouble with my knee, he was extremely careful about it throughout my exercises, adjusting every movement so I never felt at risk.",
      "He is patient, attentive and genuinely invested in his clients' progress. He explains why we do what we do, checks in on how I'm feeling, and never lets me get away with half a rep. His encouragement and consistency have kept me motivated, and I can honestly say I feel stronger and more confident because of him.",
      "I'd recommend him wholeheartedly to anyone looking for a trainer who truly listens."
    ]
  },
  {
    id: 'soham',
    name: 'Soham',
    tag: 'Aesthetic Transformation • 95 kg → 77 kg',
    avatar: '/soham_avatar.jpg',
    rating: 5,
    badge: '18 kg Fat Loss & Muscle Building',
    salutation: 'The Perfect Craftsman of Aesthetic Physiques',
    paragraphs: [
      "Coach Souvik Banerjee is just the perfect craftsman of aesthetic physiques. I went from 95 kg down to 77 kg while building solid, lean muscle.",
      "You should at least train under him once to experience how he can grow your muscles right out of your shirts.",
      "If you're serious about your fitness journey, get that guy as your trainer. He's fantastic!"
    ]
  },
  {
    id: 'vivek-parhi',
    name: 'Vivek Parhi',
    tag: 'Hypertrophy & Strength Client • 3 Months',
    avatar: '/vivek_parhi_avatar.jpg',
    rating: 5,
    badge: '2kg Lean Muscle Gain in 3 Months',
    salutation: 'They Teach You WHY You Are Doing It',
    paragraphs: [
      "I believe the difference between any coach and a GOOD coach is their ability to question and improve the standard, conventional training protocols according to the needs of their trainee.",
      "That's exactly the kind of coach I'd like. The best coaches don't just tell you what to do. In three months of intense training, he helped me gain 2kg of lean muscle mass while boosting my strength capabilities in a way I never imagined possible.",
      "It is rare to see a coach pay such attention to a trainee. In fact, he taught me many new concepts he had learned over the years. The best coaches don't just tell you what to do. They teach you WHY you are doing it."
    ]
  },
  {
    id: 'akash-mallick',
    name: 'Akash Mallick',
    tag: 'Heel Pain Rehab & Exercise Recovery',
    avatar: '/akash_mallick_avatar.jpg',
    rating: 5,
    badge: 'Calcaneal Spur Rehab',
    salutation: 'Able to Walk & Exercise Properly Again',
    paragraphs: [
      "First of all I would like to thank you Souvik da. Only because of you today I am able to walk properly to a great extent. Since last couple of weeks I had some pain issue in my heels and I was very worried about it.",
      "I didn't understand what should I do, I was very scared that how it will be cured now. With your help I got to know about this heel problem which is also called as calcaneal spur. But by your consultation and proper guidance my heels are in much more better condition.",
      "Whatever you said I did the same. I am very much thankful to you for those remedies you have told me. I'm very much lucky to have you as my coach as well as an elder brother and also a good friend. Now I can do my regular exercises properly."
    ]
  },
  {
    id: 'pragna-johar',
    name: 'Pragna Johar',
    tag: 'Rehabilitation & Strength Client',
    avatar: '/pragna_johar_v3.jpg',
    rating: 5,
    badge: 'Knee Rehab • Avoided Surgery',
    salutation: 'Avoided Knee Surgery Through Strength',
    paragraphs: [
      "Doctors were advising me to undergo knee surgery, but I was determined to manage it without an operation. Another gym told me I had no glute or leg strength.",
      "When I came to Souvik, he immediately coached me through proper biomechanics and progressive loading.",
      "Within just 2 months, he had me doing 60 kg hip thrusts! I walk much better, my legs are strong, and I successfully avoided surgery. He's an exceptional coach."
    ]
  },
  {
    id: 'elakya',
    name: 'Elakya',
    tag: 'Lifestyle & Back Pain Recovery • 2 Years Client',
    avatar: '/elakya_avatar.jpg',
    rating: 5,
    badge: 'Chronic Back Pain Rehab & Lifestyle',
    salutation: 'From Bed Spasms to Hiking & Badminton',
    paragraphs: [
      "I've been training with Souvik for two years. During COVID, I had severe lower back pain and could hardly walk for a few hours without spasms.",
      "Through his strength training and nutrition guidance, my back pain completely recovered. Today, I'm hiking, playing badminton, and living an active, pain-free life.",
      "Fitness has now become as natural to my daily routine as brushing my teeth. Souvik helped me reach far beyond my original goals."
    ]
  },
  {
    id: 'supriya-swarup',
    name: 'Supriya Swarup',
    tag: 'Mental Health Counselor',
    avatar: '/supriya_swarup_avatar.jpg',
    rating: 5,
    badge: 'Trauma-Informed Strength Coaching',
    salutation: 'Movement Has Been Real Therapy',
    paragraphs: [
      "As a mental health counselor, movement has been real therapy for me. Souvik sir is genuinely trauma-informed — whenever something felt tough, he met me exactly where I was.",
      "Having had past injuries, I had a lot of fear. Souvik respected my boundaries while motivating me and pushing me safely to my potential.",
      "Over the last 8 months, I've built immense strength and endurance with barbells. I genuinely look forward to every workout."
    ]
  },
  {
    id: 'debojyoti',
    name: 'Debojyoti',
    tag: 'Health Recovery & Conditioning Client',
    avatar: '/debojyoti_avatar.jpg',
    rating: 5,
    badge: 'Post-Medical Stamina & Strength Rebuild',
    salutation: 'Game Changer for My Health Recovery',
    paragraphs: [
      "After medical issues last year, I had gained significant weight and my stamina was at an all-time low. Training with Souvik has been a total game changer.",
      "He pays incredible attention to form, detail, and positive motivation across strength and conditioning.",
      "My stamina is back, I've regained my old athletic form, and I look forward to every session. Highly recommended to anyone looking to level up."
    ]
  },
  {
    id: 'priyankar',
    name: 'Priyankar',
    tag: 'Fat Loss Transformation Client',
    avatar: '/priyankar_avatar.jpg',
    rating: 5,
    badge: '10+ kg Lost in 4 Months',
    salutation: '10 kg Down Without Starvation Diets',
    paragraphs: [
      "When I started at the gym, my weight was around 98–99 kg. In 4 months under Souvik's coaching, I am down to 87–88 kg.",
      "He gives 100% to every morning session. The best part was achieving this steady 10+ kg weight loss without starving on extreme, unsustainable diets.",
      "Souvik gave all he could give as a personal coach. Big thanks to him!"
    ]
  },
  {
    id: 'rajesh-prasad',
    name: 'Rajesh Prasad',
    tag: 'Transformation Client',
    avatar: '/rajesh_prasad_avatar.jpg',
    rating: 5,
    badge: '1:1 Coaching & Back Pain Recovery',
    salutation: 'Hi Souvik,',
    paragraphs: [
      "I wanted to take a moment to express my sincere appreciation and gratitude for the outstanding training experience I have had under your guidance.",
      "I've always been impressed by your professionalism. You are organized and ensure that every session is well-structured and focused on my goals.",
      "I've seen significant improvements in my fitness levels, strength, and overall well-being, and resolving chronic back pain."
    ]
  }
];

export default function ClientReviewCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = REVIEWS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative rounded-2xl bg-[#0a0505] border border-[#ff3333]/50 shadow-[0_20px_50px_rgba(255,51,51,0.1)] p-6 md:p-8 flex flex-col justify-between overflow-hidden min-h-[460px] group/review"
    >
      {/* Background Decorative Quote Mark */}
      <div className="absolute -top-4 -left-2 text-[8rem] font-black text-[#ff3333] leading-none opacity-15 select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="relative z-10">
        {/* Top Header: Stars & Review Switcher Arrows */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-[#ff3333]">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(255,51,51,0.5)]" />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#a0a0a0] font-black uppercase tracking-wider mr-1">
              Review {currentIndex + 1} of {REVIEWS_DATA.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-8 h-8 rounded-full bg-[#1c1816] hover:bg-[#ff3333] border border-white/10 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-8 h-8 rounded-full bg-[#1c1816] hover:bg-[#ff3333] border border-white/10 hover:border-[#ff3333] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Pill */}
        {current.badge && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#ff3333] bg-[#ff3333]/10 border border-[#ff3333]/30 px-2.5 py-0.5 rounded-full">
              <CheckCircle2 className="w-3 h-3" />
              {current.badge}
            </span>
          </div>
        )}

        {/* Review Text */}
        <div className="space-y-2.5 text-xs sm:text-[13px] text-[#c0c0c0] font-medium leading-relaxed max-h-[250px] overflow-y-auto pr-1">
          {current.salutation && (
            <p className="font-bold text-white text-xs sm:text-sm tracking-tight">{current.salutation}</p>
          )}
          {current.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      {/* Author Footer */}
      <div className="flex items-center justify-between mt-6 relative z-10 pt-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-[#ff3333] shrink-0 shadow-[0_0_15px_rgba(255,51,51,0.3)] bg-[#120808]">
            <Image
              src={current.avatar}
              alt={current.name}
              fill
              sizes="48px"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-sm leading-tight">{current.name}</span>
            <span className="text-[#a0a0a0] text-[9.5px] font-semibold tracking-wider uppercase">
              {current.tag}
            </span>
          </div>
        </div>

        {/* Small Switch Indicator Dots */}
        <div className="flex items-center gap-1">
          {REVIEWS_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === currentIndex ? 'w-4 bg-[#ff3333]' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
