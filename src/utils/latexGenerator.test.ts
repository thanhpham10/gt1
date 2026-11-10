import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_CHAPTERS } from '../data/allChapters';
import { QUICK_FORMULA_CATEGORIES } from '../data/quickFormulas';
import {
  generateFullLatexDocument,
  generateChapterLatex,
  generateQuickTableLatex,
  sanitizeLatexProse,
} from './latexGenerator';

test('ALL_CHAPTERS contains all 11 chapters from the UET.MAT1050 syllabus', () => {
  assert.equal(ALL_CHAPTERS.length, 11);
  for (let i = 1; i <= 11; i++) {
    const ch = ALL_CHAPTERS.find((c) => c.id === i);
    assert.ok(ch, `Chapter ${i} must exist`);
    assert.ok(ch.subSections.length >= 3, `Chapter ${i} should have at least 3 subsections`);
    assert.ok(ch.quiz.length >= 3, `Chapter ${i} should have at least 3 quiz questions`);
    assert.ok(ch.tikzDiagram.tikzCode.includes('\\begin{tikzpicture}'), `Chapter ${i} must include TikZ code`);
  }
});

test('sanitizeLatexProse escapes ampersands and wraps inline math cleanly', () => {
  const heading = sanitizeLatexProse('1. Giới hạn cơ bản & Vô cùng bé tương đương (khi x → 0)');
  assert.ok(heading.includes('\\&'), 'Ampersand must be escaped as \\&');
  assert.ok(heading.includes('$\\to$'), 'Unicode arrow must be wrapped in math mode');

  const seriesText = sanitizeLatexProse('Chứng minh chuỗi số \\sum_{n=1}^\\infty \\frac{1}{n(n + 1)} hội tụ');
  assert.ok(!seriesText.includes('\\_'), 'Subscript inside math must not be escaped as \\_');
  assert.ok(seriesText.includes('$\\sum_{n=1}^\\infty \\frac{1}{n(n + 1)}$'));
});

test('generateFullLatexDocument produces valid, balanced LaTeX with zero unescaped & or bare math commands', () => {
  const tex = generateFullLatexDocument(ALL_CHAPTERS, QUICK_FORMULA_CATEGORIES);

  assert.ok(tex.includes('\\documentclass[11pt,a4paper,oneside]{book}'));
  assert.ok(tex.includes('\\usepackage{tikz}'));
  assert.ok(tex.includes('\\tableofcontents'));
  assert.ok(tex.includes('\\end{document}'));

  const lines = tex.split('\n');
  let inTableOrAlign = false;
  let inDisplayMath = false;

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('%')) return;

    if (/\\begin\{(longtable|tabular|aligned|cases)\}/.test(trimmed)) {
      inTableOrAlign = true;
    }
    if (/\\end\{(longtable|tabular|aligned|cases)\}/.test(trimmed)) {
      inTableOrAlign = false;
    }

    if (!inTableOrAlign && !line.includes('begin{aligned}') && !line.includes('begin{cases}')) {
      const unescapedAmp = line.match(/(?<!\\)&/g);
      assert.equal(unescapedAmp, null, `Line ${idx + 1} has unescaped &: ${line}`);
    }

    if (trimmed.startsWith('\\[')) inDisplayMath = true;
    if (!inDisplayMath) {
      const withoutInlineMath = line.replace(/\$[^$]+\$/g, '');
      const strayMath = withoutInlineMath.match(
        /\\(to|infty|neq|le|ge|approx|pm|times|cdot|forall|exists|in|implies|iff|alpha|beta|gamma|delta|varepsilon|theta|pi|mu|sigma|omega|Delta|frac|sqrt|int|sum|lim|sin|cos|tan|ln|arcsin|arccos|arctan|sinh|cosh|mathbb|mathcal|_|\^)\b/
      );
      assert.equal(strayMath, null, `Line ${idx + 1} has math command outside $...$: ${line}`);
    }
    if (trimmed.endsWith('\\]')) inDisplayMath = false;
  });
});

test('generateChapterLatex respects filter options', () => {
  const ch3 = ALL_CHAPTERS[2]; // Chapter 3: Differentiation Rules
  const withoutQuiz = generateChapterLatex(ch3, {
    includeQuickTable: false,
    includeTikzFigures: false,
    includeRealWorldApps: true,
    includeQuizzes: false,
    includeQuizSolutions: false,
  });

  assert.ok(!withoutQuiz.includes('\\begin{tikzpicture}'));
  assert.ok(!withoutQuiz.includes('Bài tập Trắc nghiệm Củng cố'));
  assert.ok(withoutQuiz.includes('\\begin{ungdung}'));
});

test('generateQuickTableLatex includes all 5 quick lookup categories', () => {
  const tableTex = generateQuickTableLatex(QUICK_FORMULA_CATEGORIES);
  assert.equal(QUICK_FORMULA_CATEGORIES.length, 5);
  assert.ok(tableTex.includes('\\begin{longtable}'));
  assert.ok(tableTex.includes('Leibniz'));
});

test('GitHub Pages static configuration files exist and use relative base paths', async () => {
  const fs = await import('node:fs');
  const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
  assert.ok(viteConfig.includes("base: './'"), 'vite.config.ts must specify relative base path for GitHub Pages');
  assert.ok(fs.existsSync('public/.nojekyll'), 'public/.nojekyll must exist');
  assert.ok(fs.existsSync('.github/workflows/deploy.yml'), '.github/workflows/deploy.yml must exist');
});

