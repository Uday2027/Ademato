"use client"

import { cn } from "@/lib/utils"

interface WatchLoaderProps {
  className?: string
  size?: number
}

export function WatchLoader({ className, size = 100 }: WatchLoaderProps) {
  return (
    <div 
        className={cn("flex items-center justify-center", className)}
        style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        {/* Bezel / Case */}
        <circle cx="50" cy="50" r="48" fill="#F5F5F5" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="50" cy="50" r="45" fill="#1C1C1C" stroke="#D4AF37" strokeWidth="2" />

        {/* Hour Markers (Sticks) */}
        {[...Array(12)].map((_, i) => {
           const rotation = i * 30;
           return (
            <rect
              key={i}
              x="48.5"
              y="10"
              width="3"
              height="8"
              fill={i === 0 ? "#D4AF37" : "white"} // 12 o'clock gold
              transform={`rotate(${rotation} 50 50)`}
            />
           )
        })}

        {/* Branding Hint (Small Crown or Text area) */}
        <path d="M50 22L52 25H48L50 22Z" fill="#D4AF37" />
        
        {/* Minute Hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          className="origin-center animate-[spin_3s_linear_infinite]"
        />

        {/* Hour Hand */}
         <line
          x1="50"
          y1="50"
          x2="50"
          y2="30"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          className="origin-center animate-[spin_12s_linear_infinite]"
        />

        {/* Second Hand (The Sweeper) */}
        <g className="origin-center animate-[spin_1s_linear_infinite]">
             <line
                x1="50"
                y1="50"
                x2="50"
                y2="15"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
             />
              {/* Counterweight */}
             <line
                x1="50"
                y1="50"
                x2="50"
                y2="60"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
             />
             <circle cx="50" cy="50" r="2" fill="#D4AF37" />
        </g>
        
        {/* Center Pin */}
        <circle cx="50" cy="50" r="1.5" fill="#000" />
      </svg>
    </div>
  )
}
