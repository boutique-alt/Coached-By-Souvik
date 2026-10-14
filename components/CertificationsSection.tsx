'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, ExternalLink, X, ZoomIn, CheckCircle2, ChevronRight, Sparkles, Pause, Play } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  institution: string;
  credentialType: string;
  year: string;
  achievement?: string;
  image: string;
  description: string;
  tags: string[];
}

const CERTIFICATES: Certificate[] = [
  {
    id: 'bss-physiotherapy',
    title: 'Diploma in Physiotherapy & Activity Therapy',
    institution: 'Vidyasagar Institute of Allied Health Care Science / BSS',
    credentialType: 'Govt. of India Planning Commission Approved',
    year: '2020 – 2022',
    achievement: 'Distinction in Theory & Practicals',
    image: '/certificates/cert_physiotherapy_bss.jpg',
    description: 'Specialised training in clinical rehabilitation, biomechanics, movement correction, and physical activity therapy under the National Development Agency.',
    tags: ['Physiotherapy', 'Rehabilitation', 'Biomechanics']
  },
  {
    id: 'ad-biomechanics-kinesiology',
    title: 'Biomechanics & Kinesiology Course',
    institution: 'AD',
    credentialType: 'Movement Science & Applied Biomechanics',
    year: 'Certified',
    achievement: 'Biomechanics & Kinesiology',
    image: '/certificates/cert_ad_biomechanics.jpg',
    description: 'Specialised coursework in human movement biomechanics, kinesiology, joint kinematics, and functional exercise mechanics.',
    tags: ['Biomechanics', 'Kinesiology', 'Movement Science']
  },
  {
    id: 'boss-level2',
    title: 'Advanced Physique Transformation Master Trainer Level 2',
    institution: 'Team Boss Fitness Academy (BICP)',
    credentialType: 'International Certification Program',
    year: '2021',
    achievement: 'Grade: Credit',
    image: '/certificates/cert_boss_level2.jpg',
    description: 'Advanced protocols in hyper-individualised hypertrophy, peak week preparation, fat loss mechanics, and advanced athletic conditioning.',
    tags: ['Master Trainer', 'Physique Transformation', 'Contest Prep']
  },
  {
    id: 'boss-level1',
    title: 'Advanced Physique Transformation Master Trainer Level 1',
    institution: 'Team Boss Fitness Academy (BICP)',
    credentialType: 'International Certification Program',
    year: '2021',
    achievement: 'Grade: Credit',
    image: '/certificates/cert_boss_level1.jpg',
    description: 'Foundational master-level biomechanics, progressive overload architectures, and macro-periodization for physique athletes.',
    tags: ['Transformation', 'Strength', 'Conditioning']
  },
  {
    id: 'nfna-pt',
    title: 'Personal Trainer Level-1 (2nd Place / Rank 2)',
    institution: 'National Fitness and Nutrition Academy (NFNA) & Techno India Group',
    credentialType: 'Academic Fitness Academy',
    year: '2020',
    achievement: 'Achieved 2nd Place / Rank in Academy',
    image: '/certificates/cert_nfna_level1.jpg',
    description: 'Comprehensive fitness and nutrition science curriculum, graded 2nd place overall in practical coaching, client assessment, and nutritional programming.',
    tags: ['NFNA', 'Rank 2', 'Nutrition Academy']
  },
  {
    id: 'womens-course',
    title: "The Women's Course Certification",
    institution: 'Certified by Amreen Chadha',
    credentialType: 'Specialized Female Physiology',
    year: '2022',
    achievement: 'Certificate of Achievement',
    image: '/certificates/cert_womens_course.jpg',
    description: "In-depth understanding of female hormonal health, menstrual phase training periodization, pelvic floor health, and female-specific hypertrophy.",
    tags: ["Female Physiology", "Hormones", "Specialized"]
  },
  {
    id: 'optimum-diploma',
    title: 'Diploma Programme in Fitness, Sports & Personal Training',
    institution: 'Optimum Wellness Academy',
    credentialType: 'ISO 9001:2015 & Euro UK Accredited',
    year: '2023',
    achievement: 'Diploma Graduate',
    image: '/certificates/cert_optimum_diploma.jpg',
    description: 'Global standard sports conditioning, athlete lifestyle management, and periodised strength programming verified by international licensing bodies.',
    tags: ['Diploma', 'ISO Certified', 'Sports Training']
  },
  {
    id: 'optimum-cert',
    title: 'Certification Programme in Fitness, Sports & Personal Training',
    institution: 'Optimum Wellness Academy',
    credentialType: 'ISO 21001:2018 Certified',
    year: '2023',
    achievement: 'Certified Fitness Specialist',
    image: '/certificates/cert_optimum_certification.jpg',
    description: 'Advanced application of resistance training, metabolic conditioning, and tailored client coaching methodologies.',
    tags: ['Fitness Coaching', 'Euro UK', 'Sports Science']
  },
  {
    id: 'optimum-foundational',
    title: 'Foundational Programme in Fitness, Sports & Personal Training',
    institution: 'Optimum Wellness Academy',
    credentialType: 'Global Accreditation Forum Series (GAAFS)',
    year: '2023',
    achievement: 'Certified Professional',
    image: '/certificates/cert_optimum_foundational.jpg',
    description: 'Foundational human anatomy, exercise physiology, kinetic chain mechanics, and injury-prevention fundamentals.',
    tags: ['Exercise Physiology', 'Anatomy', 'Injury Prevention']
  }
];

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Combine items twice to build a seamless infinite loop
  const loopCertificates = [...CERTIFICATES, ...CERTIFICATES];

  return (
    <section id="certifications" className="py-32 bg-[#050101] relative border-t border-white/5 overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none z-0 flex justify-center opacity-[0.02]">
        <span className="text-[12rem] md:text-[20rem] font-black text-[#ff3333] leading-none whitespace-nowrap tracking-tighter">
          CERTIFICATIONS
        </span>
      </div>

      {/* Red ambient glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#ff3333] opacity-10 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#ff3333] text-xs font-bold tracking-[0.25em] uppercase">
                04 / Certifications
              </span>
              <div className="h-0.5 w-16 bg-[#ff3333]"></div>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] font-black uppercase tracking-tighter text-white leading-[0.92]">
              Backed By Science. <br />
              <span className="text-[#ff3333] drop-shadow-[0_0_20px_rgba(255,51,51,0.3)]">
                Proven By Certifications.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-[#a0a0a0] font-medium text-sm md:text-base leading-relaxed">
              Coaching is more than gym experience—it is a continuous commitment to physiotherapy, evidence-based biomechanics, and accredited sports science.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#ff3333]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hover / Touch carousel to pause & inspect</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- INFINITE MOVING MARQUEE TRACK --- */}
      <div 
        className="relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Subtle left & right edge fades for cinematic blend */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050101] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050101] to-transparent z-20 pointer-events-none"></div>

        <div className={`animate-marquee gap-3.5 sm:gap-6 px-2 sm:px-4 ${isPaused ? 'is-paused' : ''}`}>
          {loopCertificates.map((cert, idx) => (
            <div
              key={`${cert.id}-${idx}`}
              onClick={() => setActiveCert(cert)}
              className="group relative w-[230px] sm:w-[300px] md:w-[360px] shrink-0 bg-[#0a0505] rounded-xl sm:rounded-2xl border border-white/10 hover:border-[#ff3333]/80 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:shadow-[0_0_35px_rgba(255,51,51,0.25)] hover:-translate-y-1.5 select-none"
            >
              {/* Subtle Red Flare Accent inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3333]/5 rounded-bl-full pointer-events-none group-hover:bg-[#ff3333]/20 transition-colors"></div>

              {/* Certificate Thumbnail Preview */}
              <div className="relative aspect-[4/3] w-full bg-black/60 overflow-hidden border-b border-white/5">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter contrast-105"
                  sizes="(max-width: 768px) 320px, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] via-transparent to-transparent opacity-80"></div>
                
                {/* Year Badge */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[9px] font-black uppercase text-white tracking-widest z-10">
                  {cert.year}
                </div>

                {/* Hover Quick Zoom Pill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 z-10">
                  <span className="bg-[#ff3333] text-white text-[10px] font-black uppercase tracking-wider py-2 px-4 rounded-full flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-3.5 h-3.5" /> Tap To View Full Certificate
                  </span>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-3.5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                    {cert.tags.map(t => (
                      <span key={t} className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-white/5 text-[#808080] border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xs sm:text-base font-black uppercase text-white leading-snug mb-1 sm:mb-2 group-hover:text-[#ff3333] transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-[9.5px] sm:text-[11px] font-semibold text-[#b0b0b0] mb-1.5 sm:mb-2 leading-tight line-clamp-1 sm:line-clamp-none">
                    {cert.institution}
                  </p>

                  {cert.achievement && (
                    <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-[#ff3333] font-bold mb-2 sm:mb-3">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                      <span className="line-clamp-1">{cert.achievement}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Trigger */}
                <div className="pt-2 sm:pt-3 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#707070] group-hover:text-white transition-colors">
                  <span>Verified</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff3333] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-[#0e0404] border border-[#ff3333]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#ff3333]/10 border-2 border-[#ff3333] flex items-center justify-center shrink-0 text-[#ff3333] shadow-[0_0_20px_rgba(255,51,51,0.25)]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-black uppercase text-white tracking-wide">
                100% Certified & Science-Driven Coaching
              </h4>
              <p className="text-xs text-[#a0a0a0] max-w-xl font-medium mt-1 leading-relaxed">
                Every client's protocol is planned through clinical physiotherapy fundamentals, injury prevention mechanics, and proven physiology—not internet trends.
              </p>
            </div>
          </div>

          <a 
            href="#contact" 
            className="shrink-0 bg-white/5 hover:bg-[#ff3333] text-white border border-white/10 hover:border-[#ff3333] px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
          >
            Start Your Coaching
          </a>
        </div>
      </div>

      {/* --- FULLSCREEN LIGHTBOX MODAL --- */}
      {activeCert && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl transition-all">
          {/* Overlay click to close */}
          <div className="absolute inset-0" onClick={() => setActiveCert(null)} />

          <div className="relative z-10 max-w-4xl w-full bg-[#0a0505] border border-[#ff3333]/50 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,51,51,0.3)] flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#120505]">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ff3333] block">
                  Official Certificate Verification
                </span>
                <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-tight">
                  {activeCert.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#ff3333] text-white/70 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-4 md:p-6 flex-1 overflow-y-auto flex flex-col items-center justify-center bg-black/40">
              <div className="relative w-full max-w-2xl aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={activeCert.image}
                  alt={activeCert.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Details underneath image */}
              <div className="mt-6 w-full max-w-2xl bg-[#120505] p-5 rounded-xl border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[#808080] border-b border-white/5 pb-2">
                  <span>Issuing Institution:</span>
                  <span className="text-white font-bold">{activeCert.institution}</span>
                </div>
                <div className="flex justify-between items-center text-[#808080] border-b border-white/5 pb-2">
                  <span>Accreditation Standard:</span>
                  <span className="text-[#ff3333] font-bold">{activeCert.credentialType}</span>
                </div>
                <div className="flex justify-between items-center text-[#808080] border-b border-white/5 pb-2">
                  <span>Year of Issuance:</span>
                  <span className="text-white font-bold">{activeCert.year}</span>
                </div>
                <p className="text-[#b0b0b0] leading-relaxed pt-2">
                  {activeCert.description}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/5 bg-[#0a0505] flex justify-end">
              <button
                onClick={() => setActiveCert(null)}
                className="bg-[#ff3333] hover:bg-[#cc0000] text-white text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-xl transition-colors"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
