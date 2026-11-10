export interface TopicExample {
  title: string;
  problem: string;
  problemMath?: string;
  solutionSteps: string[];
  solutionMath: string[];
  conclusion: string;
}

export interface RealWorldApplication {
  field: string; // e.g. "Kỹ thuật Điện - Điện tử", "Trí tuệ Nhân tạo & Tối ưu hóa", "Vật lý & Cơ học", "Kinh tế & Sinh học"
  title: string;
  description: string;
  formulaMath: string;
  exampleCalculation: string;
}

export interface TikzDiagramData {
  id: string;
  caption: string;
  tikzCode: string;
  svgType:
    | 'inverse-func'
    | 'epsilon-delta'
    | 'tangent-secant'
    | 'mean-value-theorem'
    | 'riemann-sum'
    | 'solid-revolution'
    | 'integration-parts'
    | 'arc-length'
    | 'direction-field'
    | 'polar-rose'
    | 'taylor-approx';
}

export interface SubSection {
  code: string; // e.g., "1.1", "2.4"
  title: string;
  summary: string;
  keyFormulas: {
    label: string;
    latex: string;
    note?: string;
  }[];
  detailedNotes: string[];
  example: TopicExample;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionMath?: string;
  options: {
    label: 'A' | 'B' | 'C' | 'D';
    text: string;
    math?: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  explanationMath?: string;
}

export interface ChapterData {
  id: number;
  sessionRange: string; // e.g. "Buổi 1", "Buổi 7 - 8"
  title: string;
  englishTitle: string;
  isFocusChapter?: boolean; // Highlighting Derivatives (Ch 2,3,4) & Integrals (Ch 5,6,7,8)
  overview: string;
  learningOutcomes: string[]; // LLOs from syllabus
  tableOfContents: { code: string; title: string }[];
  subSections: SubSection[];
  tikzDiagram: TikzDiagramData;
  realWorldApp: RealWorldApplication;
  quiz: QuizQuestion[];
}

export interface QuickFormulaCategory {
  id: string;
  category: string;
  items: {
    name: string;
    formula: string;
    condition: string;
  }[];
}
