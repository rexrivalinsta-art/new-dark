import React from 'react';

// Darkinator brand mark (white swirl) on an aurora-tinted rounded tile.
export default function Logo({ size = 32, withWord = true }) {
  return (
    <div className="flex items-center gap-2.5 group">
      <div className="relative shrink-0" style={{ height: size, width: size }}>
        <div className="absolute inset-0 rounded-[30%] bg-gradient-to-br from-violet-500/50 via-indigo-500/30 to-cyan-400/30 blur-[8px] opacity-70 group-hover:opacity-100 transition-opacity" />
        <div className="relative h-full w-full rounded-[30%] bg-[#07060c] border border-white/10 flex items-center justify-center overflow-hidden">
          <img
            src="/brand/darkinator-mark.png"
            alt="Darkinator"
            className="h-[78%] w-[78%] object-contain"
            draggable="false"
          />
        </div>
      </div>
      {withWord && (
        <span className="font-display text-xl font-extrabold tracking-tight">
          Dark<span className="text-gradient">inator</span>
        </span>
      )}
    </div>
  );
}
