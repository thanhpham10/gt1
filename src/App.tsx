/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ALL_CHAPTERS } from './data/allChapters';
import { QUICK_FORMULA_CATEGORIES } from './data/quickFormulas';
import {
  generateFullLatexDocument,
  generateChapterLatex,
} from './utils/latexGenerator';
import { MathFormula, MathProse } from './components/MathFormula';
import { TikzVisualizer } from './components/TikzVisualizer';
import { CalculusSandbox } from './components/CalculusSandbox';
import { ChapterQuizSection } from './components/ChapterQuizSection';
import { QuickFormulaModal } from './components/QuickFormulaModal';
import { LatexStudioExporter } from './components/LatexStudioExporter';
import {
  Download,
  Copy,
  Check,
  BookOpen,
  ChevronRight,
  Compass,
  FileCode2,
} from 'lucide-react';

export default function App() {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(3); // Default to Chapter 3 (Derivatives Focus) or user can pick 1..11
  const [copiedChapterId, setCopiedChapterId] = useState<number | null>(null);

  const activeChapter =
    ALL_CHAPTERS.find((c) => c.id === selectedChapterId) || ALL_CHAPTERS[0];

  const handleDownloadFullLatex = () => {
    const tex = generateFullLatexDocument(ALL_CHAPTERS, QUICK_FORMULA_CATEGORIES);
    const blob = new Blob([tex], { type: 'text/x-tex;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Giai_Tich_1_UET_MAT1050.tex';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyChapterLatex = (chapterId: number) => {
    const ch = ALL_CHAPTERS.find((c) => c.id === chapterId);
    if (!ch) return;
    const tex = generateChapterLatex(ch);
    navigator.clipboard.writeText(tex);
    setCopiedChapterId(chapterId);
    setTimeout(() => setCopiedChapterId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Strict 3-Zone Top Navigation Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between gap-8 px-6 py-3.5 bg-white/95 backdrop-blur border-b border-slate-200">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
        >
          UET.MAT1050 — Giải Tích 1 LaTeX
        </a>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <a
            href="#latex-exporter"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Xuất File LaTeX
          </a>
          <a
            href="#chapter-explorer"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Nội Dung 11 Chương
          </a>
          <a
            href="#interactive-sandbox"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Mô Phỏng Đạo Hàm &amp; Tích Phân
          </a>
          <a
            href="#quick-formulas"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Bảng Tra Cứu Công Thức
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={handleDownloadFullLatex}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Tải File .TEX Đầy Đủ
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main id="top" className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 space-y-10 flex-1">
        {/* 1. Primary Focal Point: Full LaTeX Document Exporter & Source Code */}
        <LatexStudioExporter onDownloadFullTex={handleDownloadFullLatex} />

        {/* 2. Chapter-by-Chapter Interactive Textbook & LaTeX Explorer */}
        <section
          id="chapter-explorer"
          aria-labelledby="chapter-explorer-heading"
          className="space-y-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <p className="text-xs font-semibold text-sky-700">
                ĐỀ CƯƠNG CHI TIẾT HỌC PHẦN GIẢI TÍCH 1 (TRƯỜNG ĐẠI HỌC CÔNG NGHỆ - ĐHQGHN)
              </p>
              <h1
                id="chapter-explorer-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1"
              >
                Hệ Thống Kiến Thức, Hình Vẽ TikZ &amp; Trắc Nghiệm Theo Từng Chương
              </h1>
            </div>
            <p className="text-xs text-slate-600">
              Giáo trình chuẩn: <em>James Stewart, Calculus: Early Transcendentals (9th Ed.)</em> · 15 Buổi học
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar: 11 Chapters Navigation */}
            <aside
              aria-label="Danh sách 11 chương Giải tích 1"
              className="lg:col-span-4 bg-white border border-slate-200 rounded-xl overflow-hidden lg:sticky lg:top-20"
            >
              <div className="px-4 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  MỤC LỤC 11 CHƯƠNG (15 BUỔI)
                </span>
                <span className="text-xs text-slate-500 font-mono tabular-nums">
                  UET.MAT1050
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {ALL_CHAPTERS.map((ch) => {
                  const isActive = ch.id === activeChapter.id;
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setSelectedChapterId(ch.id)}
                      className={`w-full text-left px-4 py-3 transition-colors flex items-start justify-between gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-sky-50/90 text-sky-900 font-semibold'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <span>{ch.title}</span>
                        </div>
                        <div className="text-xs text-slate-500">
                          {ch.sessionRange} · {ch.englishTitle}
                          {ch.isFocusChapter ? ' · Trọng tâm Đạo hàm / Tích phân' : ''}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 mt-1 shrink-0 transition-transform ${
                          isActive ? 'text-sky-700 translate-x-0.5' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Right Column: Active Chapter Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Chapter Header & Mini Table of Contents */}
              <article className="bg-white border border-slate-200 rounded-xl p-6 space-y-5">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-4">
                  <div className="space-y-1">
                    <div className="text-xs text-slate-500">
                      <span>{activeChapter.sessionRange}</span>
                      <span className="mx-1.5" aria-hidden="true">·</span>
                      <span>{activeChapter.englishTitle}</span>
                      {activeChapter.isFocusChapter && (
                        <>
                          <span className="mx-1.5" aria-hidden="true">·</span>
                          <span className="font-semibold text-sky-700">
                            Chuyên đề Trọng tâm Đạo hàm &amp; Tích phân
                          </span>
                        </>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {activeChapter.title}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyChapterLatex(activeChapter.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {copiedChapterId === activeChapter.id ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <FileCode2 className="w-3.5 h-3.5" />
                    )}
                    {copiedChapterId === activeChapter.id
                      ? `Đã chép LaTeX Chương ${activeChapter.id}!`
                      : `Copy Mã LaTeX Chương ${activeChapter.id}`}
                  </button>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeChapter.overview}
                </p>

                {/* Mini Table of Contents at the start of each chapter */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-sky-700" />
                      Mục Lục Nhanh Trong Chương {activeChapter.id}
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {activeChapter.tableOfContents.map((item) => (
                        <li key={item.code}>
                          <a
                            href={`#sub-${activeChapter.id}-${item.code}`}
                            className="hover:text-sky-700 hover:underline"
                          >
                            <strong className="font-mono text-sky-800 mr-1.5">
                              [{item.code}]
                            </strong>
                            {item.title}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href={`#tikz-section-${activeChapter.id}`}
                          className="hover:text-sky-700 hover:underline font-medium"
                        >
                          [TikZ] Hình vẽ minh họa &amp; Ứng dụng thực tế
                        </a>
                      </li>
                      <li>
                        <a
                          href={`#quiz-heading-${activeChapter.id}`}
                          className="hover:text-sky-700 hover:underline font-medium"
                        >
                          [Quiz] Bài kiểm tra trắc nghiệm &amp; Lời giải chi tiết
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-emerald-700" />
                      Chuẩn Đầu Ra Buổi Học (LLO - Đề cương UET)
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                      {activeChapter.learningOutcomes.map((llo, i) => (
                        <li key={i}>• {llo}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              {/* Detailed Subsections: Formulas, Notes & Worked Examples */}
              <div className="space-y-6">
                {activeChapter.subSections.map((sub) => (
                  <section
                    key={sub.code}
                    id={`sub-${activeChapter.id}-${sub.code}`}
                    className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
                  >
                    <div className="border-b border-slate-100 pb-3">
                      <span className="text-xs font-mono font-bold text-sky-700">
                        Mục {sub.code}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                        {sub.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                        {sub.summary}
                      </p>
                    </div>

                    {/* Key Mathematical Formulas */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-slate-800">
                        CÔNG THỨC TOÁN HỌC TRỌNG TÂM &amp; CHÚ GIẢI:
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {sub.keyFormulas.map((kf, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-lg bg-slate-50/90 border border-slate-200 space-y-2"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-slate-800">
                                {kf.label}
                              </span>
                              <button
                                type="button"
                                onClick={() => navigator.clipboard.writeText(kf.latex)}
                                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-sky-700"
                                title="Sao chép công thức LaTeX"
                              >
                                <Copy className="w-3 h-3" /> LaTeX
                              </button>
                            </div>
                            <div className="py-1 text-slate-900 overflow-x-auto">
                              <MathFormula block math={kf.latex} />
                            </div>
                            {kf.note && (
                              <p className="text-xs text-slate-600 italic">
                                Chú giải: {kf.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Detailed Notes */}
                    {sub.detailedNotes.length > 0 && (
                      <div className="p-3.5 rounded-lg bg-amber-50/50 border border-amber-200/80 space-y-1.5">
                        <span className="text-xs font-bold text-amber-900">
                          Lưu ý phương pháp &amp; kinh nghiệm giải nhanh:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-700 leading-relaxed">
                          {sub.detailedNotes.map((note, idx) => (
                            <li key={idx}>• {note}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Worked Example */}
                    <div className="p-5 rounded-lg bg-emerald-50/40 border border-emerald-200/90 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-900">
                          VÍ DỤ MINH HỌA ({sub.code}): {sub.example.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-800 leading-relaxed">
                        <strong>Đề bài: </strong>
                        <MathProse text={sub.example.problem} />
                      </p>
                      {sub.example.problemMath && (
                        <div className="bg-white/90 px-3 py-1.5 rounded border border-emerald-100">
                          <MathFormula block math={sub.example.problemMath} />
                        </div>
                      )}
                      <div className="space-y-1.5 text-xs text-slate-700">
                        <strong className="text-slate-900">Các bước giải chi tiết:</strong>
                        <ol className="list-decimal list-inside space-y-1">
                          {sub.example.solutionSteps.map((st, idx) => (
                            <li key={idx}>{st}</li>
                          ))}
                        </ol>
                      </div>
                      <div className="space-y-2 bg-white p-3.5 rounded-lg border border-emerald-200/70">
                        {sub.example.solutionMath.map((mLine, idx) => (
                          <MathFormula key={idx} block math={mLine} />
                        ))}
                      </div>
                      <p className="text-xs font-semibold text-emerald-900">
                        ⇒ Kết luận: <MathProse text={sub.example.conclusion} />
                      </p>
                    </div>
                  </section>
                ))}
              </div>

              {/* TikZ Diagram & Real-World Optimization Application */}
              <div id={`tikz-section-${activeChapter.id}`} className="space-y-6">
                <TikzVisualizer diagram={activeChapter.tikzDiagram} />

                <section className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
                  <div className="text-xs text-sky-700 font-semibold">
                    ỨNG DỤNG THỰC TẾ &amp; TỐI ƯU HÓA ({activeChapter.realWorldApp.field})
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {activeChapter.realWorldApp.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeChapter.realWorldApp.description}
                  </p>
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <MathFormula block math={activeChapter.realWorldApp.formulaMath} />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Bài toán thực tiễn minh họa: </strong>
                    {activeChapter.realWorldApp.exampleCalculation}
                  </p>
                </section>
              </div>

              {/* End-of-Chapter Multiple Choice Quiz with Solutions */}
              <ChapterQuizSection
                key={activeChapter.id}
                chapterId={activeChapter.id}
                chapterTitle={activeChapter.title}
                questions={activeChapter.quiz}
              />
            </div>
          </div>
        </section>

        {/* 3. Interactive Derivative & Integral Simulation Sandbox */}
        <div id="interactive-sandbox">
          <CalculusSandbox />
        </div>

        {/* 4. Quick Reference Formula Table */}
        <QuickFormulaModal />
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 px-6 text-center text-xs text-slate-500">
        Tài liệu Học tập &amp; Mã nguồn LaTeX/TikZ Học phần Giải Tích 1 (UET.MAT1050) — Trường Đại học Công nghệ, ĐHQGHN.
      </footer>
    </div>
  );
}
