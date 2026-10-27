'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  fullDetails?: string;
  iconType: 'offline' | 'online' | 'plan' | 'nutrition' | 'mentor' | 'chat' | 'competition';
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'competition-prep',
    number: '00',
    title: 'Competition Prep',
    description: 'Specialised coaching for athletes preparing to compete, with a structured approach to training, nutrition, and performance.',
    fullDetails: 'Programmes are tailored to the athlete, their competitive goals, and the demands of their chosen sport or competition, with a focus on strength, conditioning, physique development, and competition readiness.',
    iconType: 'competition'
  },
  {
    id: 'in-person-coaching',
    number: '01',
    title: 'In-Person One-to-One Coaching',
    description: 'Personal coaching sessions conducted on the ground with direct physical guidance and technique correction.',
    fullDetails: 'Hands-on personal training sessions tailored to your exact physical mechanics, posture, training history, and daily energy levels.',
    iconType: 'offline'
  },
  {
    id: 'online-coaching',
    number: '02',
    title: 'Online One-to-One Coaching',
    description: 'Personalised coaching delivered online with structured guidance, check-ins, accountability, and progression tracking.',
    fullDetails: 'Remote 1-on-1 coaching offering high-frequency communication, video form analysis, progression adjustments, and lifestyle integration.',
    iconType: 'online'
  },
  {
    id: 'training-and-nutrition-plan',
    number: '03',
    title: 'Training and Nutrition Plan',
    description: 'A comprehensive personalised training programme accompanied by complete tailored nutrition guidance.',
    fullDetails: 'A dual-focus plan designed to maximize synergy between physical training stimuli and dietary recovery customized to your day-to-day schedule.',
    iconType: 'plan'
  },
  {
    id: 'nutrition-plan-only',
    number: '04',
    title: 'Nutrition Plan Only',
    description: 'A personalised nutrition plan based precisely on the individual\'s body composition, metabolic requirements, and goals.',
    fullDetails: 'Sustainable nutritional architecture focused on flexible macronutrient targets, micronutrient density, and practical food preferences without unrealistic restrictions.',
    iconType: 'nutrition'
  },
  {
    id: 'coach-mentorship',
    number: '05',
    title: 'Coach Mentorship',
    description: 'A mentorship service for fitness coaches who want to improve their coaching skills, learn from experience, and grow professionally.',
    fullDetails: 'For fitness professionals looking to evaluate their programming frameworks, deepen scientific coaching literacy, elevate personal branding, and scale their coaching career.',
    iconType: 'mentor'
  },
  {
    id: 'general-consultation',
    number: '06',
    title: 'General Consultation',
    description: 'An open consultation for anyone who wants to discuss fitness, nutrition, training, or related topics without committing upfront.',
    fullDetails: 'An open-floor strategy session. No prerequisites, no long-term commitments required—just direct clarity on whatever fitness challenge or questions you face.',
    iconType: 'chat'
  }
];

interface BookingContextType {
  selectedService: ServiceItem | null;
  isCartOpen: boolean;
  consultationFee: number;
  openBookingForService: (service: ServiceItem) => void;
  closeCart: () => void;
  openCart: () => void;
  selectService: (service: ServiceItem) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const consultationFee = 499; // Standard ₹499 Consultation Booking Fee

  const openBookingForService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsCartOpen(true);
  };

  const selectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    if (!selectedService) {
      // Default to general consultation if none selected
      setSelectedService(ALL_SERVICES[6]);
    }
    setIsCartOpen(true);
  };

  return (
    <BookingContext.Provider
      value={{
        selectedService,
        isCartOpen,
        consultationFee,
        openBookingForService,
        closeCart,
        openCart,
        selectService
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
