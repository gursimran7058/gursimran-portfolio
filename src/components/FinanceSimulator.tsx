import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Target, Flame, Sparkles, Zap, Award } from 'lucide-react';
import { sound } from '../utils/audio';

interface FinanceSimulatorProps {
  onShowToast: (msg: string) => void;
}

export const FinanceSimulator: React.FC<FinanceSimulatorProps> = ({ onShowToast }) => {
  const [activeTab, setActiveTab] = useState<'sip' | 'dcf' | 'startup'>('sip');

  // SIP Calculator State
  const [monthlyInvest, setMonthlyInvest] = useState<number>(10000);
  const [years, setYears] = useState<number>(20);
  const [rate, setRate] = useState<number>(15);
  const [adjustInflation, setAdjustInflation] = useState<boolean>(false);

  // DCF Calculator State
  const [revenue, setRevenue] = useState<number>(500);
  const [ebitMargin, setEbitMargin] = useState<number>(22);
  const [waccRate, setWaccRate] = useState<number>(11);
  const [terminalGrowth, setTerminalGrowth] = useState<number>(5);

  // Startup Economics State
  const [cac, setCac] = useState<number>(1500);
  const [arpu, setArpu] = useState<number>(800);
  const [lifespanMonths, setLifespanMonths] = useState<number>(18);
  const [monthlyBurn, setMonthlyBurn] = useState<number>(12);
  const [cashInBank, setCashInBank] = useState<number>(180);

  // Calculations
  const effectiveRate = adjustInflation ? Math.max(1, rate - 6) : rate;
  const mRate = effectiveRate / 12 / 100;
  const totalMonths = years * 12;
  const totalInvested = monthlyInvest * totalMonths;
  const futureValue =
    monthlyInvest *
    ((Math.pow(1 + mRate, totalMonths) - 1) / mRate) *
    (1 + mRate);
  const wealthCreated = Math.max(0, futureValue - totalInvested);

  // Startup LTV
  const ltv = arpu * lifespanMonths;
  const ltvCacRatio = (ltv / Math.max(1, cac)).toFixed(1);
  const runwayMonths = (cashInBank / Math.max(1, monthlyBurn)).toFixed(1);

  // DCF Model
  const ebit = revenue * (ebitMargin / 100);
  const fcff = ebit * 0.75;
  const waccGrowthDiff = Math.max(0.1, waccRate - terminalGrowth) / 100;
  const intrinsicVal = (fcff * (1 + terminalGrowth / 100)) / waccGrowthDiff;

  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakh`;
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  const setSipPreset = (inv: number, y: number, r: number) => {
    setMonthlyInvest(inv);
    setYears(y);
    setRate(r);
    sound.playSuccess();
    onShowToast(`SIP Preset Loaded: ₹${inv.toLocaleString()}/mo @ ${r}% for ${y} yrs!`);
  };

  return (
    <section id="simulator" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neo-border">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neo-purple text-black text-xs font-mono font-extrabold border-1.5 border-black mb-2 shadow-[2px_2px_0px_#111115]">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE FINANCIAL LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-neo-text font-display">
            Wealth & Valuation Simulators
          </h2>
        </div>
        <p className="text-sm text-neo-muted max-w-md font-medium">
          Test real compound growth numbers, 3-statement DCF enterprise value, and startup unit economics.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => {
            setActiveTab('sip');
            sound.playClick(500, 'sine');
          }}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-extrabold neo-btn transition-all ${
            activeTab === 'sip' ? 'bg-neo-green text-black' : 'bg-neo-card text-neo-text'
          }`}
        >
          📈 SIP & Compounding Engine
        </button>
        <button
          onClick={() => {
            setActiveTab('dcf');
            sound.playClick(550, 'sine');
          }}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-extrabold neo-btn transition-all ${
            activeTab === 'dcf' ? 'bg-neo-purple text-black' : 'bg-neo-card text-neo-text'
          }`}
        >
          🎯 DCF Valuation Model
        </button>
        <button
          onClick={() => {
            setActiveTab('startup');
            sound.playClick(600, 'sine');
          }}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-extrabold neo-btn transition-all ${
            activeTab === 'startup' ? 'bg-neo-yellow text-black' : 'bg-neo-card text-neo-text'
          }`}
        >
          🔥 Startup Unit Economics
        </button>
      </div>

      {/* SIP Tab */}
      {activeTab === 'sip' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 neo-card p-6 sm:p-8 space-y-6">
            {/* Quick Presets */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-neo-muted flex-wrap">
              <span>Presets:</span>
              <button
                onClick={() => setSipPreset(5000, 15, 12)}
                className="px-2.5 py-1 rounded-lg bg-neo-bg border border-neo-border text-neo-text hover:bg-neo-green hover:text-black transition-colors"
              >
                🌱 Student Saver (₹5k)
              </button>
              <button
                onClick={() => setSipPreset(25000, 25, 15)}
                className="px-2.5 py-1 rounded-lg bg-neo-bg border border-neo-border text-neo-text hover:bg-neo-yellow hover:text-black transition-colors"
              >
                🚀 High Compound (₹25k)
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono font-bold text-neo-text">
                <span>Monthly Investment</span>
                <span className="text-emerald-500 font-extrabold">₹{monthlyInvest.toLocaleString('en-IN')} / mo</span>
              </div>
              <input
                type="range"
                min={1000}
                max={100000}
                step={1000}
                value={monthlyInvest}
                onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono font-bold text-neo-text">
                <span>Investment Horizon</span>
                <span>{years} Years</span>
              </div>
              <input
                type="range"
                min={3}
                max={35}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono font-bold text-neo-text">
                <span>Expected CAGR Return</span>
                <span>{rate}%</span>
              </div>
              <input
                type="range"
                min={8}
                max={22}
                step={0.5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t-2 border-neo-border text-xs font-mono font-bold text-neo-muted">
              <span>Adjust for 6% Inflation:</span>
              <button
                onClick={() => {
                  setAdjustInflation(!adjustInflation);
                  sound.playClick(450, 'sine');
                }}
                className={`px-3 py-1 rounded-lg border-2 border-neo-border text-xs font-mono font-bold transition-all ${
                  adjustInflation
                    ? 'bg-neo-green text-black'
                    : 'bg-neo-bg text-neo-muted'
                }`}
              >
                {adjustInflation ? 'ON (Real Value)' : 'OFF (Nominal Value)'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 neo-card p-6 sm:p-8 space-y-6">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neo-muted flex justify-between">
              <span>Wealth Accumulation</span>
              <span className="text-emerald-500 font-bold">{years} Years Horizon</span>
            </div>

            <div className="text-center space-y-1">
              <div className="text-xs font-mono text-neo-muted">Total Projected Corpus</div>
              <div className="text-4xl sm:text-5xl font-black font-mono text-neo-text shimmer-text">
                {formatINR(futureValue)}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="h-6 rounded-full bg-neo-bg overflow-hidden flex p-1 border-2 border-neo-border">
                <div
                  className="h-full bg-zinc-600 rounded-l-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (totalInvested / futureValue) * 100)}%` }}
                />
                <div
                  className="h-full bg-neo-green rounded-r-full transition-all duration-300"
                  style={{ width: `${Math.max(0, 100 - (totalInvested / futureValue) * 100)}%` }}
                />
              </div>

              <div className="flex justify-between text-xs font-mono font-bold text-neo-muted pt-1">
                <span>Principal: <strong className="text-neo-text">{formatINR(totalInvested)}</strong></span>
                <span>Compound Gains: <strong className="text-emerald-500">+{formatINR(wealthCreated)}</strong></span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neo-bg border-2 border-neo-border text-xs font-mono text-neo-muted flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>17 y/o Superpower:</strong> Starting your SIP early turns time into an exponential wealth multiplier!
              </span>
            </div>
          </div>
        </div>
      )}

      {/* DCF Tab */}
      {activeTab === 'dcf' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 neo-card p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono font-bold text-neo-text">
                <span>Annual Revenue (₹ Cr)</span>
                <span className="text-neo-purple font-extrabold">₹{revenue} Cr</span>
              </div>
              <input
                type="range"
                min={50}
                max={2000}
                step={50}
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono font-bold text-neo-text">
                <span>Operating Margin (% EBIT)</span>
                <span>{ebitMargin}%</span>
              </div>
              <input
                type="range"
                min={5}
                max={40}
                value={ebitMargin}
                onChange={(e) => setEbitMargin(Number(e.target.value))}
                className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-neo-text">
                  <span>WACC Rate</span>
                  <span>{waccRate}%</span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={18}
                  value={waccRate}
                  onChange={(e) => setWaccRate(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-neo-text">
                  <span>Terminal Growth</span>
                  <span>{terminalGrowth}%</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={7}
                  value={terminalGrowth}
                  onChange={(e) => setTerminalGrowth(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 neo-card p-6 sm:p-8 space-y-6">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neo-muted">
              DCF Enterprise Valuation
            </div>

            <div className="text-center space-y-1">
              <div className="text-xs font-mono text-neo-muted">Estimated Enterprise Value</div>
              <div className="text-4xl sm:text-5xl font-black font-mono text-neo-text shimmer-text">
                ₹{Math.round(intrinsicVal).toLocaleString('en-IN')} Cr
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-neo-bg border-2 border-neo-border text-center">
                <div className="text-[11px] font-mono text-neo-muted">Projected EBIT</div>
                <div className="text-lg font-bold font-mono text-neo-text">₹{Math.round(ebit)} Cr</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-neo-bg border-2 border-neo-border text-center">
                <div className="text-[11px] font-mono text-neo-muted">Est. FCFF</div>
                <div className="text-lg font-bold font-mono text-purple-500">₹{Math.round(fcff)} Cr</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Startup Economics Tab */}
      {activeTab === 'startup' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 neo-card p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-neo-text">
                  <span>Unit CAC</span>
                  <span>₹{cac}</span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={5000}
                  step={100}
                  value={cac}
                  onChange={(e) => setCac(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-neo-text">
                  <span>Monthly ARPU</span>
                  <span>₹{arpu}</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={3000}
                  step={50}
                  value={arpu}
                  onChange={(e) => setArpu(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono font-bold text-neo-text">
                <span>Customer Lifespan (Months)</span>
                <span>{lifespanMonths} Mo</span>
              </div>
              <input
                type="range"
                min={3}
                max={36}
                value={lifespanMonths}
                onChange={(e) => setLifespanMonths(Number(e.target.value))}
                className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>
          </div>

          <div className="lg:col-span-6 neo-card p-6 sm:p-8 space-y-6">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neo-muted">
              Startup Health Diagnostics
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-neo-bg border-2 border-neo-border space-y-1">
                <div className="text-xs font-mono text-neo-muted">LTV : CAC Ratio</div>
                <div className={`text-3xl font-black font-mono ${Number(ltvCacRatio) >= 3 ? 'text-emerald-500' : 'text-amber-500'}`}>
                  {ltvCacRatio}x
                </div>
                <div className="text-[10px] font-mono text-neo-muted">
                  {Number(ltvCacRatio) >= 3 ? '✅ VC Fundable (>3x)' : '⚠️ Low Margin'}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neo-bg border-2 border-neo-border space-y-1">
                <div className="text-xs font-mono text-neo-muted">Cash Runway</div>
                <div className={`text-3xl font-black font-mono ${Number(runwayMonths) >= 12 ? 'text-cyan-500' : 'text-rose-500'}`}>
                  {runwayMonths} Mo
                </div>
                <div className="text-[10px] font-mono text-neo-muted">
                  {Number(runwayMonths) >= 12 ? '✅ Safe Runway' : '⚠️ Need Capital'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
