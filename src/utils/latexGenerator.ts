import { ChapterData, QuickFormulaCategory } from '../types/calculus';
import { ALL_CHAPTERS } from '../data/allChapters';
import { QUICK_FORMULA_CATEGORIES } from '../data/quickFormulas';

export interface LatexGeneratorOptions {
  includeQuickTable: boolean;
  includeTikzFigures: boolean;
  includeRealWorldApps: boolean;
  includeQuizzes: boolean;
  includeQuizSolutions: boolean;
  selectedChapterIds?: number[];
}

export const DEFAULT_LATEX_OPTIONS: LatexGeneratorOptions = {
  includeQuickTable: true,
  includeTikzFigures: true,
  includeRealWorldApps: true,
  includeQuizzes: true,
  includeQuizSolutions: true,
};

/**
 * Generates a standalone LaTeX snippet for a single chapter
 */
export function generateChapterLatex(
  chapter: ChapterData,
  options: LatexGeneratorOptions = DEFAULT_LATEX_OPTIONS
): string {
  const lines: string[] = [];

  lines.push(`% ======================================================================`);
  lines.push(`% ${chapter.title.toUpperCase()} (${chapter.sessionRange})`);
  lines.push(`% ======================================================================`);
  lines.push(`\\chapter{${chapter.title.replace(/^Chương \d+:\s*/, '')}}`);
  lines.push(`\\label{chap:chuong-${chapter.id}}`);
  lines.push(``);

  // Chapter Mini Table of Contents & Overview
  lines.push(`\\begin{tcolorbox}[colback=slate!5!white,colframe=slate!75!black,title={\\textbf{Mục lục Chương ${chapter.id} \\& Chuẩn đầu ra (${chapter.sessionRange})}}]`);
  lines.push(`\\textbf{Tổng quan:} ${chapter.overview}\\\\[6pt]`);
  lines.push(`\\textbf{Nội dung chính trong chương:}`);
  lines.push(`\\begin{itemize}[leftmargin=1.5em, itemsep=2pt]`);
  for (const toc of chapter.tableOfContents) {
    lines.push(`  \\item \\textbf{Mục ${toc.code}:} ${toc.title}`);
  }
  lines.push(`\\end{itemize}`);
  lines.push(`\\textbf{Chuẩn đầu ra (LLO):}`);
  lines.push(`\\begin{itemize}[leftmargin=1.5em, itemsep=2pt]`);
  for (const llo of chapter.learningOutcomes) {
    lines.push(`  \\item ${llo}`);
  }
  lines.push(`\\end{itemize}`);
  lines.push(`\\end{tcolorbox}`);
  lines.push(``);

  // Subsections
  for (const sub of chapter.subSections) {
    lines.push(`\\section{[Mục ${sub.code}] ${sub.title}}`);
    lines.push(`${sub.summary}`);
    lines.push(``);

    // Key Formulas
    lines.push(`\\begin{congthuc}{Các công thức trọng tâm (${sub.code})}`);
    for (const kf of sub.keyFormulas) {
      lines.push(`\\noindent\\textbf{${kf.label}:}`);
      lines.push(`\\[ ${kf.latex} \\]`);
      if (kf.note) {
        lines.push(`\\noindent\\textit{Chú giải:} ${kf.note}\\\\[4pt]`);
      }
    }
    lines.push(`\\end{congthuc}`);
    lines.push(``);

    // Detailed Notes
    if (sub.detailedNotes.length > 0) {
      lines.push(`\\noindent\\textbf{Chú giải \\& Lưu ý kỹ thuật:}`);
      lines.push(`\\begin{itemize}[leftmargin=1.5em, itemsep=2pt]`);
      for (const note of sub.detailedNotes) {
        lines.push(`  \\item ${note}`);
      }
      lines.push(`\\end{itemize}`);
      lines.push(``);
    }

    // Example
    lines.push(`\\begin{vidu}{${sub.example.title}}`);
    lines.push(`\\textbf{Đề bài:} ${sub.example.problem}`);
    if (sub.example.problemMath) {
      lines.push(`\\[ ${sub.example.problemMath} \\]`);
    }
    lines.push(`\\textbf{Lời giải chi tiết:}`);
    lines.push(`\\begin{enumerate}[leftmargin=1.5em, itemsep=2pt]`);
    for (const step of sub.example.solutionSteps) {
      lines.push(`  \\item ${step}`);
    }
    lines.push(`\\end{enumerate}`);
    for (const mathLine of sub.example.solutionMath) {
      lines.push(`\\[ ${mathLine} \\]`);
    }
    lines.push(`\\noindent\\textbf{Kết luận:} ${sub.example.conclusion}`);
    lines.push(`\\end{vidu}`);
    lines.push(``);
  }

  // TikZ Diagram
  if (options.includeTikzFigures && chapter.tikzDiagram) {
    lines.push(`\\section{Minh họa Hình học bằng TikZ}`);
    lines.push(`\\begin{figure}[htbp]`);
    lines.push(`\\centering`);
    lines.push(chapter.tikzDiagram.tikzCode);
    lines.push(`\\caption{${chapter.tikzDiagram.caption}}`);
    lines.push(`\\label{fig:${chapter.tikzDiagram.id}}`);
    lines.push(`\\end{figure}`);
    lines.push(``);
  }

  // Real-World Application
  if (options.includeRealWorldApps && chapter.realWorldApp) {
    lines.push(`\\section{Ứng dụng Thực tế \\& Tối ưu hóa (${chapter.realWorldApp.field})}`);
    lines.push(`\\begin{ungdung}{${chapter.realWorldApp.title}}`);
    lines.push(`${chapter.realWorldApp.description}`);
    lines.push(`\\[ ${chapter.realWorldApp.formulaMath} \\]`);
    lines.push(`\\noindent\\textbf{Ví dụ tính toán thực tế:} ${chapter.realWorldApp.exampleCalculation}`);
    lines.push(`\\end{ungdung}`);
    lines.push(``);
  }

  // Multiple-Choice Quiz + Detailed Solutions
  if (options.includeQuizzes && chapter.quiz.length > 0) {
    lines.push(`\\section{Bài tập Trắc nghiệm Củng cố Chương ${chapter.id}}`);
    lines.push(`\\begin{enumerate}[label=\\textbf{Câu \\arabic*:}, leftmargin=2.2em, itemsep=8pt]`);
    for (const q of chapter.quiz) {
      lines.push(`  \\item ${q.question}`);
      lines.push(`  \\begin{itemize}[label={}, leftmargin=1em, itemsep=2pt]`);
      for (const opt of q.options) {
        const mathPart = opt.math ? ` \\quad ($${opt.math}$)` : '';
        lines.push(`    \\item \\textbf{${opt.label}.} ${opt.text}${mathPart}`);
      }
      lines.push(`  \\end{itemize}`);
      if (options.includeQuizSolutions) {
        lines.push(`  \\vspace{2pt}`);
        lines.push(`  \\noindent{\\color{teal!85!black}\\textbf{Đáp án đúng: ${q.correctAnswer}.}} \\textit{Giải thích:} ${q.explanation}`);
        if (q.explanationMath) {
          lines.push(`  \\[ ${q.explanationMath} \\]`);
        }
      }
    }
    lines.push(`\\end{enumerate}`);
    lines.push(``);
  }

  return lines.join('\n');
}

/**
 * Generates the Quick Reference Formula Table in LaTeX
 */
export function generateQuickTableLatex(
  categories: QuickFormulaCategory[] = QUICK_FORMULA_CATEGORIES
): string {
  const lines: string[] = [];
  lines.push(`% ======================================================================`);
  lines.push(`% BẢNG TRA CỨU NHANH CÁC CÔNG THỨC GIẢI TÍCH 1 CƠ BẢN & TRỌNG TÂM`);
  lines.push(`% ======================================================================`);
  lines.push(`\\chapter*{Bảng Tra Cứu Nhanh Công Thức Giải Tích 1}`);
  lines.push(`\\addcontentsline{toc}{chapter}{Bảng Tra Cứu Nhanh Công Thức Giải Tích 1}`);
  lines.push(``);

  for (const cat of categories) {
    lines.push(`\\section*{${cat.category}}`);
    lines.push(`\\begin{longtable}{|p{0.25\\textwidth}|p{0.48\\textwidth}|p{0.21\\textwidth}|}`);
    lines.push(`\\hline`);
    lines.push(`\\rowcolor{blue!10} \\textbf{Tên công thức} & \\textbf{Biểu thức Toán học} & \\textbf{Chú giải / Điều kiện} \\\\ \\hline`);
    lines.push(`\\endfirsthead`);
    lines.push(`\\hline`);
    lines.push(`\\rowcolor{blue!10} \\textbf{Tên công thức} & \\textbf{Biểu thức Toán học} & \\textbf{Chú giải / Điều kiện} \\\\ \\hline`);
    lines.push(`\\endhead`);
    for (const item of cat.items) {
      lines.push(`\\textbf{${item.name}} & $\\displaystyle ${item.formula}$ & ${item.condition} \\\\ \\hline`);
    }
    lines.push(`\\end{longtable}`);
    lines.push(``);
  }

  return lines.join('\n');
}

/**
 * Generates the complete, compilable `.tex` book covering the entire Calculus 1 UET syllabus
 */
export function generateFullLatexDocument(
  chapters: ChapterData[] = ALL_CHAPTERS,
  categories: QuickFormulaCategory[] = QUICK_FORMULA_CATEGORIES,
  options: LatexGeneratorOptions = DEFAULT_LATEX_OPTIONS
): string {
  const filteredChapters =
    options.selectedChapterIds && options.selectedChapterIds.length > 0
      ? chapters.filter((c) => options.selectedChapterIds!.includes(c.id))
      : chapters;

  const preamble = `% !TEX program = pdflatex
% ==============================================================================
% TỔNG HỢP TOÀN DIỆN KIẾN THỨC GIẢI TÍCH 1 (CALCULUS 1 FOR ENGINEERS)
% Mã học phần: UET.MAT1050 - Trường Đại học Công nghệ, ĐHQGHN (VNU-UET)
% Tài liệu tham chiếu: James Stewart, "Calculus: Early Transcendentals" (9th ed.)
% Biên soạn tự động chuẩn LaTeX + TikZ + tcolorbox
% ==============================================================================
\\documentclass[11pt,a4paper,oneside]{book}

% --- Gói ngôn ngữ tiếng Việt và Font Toán học ---
\\usepackage[utf8]{inputenc}
\\usepackage[T5]{fontenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb,amsfonts,amsthm,mathtools}

% --- Gói căn chỉnh trang và Bảng biểu ---
\\usepackage[left=2.2cm,right=2.2cm,top=2.4cm,bottom=2.4cm]{geometry}
\\usepackage{enumitem}
\\usepackage{longtable,booktabs,array}
\\usepackage[table,dvipsnames,svgnames]{xcolor}
\\usepackage{fancyhdr}
\\usepackage{hyperref}

% --- Gói vẽ hình TikZ và Đóng khung định lý tcolorbox ---
\\usepackage{tikz}
\\usetikzlibrary{arrows.meta,calc,patterns,angles,quotes,decorations.markings}
\\usepackage[most]{tcolorbox}

% --- Định nghĩa màu sắc chủ đạo ---
\\definecolor{uetblue}{RGB}{12, 74, 110}
\\definecolor{uetaccent}{RGB}{2, 132, 199}
\\definecolor{slate}{RGB}{51, 65, 85}

% --- Cấu hình liên kết PDF ---
\\hypersetup{
    colorlinks=true,
    linkcolor=uetblue,
    urlcolor=uetaccent,
    pdftitle={Tong Hop Kien Thuc Giai Tich 1 - UET.MAT1050},
    pdfauthor={Tro Ly Hoc Tap Giai Tich 1 - VNU-UET}
}

% --- Các môi trường hộp kiến thức (tcolorbox) ---
\\newtcolorbox{congthuc}[1]{
    enhanced, breakable,
    colback=blue!3!white,
    colframe=uetblue,
    fonttitle=\\bfseries,
    title={#1}
}

\\newtcolorbox{vidu}[1]{
    enhanced, breakable,
    colback=emerald!4!white,
    colframe=teal!80!black,
    fonttitle=\\bfseries,
    title={Ví dụ minh họa: #1}
}

\\newtcolorbox{ungdung}[1]{
    enhanced, breakable,
    colback=amber!5!white,
    colframe=orange!80!black,
    fonttitle=\\bfseries,
    title={Ứng dụng thực tế: #1}
}

% --- Header & Footer ---
\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[L]{\\small\\textbf{UET.MAT1050 -- GIẢI TÍCH 1 (CALCULUS 1)}}
\\fancyhead[R]{\\small\\leftmark}
\\fancyfoot[C]{\\thepage}

\\begin{document}

% ==============================================================================
% TRANG BÌA TÀI LIỆU (TITLE PAGE)
% ==============================================================================
\\begin{titlepage}
    \\centering
    \\vspace*{1cm}
    {\\Large \\textbf{ĐẠI HỌC QUỐC GIA HÀ NỘI}}\\\\[4pt]
    {\\Large \\textbf{TRƯỜNG ĐẠI HỌC CÔNG NGHỆ (VNU-UET)}}\\\\[1.5cm]
    \\rule{\\textwidth}{1.5pt}\\\\[0.5cm]
    {\\Huge \\bfseries TỔNG HỢP TOÀN DIỆN KIẾN THỨC\\\\[8pt] GIẢI TÍCH 1 (CALCULUS 1)}\\\\[0.4cm]
    {\\large \\textbf{Mã học phần: UET.MAT1050 (5 Tín chỉ -- 15 Buổi học)}}\\\\[0.4cm]
    \\rule{\\textwidth}{1.5pt}\\\\[1.2cm]
    
    \\begin{tcolorbox}[colback=slate!4!white,colframe=uetblue,width=0.92\\textwidth,title={\\textbf{Cấu trúc Tài liệu Chuẩn Đề cương UET.MAT1050}}]
    \\begin{itemize}[leftmargin=1.5em, itemsep=4pt]
        \\item \\textbf{Hệ thống 11 Chương (Buổi 1 -- Buổi 15):} Bám sát 100\\% đề cương chi tiết Giải tích 1 và giáo trình \\textit{James Stewart, Calculus: Early Transcendentals (9th Ed.)}.
        \\item \\textbf{Trọng tâm Đạo hàm \\& Tích phân:} Đầy đủ công thức, chú giải điều kiện, ý nghĩa cơ học/hình học và ví dụ giải chi tiết từng bước.
        \\item \\textbf{Hình vẽ minh họa TikZ vector:} Mã nguồn TikZ trực quan cho hàm ngược, giới hạn $\\varepsilon$-$\\delta$, tiếp tuyến, định lý Lagrange, tổng Riemann, vật thể tròn xoay, trường hướng Logistic và chuỗi Taylor.
        \\item \\textbf{Ứng dụng thực tế \\& Bài tập trắc nghiệm:} Tích hợp mô hình thực tiễn (Khoa học máy tính, Điện - Điện tử, Cơ học, Kinh tế, Xác suất) và bộ câu hỏi trắc nghiệm có lời giải sau mỗi chương.
    \\end{itemize}
    \\end{tcolorbox}
    
    \\vfill
    {\\large Hà Nội -- Tài liệu Chuẩn hóa Biên dịch bằng \\LaTeX{} (pdflatex / Overleaf)}
\\end{titlepage}

% ==============================================================================
% MỤC LỤC TỔNG QUÁT (TABLE OF CONTENTS)
% ==============================================================================
\\tableofcontents
\\newpage
`;

  const bodyParts: string[] = [preamble];

  if (options.includeQuickTable) {
    bodyParts.push(generateQuickTableLatex(categories));
  }

  for (const ch of filteredChapters) {
    bodyParts.push(generateChapterLatex(ch, options));
  }

  bodyParts.push(`\\end{document}\n`);

  return bodyParts.join('\n');
}
