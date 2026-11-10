import React, { useState } from 'react';
import { TikzDiagramData } from '../types/calculus';
import { Code2, Eye, Check, Copy } from 'lucide-react';

interface TikzVisualizerProps {
  diagram: TikzDiagramData;
}

export const TikzVisualizer: React.FC<TikzVisualizerProps> = ({ diagram }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyTikz = () => {
    navigator.clipboard.writeText(diagram.tikzCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const renderSvg = () => {
    switch (diagram.svgType) {
      case 'inverse-func':
        return (
          <svg viewBox="0 0 360 240" className="w-full max-w-md mx-auto h-56">
            {/* Grid */}
            <g stroke="#e2e8f0" strokeWidth="1">
              {[40, 80, 120, 160, 200, 240, 280, 320].map((x) => (
                <line key={`vx-${x}`} x1={x} y1={10} x2={x} y2={230} />
              ))}
              {[40, 80, 120, 160, 200].map((y) => (
                <line key={`hy-${y}`} x1={20} y1={y} x2={340} y2={y} />
              ))}
            </g>
            {/* Axes */}
            <line x1="20" y1="160" x2="340" y2="160" stroke="#334155" strokeWidth="1.8" />
            <line x1="140" y1="230" x2="140" y2="15" stroke="#334155" strokeWidth="1.8" />
            {/* y = x dashed line */}
            <line x1="60" y1="240" x2="290" y2="10" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,5" />
            <text x="292" y="24" fontSize="11" fill="#475569" fontStyle="italic">y = x</text>
            {/* y = e^x curve */}
            <path d="M 50 156 Q 115 152 140 120 T 195 20" fill="none" stroke="#0284c7" strokeWidth="2.6" />
            <text x="150" y="32" fontSize="12" fontWeight="600" fill="#0284c7">y = e^x</text>
            {/* y = ln x curve */}
            <path d="M 144 225 Q 150 180 180 160 T 310 105" fill="none" stroke="#dc2626" strokeWidth="2.6" />
            <text x="275" y="96" fontSize="12" fontWeight="600" fill="#dc2626">y = ln x</text>
            {/* Points (0,1) and (1,0) */}
            <circle cx="140" cy="120" r="4" fill="#0284c7" />
            <text x="102" y="118" fontSize="11" fill="#0284c7">(0, 1)</text>
            <circle cx="180" cy="160" r="4" fill="#dc2626" />
            <text x="182" y="176" fontSize="11" fill="#dc2626">(1, 0)</text>
          </svg>
        );

      case 'epsilon-delta':
        return (
          <svg viewBox="0 0 360 240" className="w-full max-w-md mx-auto h-56">
            {/* Epsilon & Delta bands */}
            <rect x="45" y="68" width="285" height="54" fill="#e0f2fe" opacity="0.7" />
            <rect x="165" y="20" width="60" height="185" fill="#fee2e2" opacity="0.65" />
            <rect x="165" y="68" width="60" height="54" fill="#ddd6fe" opacity="0.85" />
            {/* Axes */}
            <line x1="45" y1="205" x2="335" y2="205" stroke="#334155" strokeWidth="1.8" />
            <line x1="45" y1="220" x2="45" y2="15" stroke="#334155" strokeWidth="1.8" />
            {/* Curve y = f(x) */}
            <path d="M 65 180 Q 150 145 195 95 T 310 30" fill="none" stroke="#0284c7" strokeWidth="2.8" />
            <text x="285" y="25" fontSize="12" fontWeight="600" fill="#0284c7">y = f(x)</text>
            {/* Dashed projection lines */}
            <line x1="195" y1="95" x2="195" y2="205" stroke="#0f172a" strokeWidth="1.4" strokeDasharray="4,4" />
            <line x1="45" y1="95" x2="195" y2="95" stroke="#0f172a" strokeWidth="1.4" strokeDasharray="4,4" />
            <circle cx="195" cy="95" r="4.5" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
            <text x="191" y="220" fontSize="11" fontWeight="600" fill="#0f172a">a</text>
            <text x="148" y="220" fontSize="10" fill="#dc2626">a-δ</text>
            <text x="216" y="220" fontSize="10" fill="#dc2626">a+δ</text>
            <text x="28" y="99" fontSize="11" fontWeight="600" fill="#0f172a">L</text>
            <text x="12" y="72" fontSize="10" fill="#0284c7">L+ε</text>
            <text x="12" y="126" fontSize="10" fill="#0284c7">L-ε</text>
          </svg>
        );

      case 'tangent-secant':
        return (
          <svg viewBox="0 0 360 240" className="w-full max-w-md mx-auto h-56">
            <line x1="35" y1="205" x2="335" y2="205" stroke="#334155" strokeWidth="1.8" />
            <line x1="45" y1="220" x2="45" y2="15" stroke="#334155" strokeWidth="1.8" />
            {/* Curve y = f(x) */}
            <path d="M 60 185 Q 150 175 265 55" fill="none" stroke="#0284c7" strokeWidth="2.8" />
            <text x="225" y="45" fontSize="12" fontWeight="600" fill="#0284c7">y = f(x)</text>
            {/* Tangent line L(x) */}
            <line x1="75" y1="190" x2="305" y2="98" stroke="#dc2626" strokeWidth="2.2" />
            <text x="275" y="122" fontSize="11" fontWeight="600" fill="#dc2626">y = L(x)</text>
            {/* Point P(a, f(a)) at (125, 170) */}
            <circle cx="125" cy="170" r="4" fill="#0f172a" />
            <text x="72" y="162" fontSize="11" fontWeight="600" fill="#0f172a">P(a, f(a))</text>
            {/* Horizontal dx and vertical dy / Delta y */}
            <line x1="125" y1="170" x2="250" y2="170" stroke="#64748b" strokeDasharray="4,4" />
            <line x1="250" y1="73" x2="250" y2="205" stroke="#64748b" strokeDasharray="4,4" />
            <line x1="265" y1="120" x2="265" y2="170" stroke="#dc2626" strokeWidth="2" />
            <text x="272" y="150" fontSize="11" fontWeight="600" fill="#dc2626">dy = f&apos;(a)dx</text>
            <text x="175" y="185" fontSize="11" fill="#0f766e">dx = Δx</text>
          </svg>
        );

      case 'mean-value-theorem':
        return (
          <svg viewBox="0 0 360 240" className="w-full max-w-md mx-auto h-56">
            <line x1="35" y1="205" x2="335" y2="205" stroke="#334155" strokeWidth="1.8" />
            <line x1="45" y1="220" x2="45" y2="15" stroke="#334155" strokeWidth="1.8" />
            {/* Smooth concave curve */}
            <path d="M 80 165 Q 175 25 290 115" fill="none" stroke="#0284c7" strokeWidth="2.8" />
            {/* Secant line AB */}
            <line x1="80" y1="165" x2="290" y2="115" stroke="#0f766e" strokeWidth="1.8" strokeDasharray="5,5" />
            {/* Parallel tangent at c */}
            <line x1="105" y1="103" x2="265" y2="65" stroke="#dc2626" strokeWidth="2.2" />
            <circle cx="80" cy="165" r="4" fill="#0f172a" />
            <circle cx="290" cy="115" r="4" fill="#0f172a" />
            <circle cx="180" cy="85" r="4.5" fill="#dc2626" />
            <line x1="180" y1="85" x2="180" y2="205" stroke="#dc2626" strokeDasharray="3,3" />
            <text x="65" y="182" fontSize="11" fill="#0f172a">A(a, f(a))</text>
            <text x="275" y="134" fontSize="11" fill="#0f172a">B(b, f(b))</text>
            <text x="155" y="68" fontSize="11" fontWeight="600" fill="#dc2626">P(c, f(c))</text>
            <text x="176" y="220" fontSize="11" fontWeight="600" fill="#dc2626">c</text>
          </svg>
        );

      case 'riemann-sum':
        return (
          <svg viewBox="0 0 360 240" className="w-full max-w-md mx-auto h-56">
            {/* Riemann Rectangles */}
            {[
              { x: 70, h: 65 },
              { x: 110, h: 95 },
              { x: 150, h: 125 },
              { x: 190, h: 142 },
              { x: 230, h: 132 },
              { x: 270, h: 105 },
            ].map((r, i) => (
              <rect
                key={i}
                x={r.x}
                y={200 - r.h}
                width="40"
                height={r.h}
                fill="#bae6fd"
                stroke="#0284c7"
                strokeWidth="1.4"
              />
            ))}
            <line x1="35" y1="200" x2="340" y2="200" stroke="#334155" strokeWidth="1.8" />
            <line x1="45" y1="220" x2="45" y2="15" stroke="#334155" strokeWidth="1.8" />
            <path d="M 65 140 Q 195 20 315 100" fill="none" stroke="#1e3a8a" strokeWidth="2.8" />
            <text x="68" y="216" fontSize="11" fontWeight="600" fill="#0f172a">a</text>
            <text x="306" y="216" fontSize="11" fontWeight="600" fill="#0f172a">b</text>
            <text x="198" y="216" fontSize="11" fontWeight="600" fill="#dc2626">Δx</text>
          </svg>
        );

      case 'solid-revolution':
        return (
          <svg viewBox="0 0 360 240" className="w-full max-w-md mx-auto h-56">
            <line x1="25" y1="120" x2="340" y2="120" stroke="#334155" strokeWidth="1.6" />
            <line x1="55" y1="220" x2="55" y2="20" stroke="#334155" strokeWidth="1.6" />
            {/* Upper & lower profile curves */}
            <path d="M 90 85 Q 190 45 280 35" fill="none" stroke="#0284c7" strokeWidth="2.5" />
            <path d="M 90 155 Q 190 195 280 205" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="4,4" />
            {/* Left & Right ellipses */}
            <ellipse cx="90" cy="120" rx="10" ry="35" fill="none" stroke="#0284c7" strokeWidth="1.8" />
            <ellipse cx="280" cy="120" rx="18" ry="85" fill="#e0f2fe" fillOpacity="0.4" stroke="#0284c7" strokeWidth="2" />
            {/* Disk slice */}
            <ellipse cx="190" cy="120" rx="14" ry="64" fill="#fecaca" fillOpacity="0.65" stroke="#dc2626" strokeWidth="2" />
            <line x1="190" y1="120" x2="190" y2="56" stroke="#dc2626" strokeWidth="2" />
            <text x="196" y="92" fontSize="11" fontWeight="600" fill="#dc2626">R = f(x)</text>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 360 240" className="w-full max-w-md mx-auto h-56">
            <line x1="30" y1="120" x2="330" y2="120" stroke="#334155" strokeWidth="1.6" />
            <line x1="180" y1="220" x2="180" y2="20" stroke="#334155" strokeWidth="1.6" />
            <path
              d="M 45 175 C 100 40, 150 200, 180 120 C 210 40, 260 200, 315 65"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2.6"
            />
            <path
              d="M 65 195 C 115 70, 155 180, 180 120 C 205 60, 245 170, 295 45"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <text x="245" y="42" fontSize="11" fontWeight="600" fill="#0284c7">Đồ thị chuẩn TikZ</text>
          </svg>
        );
    }
  };

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50">
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          {diagram.caption}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setShowCode(!showCode)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            {showCode ? <Eye className="w-3.5 h-3.5" /> : <Code2 className="w-3.5 h-3.5" />}
            {showCode ? 'Xem Hình vẽ Vector' : 'Xem Mã nguồn TikZ'}
          </button>
          <button
            type="button"
            onClick={handleCopyTikz}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 rounded-md hover:bg-sky-100 transition-colors whitespace-nowrap"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Đã chép TikZ' : 'Copy TikZ'}
          </button>
        </div>
      </div>

      {showCode ? (
        <pre className="p-4 text-xs font-mono text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 overflow-x-auto leading-relaxed">
          <code>{diagram.tikzCode}</code>
        </pre>
      ) : (
        <div className="p-4 bg-white dark:bg-slate-900">{renderSvg()}</div>
      )}
    </div>
  );
};
