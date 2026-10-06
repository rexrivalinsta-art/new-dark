import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HelpButton from '../components/HelpButton';

const faqs = [
  {
    q: 'Do I connect a wallet?',
    a: 'No. You review the quote, then send the deposit yourself from any Solana wallet. Darkinator never signs a transaction for you and never holds your funds.',
  },
  {
    q: 'What does "private route" mean here?',
    a: 'Routes are designed to keep more of your swap off the public record. Your Solana deposit is still public, and no route guarantees anonymity.',
  },
  {
    q: 'What are the two live methods?',
    a: 'Private route finds the best live rate for a swap or bridge out of Solana. Privacy swap runs on the NEAR Intents 1Click API with confidential handling. Every route needs its own live quote.',
  },
  {
    q: 'How long does a swap take?',
    a: 'Timing and availability vary with the live quote. Each quote shows an estimated time; you deposit within the countdown shown on your order.',
  },
  {
    q: 'Can I get a refund?',
    a: 'For Privacy swaps you provide a Solana refund address. If a swap cannot complete, funds return there.',
  },
];

const chains = ['Solana', 'Ethereum', 'Bitcoin', 'BNB Chain', 'Base', 'Arbitrum', 'Polygon', 'Avalanche', 'NEAR', 'Tron', 'Optimism', 'Litecoin'];

function Step({ n, title, body }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">{n}</div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/50 leading-relaxed">{body}</p>
    </div>
  );
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-ambient">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5">
        <section className="pt-20 pb-8 text-center animate-fade-up">
          <div className="text-xs uppercase tracking-widest text-white/40">How it works</div>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">You make the send.</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/55">
            Darkinator prepares the order and shows you the exact deposit. The transfer always comes from your own wallet — quote it, review it, then send.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <Step n="1" title="Get a live quote" body="Pick what you send and where it lands. Quotes refresh automatically from live on-chain routes." />
          <Step n="2" title="Review and create" body="Check the receive estimate, fee and deposit address. Creating the order moves no funds." />
          <Step n="3" title="Deposit and track" body="Send the exact amount from your own Solana wallet, then follow the order to completion." />
        </section>

        {/* Methods */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold tracking-tight">Two live methods</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-display text-lg font-semibold">Private route</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">Best live rate for swapping or bridging out of Solana with a manual deposit.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-display text-lg font-semibold">Privacy swap</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">Confidential settlement built on the NEAR Intents 1Click API. Includes a Solana refund address.</p>
            </div>
          </div>
        </section>

        {/* Supported chains */}
        <section id="chains" className="mt-14">
          <h2 className="font-display text-2xl font-bold tracking-tight">Supported chains</h2>
          <p className="mt-2 text-sm text-white/50">Swap out from Solana to a growing set of networks. A listed asset does not promise an executable route — each pair needs its own live quote.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {chains.map((c) => (
              <span key={c} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-white/70">{c}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14 mb-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white">
                  {f.q}
                  <span className="ml-4 text-white/40 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-24 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight">Start with a quote.</h2>
          <p className="mt-2 text-white/50">Nothing moves until you send.</p>
          <Link to="/swap" className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-all">
            Open the app <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
      <Footer />
      <HelpButton />
    </div>
  );
}
