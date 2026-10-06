import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Wallet, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HelpButton from '../components/HelpButton';

const pillars = [
  { icon: ShieldCheck, title: 'No custody', body: 'Darkinator never holds your funds.' },
  { icon: Wallet, title: 'Manual deposit', body: 'Nothing moves until you send it yourself.' },
  { icon: Zap, title: 'Solana origin', body: 'Swap or bridge out from Solana to any chain.' },
];

const steps = [
  { n: '01', tag: 'QUOTE', title: 'Pick a route', body: 'Choose what you send and where it should land.' },
  { n: '02', tag: 'REVIEW', title: 'Check the details', body: 'See the estimate, the fee and the address before anything happens.' },
  { n: '03', tag: 'SEND', title: 'Deposit yourself', body: 'Send the exact amount from your own wallet, then track the order.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ambient">
      <Navbar />

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-5">
        <section className="pt-20 pb-10 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Live beta · Private swaps on Solana
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold leading-[1.05] tracking-tight">
            Private swaps.
            <br />
            <span className="text-white/50">Live on Solana.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-white/55">
            Quote it, review it, send it yourself. No custody, no account — you stay in control of every deposit.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              to="/swap"
              className="group inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-all"
            >
              Open Privacy swap
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/swap"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-all"
            >
              Private route
            </Link>
          </div>
        </section>

        {/* Pillars */}
        <section className="grid gap-4 sm:grid-cols-3 mt-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <p.icon className="h-6 w-6 text-white" />
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-white/50 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </section>

        {/* How it works */}
        <section className="mt-20">
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-white/40">How it works</div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight">You make the send.</h2>
            <p className="mx-auto mt-3 max-w-lg text-white/50">
              Darkinator prepares the order and shows you the exact deposit — the transfer always comes from your own wallet.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-white/25">{s.n}</span>
                  <span className="text-[0.65rem] uppercase tracking-widest text-white/40">{s.tag}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/50 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Two live routes */}
        <section className="mt-20 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
            <div className="text-xs uppercase tracking-widest text-white/40">Live · 01</div>
            <h3 className="mt-2 font-display text-2xl font-semibold">Privacy swap</h3>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              Confidential routing from Solana, built on the NEAR Intents 1Click API.
            </p>
            <Link to="/swap" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:gap-2.5 transition-all">
              Open Privacy swap <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
            <div className="text-xs uppercase tracking-widest text-white/40">Live · 02</div>
            <h3 className="mt-2 font-display text-2xl font-semibold">Private route</h3>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              Swap or bridge out from Solana with a manual deposit and the best live rate.
            </p>
            <Link to="/swap" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:gap-2.5 transition-all">
              Open private route <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="my-24 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Start with a quote. <span className="text-white/50">Decide from there.</span>
          </h2>
          <p className="mt-3 text-white/50">Nothing moves until you send.</p>
          <Link
            to="/swap"
            className="mt-7 inline-flex items-center gap-1.5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-all"
          >
            Launch app <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <Footer />
      <HelpButton />
    </div>
  );
}
