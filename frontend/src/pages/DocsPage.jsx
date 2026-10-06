import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Copy, Check, Network, ShieldCheck, Layers, KeyRound, Coins, CircleDollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HelpButton from '../components/HelpButton';

const CA = '7KEPApdbBMByrmqihz3bht2uMhFQcatjfSFQCKq66kH3';

const chains = ['Solana', 'Ethereum', 'Bitcoin', 'BNB Chain', 'Base', 'Arbitrum', 'Polygon', 'Avalanche', 'NEAR', 'Tron', 'Optimism', 'Litecoin', 'Zcash'];

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
    q: 'How do $DARK rewards work?',
    a: 'Hold at least 100,000 $DARK through every snapshot in a period to qualify. Your share is weighted by the lowest balance you held across those snapshots. Half of the creator fees received in wNEAR goes to qualifying holders; the other half is converted to ZEC and compounded in the creator wallet. ZEC payouts to holders are planned. Past distributions do not guarantee future payouts.',
  },
  {
    q: 'What is Phase 2?',
    a: 'Dark Pool. More soon. Follow @darkinatorswaps on X for the reveal.',
  },
  {
    q: 'What is Darkinator built on?',
    a: 'Privacy swap runs on the NEAR Intents 1Click API with confidential handling, and the planned trading terminal is being built on NEAR Intents too. The private route uses a separate routing provider. Every route needs its own live quote; a listed asset does not promise an executable route.',
  },
];

function Step({ n, title, body }) {
  return (
    <div className="glass glass-hover rounded-2xl p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/20 border border-white/10 text-sm font-semibold text-white">{n}</div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-white/50 leading-relaxed">{body}</p>
    </div>
  );
}

function SectionLabel({ children }) {
  return <div className="text-xs uppercase tracking-[0.2em] text-violet-300/70">{children}</div>;
}

export default function DocsPage() {
  const [copied, setCopied] = useState(false);
  const copyCA = () => { navigator.clipboard?.writeText(CA); setCopied(true); setTimeout(() => setCopied(false), 1500); };

  return (
    <div className="min-h-screen bg-ambient noise">
      <Navbar />
      <main className="mx-auto max-w-4xl px-5">
        {/* Hero */}
        <section className="relative pt-24 pb-10 text-center animate-fade-up">
          <div className="pointer-events-none absolute left-1/2 top-6 -z-0 h-56 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/20 blur-3xl animate-glow" />
          <SectionLabel>Documentation</SectionLabel>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-extrabold tracking-tight">You make the <span className="text-gradient">send.</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-white/55 leading-relaxed">
            Darkinator prepares the order and shows you the exact deposit. The transfer always comes from your own wallet — quote it, review it, then send.
          </p>
        </section>

        {/* How it works */}
        <section className="grid gap-5 sm:grid-cols-3">
          <Step n="1" title="Get a live quote" body="Pick what you send and where it lands. Quotes refresh automatically from live on-chain routes." />
          <Step n="2" title="Review and create" body="Check the receive estimate, fee and deposit address. Creating the order moves no funds." />
          <Step n="3" title="Deposit and track" body="Send the exact amount from your own Solana wallet, then follow the order to completion." />
        </section>

        {/* NEAR Intents tech */}
        <section id="near" className="mt-20 glass gradient-border rounded-3xl p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10">
              <Network className="h-5 w-5 text-violet-200" />
            </div>
            <div>
              <SectionLabel>The engine</SectionLabel>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">Built on NEAR Intents</h2>
            </div>
          </div>
          <p className="mt-5 text-white/60 leading-relaxed">
            Privacy swap is powered by the <span className="text-white">NEAR Intents 1Click API</span> — the cross-chain
            intents network. Instead of bridging by hand, you express an <span className="text-white">intent</span>: “swap this
            asset on Solana for that asset on another chain.” The 1Click API abstracts intent creation, solver coordination
            and execution into a single REST flow.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['Query', 'Fetch the supported source and destination tokens for the route.'],
              ['Quote', 'Request a live quote — rate, fee and estimated time for your amount.'],
              ['Fill', 'Send one deposit. A competitive network of solvers / market makers fills the intent and settles on the destination chain.'],
            ].map(([t, b], i) => (
              <div key={t} className="rounded-2xl bg-white/[0.03] border border-white/8 p-5">
                <div className="text-xs font-mono text-violet-300">0{i + 1}</div>
                <div className="mt-1 text-sm font-semibold">{t}</div>
                <div className="mt-1 text-sm text-white/50 leading-relaxed">{b}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-white/[0.03] border border-white/8 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold"><ShieldCheck className="h-4 w-4 text-cyan-300" /> Confidential Intents</div>
            <p className="mt-2 text-sm text-white/55 leading-relaxed">
              NEAR Intents can execute swaps on a private shard connected to mainnet through a <span className="text-white">Phala
              Trusted Execution Environment (TEE)</span>. Swap details — amounts and counterparties — stay private during
              settlement while solvers still compete for the order. It needs no client-side ZK proofs and supports selective
              disclosure for compliance.
            </p>
          </div>
        </section>

        {/* ZK / Zcash tech */}
        <section id="zk" className="mt-10 glass gradient-border rounded-3xl p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/25 to-violet-500/30 border border-white/10">
              <KeyRound className="h-5 w-5 text-cyan-200" />
            </div>
            <div>
              <SectionLabel>Zero knowledge</SectionLabel>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">Shielded settlement with Zcash</h2>
            </div>
          </div>
          <p className="mt-5 text-white/60 leading-relaxed">
            For the strongest privacy, a route can settle into <span className="text-white">ZEC</span> inside Zcash’s
            <span className="text-white"> Unified Shielded Pool</span>. Settling in the pool severs the on-chain link between
            your source and your destination, and gives you the pool’s anonymity set — hiding your activity from chain analysis.
          </p>
          <ol className="mt-6 space-y-3">
            {[
              ['Deposit', 'You create an intent to swap an asset (ETH, USDC, SOL…) for ZEC.'],
              ['Automatic swap', 'The 1Click API converts the input to ZEC (nep141:zec.omft.near).'],
              ['Shielded entry', 'The ZEC enters the Unified Shielded Pool, severing the link between source and destination.'],
              ['TEE verification', 'A Phala TEE verifies the swap status, confirms the recipient and generates a zk-SNARK proof.'],
              ['Claim', 'You claim the tokens with the proof — without revealing your identity, amount or source.'],
            ].map(([t, b], i) => (
              <li key={t} className="flex gap-4 rounded-2xl bg-white/[0.03] border border-white/8 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 border border-white/10 text-xs font-semibold">{i + 1}</span>
                <div>
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="text-sm text-white/50 leading-relaxed">{b}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-2xl bg-white/[0.03] border border-white/8 p-5">
            <div className="text-sm font-semibold">What is a zk-SNARK?</div>
            <p className="mt-2 text-sm text-white/55 leading-relaxed">
              A <span className="text-white">Zero-Knowledge Succinct Non-Interactive Argument of Knowledge</span>. It lets the
              network verify that a transaction is valid — the sender can spend the funds and the rules are followed —
              <span className="text-white"> without revealing</span> the sender’s address, the recipient’s address or the amount.
            </p>
          </div>
        </section>

        {/* Two live methods + Dark Pool */}
        <section className="mt-20">
          <SectionLabel>Beta, with boundaries</SectionLabel>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight">Two live methods</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <div className="glass glass-hover rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">Private route</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">Best live rate for swapping or bridging out of Solana with a manual deposit.</p>
            </div>
            <div className="glass glass-hover rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">Privacy swap</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">Confidential settlement on the NEAR Intents 1Click API. Includes a Solana refund address.</p>
            </div>
            <div className="glass rounded-2xl p-6 opacity-75">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/40"><Layers className="h-3.5 w-3.5" /> In development</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-white/70">Dark Pool</h3>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">Phase 2. More soon.</p>
            </div>
          </div>
        </section>

        {/* Public by default */}
        <section className="mt-20">
          <SectionLabel>Privacy, precisely</SectionLabel>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight">Public by default</h2>
          <p className="mt-3 text-white/55 leading-relaxed">A chain records everything by default. A private route changes part of that picture, not all of it — so here is the line.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['Still public', 'Your Solana deposit, its amount and the wallet it came from.'],
              ['Not shared with us', 'Your keys and your signature. You never connect a wallet to Darkinator.'],
              ['Depends on the route', 'How much of the onward path stays off the public record. No route guarantees anonymity.'],
            ].map(([t, b]) => (
              <div key={t} className="rounded-2xl bg-white/[0.03] border border-white/8 p-5">
                <div className="text-sm font-semibold">{t}</div>
                <div className="mt-1 text-sm text-white/50 leading-relaxed">{b}</div>
              </div>
            ))}
          </div>
        </section>

        {/* $DARK rewards */}
        <section id="rewards" className="mt-20 glass gradient-border rounded-3xl p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10">
              <Coins className="h-5 w-5 text-violet-200" />
            </div>
            <div>
              <SectionLabel>Check the record</SectionLabel>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">$DARK rewards</h2>
            </div>
          </div>
          <p className="mt-5 text-white/60 leading-relaxed">
            Creator fees from $DARK trading are collected in <span className="text-white">wNEAR</span>. Half is shared with
            qualifying holders, weighted by the lowest balance held across the period’s snapshots; half is converted to
            <span className="text-white"> ZEC</span> and compounded in the creator wallet.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['01', 'Fees arrive in wNEAR from $DARK trading.'],
              ['02', 'Half goes to holders. ZEC payouts are planned.'],
              ['03', 'Half is converted to ZEC and compounded in the creator wallet.'],
            ].map(([n, b]) => (
              <div key={n} className="rounded-2xl bg-white/[0.03] border border-white/8 p-5">
                <div className="font-display text-2xl font-extrabold text-gradient">{n}</div>
                <div className="mt-1 text-sm text-white/55 leading-relaxed">{b}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/40">Qualify by holding at least 100,000 $DARK through every snapshot in a period. Past distributions do not guarantee future payouts.</p>
        </section>

        {/* Supported chains */}
        <section id="chains" className="mt-20">
          <SectionLabel>Reach</SectionLabel>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight">Supported chains</h2>
          <p className="mt-2 text-sm text-white/50">Swap out from Solana to a growing set of networks. A listed asset does not promise an executable route — each pair needs its own live quote.</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {chains.map((c) => (
              <span key={c} className="chip rounded-full px-4 py-1.5 text-sm text-white/75">{c}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <SectionLabel>Before you send</SectionLabel>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight">Good to know</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group glass rounded-2xl px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white">
                  {f.q}
                  <span className="ml-4 text-violet-300 text-lg leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contract address */}
        <section className="mt-10 glass gradient-border rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-sm font-semibold"><CircleDollarSign className="h-4 w-4 text-violet-300" /> $DARK contract address (CA)</div>
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3">
            <code className="text-xs sm:text-sm break-all text-white/85">{CA}</code>
            <button onClick={copyCA} className="ml-auto shrink-0 inline-flex items-center gap-1.5 rounded-lg chip px-3 py-1.5 text-xs text-white/70 hover:text-white transition-colors">
              {copied ? <Check className="h-3.5 w-3.5 text-cyan-300" /> : <Copy className="h-3.5 w-3.5" />} {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </section>

        {/* CTA */}
        <section className="my-24 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">Start with a quote.</h2>
          <p className="mt-2 text-white/50">Nothing moves until you send.</p>
          <Link to="/swap" className="aurora-btn mt-6 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold">Open the app <ArrowRight className="h-4 w-4" /></Link>
        </section>
      </main>
      <Footer />
      <HelpButton />
    </div>
  );
}
