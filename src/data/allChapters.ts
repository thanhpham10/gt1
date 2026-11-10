import { ChapterData } from '../types/calculus';
import { CHAPTERS_PART_1 } from './chaptersPart1';
import { CHAPTERS_PART_2 } from './chaptersPart2';
import { CHAPTERS_PART_3 } from './chaptersPart3';

export const ALL_CHAPTERS: ChapterData[] = [
  ...CHAPTERS_PART_1,
  ...CHAPTERS_PART_2,
  ...CHAPTERS_PART_3,
];
