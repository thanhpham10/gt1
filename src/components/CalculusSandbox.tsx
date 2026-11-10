import React, { useState, useMemo } from 'react';
import { MathFormula } from './MathFormula';
import { RotateCcw } from 'lucide-react';

type SimMode = 'derivative' | 'integral' | 'taylor';

export const CalculusSandbox: React.FC = () => {
  const [mode, setMode] = useState<SimMode>('derivative');
  // Derivative state: f(x) = 0.25 x^3 - 0.5 x^2 + 1
  const [x0, setX0] = useState<number>(1.4);
  const [deltaX, setDeltaX] = useState<number>(1.0);
  // Integral state: f(x) = 0.2 x^2 + sin(x) + 1.2 on [0.5, 3.5]
  const [numRects, setNumRects] = useState<number>(6);
  const [riemannType, setRiemannType] = useState<'left' | 'midpoint' | 'right'>('midpoint');
  // Taylor state: sin(x) approximated by degree 1, 3, 5, 7
  const [taylorDegree, setTaylorDegree] = useState<1 | 3 | 5 | 7>(3);

  const handleReset = () => {
    setX0(1.4);
    setDeltaX(1.0);
    setNumRects(6);
    setRiemannType('midpoint');
    setTaylorDegree(3);
  };

  // Derivative calculations: f(x) = 0.5 * x^2 + 0.4
  const derivData = useMemo(() => {
    const f = (x: number) => 0.35 * x * x + 0.5;
    const df = (x: number) => 0.7 * x;
    const y0 = f(x0);
    const x1 = x0 + deltaX;
    const y1 = f(x1);
    const exactSlope = df(x0);
    const secantSlope = Math.abs(deltaX) > 1e-5 ? (y1 - y0) / deltaX : exactSlope;
    const dy = exactSlope * deltaX;
    const deltaY = y1 - y0;
    return { f, y0, x1, y1, exactSlope, secantSlope, dy, deltaY };
  }, [x0, deltaX]);

  // Integral calculations: f(x) = 4 - 0.35 * x^2 on [0, 3]
  const integralData = useMemo(() => {
    const a = 0;
    const b = 3;
    const f = (x: number) => 3.6 - 0.35 * x * x;
    // Exact integral of (3.6 - 0.35x^2) from 0 to 3: [3.6x - 0.35 x^3 / 3]_0^3 = 10.8 - 3.15 = 7.65
    const exactArea = 7.65;
    const dx = (b - a) / numRects;
    let approxArea = 0;
    const rects: { x: number; w: number; h: number; sampleX: number }[] = [];
    for (let i = 0; i < numRects; i++) {
      const leftX = a + i * dx;
      const sampleX =
        riemannType === 'left'
          ? leftX
          : riemannType === 'right'
            ? leftX + dx
            : leftX + dx / 2;
      const h = f(sampleX);
      approxArea += h * dx;
      rects.push({ x: leftX, w: dx, h, sampleX });
    }
    const relError = Math.abs((approxArea - exactArea) / exactArea) * 100;
    return { f, a, b, dx, exactArea, approxArea, rects, relError };
  }, [numRects, riemannType]);

  return (
    <section className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Phòng Thí Nghiệm Mô Phỏng Giải Tích 1 (Trọng tâm Đạo hàm & Tích phân)
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Tương tác trực tiếp với tham số để quan sát bản chất hình học của Cát tuyến → Tiếp tuyến, Tổng Riemann và Đa thức Taylor.
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg">
          <button
            type="button"
            onClick={() => setMode('derivative')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              mode === 'derivative'
                ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            1. Đạo hàm & Vi phân
          </button>
          <button
            type="button"
            onClick={() => setMode('integral')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              mode === 'integral'
                ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            2. Tích phân Riemann
          </button>
          <button
            type="button"
            onClick={() => setMode('taylor')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              mode === 'taylor'
                ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            3. Chuỗi Taylor / Maclaurin
          </button>
        </div>
      </div>

      {/* Two-Zone Sandbox Layout: 65% Interactive Canvas Left, 35% Control Deck Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Zone: Interactive Visual Stage */}
        <div className="lg:col-span-7 p-5 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-center bg-slate-50/30 dark:bg-slate-950/30">
          {mode === 'derivative' && (
            <svg viewBox="0 0 420 260" className="w-full h-64">
              {/* Coordinate axes */}
              <line x1="40" y1="225" x2="395" y2="225" stroke="#475569" strokeWidth="1.8" />
              <line x1="40" y1="240" x2="40" y2="15" stroke="#475569" strokeWidth="1.8" />
              {/* Function curve f(x) = 0.35 x^2 + 0.5 */}
              <path
                d={Array.from({ length: 70 }, (_, i) => {
                  const xv = i * 0.05;
                  const yv = derivData.f(xv);
                  const px = 40 + xv * 95;
                  const py = 225 - yv * 42;
                  return `${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`;
                }).join(' ')}
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.8"
              />
              {/* Tangent line at x0 */}
              {(() => {
                const xA = 0.1;
                const xB = 3.4;
                const yA = derivData.y0 + derivData.exactSlope * (xA - x0);
                const yB = derivData.y0 + derivData.exactSlope * (xB - x0);
                return (
                  <line
                    x1={40 + xA * 95}
                    y1={225 - yA * 42}
                    x2={40 + xB * 95}
                    y2={225 - yB * 42}
                    stroke="#dc2626"
                    strokeWidth="2.2"
                  />
                );
              })()}
              {/* Secant line through (x0, y0) and (x1, y1) */}
              {Math.abs(deltaX) > 0.02 && (
                <line
                  x1={40 + x0 * 95}
                  y1={225 - derivData.y0 * 42}
                  x2={40 + derivData.x1 * 95}
                  y2={225 - derivData.y1 * 42}
                  stroke="#059669"
                  strokeWidth="2"
                  strokeDasharray="5,4"
                />
              )}
              {/* Points P and Q */}
              <circle cx={40 + x0 * 95} cy={225 - derivData.y0 * 42} r="5" fill="#dc2626" />
              <circle cx={40 + derivData.x1 * 95} cy={225 - derivData.y1 * 42} r="4.5" fill="#059669" />
              <text x={40 + x0 * 95 - 28} y={225 - derivData.y0 * 42 - 10} fontSize="11" fontWeight="600" fill="#dc2626">
                P(x₀)
              </text>
              <text x={40 + derivData.x1 * 95 + 8} y={225 - derivData.y1 * 42 + 4} fontSize="11" fontWeight="600" fill="#059669">
                Q(x₀+Δx)
              </text>
            </svg>
          )}

          {mode === 'integral' && (
            <svg viewBox="0 0 420 260" className="w-full h-64">
              <line x1="45" y1="220" x2="390" y2="220" stroke="#475569" strokeWidth="1.8" />
              <line x1="45" y1="235" x2="45" y2="15" stroke="#475569" strokeWidth="1.8" />
              {/* Riemann rectangles */}
              {integralData.rects.map((r, idx) => {
                const px = 45 + r.x * 100;
                const pw = r.w * 100;
                const ph = r.h * 48;
                return (
                  <rect
                    key={idx}
                    x={px}
                    y={220 - ph}
                    width={pw}
                    height={ph}
                    fill="#38bdf8"
                    fillOpacity="0.32"
                    stroke="#0284c7"
                    strokeWidth="1.2"
                  />
                );
              })}
              {/* Exact curve f(x) = 3.6 - 0.35x^2 */}
              <path
                d={Array.from({ length: 65 }, (_, i) => {
                  const xv = i * 0.05;
                  const yv = integralData.f(xv);
                  const px = 45 + xv * 100;
                  const py = 220 - yv * 48;
                  return `${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`;
                }).join(' ')}
                fill="none"
                stroke="#0f172a"
                strokeWidth="2.6"
              />
              <text x="43" y="236" fontSize="11" fontWeight="600" fill="#334155">a = 0</text>
              <text x="335" y="236" fontSize="11" fontWeight="600" fill="#334155">b = 3</text>
            </svg>
          )}

          {mode === 'taylor' && (
            <svg viewBox="0 0 420 260" className="w-full h-64">
              <line x1="20" y1="130" x2="400" y2="130" stroke="#475569" strokeWidth="1.6" />
              <line x1="210" y1="240" x2="210" y2="20" stroke="#475569" strokeWidth="1.6" />
              {/* Exact sin(x) curve */}
              <path
                d={Array.from({ length: 100 }, (_, i) => {
                  const xv = -3.6 + i * 0.072;
                  const yv = Math.sin(xv);
                  const px = 210 + xv * 50;
                  const py = 130 - yv * 68;
                  return `${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`;
                }).join(' ')}
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.8"
              />
              {/* Taylor polynomial approximation */}
              <path
                d={Array.from({ length: 100 }, (_, i) => {
                  const xv = -3.4 + i * 0.068;
                  let yv = xv;
                  if (taylorDegree >= 3) yv -= Math.pow(xv, 3) / 6;
                  if (taylorDegree >= 5) yv += Math.pow(xv, 5) / 120;
                  if (taylorDegree >= 7) yv -= Math.pow(xv, 7) / 5040;
                  const clampedY = Math.max(-1.6, Math.min(1.6, yv));
                  const px = 210 + xv * 50;
                  const py = 130 - clampedY * 68;
                  return `${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`;
                }).join(' ')}
                fill="none"
                stroke="#dc2626"
                strokeWidth="2.4"
                strokeDasharray="6,4"
              />
              <text x="320" y="68" fontSize="12" fontWeight="600" fill="#0284c7">y = sin(x)</text>
              <text x="285" y="38" fontSize="12" fontWeight="600" fill="#dc2626">
                Đa thức Maclaurin T_{taylorDegree}(x)
              </text>
            </svg>
          )}
        </div>

        {/* Right Zone: Control & Concept Deck */}
        <div className="lg:col-span-5 p-5 flex flex-col justify-between gap-4">
          {mode === 'derivative' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-700 dark:text-sky-400">
                  ● HÀM SỐ: f(x) = 0.35x² + 0.5
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>

              <div>
                <label
                  htmlFor="slider-x0"
                  className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  <span>Hoành độ tiếp điểm x₀:</span>
                  <span className="font-mono tabular-nums font-semibold">{x0.toFixed(2)}</span>
                </label>
                <input
                  id="slider-x0"
                  type="range"
                  min="0.4"
                  max="2.2"
                  step="0.05"
                  value={x0}
                  onChange={(e) => setX0(parseFloat(e.target.value))}
                  className="w-full accent-sky-600"
                />
              </div>

              <div>
                <label
                  htmlFor="slider-dx"
                  className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  <span>Số gia đối số Δx = dx (kéo về 0 để hội tụ):</span>
                  <span className="font-mono tabular-nums font-semibold">{deltaX.toFixed(2)}</span>
                </label>
                <input
                  id="slider-dx"
                  type="range"
                  min="0.05"
                  max="1.4"
                  step="0.05"
                  value={deltaX}
                  onChange={(e) => setDeltaX(parseFloat(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1.5 text-xs font-mono tabular-nums">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Đạo hàm đúng f&apos;(x₀):</span>
                  <span className="font-semibold text-rose-600 dark:text-rose-400">
                    {derivData.exactSlope.toFixed(4)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Hệ số góc cát tuyến Δy/Δx:</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                    {derivData.secantSlope.toFixed(4)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Vi phân dy vs Số gia Δy:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    dy = {derivData.dy.toFixed(3)} · Δy = {derivData.deltaY.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {mode === 'integral' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-700 dark:text-sky-400">
                  ● TÍCH PHÂN: ∫₀³ (3.6 - 0.35x²) dx
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>

              <div>
                <label
                  htmlFor="slider-rects"
                  className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  <span>Số đoạn chia Riemann (n):</span>
                  <span className="font-mono tabular-nums font-semibold">{numRects} hình chữ nhật</span>
                </label>
                <input
                  id="slider-rects"
                  type="range"
                  min="2"
                  max="40"
                  step="1"
                  value={numRects}
                  onChange={(e) => setNumRects(parseInt(e.target.value, 10))}
                  className="w-full accent-sky-600"
                />
              </div>

              <div className="flex items-center gap-2">
                {(['left', 'midpoint', 'right'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setRiemannType(t)}
                    className={`flex-1 py-1.5 px-2 text-xs font-medium rounded border transition-colors ${
                      riemannType === t
                        ? 'bg-sky-600 text-white border-sky-600'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {t === 'left' ? 'Điểm Trái' : t === 'midpoint' ? 'Điểm Giữa' : 'Điểm Phải'}
                  </button>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1.5 text-xs font-mono tabular-nums">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Tổng Riemann S_n:</span>
                  <span className="font-semibold text-sky-700 dark:text-sky-400">
                    {integralData.approxArea.toFixed(4)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Tích phân đúng (Newton-Leibniz):</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                    {integralData.exactArea.toFixed(4)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Sai số tương đối:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    {integralData.relError.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          )}

          {mode === 'taylor' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-700 dark:text-sky-400">
                  ● XẤP XỈ MACLAURIN CỦA sin(x)
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>

              <div>
                <span className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Chọn bậc đa thức Taylor / Maclaurin:
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {([1, 3, 5, 7] as const).map((deg) => (
                    <button
                      key={deg}
                      type="button"
                      onClick={() => setTaylorDegree(deg)}
                      className={`py-1.5 text-xs font-semibold rounded border transition-colors ${
                        taylorDegree === deg
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      Bậc {deg}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs">
                <MathFormula
                  block
                  math={
                    taylorDegree === 1
                      ? 'T_1(x) = x'
                      : taylorDegree === 3
                        ? 'T_3(x) = x - \\frac{x^3}{3!}'
                        : taylorDegree === 5
                          ? 'T_5(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!}'
                          : 'T_7(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!}'
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
