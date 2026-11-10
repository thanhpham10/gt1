import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_CHAPTERS } from '../data/allChapters';
import { QUICK_FORMULA_CATEGORIES } from '../data/quickFormulas';
import {
  generateFullLatexDocument,
  generateChapterLatex,
  generateQuickTableLatex,
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

test('generateFullLatexDocument produces valid, balanced LaTeX document with all 11 chapters', () => {
  const tex = generateFullLatexDocument(ALL_CHAPTERS, QUICK_FORMULA_CATEGORIES);

  assert.ok(tex.includes('\\documentclass[11pt,a4paper,oneside]{book}'));
  assert.ok(tex.includes('\\usepackage{tikz}'));
  assert.ok(tex.includes('\\tableofcontents'));
  assert.ok(tex.includes('\\end{document}'));

  // Verify every chapter is included
  for (const ch of ALL_CHAPTERS) {
    assert.ok(tex.includes(`\\label{chap:chuong-${ch.id}}`), `Missing label for chapter ${ch.id}`);
  }

  // Verify TikZ environments are balanced
  const tikzOpens = (tex.match(/\\begin\{tikzpicture\}/g) || []).length;
  const tikzCloses = (tex.match(/\\end\{tikzpicture\}/g) || []).length;
  assert.equal(tikzOpens, 11);
  assert.equal(tikzCloses, 11);
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
  assert.ok(tableTex.includes('L\'Hospital') || tableTex.includes('Leibniz'));
});
