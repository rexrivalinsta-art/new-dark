import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Wallet, Zap, Lock, Layers, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HelpButton from '../components/HelpButton';

const pillars = [
  { icon: ShieldCheck, title: 'No custody', body: 'Darkinator never holds your funds. Not for a second.' },
  { icon: Wallet, title: 'Manual deposit', body: 'Nothing moves until you send it yourself.' },
  { icon: Zap, title: 'Solana origin', body: 'Swap or bridge out from Solana to any supported chain.' },
];

const steps = [
  { n: '01', tag: 'QUOTE', title: 'Pick a route', body: 'Choose what you send and where it should land. Quotes refresh live.' },
  { n: '02', tag: 'REVIEW', title: 'Check the details', body: 'See the estimate, the fee and the deposit address before anything happens.' },
  { n: '03', tag: 'SEND', title: 'Deposit yourself', body: 'Send the exact amount from your own wallet, then track the order.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ambient noise">
      <Navbar />

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-5">
        <section className="relative pt-24 pb-14 text-center animate-fade-up">
          {/* floating aurora orb */}
          <div className="pointer-events-none absolute left-1/2 top-4 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/40 via-indigo-500/20 to-cyan-400/20 blur-3xl animate-glow" />
          <div className="relative inline-flex items-center gap-2 rounded-full glass gradient-border px-4 py-1.5 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 animate-pulse" />
            Live beta · Private swaps on Solana · Built on NEAR Intents
          </div>
          <h1 className="mt-7 font-display text-5xl sm:text-7xl font-extrabold leading-[1.02] tracking-tight">
            Private swaps.
            <br />
            <span className="text-gradient">Live on Solana.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/55">
            Quote it, review it, send it yourself. No custody, no account — you stay in control of every deposit.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/swap" className="aurora-btn group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold">
              Open Privacy swap
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link to="/swap" className="inline-flex items-center gap-2 rounded-xl glass gradient-border px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-all">
              Private route
            </Link>
          </div>
          <p className="mt-5 text-xs text-white/35">Creating an order moves no funds · live on-chain quotes</p>
        </section>

        {/* Pillars */}
        <section className="grid gap-5 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="glass glass-hover gradient-border rounded-2xl p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10">
                <p.icon className="h-5 w-5 text-violet-200" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-white/50 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </section>

        {/* How it works */}
        <section className="mt-24">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-violet-300/70">How it works</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight">You make the send.</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/50">
              Darkinator prepares the order and shows you the exact deposit — the transfer always comes from your own wallet.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="glass glass-hover rounded-2xl p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold text-gradient">{s.n}</span>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white/35">{s.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-white/50 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Public by default */}
        <section className="mt-24 glass gradient-border rounded-3xl p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-violet-300/70">Privacy, precisely</div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">Public by default.</h2>
              <p className="mt-4 text-white/55 leading-relaxed">
                A chain records everything by default. A private route changes part of that picture, not all of it — so here is the line.
              </p>
            </div>
            <div className="space-y-3">
              {[
                ['Still public', 'Your Solana deposit, its amount and the wallet it came from.'],
                ['Not shared with us', 'Your keys and your signature. You never connect a wallet to Darkinator.'],
                ['Depends on the route', 'How much of the onward path stays off the public record. No route guarantees anonymity.'],
              ].map(([t, b]) => (
                <div key={t} className="flex gap-3 rounded-2xl bg-white/[0.03] border border-white/8 p-4">
                  <Lock className="h-4 w-4 mt-0.5 text-violet-300 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold">{t}</div>
                    <div className="text-sm text-white/50 leading-relaxed">{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two live routes */}
        <section className="mt-24">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-violet-300/70">Beta, with boundaries</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight">Two live routes.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <div className="glass glass-hover gradient-border rounded-3xl p-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300"><Sparkles className="h-3.5 w-3.5" /> Live · 01</div>
              <h3 className="mt-3 font-display text-2xl font-semibold">Privacy swap</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">Confidential routing from Solana, built on the NEAR Intents 1Click API.</p>
              <Link to="/swap" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 hover:gap-2.5 transition-all">Open Privacy swap <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="glass glass-hover gradient-border rounded-3xl p-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300"><Sparkles className="h-3.5 w-3.5" /> Live · 02</div>
              <h3 className="mt-3 font-display text-2xl font-semibold">Private route</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">Swap or bridge out from Solana with a manual deposit and the best live rate.</p>
              <Link to="/swap" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 hover:gap-2.5 transition-all">Open private route <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="glass rounded-3xl p-7 opacity-80">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/40"><Layers className="h-3.5 w-3.5" /> In development · 03</div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white/70">Dark Pool</h3>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">Phase 2. More soon. Follow @darkinatorswaps on X for the reveal.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="my-28 relative overflow-hidden rounded-3xl glass gradient-border p-10 sm:p-16 text-center">
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-400/20 blur-3xl" />
          <h2 className="relative font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Start with a quote. <span className="text-gradient">Decide from there.</span>
          </h2>
          <p className="relative mt-4 text-white/50">Nothing moves until you send.</p>
          <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/swap" className="aurora-btn inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold">Launch app <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/docs" className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-all">How it works</Link>
          </div>
        </section>
      </main>

      <Footer />
      <HelpButton />
    </div>
  );
}
