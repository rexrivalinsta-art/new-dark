import React from 'react';
import Navbar from '../components/Navbar';
import SwapCard from '../components/SwapCard';
import HowItWorks from '../components/HowItWorks';
import HelpButton from '../components/HelpButton';
import Footer from '../components/Footer';

export default function SwapPage() {
  return (
    <div className="min-h-screen bg-ambient">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5">
        <section className="pt-16 pb-8 text-center animate-fade-up">
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight">
            Swap from Solana
            <br />
            <span className="text-gradient">to another chain.</span>
          </h1>
          <p className="mt-4 text-white/50">Live quote, your review, a manual deposit.</p>
        </section>

        <section className="mx-auto max-w-xl animate-fade-up" style={{ animationDelay: '80ms' }}>
          <SwapCard />
        </section>

        <HowItWorks />
      </main>
      <Footer />
      <HelpButton />
    </div>
  );
}
