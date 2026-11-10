import React, { useState, useMemo } from 'react';
import { ALL_CHAPTERS } from '../data/allChapters';
import { QUICK_FORMULA_CATEGORIES } from '../data/quickFormulas';
import {
  generateFullLatexDocument,
  generateChapterLatex,
  DEFAULT_LATEX_OPTIONS,
  LatexGeneratorOptions,
} from '../utils/latexGenerator';
import { Download, Copy, Check, FileText, Code2, Globe } from 'lucide-react';
import { GitHubPagesModal } from './GitHubPagesModal';

interface LatexStudioExporterProps {
  onDownloadFullTex: () => void;
}

export const LatexStudioExporter: React.FC<LatexStudioExporterProps> = ({
  onDownloadFullTex,
}) => {
  const [options, setOptions] = useState<LatexGeneratorOptions>(DEFAULT_LATEX_OPTIONS);
  const [scope, setScope] = useState<'full' | number>('full');
  const [copied, setCopied] = useState(false);
  const [isGhPagesModalOpen, setIsGhPagesModalOpen] = useState(false);

  const generatedTex = useMemo(() => {
    if (scope === 'full') {
      return generateFullLatexDocument(ALL_CHAPTERS, QUICK_FORMULA_CATEGORIES, options);
    }
    const ch = ALL_CHAPTERS.find((c) => c.id === scope) || ALL_CHAPTERS[0];
    return generateChapterLatex(ch, options);
  }, [scope, options]);

  const stats = useMemo(() => {
    const lines = generatedTex.split('\n').length;
    const tikzCount = (generatedTex.match(/\\begin\{tikzpicture\}/g) || []).length;
    const exampleCount = (generatedTex.match(/\\begin\{vidu\}/g) || []).length;
    return { lines, tikzCount, exampleCount };
  }, [generatedTex]);

  const handleCopyLatex = () => {
    navigator.clipboard.writeText(generatedTex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCustomTex = () => {
    const blob = new Blob([generatedTex], { type: 'text/x-tex;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download =
      scope === 'full'
        ? 'Giai_Tich_1_UET_MAT1050_Full.tex'
        : `Giai_Tich_1_UET_Chuong_${scope}.tex`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="latex-exporter"
      aria-labelledby="latex-studio-heading"
      className="border-2 border-sky-700/80 dark:border-sky-500/70 rounded-xl bg-white dark:bg-slate-900 shadow-sm overflow-hidden"
    >
      <div className="p-6 bg-slate-50/90 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-400">
              <FileText className="w-4 h-4" />
              <span>TRÌNH XUẤT BẢN MÃ NGUỒN LATEX &amp; TIKZ CHUẨN OVERLEAF / PDFLATEX · SẴN SÀNG GITHUB PAGES</span>
            </div>
            <h2
              id="latex-studio-heading"
              className="text-2xl font-bold text-slate-900 dark:text-slate-100"
            >
              File LaTeX Tổng Hợp Toàn Bộ Giải Tích 1 (UET.MAT1050)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Đã tích hợp đầy đủ 11 chương (Buổi 1 – Buổi 15), mục lục tự động, bảng tra cứu nhanh{' '}
              <code>longtable</code>, hộp công thức &amp; ví dụ <code>tcolorbox</code>, 11 hình vẽ{' '}
              <code>TikZ</code> vector, ứng dụng thực tế và 33 câu trắc nghiệm kèm lời giải chi tiết.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onDownloadFullTex}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Tải ngay File .TEX Đầy Đủ ({stats.lines} dòng)
            </button>

            <a
              href="./Giai_Tich_1_UET_MAT1050.tex"
              download="Giai_Tich_1_UET_MAT1050.tex"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
            >
              <Code2 className="w-4 h-4 text-sky-700" />
              Link Tải Trực Tiếp (.tex)
            </a>

            <button
              type="button"
              onClick={handleCopyLatex}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Đã Copy toàn bộ mã LaTeX!' : 'Copy Toàn Bộ Mã LaTeX'}
            </button>

            <button
              type="button"
              onClick={() => setIsGhPagesModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-300 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              <Globe className="w-4 h-4 text-sky-700" />
              Publish GitHub Pages (Tĩnh)
            </button>
          </div>
        </div>
        <GitHubPagesModal
          isOpen={isGhPagesModalOpen}
          onClose={() => setIsGhPagesModalOpen(false)}
        />

        {/* Customization Controls */}
        <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <label
              htmlFor="latex-scope-select"
              className="text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              Phạm vi mã LaTeX:
            </label>
            <select
              id="latex-scope-select"
              value={scope}
              onChange={(e) =>
                setScope(e.target.value === 'full' ? 'full' : parseInt(e.target.value, 10))
              }
              className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100"
            >
              <option value="full">Toàn bộ Sách LaTeX (11 Chương + Bảng tra cứu + Preamble)</option>
              {ALL_CHAPTERS.map((ch) => (
                <option key={ch.id} value={ch.id}>
                  Chỉ riêng {ch.title} ({ch.sessionRange})
                </option>
              ))}
            </select>

            {scope !== 'full' && (
              <button
                type="button"
                onClick={handleDownloadCustomTex}
                className="px-3 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100"
              >
                Tải file .tex của Chương {scope}
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 dark:text-slate-300">
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeQuickTable}
                onChange={(e) =>
                  setOptions((o) => ({ ...o, includeQuickTable: e.target.checked }))
                }
                className="rounded accent-sky-700"
              />
              <span>Bảng tra cứu nhanh</span>
            </label>
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeTikzFigures}
                onChange={(e) =>
                  setOptions((o) => ({ ...o, includeTikzFigures: e.target.checked }))
                }
                className="rounded accent-sky-700"
              />
              <span>Hình vẽ TikZ ({stats.tikzCount})</span>
            </label>
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeRealWorldApps}
                onChange={(e) =>
                  setOptions((o) => ({ ...o, includeRealWorldApps: e.target.checked }))
                }
                className="rounded accent-sky-700"
              />
              <span>Ứng dụng thực tế</span>
            </label>
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeQuizzes}
                onChange={(e) =>
                  setOptions((o) => ({ ...o, includeQuizzes: e.target.checked }))
                }
                className="rounded accent-sky-700"
              />
              <span>Trắc nghiệm &amp; Lời giải</span>
            </label>
          </div>
        </div>
      </div>

      {/* Live Read-Only / Copyable LaTeX Code Editor View */}
      <div className="relative bg-slate-950 text-slate-100">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
          <span>
            Giai_Tich_1_UET_MAT1050.tex · {stats.lines} dòng · {stats.exampleCount} ví dụ giải chi tiết ·{' '}
            {stats.tikzCount} hình TikZ
          </span>
          <span>UTF-8 · pdflatex / XeLaTeX / Overleaf Ready</span>
        </div>
        <textarea
          readOnly
          aria-label="Nội dung mã nguồn LaTeX"
          value={generatedTex}
          className="w-full h-80 p-4 font-mono text-xs leading-relaxed bg-slate-950 text-emerald-300/95 focus:outline-none resize-y selection:bg-sky-700 selection:text-white"
        />
      </div>
    </section>
  );
};
