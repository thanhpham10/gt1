import React, { useState } from 'react';
import { QuizQuestion } from '../types/calculus';
import { MathFormula, MathProse } from './MathFormula';
import { CheckCircle2, XCircle, RotateCcw, HelpCircle } from 'lucide-react';

interface ChapterQuizSectionProps {
  chapterId: number;
  chapterTitle: string;
  questions: QuizQuestion[];
}

export const ChapterQuizSection: React.FC<ChapterQuizSectionProps> = ({
  chapterId,
  chapterTitle,
  questions,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId: string, option: 'A' | 'B' | 'C' | 'D') => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = questions.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);

  return (
    <section
      aria-labelledby={`quiz-heading-${chapterId}`}
      className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 space-y-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h3
            id={`quiz-heading-${chapterId}`}
            className="text-lg font-bold text-slate-900 dark:text-slate-100"
          >
            Bài Tập Trắc Nghiệm Củng Cố — {chapterTitle}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Chọn đáp án cho từng câu hỏi và nhấn &ldquo;Kiểm tra Đáp án &amp; Xem Lời giải&rdquo; để đối chiếu lời giải chi tiết.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {submitted && (
            <span className="text-sm font-mono tabular-nums font-bold text-emerald-700 dark:text-emerald-400">
              Kết quả: {score}/{questions.length} câu đúng
            </span>
          )}
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors whitespace-nowrap"
          >
            Kiểm tra Đáp án &amp; Xem Lời giải
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Làm lại
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((q, idx) => {
          const userChoice = selectedAnswers[q.id];
          const isAnswered = Boolean(userChoice);
          const isCorrect = userChoice === q.correctAnswer;
          const showDetail = submitted || isAnswered;

          return (
            <div
              key={q.id}
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/40 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  <span className="text-sky-700 dark:text-sky-400 mr-1.5">Câu {idx + 1}:</span>
                  <MathProse text={q.question} />
                </p>
                {showDetail && (
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold shrink-0 ${
                      isCorrect
                        ? 'text-emerald-700 dark:text-emerald-400'
                        : isAnswered
                          ? 'text-rose-600 dark:text-rose-400'
                          : 'text-amber-700 dark:text-amber-400'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> Chính xác
                      </>
                    ) : isAnswered ? (
                      <>
                        <XCircle className="w-4 h-4" /> Chưa đúng (Đáp án: {q.correctAnswer})
                      </>
                    ) : (
                      <>
                        <HelpCircle className="w-4 h-4" /> Đáp án: {q.correctAnswer}
                      </>
                    )}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt) => {
                  const selected = userChoice === opt.label;
                  const isRightOption = opt.label === q.correctAnswer;

                  let btnStyle =
                    'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-sky-400';
                  if (showDetail) {
                    if (isRightOption) {
                      btnStyle =
                        'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-semibold';
                    } else if (selected && !isRightOption) {
                      btnStyle =
                        'border-rose-400 bg-rose-50/80 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200';
                    }
                  } else if (selected) {
                    btnStyle = 'border-sky-600 bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 font-semibold';
                  }

                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.label)}
                      className={`flex items-center justify-between gap-2 px-3.5 py-2.5 text-left text-xs rounded-lg border transition-colors ${btnStyle}`}
                    >
                      <span>
                        <strong className="mr-1.5">{opt.label}.</strong>
                        {opt.text}
                      </span>
                      {opt.math && (
                        <span className="font-mono text-xs shrink-0">
                          <MathFormula math={opt.math} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {showDetail && (
                <div className="mt-3 p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-emerald-700 dark:text-emerald-400">
                      Lời giải chi tiết (Đáp án {q.correctAnswer}):{' '}
                    </strong>
                    {q.explanation}
                  </p>
                  {q.explanationMath && (
                    <div className="pt-1 text-slate-900 dark:text-slate-100">
                      <MathFormula block math={q.explanationMath} />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
