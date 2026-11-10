import React, { useState } from 'react';
import { QUICK_FORMULA_CATEGORIES } from '../data/quickFormulas';
import { MathFormula, MathProse } from './MathFormula';
import { generateQuickTableLatex } from '../utils/latexGenerator';
import { Search, Copy, Check, FileCode } from 'lucide-react';

export const QuickFormulaModal: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedLatex, setCopiedLatex] = useState<boolean>(false);
  const [copiedRow, setCopiedRow] = useState<string | null>(null);

  const handleCopyFullTableLatex = () => {
    const tex = generateQuickTableLatex(QUICK_FORMULA_CATEGORIES);
    navigator.clipboard.writeText(tex);
    setCopiedLatex(true);
    setTimeout(() => setCopiedLatex(false), 2000);
  };

  const handleCopySingleFormula = (formula: string, key: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedRow(key);
    setTimeout(() => setCopiedRow(null), 1500);
  };

  const filteredCategories = QUICK_FORMULA_CATEGORIES.filter(
    (cat) => activeCategoryId === 'all' || cat.id === activeCategoryId
  ).map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.condition.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  return (
    <section
      id="quick-formulas"
      aria-labelledby="quick-formula-heading"
      className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2
              id="quick-formula-heading"
              className="text-xl font-bold text-slate-900 dark:text-slate-100"
            >
              Bảng Tra Cứu Nhanh Các Công Thức Giải Tích 1 Cơ Bản &amp; Trọng Tâm
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Tổng hợp toàn bộ công thức Giới hạn, Vô cùng bé, Đạo hàm, Nguyên hàm - Tích phân, Ứng dụng Hình học, PTVP và Chuỗi Maclaurin.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopyFullTableLatex}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 rounded-lg hover:bg-sky-100 transition-colors whitespace-nowrap shrink-0"
          >
            {copiedLatex ? <Check className="w-4 h-4" /> : <FileCode className="w-4 h-4" />}
            {copiedLatex ? 'Đã sao chép mã LaTeX Bảng tra cứu!' : 'Copy Mã LaTeX Bảng Tra Cứu (longtable)'}
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Interactive category filter buttons */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <button
              type="button"
              onClick={() => setActiveCategoryId('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategoryId === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Tất cả (5 Nhóm)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryId('limits')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategoryId === 'limits'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Giới hạn &amp; VCB
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryId('derivatives')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategoryId === 'derivatives'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Đạo hàm &amp; Leibniz
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryId('integrals')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategoryId === 'integrals'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Nguyên hàm &amp; Tích phân
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryId('applications')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategoryId === 'applications'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Hình học &amp; Tọa độ cực
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryId('ode_series')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategoryId === 'ode_series'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              PTVP &amp; Chuỗi Maclaurin
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              aria-label="Tìm kiếm nhanh công thức"
              placeholder="Tìm công thức (vd: arctan, Leibniz)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-600"
            />
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="p-6 space-y-3">
            <h3 className="text-sm font-bold text-sky-800 dark:text-sky-300">
              {cat.category}
            </h3>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/70 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <th className="py-2.5 px-4 w-1/4">Tên công thức / Quy tắc</th>
                    <th className="py-2.5 px-4 w-1/2">Biểu thức Toán học (Chuẩn LaTeX)</th>
                    <th className="py-2.5 px-4 w-1/4">Chú giải &amp; Điều kiện áp dụng</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                  {cat.items.map((item, i) => {
                    const rowKey = `${cat.id}-${i}`;
                    return (
                      <tr
                        key={rowKey}
                        className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100 align-middle">
                          {item.name}
                        </td>
                        <td className="py-3 px-4 align-middle">
                          <div className="flex items-center justify-between gap-2">
                            <div className="overflow-x-auto">
                              <MathFormula math={item.formula} />
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopySingleFormula(item.formula, rowKey)}
                              aria-label={`Copy LaTeX cho ${item.name}`}
                              className="p-1.5 text-slate-400 hover:text-sky-600 rounded transition-colors shrink-0"
                              title="Chép mã LaTeX của công thức này"
                            >
                              {copiedRow === rowKey ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-400 align-middle">
                          <MathProse text={item.condition} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
