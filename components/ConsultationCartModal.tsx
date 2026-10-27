'use client';

import React, { useState } from 'react';
import { useBooking, ALL_SERVICES } from '@/context/BookingContext';
import { X, ShieldAlert, CheckCircle2, ArrowRight, Phone, User, Mail, Sparkles, Loader2, AlertCircle, CreditCard, Lock } from 'lucide-react';

export default function ConsultationCartModal() {
  const { selectedService, isCartOpen, closeCart, consultationFee, selectService } = useBooking();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentId, setPaymentId] = useState('');

  if (!isCartOpen) return null;

  // Send email to Coach Souvik only after successful payment verification
  const sendBookingConfirmationEmail = async (successfulPaymentId: string) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '5a6414fe-c45f-44a0-af54-bca62bca36c1',
          subject: `🚨 [PAID ₹${consultationFee}] Consultation Booking: ${name} (${selectedService?.title || 'General Consultation'})`,
          from_name: 'Coached By Souvik - Payment & Booking System',
          name: name,
          email: email,
          phone: phone,
          selected_service: selectedService?.title || 'General Consultation',
          consultation_fee: `₹${consultationFee}`,
          payment_status: 'PAID (Verified via Razorpay)',
          razorpay_payment_id: successfulPaymentId,
          client_notes: notes || 'No extra notes provided',
          timestamp: new Date().toLocaleString()
        })
      });

      const result = await response.json();
      if (result.success) {
        setPaymentId(successfulPaymentId);
        setIsSuccess(true);
      } else {
        setErrorMessage(result.message || 'Payment received, but failed to send email. Please contact Coach Souvik with your Payment ID.');
      }
    } catch (err) {
      setErrorMessage('Payment received, but email dispatch failed. Please save your Payment ID: ' + successfulPaymentId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Please fill in your Name, Email, and Phone number before proceeding to payment.');
      return;
    }

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_TsppB7Kg56in8f';

    // If Razorpay SDK is not loaded yet
    if (typeof window === 'undefined' || !window.Razorpay) {
      setErrorMessage('Payment gateway is loading. Please check your internet connection and try again in 5 seconds.');
      return;
    }

    setIsSubmitting(true);

    try {
      const options = {
        key: razorpayKey,
        amount: consultationFee * 100, // Amount in paise (₹499 -> 49900 paise)
        currency: 'INR',
        name: 'Coached By Souvik',
        description: `Consultation Fee: ${selectedService?.title || '1-on-1 Strategy Session'}`,
        image: '/logo.jpg',
        prefill: {
          name: name,
          email: email,
          contact: phone
        },
        theme: {
          color: '#ff3333'
        },
        modal: {
          ondismiss: () => {
            setIsSubmitting(false);
            setErrorMessage('Payment cancelled. Your booking was not completed.');
          }
        },
        handler: async (response: { razorpay_payment_id: string }) => {
          // Trigger email only when payment is actually paid & confirmed
          await sendBookingConfirmationEmail(response.razorpay_payment_id);
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response: any) => {
        setIsSubmitting(false);
        setErrorMessage(response.error?.description || 'Payment failed. Please try a different payment method.');
      });
      rzp.open();
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err?.message || 'Could not initiate payment. Please verify your Razorpay Key ID.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end bg-black/80 backdrop-blur-md transition-all duration-300">
      {/* Background overlay click to close */}
      <div className="absolute inset-0" onClick={closeCart} />

      {/* Slide-in Drawer Container */}
      <div className="relative z-10 w-full max-w-xl h-full bg-[#080303] border-l border-[#ff3333]/30 shadow-[-20px_0_60px_rgba(255,51,51,0.15)] flex flex-col justify-between overflow-y-auto">
        
        {/* Top Header */}
        <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#080303]/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3333] shadow-[0_0_10px_#ff3333] animate-pulse"></span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff3333] block">Consultation Booking</span>
              <h2 className="text-xl font-black uppercase text-white tracking-tight">Your Strategy Call</h2>
            </div>
          </div>
          <button 
            onClick={closeCart}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-[#ff3333] text-white/70 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6 flex-1">

          {isSuccess ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#00e676]/10 border-2 border-[#00e676] flex items-center justify-center text-[#00e676] shadow-[0_0_30px_rgba(0,230,118,0.3)] animate-pulse">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-[#00e676]/10 border border-[#00e676]/40 text-[#00e676] text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                  Payment Confirmed • ₹{consultationFee} Received
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Booking Confirmed!</h3>
                <p className="text-sm text-[#a0a0a0] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-bold">{name}</span>. Your payment has been verified and your booking has been emailed directly to Coach Souvik at <strong className="text-white">coachsouvikbanerjee@gmail.com</strong>.
                </p>
                {paymentId && (
                  <div className="mt-4 inline-block bg-[#120505] border border-white/20 rounded-xl px-4 py-2 text-xs font-mono text-[#a0a0a0]">
                    Payment ID: <strong className="text-white">{paymentId}</strong>
                  </div>
                )}
              </div>
              <div className="bg-[#140606] border border-white/10 rounded-2xl p-6 text-left w-full space-y-2 text-xs text-[#a0a0a0]">
                <p className="font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ff3333]" /> Next Steps:
                </p>
                <p>1. Coach Souvik has received your booking details and payment confirmation.</p>
                <p>2. You will receive a WhatsApp message / Call on <strong className="text-white">{phone}</strong> within 12 hours to schedule your 1-on-1 strategy call.</p>
                <p>3. A calendar invitation will be dispatched to <strong className="text-white">{email}</strong>.</p>
              </div>
              <button 
                onClick={() => { setIsSuccess(false); closeCart(); }}
                className="w-full bg-[#ff3333] hover:bg-[#cc0000] text-white font-black py-4 rounded-xl uppercase tracking-widest text-xs transition-colors shadow-[0_0_20px_rgba(255,51,51,0.4)] cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          ) : (
            <>
              {/* Selected Service Card */}
              <div className="bg-[#120505] border border-[#ff3333]/40 rounded-2xl p-6 relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 right-0 px-3 py-1 bg-[#ff3333]/20 border-b border-l border-[#ff3333]/40 rounded-bl-xl text-[9px] font-black uppercase tracking-widest text-[#ff3333]">
                  Selected Service Topic
                </div>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center gap-2 text-[#ff3333]">
                    <span className="text-xs font-black tracking-widest uppercase">Service Focus:</span>
                  </div>
                  <h3 className="text-xl font-black uppercase text-white tracking-tight">
                    {selectedService?.title || 'General Consultation'}
                  </h3>
                  <p className="text-xs text-[#a0a0a0] leading-relaxed">
                    {selectedService?.description}
                  </p>
                </div>

                {/* Option to switch service right inside the cart */}
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] font-bold text-[#808080] uppercase tracking-wider">Change Topic:</span>
                  <select 
                    value={selectedService?.id || ''}
                    onChange={(e) => {
                      const found = ALL_SERVICES.find(s => s.id === e.target.value);
                      if (found) selectService(found);
                    }}
                    className="bg-[#080202] text-xs text-white border border-white/20 rounded-lg px-3 py-1.5 focus:border-[#ff3333] outline-none"
                  >
                    {ALL_SERVICES.map(svc => (
                      <option key={svc.id} value={svc.id} className="bg-[#080202] text-white">
                        {svc.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CRUCIAL CLARIFICATION NOTICE BOX */}
              <div className="bg-[#1a0808] border border-[#ff3333]/60 rounded-2xl p-5 flex items-start gap-4 shadow-[0_0_20px_rgba(255,51,51,0.15)]">
                <ShieldAlert className="w-6 h-6 text-[#ff3333] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <h4 className="font-black text-white uppercase tracking-wider flex items-center gap-2">
                    Payment & Consultation Clarification
                  </h4>
                  <p className="text-[#c0c0c0] leading-relaxed text-[11px]">
                    The fee charged is <strong className="text-white">strictly for the consultation call</strong>. It does <strong className="text-white">not</strong> include the cost of any actual coaching package or programme.
                  </p>
                  <p className="text-[#a0a0a0] leading-relaxed text-[11px] pt-1">
                    Your details will be emailed directly to Coach Souvik's inbox to coordinate your scheduled discussion.
                  </p>
                </div>
              </div>

              {errorMessage && (
                <div className="bg-red-950/60 border border-red-500 rounded-xl p-4 flex items-center gap-3 text-xs text-red-200">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Booking Information Form */}
              <form onSubmit={handleCheckout} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#a0a0a0] block">
                    Full Name <span className="text-[#ff3333]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#808080] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#120505] border border-white/10 focus:border-[#ff3333] text-white text-xs rounded-xl pl-10 pr-4 py-3.5 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#a0a0a0] block">
                      Contact / Phone Number <span className="text-[#ff3333]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#808080] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="tel" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#120505] border border-white/10 focus:border-[#ff3333] text-white text-xs rounded-xl pl-10 pr-4 py-3.5 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#a0a0a0] block">
                      Email Address <span className="text-[#ff3333]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#808080] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full bg-[#120505] border border-white/10 focus:border-[#ff3333] text-white text-xs rounded-xl pl-10 pr-4 py-3.5 outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#a0a0a0] block">
                    What are you looking to achieve? (Optional)
                  </label>
                  <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="Briefly describe your goals, current routine, or any questions for Coach Souvik..."
                    className="w-full bg-[#120505] border border-white/10 focus:border-[#ff3333] text-white text-xs rounded-xl p-3.5 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Price Breakdown */}
                <div className="bg-[#120505] rounded-2xl p-5 border border-white/5 space-y-3 pt-4">
                  <div className="flex justify-between text-xs text-[#a0a0a0]">
                    <span>Selected Service Cost:</span>
                    <span className="text-white font-semibold">Discussed on call (₹0 now)</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#a0a0a0]">
                    <span>1:1 Consultation Call Fee:</span>
                    <span className="text-white font-semibold">₹{consultationFee}</span>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                    <div>
                      <span className="text-sm font-black uppercase text-white tracking-wider block">Total Due Today</span>
                      <span className="text-[10px] text-[#808080]">Covers 30-min 1-on-1 Strategy Session</span>
                    </div>
                    <span className="text-2xl font-black text-[#ff3333] tracking-tight">₹{consultationFee}</span>
                  </div>
                </div>

                {/* Checkout Submit CTA */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#ff3333] to-[#cc0000] hover:from-[#ff1a1a] hover:to-[#b30000] disabled:opacity-60 text-white font-black py-4 px-6 rounded-2xl uppercase tracking-[0.15em] text-xs transition-all shadow-[0_0_30px_rgba(255,51,51,0.5)] hover:shadow-[0_0_40px_rgba(255,51,51,0.8)] flex items-center justify-center gap-3 group mt-4 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Opening Secure Payment...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 text-white" />
                      <span>Pay ₹{consultationFee} & Book Consultation</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 pt-2 text-[10px] text-[#707070]">
                  <Lock className="w-3 h-3 text-[#00e676]" />
                  <span>100% Secure Checkout via Razorpay • UPI, GPay, Cards & NetBanking</span>
                </div>
              </form>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 text-center text-[10px] text-[#707070] font-medium bg-[#060202]">
          Direct Email Dispatch • Coach Souvik Banerjee • coachsouvikbanerjee@gmail.com
        </div>

      </div>
    </div>
  );
}
