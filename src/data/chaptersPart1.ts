import { ChapterData } from '../types/calculus';

export const CHAPTERS_PART_1: ChapterData[] = [
  {
    id: 1,
    sessionRange: 'Buổi 1',
    title: 'Chương 1: Hàm số và Mô hình',
    englishTitle: 'Functions and Models',
    isFocusChapter: false,
    overview:
      'Hàm số là đối tượng trung tâm của giải tích một biến. Chương này hệ thống hóa 4 phương pháp biểu diễn hàm số, các phép biến đổi đồ thị, tính chất đơn ánh, hàm ngược, hàm mũ, hàm logarithm tự nhiên và các hàm lượng giác ngược dùng để xây dựng mô hình toán học thực tế.',
    learningOutcomes: [
      'LLO1.1: Nắm vững và biết vận dụng khái niệm hàm số, đồ thị hàm số, các cách biểu diễn hàm số.',
      'LLO1.2: Kiểm tra được tính đơn ánh, tìm được hàm ngược và khảo sát tốc độ tăng của hàm mũ - logarithm.',
    ],
    tableOfContents: [
      { code: '1.1', title: 'Bốn cách biểu diễn hàm số & Tập xác định - Tập giá trị' },
      { code: '1.2 - 1.3', title: 'Các mô hình toán học cơ bản & Phép biến đổi đồ thị hàm số' },
      { code: '1.4 - 1.9', title: 'Hàm mũ, Đơn ánh, Hàm ngược và Logarithm cơ số tự nhiên' },
      { code: '1.10', title: 'Các hàm lượng giác ngược (Arcsin, Arccos, Arctan)' },
    ],
    subSections: [
      {
        code: '1.1',
        title: 'Bốn cách biểu diễn hàm số & Tập xác định - Tập giá trị',
        summary:
          'Một hàm số f là một quy tắc gán mỗi phần tử x thuộc tập D (tập xác định - Domain) với duy nhất một phần tử f(x) thuộc tập E. Tập hợp tất cả các giá trị f(x) được gọi là tập giá trị (Range). Hàm số được biểu diễn qua 4 cách: bằng lời (mô tả), bằng bảng số liệu, bằng đồ thị, và bằng công thức đại số.',
        keyFormulas: [
          {
            label: 'Định nghĩa ánh xạ hàm số và Tập giá trị',
            latex: 'f: D \\to E, \\quad x \\mapsto y = f(x), \\quad \\text{Range}(f) = \\{f(x) \\mid x \\in D\\}',
            note: 'Tiêu chuẩn đường thẳng đứng (Vertical Line Test): Mọi đường thẳng x = a cắt đồ thị tối đa tại 1 điểm.',
          },
          {
            label: 'Hàm chẵn và Hàm lẻ (Tính đối xứng)',
            latex: 'f(-x) = f(x) \\;(\\text{Hàm chẵn - đối xứng qua } Oy), \\quad f(-x) = -f(x) \\;(\\text{Hàm lẻ - đối xứng qua } O)',
            note: 'Tập xác định D phải là tập đối xứng (x \\in D \\implies -x \\in D).',
          },
        ],
        detailedNotes: [
          'Khi tìm tập xác định của hàm biểu diễn bằng công thức: Mẫu thức phải khác 0, biểu thức dưới căn bậc chẵn phải không âm (≥ 0), và biểu thức trong logarithm phải dương (> 0).',
          'Hàm hợp (Composite Function): (f ∘ g)(x) = f(g(x)) xác định khi x thuộc tập xác định của g và g(x) thuộc tập xác định của f.',
        ],
        example: {
          title: 'Tìm tập xác định và xét tính chẵn lẻ của hàm hợp',
          problem: 'Cho hàm số f(x) = \\ln\\left(\\frac{1 + x}{1 - x}\\right). Hãy tìm tập xác định D và xét tính chẵn lẻ của hàm số.',
          problemMath: 'f(x) = \\ln\\left(\\frac{1 + x}{1 - x}\\right)',
          solutionSteps: [
            'Bước 1: Tìm điều kiện xác định của biểu thức trong logarithm và mẫu số.',
            'Bước 2: Kiểm tra tính đối xứng của tập xác định D = (-1, 1).',
            'Bước 3: Tính f(-x) và so sánh với f(x) bằng tính chất logarithm.',
          ],
          solutionMath: [
            '\\text{Điều kiện: } \\frac{1+x}{1-x} > 0 \\iff (1+x)(1-x) > 0 \\iff -1 < x < 1 \\implies D = (-1, 1)',
            '\\forall x \\in (-1, 1) \\implies -x \\in (-1, 1). \\text{ Ta có: } f(-x) = \\ln\\left(\\frac{1-x}{1+x}\\right) = \\ln\\left(\\frac{1+x}{1-x}\\right)^{-1} = -\\ln\\left(\\frac{1+x}{1-x}\\right) = -f(x)',
          ],
          conclusion: 'Vậy hàm số đã cho là hàm lẻ trên khoảng xác định D = (-1, 1).',
        },
      },
      {
        code: '1.2 - 1.3',
        title: 'Các mô hình toán học cơ bản & Phép biến đổi đồ thị hàm số',
        summary:
          'Từ một đồ thị chuẩn y = f(x), ta có thể dựng nhanh đồ thị của các hàm liên quan thông qua các phép tịnh tiến (ngang/dọc), phép co giãn (tỉ lệ) và phép lấy đối xứng qua các trục tọa độ.',
        keyFormulas: [
          {
            label: 'Phép tịnh tiến đồ thị (c > 0)',
            latex: 'y = f(x) + c \\;(\\uparrow c), \\quad y = f(x) - c \\;(\\downarrow c), \\quad y = f(x - c) \\;(\\rightarrow c), \\quad y = f(x + c) \\;(\\leftarrow c)',
            note: 'Tịnh tiến theo trục hoành ngược dấu với hằng số cộng trực tiếp vào biến x.',
          },
          {
            label: 'Phép co giãn & Phép đối xứng (c > 1)',
            latex: 'y = c f(x) \\;(\\text{giãn dọc } c \\text{ lần}), \\quad y = f(cx) \\;(\\text{nén ngang } c \\text{ lần}), \\quad y = -f(x) \\;(\\text{đối xứng } Ox)',
            note: 'Đồ thị y = f(|x|) giữ nguyên phần x ≥ 0 rồi lấy đối xứng phần đó qua Oy.',
          },
        ],
        detailedNotes: [
          'Mô hình tuyến tính y = mx + b có tốc độ thay đổi (hệ số góc m) không đổi.',
          'Mô hình đa thức P(x) = a_n x^n + ... + a_0, hàm phân thức hữu tỉ R(x) = P(x)/Q(x), và hàm lũy thừa y = x^a là nền tảng của xấp xỉ kỹ thuật.',
        ],
        example: {
          title: 'Biến đổi đồ thị từ hàm cơ sở',
          problem: 'Từ đồ thị parabol cơ bản y = x^2, hãy nêu quy trình dựng đồ thị hàm số y = -2(x - 3)^2 + 5.',
          problemMath: 'y = x^2 \\longrightarrow y = -2(x - 3)^2 + 5',
          solutionSteps: [
            'Bước 1: Tịnh tiến đồ thị y = x^2 sang phải 3 đơn vị để được y = (x - 3)^2.',
            'Bước 2: Giãn dọc đồ thị theo hệ số 2 để được y = 2(x - 3)^2.',
            'Bước 3: Lấy đối xứng qua trục hoành Ox để được y = -2(x - 3)^2, sau đó tịnh tiến lên trên 5 đơn vị.',
          ],
          solutionMath: [
            'x^2 \\xrightarrow{\\text{phải } 3} (x-3)^2 \\xrightarrow{\\text{giãn dọc } 2} 2(x-3)^2 \\xrightarrow{\\text{đối xứng } Ox} -2(x-3)^2 \\xrightarrow{\\text{lên } 5} -2(x-3)^2 + 5',
          ],
          conclusion: 'Đỉnh của parabol dịch chuyển từ O(0, 0) tới điểm I(3, 5), bề lõm quay xuống dưới.',
        },
      },
      {
        code: '1.4 - 1.9',
        title: 'Hàm mũ, Đơn ánh, Hàm ngược và Logarithm cơ số tự nhiên',
        summary:
          'Hàm số f được gọi là đơn ánh (one-to-one) nếu hai giá trị x khác nhau luôn cho hai giá trị f(x) khác nhau. Mọi hàm đơn ánh từ D lên R đều có hàm ngược f^{-1} từ R lên D, và đồ thị của f^{-1} đối xứng với đồ thị của f qua đường phân giác y = x.',
        keyFormulas: [
          {
            label: 'Định nghĩa đơn ánh & Quan hệ hàm ngược',
            latex: 'x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2), \\qquad y = f(x) \\iff x = f^{-1}(y)',
            note: 'Tiêu chuẩn đường thẳng ngang (Horizontal Line Test): Mọi đường y = c cắt đồ thị tối đa 1 điểm.',
          },
          {
            label: 'Hàm Logarithm tự nhiên & Công thức đổi cơ số',
            latex: 'y = \\ln x \\iff e^y = x, \\qquad \\log_a x = \\frac{\\ln x}{\\ln a} \\quad (a > 0, a \\neq 1, x > 0)',
            note: 'Tốc độ tăng khi x -> +∞: ln x << x^α << a^x (với α > 0, a > 1).',
          },
        ],
        detailedNotes: [
          'Quy trình 3 bước tìm hàm ngược y = f^{-1}(x): (1) Viết y = f(x); (2) Giải phương trình tìm x theo y; (3) Đổi chỗ ký hiệu x và y để thu được y = f^{-1}(x).',
          'Cẩn thận tránh nhầm lẫn ký hiệu: f^{-1}(x) là hàm ngược chứ KHÔNG phải nghịch đảo [f(x)]^{-1} = 1/f(x).',
        ],
        example: {
          title: 'Tìm hàm ngược của hàm phân thức mũ',
          problem: 'Chứng minh hàm số f(x) = \\frac{e^x}{1 + 2e^x} là đơn ánh trên \\mathbb{R} và tìm công thức hàm ngược f^{-1}(x) cùng tập xác định của nó.',
          problemMath: 'y = f(x) = \\frac{e^x}{1 + 2e^x}',
          solutionSteps: [
            'Bước 1: Biến đổi đại số biểu thức y = e^x / (1 + 2e^x) để rút e^x theo y.',
            'Bước 2: Xác định miền giá trị của y (vì e^x > 0 với mọi x ∈ R).',
            'Bước 3: Lấy logarithm tự nhiên hai vế và hoán đổi biến x, y.',
          ],
          solutionMath: [
            'y(1 + 2e^x) = e^x \\iff y = e^x(1 - 2y) \\iff e^x = \\frac{y}{1 - 2y}',
            '\\text{Do } e^x > 0 \\iff \\frac{y}{1 - 2y} > 0 \\iff 0 < y < \\frac{1}{2} \\implies \\text{Range}(f) = \\left(0, \\frac{1}{2}\\right)',
            'x = \\ln\\left(\\frac{y}{1 - 2y}\\right) \\implies f^{-1}(x) = \\ln\\left(\\frac{x}{1 - 2x}\\right), \\quad D_{f^{-1}} = \\left(0, \\frac{1}{2}\\right)',
          ],
          conclusion: 'Hàm ngược là f^{-1}(x) = \\ln\\left(\\frac{x}{1 - 2x}\\right) với tập xác định (0, 1/2).',
        },
      },
      {
        code: '1.10',
        title: 'Các hàm lượng giác ngược (Arcsin, Arccos, Arctan)',
        summary:
          'Vì các hàm lượng giác tuần hoàn nên không phải là đơn ánh trên toàn trục số. Để định nghĩa hàm ngược, ta thu hẹp tập xác định của chúng về một đoạn/khoảng chuẩn sao cho hàm đơn ánh và đạt toàn bộ tập giá trị.',
        keyFormulas: [
          {
            label: 'Miền xác định và Miền giá trị chuẩn của hàm lượng giác ngược',
            latex: '\\begin{aligned} y &= \\arcsin x \\iff \\sin y = x, && x \\in [-1, 1], \\; y \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] \\\\ y &= \\arccos x \\iff \\cos y = x, && x \\in [-1, 1], \\; y \\in [0, \\pi] \\\\ y &= \\arctan x \\iff \\tan y = x, && x \\in \\mathbb{R}, \\; y \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right) \\end{aligned}',
            note: 'Hằng đẳng thức quan trọng: arcsin(x) + arccos(x) = π/2 với mọi x ∈ [-1, 1].',
          },
        ],
        detailedNotes: [
          'Khi rút gọn biểu thức dạng cos(arcsin x) hoặc tan(arccos x), hãy đặt θ = arcsin x và vẽ một tam giác vuông có cạnh đối là x, cạnh huyền là 1, từ đó cạnh kề là √(1 - x^2).',
        ],
        example: {
          title: 'Rút gọn biểu thức chứa hàm lượng giác ngược',
          problem: 'Rút gọn biểu thức đại số A = \\cos(\\arctan x) và B = \\sin(2\\arcsin x) với x \\in (-1, 1).',
          problemMath: 'A = \\cos(\\arctan x), \\quad B = \\sin(2\\arcsin x)',
          solutionSteps: [
            'Bước 1: Đặt θ = arctan x ∈ (-π/2, π/2), suy ra tan θ = x và cos θ > 0.',
            'Bước 2: Sử dụng hệ thức 1 + tan^2 θ = 1 / cos^2 θ để tính cos θ.',
            'Bước 3: Đặt α = arcsin x ∈ (-π/2, π/2), áp dụng công thức nhân đôi sin(2α) = 2 sin α cos α.',
          ],
          solutionMath: [
            '\\cos\\theta = \\frac{1}{\\sqrt{1 + \\tan^2\\theta}} = \\frac{1}{\\sqrt{1 + x^2}} \\implies A = \\frac{1}{\\sqrt{1 + x^2}}',
            'B = \\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha = 2x\\sqrt{1 - \\sin^2\\alpha} = 2x\\sqrt{1 - x^2}',
          ],
          conclusion: 'Ta thu được công thức đại số tường minh A = (1 + x^2)^{-1/2} và B = 2x√(1 - x^2).',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch1-inverse',
      caption: 'Hình 1.1: Tính đối xứng giữa đồ thị hàm mũ y = e^x và hàm ngược y = ln x qua đường phân giác y = x.',
      svgType: 'inverse-func',
      tikzCode: `\\begin{tikzpicture}[scale=1.05, >=stealth]
  % Lưới và trục tọa độ
  \\draw[very thin, color=gray!25] (-2.5,-2.5) grid (3.5,3.5);
  \\draw[->, thick] (-2.6,0) -- (3.7,0) node[right] {$x$};
  \\draw[->, thick] (0,-2.6) -- (0,3.7) node[above] {$y$};
  
  % Đường phân giác y = x
  \\draw[dashed, color=gray!80, thick] (-2.3,-2.3) -- (3.3,3.3) node[above right] {$y = x$};
  
  % Đồ thị hàm mũ y = e^x
  \\draw[domain=-2.3:1.25, smooth, variable=\\x, blue!80!black, very thick] 
    plot ({\\x}, {exp(\\x)}) node[above left] {$y = e^x$};
    
  % Đồ thị hàm logarithm y = ln(x)
  \\draw[domain=0.1:3.4, smooth, variable=\\x, red!80!black, very thick] 
    plot ({\\x}, {ln(\\x)}) node[below right] {$y = \\ln x$};
    
  % Các điểm đối xứng đặc biệt
  \\filldraw[blue!80!black] (0,1) circle (2pt) node[above left] {$(0,1)$};
  \\filldraw[red!80!black] (1,0) circle (2pt) node[below right] {$(1,0)$};
  \\draw[dotted, thick, teal] (0,1) -- (1,0);
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Khoa học Máy tính & Xử lý Tín hiệu',
      title: 'Thang đo Decibel và Độ phức tạp Thuật toán Logarithm',
      description:
        'Trong kỹ thuật âm thanh và viễn thông, cường độ tín hiệu thay đổi qua nhiều bậc độ lớn nên được nén bằng hàm logarithm (Decibel). Trong Khoa học Máy tính, thuật toán Tìm kiếm Nhị phân (Binary Search) là hàm ngược của quá trình nhân đôi kích thước mảng, giúp giảm số phép so sánh từ N xuống log_2(N).',
      formulaMath: 'L_{\\text{dB}} = 10 \\log_{10}\\left(\\frac{P}{P_0}\\right) = \\frac{10}{\\ln 10} \\ln\\left(\\frac{P}{P_0}\\right), \\qquad T(N) = \\mathcal{O}(\\log_2 N)',
      exampleCalculation:
        'Với cơ sở dữ liệu N = 1,000,000 bản ghi đã sắp xếp, tìm kiếm tuyến tính cần tối đa 10^6 bước, trong khi tìm kiếm nhị phân chỉ cần ⌈log_2(10^6)⌉ = ⌈6 ln(10)/ln(2)⌉ = 20 bước so sánh.',
    },
    quiz: [
      {
        id: 'q1-1',
        question: 'Tập xác định của hàm số f(x) = \\arcsin(2x - 1) + \\ln(x) là:',
        options: [
          { label: 'A', text: 'Đoạn [0, 1]', math: '[0, 1]' },
          { label: 'B', text: 'Nửa khoảng (0, 1]', math: '(0, 1]' },
          { label: 'C', text: 'Đoạn [-1, 1]', math: '[-1, 1]' },
          { label: 'D', text: 'Khoảng (0, 1/2]', math: '(0, 1/2]' },
        ],
        correctAnswer: 'B',
        explanation:
          'Điều kiện của arcsin(2x - 1) là -1 ≤ 2x - 1 ≤ 1 ⇔ 0 ≤ x ≤ 1. Kết hợp với điều kiện của ln(x) là x > 0, ta được x ∈ (0, 1].',
        explanationMath: '\\begin{cases} -1 \\le 2x - 1 \\le 1 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} 0 \\le x \\le 1 \\\\ x > 0 \\end{cases} \\iff x \\in (0, 1]',
      },
      {
        id: 'q1-2',
        question: 'Cho hàm số f(x) = \\ln(x + \\sqrt{x^2 + 1}). Khẳng định nào sau đây là ĐÚNG?',
        options: [
          { label: 'A', text: 'f(x) là hàm lẻ trên toàn trục số thực R.' },
          { label: 'B', text: 'f(x) là hàm chẵn trên toàn trục số thực R.' },
          { label: 'C', text: 'f(x) không chẵn cũng không lẻ.' },
          { label: 'D', text: 'f(x) chỉ xác định khi x > 0.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì √(x^2 + 1) > √(x^2) = |x| ≥ -x nên x + √(x^2 + 1) > 0 với mọi x ∈ R. Khi đó f(-x) + f(x) = ln[(-x + √(x^2+1))(x + √(x^2+1))] = ln(x^2 + 1 - x^2) = ln(1) = 0, suy ra f(-x) = -f(x).',
        explanationMath: 'f(-x) = \\ln\\left(\\sqrt{x^2+1} - x\\right) = \\ln\\left(\\frac{1}{\\sqrt{x^2+1}+x}\\right) = -f(x)',
      },
      {
        id: 'q1-3',
        question: 'Hàm ngược của hàm số y = f(x) = 3 + \\ln(2x - 1) với x > 1/2 là:',
        options: [
          { label: 'A', text: 'f^{-1}(x) = (1 + e^{x - 3}) / 2', math: 'f^{-1}(x) = \\frac{1 + e^{x-3}}{2}' },
          { label: 'B', text: 'f^{-1}(x) = (e^{x + 3} - 1) / 2', math: 'f^{-1}(x) = \\frac{e^{x+3} - 1}{2}' },
          { label: 'C', text: 'f^{-1}(x) = 1 / (3 + \\ln(2x - 1))', math: 'f^{-1}(x) = \\frac{1}{3 + \\ln(2x-1)}' },
          { label: 'D', text: 'f^{-1}(x) = e^{2x - 1} - 3', math: 'f^{-1}(x) = e^{2x-1} - 3' },
        ],
        correctAnswer: 'A',
        explanation:
          'Từ y = 3 + ln(2x - 1) ⇔ ln(2x - 1) = y - 3 ⇔ 2x - 1 = e^{y - 3} ⇔ x = (1 + e^{y - 3})/2. Đổi chỗ x và y ta có đáp án A.',
        explanationMath: 'y - 3 = \\ln(2x-1) \\iff 2x - 1 = e^{y-3} \\implies f^{-1}(x) = \\frac{1 + e^{x-3}}{2}',
      },
    ],
  },
  {
    id: 2,
    sessionRange: 'Buổi 1 - 2',
    title: 'Chương 2: Giới hạn và Đạo hàm',
    englishTitle: 'Limits and Derivatives',
    isFocusChapter: true,
    overview:
      'Chương nền tảng giải quyết hai bài toán cổ điển dẫn tới phép tính vi phân: Bài toán tiếp tuyến và Bài toán vận tốc tức thời. Trình bày từ trực quan đến định nghĩa chính xác bằng ngôn ngữ ε-δ, tính liên tục, giới hạn tại vô cùng và định nghĩa đạo hàm như một hàm số.',
    learningOutcomes: [
      'LLO2.1: Giải thích được định nghĩa chính xác về giới hạn thông qua ngôn ngữ epsilon - delta (ε - δ).',
      'LLO2.2: Giải được các bài toán tính giới hạn tại một điểm, giới hạn tại vô cùng và xét tính liên tục của hàm số.',
      'LLO2.3: Vận dụng được định nghĩa đạo hàm để giải bài toán tiếp tuyến, vận tốc tức thời và tốc độ thay đổi.',
    ],
    tableOfContents: [
      { code: '2.1 - 2.3', title: 'Bài toán tiếp tuyến, Vận tốc & Các quy tắc tính giới hạn' },
      { code: '2.4', title: 'Định nghĩa chính xác của giới hạn (Ngôn ngữ ε - δ)' },
      { code: '2.5 - 2.6', title: 'Tính liên tục của hàm số & Giới hạn tại vô cùng (Tiệm cận)' },
      { code: '2.7 - 2.8', title: 'Đạo hàm tại một điểm & Đạo hàm như một hàm số (Trọng tâm)' },
    ],
    subSections: [
      {
        code: '2.1 - 2.3',
        title: 'Bài toán tiếp tuyến, Vận tốc & Các quy tắc tính giới hạn',
        summary:
          'Hệ số góc của tiếp tuyến là giới hạn của hệ số góc dây cung (cát tuyến) khi điểm thứ hai tiến dần về điểm tiếp xúc. Tương tự, vận tốc tức thời là giới hạn của vận tốc trung bình khi khoảng thời gian Δt tiến về 0.',
        keyFormulas: [
          {
            label: 'Giới hạn một phía & Điều kiện tồn tại giới hạn',
            latex: '\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L',
            note: 'Nếu giới hạn trái khác giới hạn phải thì giới hạn tại x = a không tồn tại.',
          },
          {
            label: 'Định lý Kẹp (Squeeze Theorem)',
            latex: 'g(x) \\le f(x) \\le h(x) \\text{ và } \\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L \\implies \\lim_{x \\to a} f(x) = L',
            note: 'Thường áp dụng khi xuất hiện sin(1/x) hoặc cos(1/x) nhân với đại lượng tiến về 0.',
          },
        ],
        detailedNotes: [
          'Để khử dạng vô định 0/0 của hàm phân thức hoặc căn thức: Phân tích đa thức thành nhân tử, nhân lượng liên hợp, hoặc sử dụng giới hạn cơ bản sin(x)/x → 1.',
        ],
        example: {
          title: 'Khử dạng vô định 0/0 kết hợp lượng liên hợp và Định lý Kẹp',
          problem: 'Tính các giới hạn sau: (a) I_1 = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x} - 1}{x} và (b) I_2 = \\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right).',
          problemMath: 'I_1 = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x} - 1}{x}, \\qquad I_2 = \\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right)',
          solutionSteps: [
            'Câu (a): Nhân cả tử và mẫu với biểu thức liên hợp (√(1 + 3x) + 1) để triệt tiêu nhân tử x.',
            'Câu (b): Đánh giá -1 ≤ cos(1/x) ≤ 1 với mọi x ≠ 0, nhân hai vế với x^2 ≥ 0 và áp dụng Định lý Kẹp.',
          ],
          solutionMath: [
            'I_1 = \\lim_{x \\to 0} \\frac{(1 + 3x) - 1}{x(\\sqrt{1 + 3x} + 1)} = \\lim_{x \\to 0} \\frac{3}{\\sqrt{1 + 3x} + 1} = \\frac{3}{1 + 1} = \\frac{3}{2}',
            '-x^2 \\le x^2 \\cos\\left(\\frac{1}{x}\\right) \\le x^2, \\text{ mà } \\lim_{x \\to 0} (\\pm x^2) = 0 \\implies I_2 = 0',
          ],
          conclusion: 'Kết quả: I_1 = 3/2 và I_2 = 0.',
        },
      },
      {
        code: '2.4',
        title: 'Định nghĩa chính xác của giới hạn (Ngôn ngữ ε - δ)',
        summary:
          'Ta nói giới hạn của f(x) khi x tiến tới a bằng L nếu với mọi sai số cho phép ε > 0 (dù nhỏ tùy ý), luôn tìm được bán kính lân cận δ > 0 sao cho mọi x thỏa mãn 0 < |x - a| < δ đều kéo theo |f(x) - L| < ε.',
        keyFormulas: [
          {
            label: 'Định nghĩa hình thức Cauchy (ε - δ)',
            latex: '\\lim_{x \\to a} f(x) = L \\iff \\forall \\varepsilon > 0, \\, \\exists \\delta = \\delta(\\varepsilon) > 0 : \\forall x \\in D, \\; 0 < |x - a| < \\delta \\implies |f(x) - L| < \\varepsilon',
            note: 'Điều kiện 0 < |x - a| có nghĩa là x ≠ a (giá trị tại x = a không ảnh hưởng đến giới hạn).',
          },
        ],
        detailedNotes: [
          'Phương pháp chứng minh bằng ε-δ gồm 2 giai đoạn: (1) Phân tích sơ bộ (Scratch work) đánh giá |f(x) - L| theo |x - a| để tìm δ theo ε; (2) Trình bày chứng minh chính thức.',
        ],
        example: {
          title: 'Chứng minh giới hạn bằng định nghĩa ε - δ',
          problem: 'Dùng định nghĩa \\varepsilon - \\delta để chứng minh rằng \\lim_{x \\to 3} (4x - 5) = 7.',
          problemMath: '\\lim_{x \\to 3} (4x - 5) = 7',
          solutionSteps: [
            'Bước 1 (Phân tích): Biến đổi |f(x) - L| = |(4x - 5) - 7| = |4x - 12| = 4|x - 3|.',
            'Bước 2 (Chọn δ): Để 4|x - 3| < ε, ta chỉ cần |x - 3| < ε/4. Vậy chọn δ = ε/4.',
            'Bước 3 (Chứng minh): Với mọi ε > 0, chọn δ = ε/4 > 0, suy ra điều phải chứng minh.',
          ],
          solutionMath: [
            '\\forall \\varepsilon > 0, \\text{ chọn } \\delta = \\frac{\\varepsilon}{4} > 0.',
            '\\text{Với mọi } x \\text{ thỏa mãn } 0 < |x - 3| < \\delta \\implies |(4x - 5) - 7| = 4|x - 3| < 4\\delta = 4\\left(\\frac{\\varepsilon}{4}\\right) = \\varepsilon.',
          ],
          conclusion: 'Vậy theo định nghĩa ε - δ, ta có lim_{x → 3} (4x - 5) = 7.',
        },
      },
      {
        code: '2.5 - 2.6',
        title: 'Tính liên tục của hàm số & Giới hạn tại vô cùng (Tiệm cận)',
        summary:
          'Hàm số f liên tục tại x = a nếu giới hạn của hàm khi x tiến tới a bằng đúng giá trị hàm tại a. Giới hạn tại vô cùng mô tả dáng điệu của hàm số khi x → ±∞ và xác định các đường tiệm cận ngang.',
        keyFormulas: [
          {
            label: 'Điều kiện liên tục tại một điểm & Định lý Giá trị Trung gian (IVT)',
            latex: '\\lim_{x \\to a} f(x) = f(a) \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)',
            note: 'Hệ quả IVT: Nếu f liên tục trên [a, b] và f(a)·f(b) < 0 thì tồn tại c ∈ (a, b) sao cho f(c) = 0.',
          },
          {
            label: 'Đường tiệm cận đứng và Tiệm cận ngang',
            latex: '\\lim_{x \\to a^\\pm} f(x) = \\pm\\infty \\implies x = a \\text{ (TCĐ)}, \\qquad \\lim_{x \\to \\pm\\infty} f(x) = L \\implies y = L \\text{ (TCN)}',
            note: 'Chú ý: Khi x → -∞, ta có √(x^2) = |x| = -x.',
          },
        ],
        detailedNotes: [
          'Ba loại điểm gián đoạn thường gặp: Gián đoạn bỏ được (removable - tồn tại giới hạn hữu hạn nhưng khác f(a)), gián đoạn bước nhảy (jump - giới hạn trái khác giới hạn phải), và gián đoạn vô cực.',
        ],
        example: {
          title: 'Tìm tham số để hàm ghép liên tục và tìm tiệm cận ngang chứa căn thức',
          problem: 'Tìm hằng số k để hàm số f(x) = \\begin{cases} \\frac{\\sin(3x)}{x} & \\text{khi } x \\neq 0 \\\\ 2k - 1 & \\text{khi } x = 0 \\end{cases} liên tục tại x = 0.',
          problemMath: '\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = f(0) = 2k - 1',
          solutionSteps: [
            'Bước 1: Tính giới hạn của f(x) khi x → 0 bằng cách nhân và chia cho 3.',
            'Bước 2: Cho giá trị giới hạn bằng f(0) = 2k - 1 để giải tìm k.',
          ],
          solutionMath: [
            '\\lim_{x \\to 0} f(x) = \\lim_{x \\to 0} 3 \\cdot \\frac{\\sin(3x)}{3x} = 3 \\cdot 1 = 3',
            '\\text{Để } f \\text{ liên tục tại } x = 0 \\iff 2k - 1 = 3 \\iff k = 2',
          ],
          conclusion: 'Với k = 2 thì hàm số liên tục tại x = 0 (và liên tục trên toàn bộ R).',
        },
      },
      {
        code: '2.7 - 2.8',
        title: 'Đạo hàm tại một điểm & Đạo hàm như một hàm số (Trọng tâm)',
        summary:
          'Đạo hàm f\'(a) là tốc độ thay đổi tức thời của y = f(x) đối với x tại điểm x = a, đồng thời là hệ số góc của tiếp tuyến với đồ thị tại điểm P(a, f(a)). Khi cho a thay đổi, f\'(x) trở thành một hàm số mới.',
        keyFormulas: [
          {
            label: 'Định nghĩa Đạo hàm qua giới hạn số gia',
            latex: 'f\'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h} = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}',
            note: 'Phương trình tiếp tuyến tại x = a: y = f(a) + f\'(a)(x - a).',
          },
          {
            label: 'Quan hệ giữa Tính khả vi và Tính liên tục',
            latex: 'f \\text{ khả vi tại } a \\implies f \\text{ liên tục tại } a \\quad (\\text{Chiều ngược lại KHÔNG đúng!})',
            note: 'Ví dụ kinh điển: Hàm f(x) = |x| liên tục tại x = 0 nhưng không có đạo hàm tại x = 0 (điểm góc).',
          },
        ],
        detailedNotes: [
          'Hàm số không khả vi tại x = a trong 3 trường hợp hình học: (1) Đồ thị có điểm góc nhọn (corner/cusp, đạo hàm trái ≠ đạo hàm phải); (2) Đồ thị bị gián đoạn tại a; (3) Đồ thị có tiếp tuyến thẳng đứng (lim |f\'(x)| = ∞).',
        ],
        example: {
          title: 'Tính đạo hàm bằng định nghĩa và viết phương trình tiếp tuyến',
          problem: 'Dùng định nghĩa giới hạn để tìm hàm đạo hàm f\'(x) của f(x) = \\sqrt{x + 1} (với x > -1) và viết phương trình tiếp tuyến tại điểm có hoành độ x_0 = 3.',
          problemMath: 'f\'(x) = \\lim_{h \\to 0} \\frac{\\sqrt{x + h + 1} - \\sqrt{x + 1}}{h}',
          solutionSteps: [
            'Bước 1: Thiết lập tỉ số số gia [f(x + h) - f(x)] / h và nhân lượng liên hợp của tử thức.',
            'Bước 2: Rút gọn h ở tử và mẫu rồi cho h → 0 để thu được f\'(x).',
            'Bước 3: Thay x_0 = 3 để tính f(3) = 2, f\'(3) = 1/4 và lập phương trình tiếp tuyến.',
          ],
          solutionMath: [
            'f\'(x) = \\lim_{h \\to 0} \\frac{(x + h + 1) - (x + 1)}{h\\left(\\sqrt{x + h + 1} + \\sqrt{x + 1}\\right)} = \\lim_{h \\to 0} \\frac{1}{\\sqrt{x + h + 1} + \\sqrt{x + 1}} = \\frac{1}{2\\sqrt{x + 1}}',
            '\\text{Tại } x_0 = 3: f(3) = 2, \\; f\'(3) = \\frac{1}{4} \\implies y = 2 + \\frac{1}{4}(x - 3) \\iff y = \\frac{1}{4}x + \\frac{5}{4}',
          ],
          conclusion: 'Hàm đạo hàm là f\'(x) = 1/(2√(x+1)) và tiếp tuyến tại (3, 2) là y = x/4 + 5/4.',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch2-epsilon-delta',
      caption: 'Hình 2.1: Minh họa hình học định nghĩa giới hạn ε - δ và sự hội tụ của cát tuyến PQ về tiếp tuyến tại P.',
      svgType: 'epsilon-delta',
      tikzCode: `\\begin{tikzpicture}[scale=1.1, >=stealth]
  % Trục tọa độ
  \\draw[->, thick] (-0.5,0) -- (5.2,0) node[right] {$x$};
  \\draw[->, thick] (0,-0.5) -- (0,4.2) node[above] {$y$};
  
  % Dải băng epsilon và delta
  \\fill[blue!8] (0, 1.8) rectangle (4.8, 2.8);
  \\fill[red!10] (2.1, 0) rectangle (3.1, 3.8);
  \\fill[purple!20] (2.1, 1.8) rectangle (3.1, 2.8);
  
  % Đồ thị hàm số y = f(x)
  \\draw[domain=0.4:4.5, smooth, variable=\\x, blue!80!black, very thick] 
    plot ({\\x}, {0.22*(\\x)^2 + 0.8}) node[right] {$y = f(x)$};
    
  % Các đường gióng tại x = a, y = L
  \\draw[dashed, thick, black!70] (2.6,0) node[below] {$a$} -- (2.6,2.287) -- (0,2.287) node[left] {$L$};
  \\draw[dotted, red!80!black] (2.1,0) node[below left, scale=0.8] {$a-\\delta$} -- (2.1,2.8);
  \\draw[dotted, red!80!black] (3.1,0) node[below right, scale=0.8] {$a+\\delta$} -- (3.1,2.8);
  \\draw[dotted, blue!80!black] (0,1.8) node[left, scale=0.8] {$L-\\varepsilon$} -- (4.8,1.8);
  \\draw[dotted, blue!80!black] (0,2.8) node[left, scale=0.8] {$L+\\varepsilon$} -- (4.8,2.8);
  
  % Điểm giới hạn (a, L)
  \\filldraw[fill=white, draw=blue!80!black, very thick] (2.6,2.287) circle (2.5pt);
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Cơ điện tử & Điều khiển Tự động',
      title: 'Cảm biến Vận tốc Tức thời và Khâu Vi phân (D) trong Bộ điều khiển PID',
      description:
        'Trong xe tự hành và robot công nghiệp, bộ mã hóa vòng quay (Encoder) đo vị trí rời rạc s(t_k). Bộ điều khiển PID tính xấp xỉ đạo hàm de(t)/dt của sai số vị trí để dự đoán xu hướng vượt quá (overshoot) và tạo lực hãm sớm giúp hệ thống ổn định nhanh.',
      formulaMath: 'u(t) = K_p e(t) + K_i \\int_0^t e(\\tau)\\,d\\tau + K_d \\frac{de(t)}{dt}, \\qquad v(t) = \\lim_{\\Delta t \\to 0} \\frac{s(t + \\Delta t) - s(t)}{\\Delta t}',
      exampleCalculation:
        'Nếu phương trình chuyển động của drone hạ cánh là h(t) = 20 - 1.5t^2 (m), thì vận tốc chạm đất tại t = 2s là v(2) = h\'(2) = -3(2) = -6 m/s (hướng xuống).',
    },
    quiz: [
      {
        id: 'q2-1',
        question: 'Giá trị của giới hạn L = \\lim_{x \\to -\\infty} \\frac{\\sqrt{4x^2 + 3x}}{2x - 1} bằng:',
        options: [
          { label: 'A', text: '1', math: '1' },
          { label: 'B', text: '-1', math: '-1' },
          { label: 'C', text: '2', math: '2' },
          { label: 'D', text: '0', math: '0' },
        ],
        correctAnswer: 'B',
        explanation:
          'Khi x → -∞, ta có √(x^2) = |x| = -x. Do đó √(4x^2 + 3x) = -x√(4 + 3/x). Chia cả tử và mẫu cho x, ta được lim [-√(4 + 3/x) / (2 - 1/x)] = -2/2 = -1.',
        explanationMath: '\\lim_{x \\to -\\infty} \\frac{-x\\sqrt{4 + 3/x}}{x(2 - 1/x)} = \\frac{-\\sqrt{4}}{2} = -1',
      },
      {
        id: 'q2-2',
        question: 'Cho hàm số f(x) = |x - 2| tại điểm x = 2. Phát biểu nào sau đây là ĐÚNG?',
        options: [
          { label: 'A', text: 'Hàm số liên tục tại x = 2 nhưng không khả vi tại x = 2.' },
          { label: 'B', text: 'Hàm số vừa liên tục vừa khả vi tại x = 2 với f\'(2) = 0.' },
          { label: 'C', text: 'Hàm số bị gián đoạn tại x = 2.' },
          { label: 'D', text: 'Hàm số khả vi tại x = 2 nhưng không liên tục.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có lim_{x→2} |x - 2| = 0 = f(2) nên hàm liên tục tại x = 2. Tuy nhiên đạo hàm bên phải f\'_+(2) = 1 khác đạo hàm bên trái f\'_-(2) = -1 nên f\'(2) không tồn tại.',
        explanationMath: 'f\'_+(2) = \\lim_{h \\to 0^+} \\frac{h}{h} = 1 \\neq f\'_-(2) = \\lim_{h \\to 0^-} \\frac{-h}{h} = -1',
      },
      {
        id: 'q2-3',
        question: 'Giới hạn \\lim_{h \\to 0} \\frac{\\ln(e + h) - 1}{h} biểu thị giá trị đạo hàm nào sau đây?',
        options: [
          { label: 'A', text: 'Đạo hàm của f(x) = ln(x) tại x = e, bằng 1/e.', math: 'f\'(e) = \\frac{1}{e}' },
          { label: 'B', text: 'Đạo hàm của f(x) = ln(x) tại x = 1, bằng 1.', math: 'f\'(1) = 1' },
          { label: 'C', text: 'Đạo hàm của f(x) = e^x tại x = 1, bằng e.', math: 'f\'(1) = e' },
          { label: 'D', text: 'Giới hạn bằng 0.', math: '0' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì 1 = ln(e), biểu thức đã cho chính là định nghĩa đạo hàm lim_{h→0} [ln(e + h) - ln(e)] / h = (ln x)\'|_{x=e} = 1/e.',
        explanationMath: '\\lim_{h \\to 0} \\frac{\\ln(e+h) - \\ln e}{h} = \\left.(\\ln x)\'\\right|_{x=e} = \\frac{1}{e}',
      },
    ],
  },
  {
    id: 3,
    sessionRange: 'Buổi 3',
    title: 'Chương 3: Các quy tắc tính Đạo hàm (Trọng tâm)',
    englishTitle: 'Differentiation Rules',
    isFocusChapter: true,
    overview:
      'Chương trọng tâm cung cấp hệ thống công cụ giải tích mạnh mẽ để tính đạo hàm của mọi hàm sơ cấp và tổ hợp của chúng mà không cần quay lại tính giới hạn: Quy tắc tích/thương, Quy tắc dây chuyền (hàm hợp), Đạo hàm hàm ẩn, Đạo hàm logarithm, Hàm hyperbolic, Đạo hàm cấp cao và Xấp xỉ tuyến tính - Vi phân.',
    learningOutcomes: [
      'LLO3.1: Tính thành thạo đạo hàm của hàm đa thức, hàm mũ, tích/thương, lượng giác, hàm hợp, hàm ẩn, hàm logarithm, hàm hyperbolic và đạo hàm cấp cao.',
      'LLO3.2: Thiết lập được xấp xỉ tuyến tính của hàm tại một điểm và vận dụng vi phân để ước lượng sai số tối đa trong đo lường kỹ thuật.',
    ],
    tableOfContents: [
      { code: '3.1 - 3.3', title: 'Đạo hàm đa thức, hàm mũ, tích, thương và hàm lượng giác' },
      { code: '3.4 - 3.5', title: 'Quy tắc hàm hợp (Chain Rule) & Đạo hàm của hàm ẩn' },
      { code: '3.6 - 3.7', title: 'Đạo hàm hàm Logarithm, Đạo hàm dạng u(x)^v(x) & Hàm Hyperbolic' },
      { code: '3.8 - 3.9', title: 'Đạo hàm bậc cao (Công thức Leibniz) & Xấp xỉ tuyến tính - Vi phân' },
    ],
    subSections: [
      {
        code: '3.1 - 3.3',
        title: 'Đạo hàm đa thức, hàm mũ, tích, thương và hàm lượng giác',
        summary:
          'Hàm số mũ tự nhiên f(x) = e^x có tính chất đặc biệt duy nhất là đạo hàm của nó bằng chính nó: (e^x)\' = e^x. Kết hợp với quy tắc đạo hàm của tổng, hiệu, tích, thương và các hàm lượng giác, ta dễ dàng khảo sát tốc độ biến thiên của các hàm cơ bản.',
        keyFormulas: [
          {
            label: 'Quy tắc Đạo hàm của Tích và Thương',
            latex: '\\frac{d}{dx}[f(x)g(x)] = f\'(x)g(x) + f(x)g\'(x), \\qquad \\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f\'(x)g(x) - f(x)g\'(x)}{[g(x)]^2}',
            note: 'Tuyệt đối tránh sai lầm phổ biến: (f·g)\' ≠ f\'·g\' và (f/g)\' ≠ f\'/g\'.',
          },
          {
            label: 'Đạo hàm 6 hàm lượng giác chuẩn',
            latex: '(\\sin x)\' = \\cos x, \\; (\\cos x)\' = -\\sin x, \\; (\\tan x)\' = \\sec^2 x, \\; (\\cot x)\' = -\\csc^2 x, \\; (\\sec x)\' = \\sec x\\tan x',
            note: 'Trong đó sec x = 1/cos x và csc x = 1/sin x.',
          },
        ],
        detailedNotes: [
          'Tiếp tuyến nằm ngang (Horizontal tangent) xuất hiện tại các điểm mà đạo hàm f\'(x) = 0.',
        ],
        example: {
          title: 'Vận dụng quy tắc tích và thương tìm tiếp tuyến song song',
          problem: 'Tính đạo hàm của hàm số y = \\frac{x^2 e^x}{x + 1} tại điểm x = 1.',
          problemMath: 'y = \\frac{x^2 e^x}{x + 1}',
          solutionSteps: [
            'Bước 1: Đặt tử số u(x) = x^2 e^x, tính u\'(x) bằng quy tắc tích: u\'(x) = (2x + x^2)e^x.',
            'Bước 2: Áp dụng quy tắc đạo hàm của thương với mẫu v(x) = x + 1, v\'(x) = 1.',
            'Bước 3: Rút gọn biểu thức và thay x = 1.',
          ],
          solutionMath: [
            'y\' = \\frac{[(2x + x^2)e^x](x + 1) - x^2 e^x (1)}{(x + 1)^2} = \\frac{x e^x (x^2 + 2x + 2)}{(x + 1)^2}',
            'y\'(1) = \\frac{1 \\cdot e^1 (1 + 2 + 2)}{(1 + 1)^2} = \\frac{5e}{4}',
          ],
          conclusion: 'Giá trị đạo hàm tại x = 1 là y\'(1) = 5e/4.',
        },
      },
      {
        code: '3.4 - 3.5',
        title: 'Quy tắc hàm hợp (Chain Rule) & Đạo hàm của hàm ẩn',
        summary:
          'Quy tắc dây chuyền (Chain Rule) cho phép tính đạo hàm của hàm hợp F(x) = f(g(x)) bằng tích đạo hàm hàm ngoài (tính tại hàm trong) với đạo hàm hàm trong. Khi y không được biểu diễn tường minh theo x mà qua phương trình F(x, y) = 0, ta lấy đạo hàm hai vế theo x (coi y = y(x) là hàm hợp) rồi giải tìm y\'.',
        keyFormulas: [
          {
            label: 'Quy tắc dây chuyền (Ký hiệu Lagrange và Leibniz)',
            latex: 'F\'(x) = f\'(g(x)) \\cdot g\'(x) \\qquad \\text{hoặc} \\qquad \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}',
            note: 'Với hàm lũy thừa tổng quát: ([u(x)]^n)\' = n[u(x)]^{n-1} · u\'(x).',
          },
          {
            label: 'Công thức tính nhanh Đạo hàm hàm ẩn F(x, y) = 0',
            latex: '\\frac{d}{dx}[F(x, y(x))] = 0 \\implies y\'(x) = -\\frac{F\'_x(x, y)}{F\'_y(x, y)} \\quad (F\'_y \\neq 0)',
            note: 'Khi đạo hàm các số hạng chứa y theo x, luôn phải nhân thêm y\' (ví dụ: (y^3)\'_x = 3y^2 · y\').',
          },
        ],
        detailedNotes: [
          'Quy tắc đạo hàm hàm ẩn cũng là phương pháp chuẩn để chứng minh công thức đạo hàm của các hàm lượng giác ngược như (arcsin x)\' = 1/√(1 - x^2).',
        ],
        example: {
          title: 'Đạo hàm hàm ẩn trên đường cong Lá Descartes (Folium of Descartes)',
          problem: 'Cho đường cong xác định bởi phương trình hàm ẩn x^3 + y^3 = 6xy. Hãy tính đạo hàm y\' = dy/dx và viết phương trình tiếp tuyến tại điểm M(3, 3).',
          problemMath: 'x^3 + y^3 = 6xy \\quad \\text{tại } M(3, 3)',
          solutionSteps: [
            'Bước 1: Đạo hàm cả hai vế của phương trình theo biến x (chú ý vế phải 6xy là tích của hai hàm theo x).',
            'Bước 2: Nhóm các số hạng chứa y\' sang một vế và rút y\' theo x, y.',
            'Bước 3: Thay tọa độ x = 3, y = 3 vào biểu thức y\' và viết phương trình tiếp tuyến.',
          ],
          solutionMath: [
            '3x^2 + 3y^2 y\' = 6y + 6x y\' \\iff (y^2 - 2x)y\' = 2y - x^2 \\implies y\' = \\frac{2y - x^2}{y^2 - 2x}',
            '\\text{Tại } M(3, 3): y\'(3, 3) = \\frac{2(3) - 3^2}{3^2 - 2(3)} = \\frac{6 - 9}{9 - 6} = -1',
            '\\text{Phương trình tiếp tuyến: } y - 3 = -1(x - 3) \\iff x + y - 6 = 0',
          ],
          conclusion: 'Hệ số góc tiếp tuyến tại M(3, 3) là -1 và phương trình tiếp tuyến là x + y - 6 = 0.',
        },
      },
      {
        code: '3.6 - 3.7',
        title: 'Đạo hàm hàm Logarithm, Đạo hàm dạng u(x)^v(x) & Hàm Hyperbolic',
        summary:
          'Phương pháp lấy đạo hàm logarithm (Logarithmic Differentiation) giúp đơn giản hóa việc tính đạo hàm của các biểu thức tích/thương phức tạp hoặc hàm lũy thừa - mũ dạng y = [u(x)]^{v(x)} bằng cách lấy ln hai vế trước khi đạo hàm.',
        keyFormulas: [
          {
            label: 'Đạo hàm Logarithm và Hàm mũ-lũy thừa u(x)^v(x)',
            latex: '(\\ln|u(x)|)\' = \\frac{u\'(x)}{u(x)}, \\qquad \\left(u^v\\right)\' = u^v \\left(v\' \\ln u + v \\frac{u\'}{u}\\right)',
            note: 'Bản chất: Viết u^v = e^{v ln u} rồi áp dụng quy tắc hàm hợp.',
          },
          {
            label: 'Định nghĩa và Đạo hàm các hàm Hyperbolic',
            latex: '\\sinh x = \\frac{e^x - e^{-x}}{2}, \\; \\cosh x = \\frac{e^x + e^{-x}}{2}, \\; \\cosh^2 x - \\sinh^2 x = 1, \\; (\\sinh x)\' = \\cosh x, \\; (\\cosh x)\' = \\sinh x',
            note: 'Đường dây cáp treo tự do (dây truyền tải điện) có hình dạng chính xác là đồ thị hàm y = a cosh(x/a) (đường dây xích - Catenary).',
          },
        ],
        detailedNotes: [
          'Hàm ngược của sinh x là argsinh(x) = ln(x + √(x^2 + 1)), có đạo hàm là 1/√(x^2 + 1).',
        ],
        example: {
          title: 'Tính đạo hàm của hàm lũy thừa - mũ bằng phương pháp Logarithm',
          problem: 'Tính đạo hàm của hàm số y = x^{\\sin x} với x > 0.',
          problemMath: 'y = x^{\\sin x} \\quad (x > 0)',
          solutionSteps: [
            'Bước 1: Lấy logarithm tự nhiên cả hai vế: ln y = ln(x^{sin x}) = sin(x) · ln(x).',
            'Bước 2: Đạo hàm hai vế theo x (vế trái là hàm ẩn theo y, vế phải là tích hai hàm).',
            'Bước 3: Nhân hai vế với y = x^{sin x} để thu được kết quả cuối cùng.',
          ],
          solutionMath: [
            '\\ln y = \\sin x \\cdot \\ln x \\implies \\frac{y\'}{y} = \\cos x \\cdot \\ln x + \\frac{\\sin x}{x}',
            'y\' = x^{\\sin x} \\left( \\cos x \\ln x + \\frac{\\sin x}{x} \\right)',
          ],
          conclusion: 'Đạo hàm của hàm số là y\' = x^{\\sin x} (cos x ln x + sin x / x).',
        },
      },
      {
        code: '3.8 - 3.9',
        title: 'Đạo hàm bậc cao (Công thức Leibniz) & Xấp xỉ tuyến tính - Vi phân',
        summary:
          'Đạo hàm cấp n được định nghĩa quy nạp: f^{(n)}(x) = [f^{(n-1)}(x)]\'. Trong kỹ thuật, đường tiếp tuyến L(x) tại x = a được dùng để xấp xỉ tuyến tính hàm f(x) trong lân cận điểm a, và vi phân dy = f\'(x)dx dùng để ước lượng sai số lan truyền.',
        keyFormulas: [
          {
            label: 'Đạo hàm cấp n cơ bản & Công thức Leibniz',
            latex: '(\\sin x)^{(n)} = \\sin\\left(x + \\frac{n\\pi}{2}\\right), \\quad \\left(\\frac{1}{x+a}\\right)^{(n)} = \\frac{(-1)^n n!}{(x+a)^{n+1}}, \\quad (uv)^{(n)} = \\sum_{k=0}^n C_n^k u^{(n-k)} v^{(k)}',
            note: 'Công thức Leibniz cực kỳ hiệu quả khi một trong hai hàm là đa thức bậc thấp (vì đạo hàm từ cấp m+1 trở đi bằng 0).',
          },
          {
            label: 'Xấp xỉ tuyến tính L(x) và Vi phân hàm một biến',
            latex: 'f(x) \\approx L(x) = f(a) + f\'(a)(x - a), \\qquad \\Delta y \\approx dy = f\'(x)\\,dx',
            note: 'Sai số tương đối trong đo lường: Δy / y ≈ dy / y = d(ln y).',
          },
        ],
        detailedNotes: [
          'Khi áp dụng công thức Leibniz cho tích P(x)·g(x) với P(x) là đa thức bậc 2, tổng chuỗi Leibniz chỉ còn đúng 3 số hạng ứng với k = 0, 1, 2.',
        ],
        example: {
          title: 'Ứng dụng xấp xỉ tuyến tính và tính đạo hàm cấp n bằng Leibniz',
          problem: '(a) Tính đạo hàm cấp 50 của hàm y = x^2 e^{2x}. (b) Dùng vi phân tính gần đúng giá trị \\sqrt[3]{8.06}.',
          problemMath: 'y = x^2 e^{2x} \\implies y^{(50)} = ? \\qquad \\sqrt[3]{8.06} \\approx ?',
          solutionSteps: [
            'Câu (a): Đặt u = e^{2x} ⇒ u^{(m)} = 2^m e^{2x} và v = x^2 ⇒ v\' = 2x, v\'\' = 2, v^{(k)} = 0 với k ≥ 3.',
            'Câu (b): Xét f(x) = x^{1/3} tại a = 8 với Δx = dx = 0.06. Tính f(8) = 2 và f\'(8) = 1/(3·8^{2/3}) = 1/12.',
          ],
          solutionMath: [
            'y^{(50)} = C_{50}^0 (e^{2x})^{(50)} x^2 + C_{50}^1 (e^{2x})^{(49)} (2x) + C_{50}^2 (e^{2x})^{(48)} (2) = 2^{48} e^{2x} (4x^2 + 200x + 2450)',
            '\\sqrt[3]{8.06} \\approx f(8) + f\'(8)\\cdot 0.06 = 2 + \\frac{1}{12}(0.06) = 2 + 0.005 = 2.005',
          ],
          conclusion: 'Giá trị gần đúng là 2.005 (giá trị máy tính chính xác đến 6 chữ số thập phân là 2.004988).',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch3-linear-approx',
      caption: 'Hình 3.1: Ý nghĩa hình học của Xấp xỉ tuyến tính L(x), số gia thực Δy của đường cong và vi phân dy trên tiếp tuyến.',
      svgType: 'tangent-secant',
      tikzCode: `\\begin{tikzpicture}[scale=1.15, >=stealth]
  % Trục tọa độ
  \\draw[->, thick] (-0.4,0) -- (4.8,0) node[right] {$x$};
  \\draw[->, thick] (0,-0.4) -- (0,3.8) node[above] {$y$};
  
  % Đồ thị hàm số y = f(x)
  \\draw[domain=0.4:4.2, smooth, variable=\\x, blue!80!black, very thick] 
    plot ({\\x}, {0.2*(\\x)^2 + 0.5}) node[above left] {$y = f(x)$};
    
  % Tiếp tuyến tại a = 1.5 (y = 0.95 + 0.6(x - 1.5))
  \\draw[domain=0.5:4.3, smooth, variable=\\x, red!80!black, thick] 
    plot ({\\x}, {0.95 + 0.6*(\\x - 1.5)}) node[right] {$y = L(x)$};
    
  % Các đoạn hình học tại a = 1.5 và a + dx = 3.5
  \\filldraw[black] (1.5, 0.95) circle (2pt) node[above left] {$P(a, f(a))$};
  \\draw[dashed] (1.5, 0) node[below] {$a$} -- (1.5, 0.95);
  \\draw[dashed] (3.5, 0) node[below] {$a + dx$} -- (3.5, 2.95);
  \\draw[dashed] (1.5, 0.95) -- (3.5, 0.95);
  
  % Chú thích dy và Delta y
  \\draw[<->, thick, red!80!black] (3.65, 0.95) -- (3.65, 2.15) node[midway, right] {$dy = f'(a)dx$};
  \\draw[<->, thick, blue!80!black] (4.35, 0.95) -- (4.35, 2.95) node[midway, right] {$\\Delta y$};
  \\draw[<->, thick, teal!80!black] (1.5, 0.65) -- (3.5, 0.65) node[midway, below] {$dx = \\Delta x$};
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Học máy (Machine Learning) & Kỹ thuật Đo lường',
      title: 'Lan truyền Ngược (Backpropagation) và Phân tích Sai số Cảm biến',
      description:
        'Trong Mạng Nơ-ron sâu (Deep Neural Networks), thuật toán Lan truyền ngược (Backpropagation) chính là việc áp dụng liên tiếp Quy tắc đạo hàm hàm hợp (Chain Rule) để tính gradient của hàm mất mát L đối với từng trọng số w_i. Ngoài ra, vi phân dy = f\'(x)dx được dùng để tính sai số tối đa của thể tích/điện trở khi biết sai số của thước đo.',
      formulaMath: '\\frac{\\partial \\mathcal{L}}{\\partial w_1} = \\frac{\\partial \\mathcal{L}}{\\partial \\hat{y}} \\cdot \\frac{\\partial \\hat{y}}{\\partial z_2} \\cdot \\frac{\\partial z_2}{\\partial a_1} \\cdot \\frac{\\partial a_1}{\\partial w_1}, \\qquad \\frac{\\Delta V}{V} \\approx \\frac{dV}{V} = 3\\frac{dR}{R}',
      exampleCalculation:
        'Bán kính quả cầu kim loại đo được R = 10 cm với sai số tối đa ±0.05 cm (tức dR/R = 0.5%). Khi đó sai số tương đối tối đa khi tính thể tích V = (4/3)πR^3 là dV/V = 3(dR/R) = 1.5%, tương ứng dV ≈ 4π(10^2)(0.05) ≈ 62.83 cm³.',
    },
    quiz: [
      {
        id: 'q3-1',
        question: 'Đạo hàm của hàm hợp f(x) = \\ln(\\cos(2x)) trên khoảng (-\\pi/4, \\pi/4) là:',
        options: [
          { label: 'A', text: '-2 tan(2x)', math: '-2\\tan(2x)' },
          { label: 'B', text: '2 tan(2x)', math: '2\\tan(2x)' },
          { label: 'C', text: '1 / cos(2x)', math: '\\frac{1}{\\cos(2x)}' },
          { label: 'D', text: '-sin(2x) / cos(2x)', math: '-\\tan(2x)' },
        ],
        correctAnswer: 'A',
        explanation:
          'Áp dụng quy tắc hàm hợp hai lần: f\'(x) = [cos(2x)]\' / cos(2x) = -2sin(2x) / cos(2x) = -2tan(2x).',
        explanationMath: 'f\'(x) = \\frac{(\\cos 2x)\'}{\\cos 2x} = \\frac{-2\\sin 2x}{\\cos 2x} = -2\\tan(2x)',
      },
      {
        id: 'q3-2',
        question: 'Cho hàm số y = y(x) xác định ẩn bởi phương trình e^y + xy = e. Giá trị của y\'(0) bằng:',
        options: [
          { label: 'A', text: '-1/e', math: '-\\frac{1}{e}' },
          { label: 'B', text: '-e', math: '-e' },
          { label: 'C', text: '1/e', math: '\\frac{1}{e}' },
          { label: 'D', text: '0', math: '0' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tại x = 0, ta có e^{y(0)} + 0 = e ⇒ y(0) = 1. Đạo hàm hai vế theo x: e^y · y\' + y + x·y\' = 0. Thay x = 0, y = 1 vào: e^1 · y\'(0) + 1 + 0 = 0 ⇒ y\'(0) = -1/e.',
        explanationMath: 'e^y y\' + y + xy\' = 0 \\xrightarrow{x=0,\\,y=1} e \\cdot y\'(0) + 1 = 0 \\implies y\'(0) = -\\frac{1}{e}',
      },
      {
        id: 'q3-3',
        question: 'Xấp xỉ tuyến tính L(x) của hàm số f(x) = \\sqrt{1 + 2x} tại điểm a = 0 là:',
        options: [
          { label: 'A', text: 'L(x) = 1 + x', math: 'L(x) = 1 + x' },
          { label: 'B', text: 'L(x) = 1 + 2x', math: 'L(x) = 1 + 2x' },
          { label: 'C', text: 'L(x) = 1 + x/2', math: 'L(x) = 1 + \\frac{x}{2}' },
          { label: 'D', text: 'L(x) = x', math: 'L(x) = x' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có f(0) = 1 và f\'(x) = 2 / (2√(1 + 2x)) = 1 / √(1 + 2x), suy ra f\'(0) = 1. Vậy L(x) = f(0) + f\'(0)(x - 0) = 1 + x.',
        explanationMath: 'L(x) = f(0) + f\'(0)(x - 0) = 1 + 1\\cdot x = 1 + x',
      },
    ],
  },
  {
    id: 4,
    sessionRange: 'Buổi 4',
    title: 'Chương 4: Ứng dụng của Đạo hàm (Trọng tâm)',
    englishTitle: 'Applications of Differentiation',
    isFocusChapter: true,
    overview:
      'Chương này khai thác sức mạnh của đạo hàm cấp 1 và cấp 2 để giải quyết các bài toán cốt lõi của kỹ thuật và khoa học: Tìm cực trị địa phương và toàn cục, Định lý Giá trị Trung bình (Lagrange), khảo sát tính đơn điệu và tính lồi/lõm (điểm uốn), Quy tắc L\'Hospital khử các dạng vô định, Bài toán tối ưu hóa thực tế, Phương pháp lặp Newton giải phương trình phi tuyến và mở đầu về Nguyên hàm.',
    learningOutcomes: [
      'LLO4.1: Ứng dụng đạo hàm tìm cực trị địa phương, cực trị tuyệt đối (toàn cục) trên đoạn đóng.',
      'LLO4.2: Phân tích ảnh hưởng của f\' và f\'\' lên dáng điệu đồ thị (đơn điệu, lồi lõm, điểm uốn).',
      'LLO4.3: Áp dụng thành thạo quy tắc L\'Hospital để tìm giới hạn của 7 dạng vô định.',
      'LLO4.4 - 4.6: Giải bài toán tối ưu hóa thực tế, áp dụng thuật toán lặp Newton và tìm nguyên hàm cơ bản.',
    ],
    tableOfContents: [
      { code: '4.1 - 4.2', title: 'Cực trị của hàm số, Định lý Fermat & Định lý Giá trị Trung bình (MVT)' },
      { code: '4.3', title: 'Khảo sát dáng điệu đồ thị: Đơn điệu, Lồi lõm & Điểm uốn' },
      { code: '4.4', title: 'Các dạng vô định và Quy tắc L\'Hospital' },
      { code: '4.5 - 4.7', title: 'Bài toán Tối ưu hóa, Phương pháp Newton & Nguyên hàm' },
    ],
    subSections: [
      {
        code: '4.1 - 4.2',
        title: 'Cực trị của hàm số, Định lý Fermat & Định lý Giá trị Trung bình (MVT)',
        summary:
          'Điểm tới hạn (Critical number) của hàm f là điểm c thuộc tập xác định sao cho f\'(c) = 0 hoặc f\'(c) không tồn tại. Theo Định lý Weierstrass, hàm liên tục trên đoạn đóng [a, b] luôn đạt Giá trị lớn nhất (GTLN) và Giá trị nhỏ nhất (GTNN) tại các điểm tới hạn hoặc tại hai đầu mút a, b.',
        keyFormulas: [
          {
            label: 'Định lý Fermat & Điểm tới hạn',
            latex: 'f \\text{ đạt cực trị địa phương tại } c \\text{ và khả vi tại } c \\implies f\'(c) = 0',
            note: 'Chiều ngược lại không đúng: f\'(0) = 0 với f(x) = x^3 nhưng x = 0 không phải cực trị.',
          },
          {
            label: 'Định lý Giá trị Trung bình Lagrange (Mean Value Theorem)',
            latex: 'f \\text{ liên tục trên } [a,b], \\text{ khả vi trên } (a,b) \\implies \\exists c \\in (a,b) : f\'(c) = \\frac{f(b) - f(a)}{b - a}',
            note: 'Khi f(a) = f(b), Định lý Lagrange suy biến thành Định lý Rolle: ∃c ∈ (a, b) sao cho f\'(c) = 0.',
          },
        ],
        detailedNotes: [
          'Quy trình tìm GTLN/GTNN trên đoạn đóng [a, b] (Closed Interval Method): (1) Tìm các điểm tới hạn c_i ∈ (a, b); (2) Tính f(c_i) và f(a), f(b); (3) So sánh các giá trị để kết luận max và min.',
        ],
        example: {
          title: 'Ứng dụng Định lý Lagrange chứng minh bất đẳng thức giải tích',
          problem: 'Sử dụng Định lý Giá trị Trung bình Lagrange, chứng minh rằng |\\sin a - \\sin b| \\le |a - b| với mọi số thực a, b.',
          problemMath: '|\\sin a - \\sin b| \\le |a - b|, \\quad \\forall a, b \\in \\mathbb{R}',
          solutionSteps: [
            'Bước 1: Nếu a = b thì bất đẳng thức hiển nhiên đúng (0 ≤ 0). Giả sử a < b.',
            'Bước 2: Xét hàm f(x) = sin x liên tục trên [a, b] và khả vi trên (a, b) với f\'(x) = cos x.',
            'Bước 3: Áp dụng định lý Lagrange và đánh giá |cos c| ≤ 1.',
          ],
          solutionMath: [
            '\\exists c \\in (a, b) : \\frac{\\sin b - \\sin a}{b - a} = \\cos c \\implies |\\sin a - \\sin b| = |\\cos c| \\cdot |a - b| \\le 1 \\cdot |a - b|',
          ],
          conclusion: 'Bất đẳng thức được chứng minh chặt chẽ (hàm sin x có tính chất Lipschitz với hằng số L = 1).',
        },
      },
      {
        code: '4.3',
        title: 'Khảo sát dáng điệu đồ thị: Đơn điệu, Lồi lõm & Điểm uốn',
        summary:
          'Dấu của đạo hàm cấp một f\'(x) quyết định chiều biến thiên (đồng biến / nghịch biến), trong khi dấu của đạo hàm cấp hai f\'\'(x) quyết định bề lõm của đồ thị (lõm lên - concave upward khi f\'\' > 0, lõm xuống - concave downward khi f\'\' < 0) và xác định điểm uốn.',
        keyFormulas: [
          {
            label: 'Tiêu chuẩn Đạo hàm cấp 2 cho Cực trị địa phương',
            latex: 'f\'(c) = 0 \\text{ và } \\begin{cases} f\'\'(c) > 0 \\implies c \\text{ là điểm cực tiểu địa phương} \\\\ f\'\'(c) < 0 \\implies c \\text{ là điểm cực đại địa phương} \\end{cases}',
            note: 'Nếu f\'\'(c) = 0 thì tiêu chuẩn đạo hàm cấp 2 chưa kết luận được, phải dùng bảng xét dấu f\'(x).',
          },
          {
            label: 'Điều kiện Điểm uốn (Inflection Point)',
            latex: 'f\'\'(x) \\text{ đổi dấu khi } x \\text{ đi qua } x_0 \\implies I(x_0, f(x_0)) \\text{ là điểm uốn của đồ thị}',
            note: 'Tại điểm uốn, đường tiếp tuyến xuyên qua đồ thị hàm số.',
          },
        ],
        detailedNotes: [
          'Trong giáo trình James Stewart, f\'\'(x) > 0 được gọi là "lõm lên" (Concave upward - hình chữ U), còn f\'\'(x) < 0 được gọi là "lõm xuống" (Concave downward - hình chữ U ngược).',
        ],
        example: {
          title: 'Tìm cực trị và điểm uốn của hàm phân thức mũ Gaussian',
          problem: 'Tìm các khoảng lồi/lõm và tọa độ các điểm uốn của đường cong hình chuông f(x) = e^{-x^2/2}.',
          problemMath: 'f(x) = e^{-x^2/2}, \\quad x \\in \\mathbb{R}',
          solutionSteps: [
            'Bước 1: Tính đạo hàm cấp một f\'(x) = -x e^{-x^2/2}.',
            'Bước 2: Tính đạo hàm cấp hai f\'\'(x) bằng quy tắc tích và giải phương trình f\'\'(x) = 0.',
            'Bước 3: Xét dấu f\'\'(x) qua các nghiệm x = ±1 để kết luận điểm uốn.',
          ],
          solutionMath: [
            'f\'\'(x) = -e^{-x^2/2} + (-x)(-x)e^{-x^2/2} = (x^2 - 1)e^{-x^2/2}',
            'f\'\'(x) = 0 \\iff x^2 - 1 = 0 \\iff x = \\pm 1 \\quad (\\text{do } e^{-x^2/2} > 0, \\forall x)',
          ],
          conclusion: 'Vì f\'\'(x) đổi dấu qua x = -1 và x = 1 nên đồ thị có 2 điểm uốn là (-1, e^{-1/2}) và (1, e^{-1/2}).',
        },
      },
      {
        code: '4.4',
        title: 'Các dạng vô định và Quy tắc L\'Hospital',
        summary:
          'Quy tắc L\'Hospital cho phép tính giới hạn của thương hai hàm số có dạng vô định 0/0 hoặc ∞/∞ bằng cách thay thế bằng giới hạn của thương hai đạo hàm. Các dạng vô định khác (0·∞, ∞ - ∞, 0^0, ∞^0, 1^∞) đều được quy về hai dạng chuẩn này.',
        keyFormulas: [
          {
            label: 'Định lý L\'Hospital (Dạng 0/0 hoặc ∞/∞)',
            latex: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)} \\quad \\left(\\text{nếu giới hạn vế phải tồn tại hoặc bằng } \\pm\\infty\\right)',
            note: 'Luôn kiểm tra chắc chắn biểu thức có dạng 0/0 hoặc ∞/∞ trước mỗi lần áp dụng L\'Hospital!',
          },
          {
            label: 'Cách khử dạng vô định lũy thừa 0^0, ∞^0, 1^∞',
            latex: '\\lim_{x \\to a} [u(x)]^{v(x)} = \\exp\\left( \\lim_{x \\to a} v(x) \\ln u(x) \\right) = e^L',
            note: 'Biến đổi tích v(x)·ln u(x) (dạng 0·∞) thành thương ln u(x) / [1/v(x)] để dùng L\'Hospital.',
          },
        ],
        detailedNotes: [
          'Mẹo tính nhanh: Kết hợp thay thế vô cùng bé tương đương (như sin x ~ x, ln(1+x) ~ x) cho các nhân tử trước khi áp dụng L\'Hospital sẽ giảm đáng kể độ phức tạp khi đạo hàm.',
        ],
        example: {
          title: 'Khử dạng vô định 0/0 và 1^∞ bằng quy tắc L\'Hospital',
          problem: 'Tính giới hạn L = \\lim_{x \\to 0} \\frac{e^x - e^{-x} - 2x}{x - \\sin x}.',
          problemMath: 'L = \\lim_{x \\to 0} \\frac{e^x - e^{-x} - 2x}{x - \\sin x} \\quad \\left(\\text{Dạng } \\frac{0}{0}\\right)',
          solutionSteps: [
            'Bước 1: Kiểm tra khi x → 0 cả tử và mẫu đều tiến về 0 (dạng 0/0). Áp dụng L\'Hospital lần 1.',
            'Bước 2: Tiếp tục kiểm tra dạng 0/0 và áp dụng L\'Hospital lần 2 và lần 3.',
          ],
          solutionMath: [
            'L \\stackrel{\\text{L\'H}}{=} \\lim_{x \\to 0} \\frac{e^x + e^{-x} - 2}{1 - \\cos x} \\stackrel{\\text{L\'H}}{=} \\lim_{x \\to 0} \\frac{e^x - e^{-x}}{\\sin x} \\stackrel{\\text{L\'H}}{=} \\lim_{x \\to 0} \\frac{e^x + e^{-x}}{\\cos x} = \\frac{1 + 1}{1} = 2',
          ],
          conclusion: 'Giới hạn cần tìm bằng L = 2.',
        },
      },
      {
        code: '4.5 - 4.7',
        title: 'Bài toán Tối ưu hóa, Phương pháp Newton & Nguyên hàm',
        summary:
          'Bài toán tối ưu hóa chuyển mô tả thực tế thành bài toán tìm cực trị toàn cục của hàm mục tiêu. Phương pháp lặp Newton–Raphson sử dụng tiếp tuyến để tìm nghiệm gần đúng của phương trình f(x) = 0 với tốc độ hội tụ bậc hai. Phần cuối giới thiệu Nguyên hàm F(x) thỏa mãn F\'(x) = f(x).',
        keyFormulas: [
          {
            label: 'Công thức lặp Newton - Raphson giải phương trình f(x) = 0',
            latex: 'x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}, \\quad n = 0, 1, 2, \\dots \\quad (f\'(x_n) \\neq 0)',
            note: 'Ý nghĩa hình học: x_{n+1} là giao điểm của tiếp tuyến tại (x_n, f(x_n)) với trục hoành Ox.',
          },
          {
            label: 'Định nghĩa Họ Nguyên hàm',
            latex: 'F\'(x) = f(x), \\forall x \\in I \\implies \\int f(x)\\,dx = F(x) + C',
            note: 'Mọi nguyên hàm của f(x) trên một khoảng I chỉ sai khác nhau một hằng số cộng C.',
          },
        ],
        detailedNotes: [
          'Trong bài toán thiết kế hình trụ có thể tích V cho trước sao cho diện tích toàn phần S = 2πr^2 + 2πrh nhỏ nhất: Thay h = V/(πr^2) vào S(r) rồi giải S\'(r) = 0 ta luôn thu được tỉ lệ vàng kỹ thuật: chiều cao bằng đường kính (h = 2r).',
        ],
        example: {
          title: 'Bài toán tối ưu chi phí vật liệu chế tạo bình chứa hình trụ',
          problem: 'Cần chế tạo một lon nhôm hình trụ kín hai đầu có thể tích cố định V = 16\\pi (cm³). Hãy tìm bán kính đáy r và chiều cao h để tổng diện tích bề mặt vỏ nhôm là nhỏ nhất.',
          problemMath: 'V = \\pi r^2 h = 16\\pi, \\qquad S(r) = 2\\pi r^2 + 2\\pi r h \\to \\min',
          solutionSteps: [
            'Bước 1: Từ ràng buộc thể tích πr^2 h = 16π, rút chiều cao h = 16 / r^2 (với r > 0).',
            'Bước 2: Thế h vào hàm diện tích toàn phần S(r) = 2πr^2 + 32π/r.',
            'Bước 3: Tính đạo hàm S\'(r), giải phương trình S\'(r) = 0 và kiểm tra S\'\'(r) > 0.',
          ],
          solutionMath: [
            'S\'(r) = 4\\pi r - \\frac{32\\pi}{r^2} = 0 \\iff r^3 = 8 \\iff r = 2 \\text{ (cm)}',
            'S\'\'(r) = 4\\pi + \\frac{64\\pi}{r^3} > 0, \\forall r > 0 \\implies r = 2 \\text{ đạt GTNN toàn cục, khi đó } h = \\frac{16}{2^2} = 4 \\text{ (cm)}',
          ],
          conclusion: 'Diện tích vật liệu nhỏ nhất là S_min = 24π cm² khi bán kính đáy r = 2 cm và chiều cao h = 2r = 4 cm.',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch4-mvt',
      caption: 'Hình 4.1: Định lý Giá trị Trung bình Lagrange (MVT) — Tiếp tuyến tại c song song với dây cung AB.',
      svgType: 'mean-value-theorem',
      tikzCode: `\\begin{tikzpicture}[scale=1.1, >=stealth]
  % Trục tọa độ
  \\draw[->, thick] (-0.4,0) -- (5.0,0) node[right] {$x$};
  \\draw[->, thick] (0,-0.4) -- (0,3.8) node[above] {$y$};
  
  % Đồ thị hàm số y = f(x)
  \\draw[domain=0.6:4.2, smooth, variable=\\x, blue!80!black, very thick] 
    plot ({\\x}, {0.9 + 1.8*sin((\\x - 0.6)*45) + 0.25*(\\x)});
    
  % Dây cung nối A và B
  \\filldraw[black] (0.6, 1.05) circle (2pt) node[left] {$A(a,f(a))$};
  \\filldraw[black] (4.2, 2.75) circle (2pt) node[right] {$B(b,f(b))$};
  \\draw[dashed, thick, teal!80!black] (0.6, 1.05) -- (4.2, 2.75);
  
  % Tiếp tuyến song song tại điểm c = 2.35
  \\filldraw[red!80!black] (2.35, 3.25) circle (2.2pt) node[above] {$P(c,f(c))$};
  \\draw[red!80!black, thick] (1.1, 2.66) -- (3.6, 3.84);
  
  % Đường gióng xuống trục hoành
  \\draw[dotted] (0.6,0) node[below] {$a$} -- (0.6,1.05);
  \\draw[dotted] (2.35,0) node[below, red!80!black] {$c$} -- (2.35,3.25);
  \\draw[dotted] (4.2,0) node[below] {$b$} -- (4.2,2.75);
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Đồ họa Máy tính (Game Engine) & Tối ưu Công nghiệp',
      title: 'Thuật toán Fast Inverse Square Root (Phương pháp Newton) & Thiết kế Bao bì Tối ưu',
      description:
        'Trong các engine đồ họa 3D (như Quake III và GPU hiện đại), việc chuẩn hóa vector pháp tuyến ánh sáng cần tính 1/√x hàng triệu lần mỗi giây. Thuật toán kinh điển sử dụng 1 bước lặp Newton–Raphson trên hàm f(y) = 1/y^2 - x = 0 giúp tăng tốc độ tính toán gấp 4 lần so với phép chia phần cứng.',
      formulaMath: 'f(y) = y^{-2} - x = 0 \\implies y_{n+1} = y_n - \\frac{y_n^{-2} - x}{-2y_n^{-3}} = \\frac{1}{2}y_n(3 - x y_n^2)',
      exampleCalculation:
        'Để tính 1/√2 ≈ 0.707107 với giá trị khởi tạo y_0 = 0.7: Chỉ sau 1 bước lặp Newton ta có y_1 = 0.5 × 0.7 × (3 - 2 × 0.49) = 0.7070 (sai số chỉ 0.015%).',
    },
    quiz: [
      {
        id: 'q4-1',
        question: 'Giá trị lớn nhất và giá trị nhỏ nhất của hàm số f(x) = x^3 - 3x^2 + 1 trên đoạn [-1/2, 4] lần lượt là:',
        options: [
          { label: 'A', text: 'GTLN = 17, GTNN = -3', math: '\\max = 17, \\; \\min = -3' },
          { label: 'B', text: 'GTLN = 1, GTNN = -3', math: '\\max = 1, \\; \\min = -3' },
          { label: 'C', text: 'GTLN = 17, GTNN = 1/8', math: '\\max = 17, \\; \\min = \\frac{1}{8}' },
          { label: 'D', text: 'GTLN = 1, GTNN = 1/8', math: '\\max = 1, \\; \\min = \\frac{1}{8}' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có f\'(x) = 3x^2 - 6x = 0 ⇔ x = 0 hoặc x = 2 (đều thuộc [-1/2, 4]). Tính giá trị: f(-1/2) = 1/8, f(0) = 1, f(2) = -3, f(4) = 17. Vậy max = 17 (tại x = 4) và min = -3 (tại x = 2).',
        explanationMath: 'f(-1/2) = 0.125, \\; f(0) = 1, \\; f(2) = -3, \\; f(4) = 17 \\implies \\max_{[-1/2, 4]} f = 17, \\; \\min_{[-1/2, 4]} f = -3',
      },
      {
        id: 'q4-2',
        question: 'Bằng quy tắc L\'Hospital, giới hạn \\lim_{x \\to 0^+} x^{\\sin x} có giá trị bằng:',
        options: [
          { label: 'A', text: '1', math: '1' },
          { label: 'B', text: '0', math: '0' },
          { label: 'C', text: 'e', math: 'e' },
          { label: 'D', text: '+∞', math: '+\\infty' },
        ],
        correctAnswer: 'A',
        explanation:
          'Xét ln L = lim_{x→0^+} (sin x · ln x) = lim_{x→0^+} [ln x / (1/sin x)]. Vì sin x ~ x nên xét lim_{x→0^+} [ln x / (1/x)] = lim_{x→0^+} [(1/x) / (-1/x^2)] = lim (-x) = 0. Do đó L = e^0 = 1.',
        explanationMath: '\\ln L = \\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} \\stackrel{\\text{L\'H}}{=} \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = 0 \\implies L = e^0 = 1',
      },
      {
        id: 'q4-3',
        question: 'Áp dụng phương pháp Newton tìm nghiệm gần đúng của phương trình x^2 - 2 = 0 với x_0 = 1, sau 1 bước lặp ta được x_1 bằng:',
        options: [
          { label: 'A', text: 'x_1 = 1.5', math: 'x_1 = 1.5' },
          { label: 'B', text: 'x_1 = 1.4', math: 'x_1 = 1.4' },
          { label: 'C', text: 'x_1 = 1.414', math: 'x_1 = 1.414' },
          { label: 'D', text: 'x_1 = 2.0', math: 'x_1 = 2.0' },
        ],
        correctAnswer: 'A',
        explanation:
          'Với f(x) = x^2 - 2 ⇒ f\'(x) = 2x. Công thức Newton: x_1 = x_0 - f(x_0)/f\'(x_0) = 1 - (1^2 - 2)/(2·1) = 1 - (-1)/2 = 1.5.',
        explanationMath: 'x_1 = x_0 - \\frac{x_0^2 - 2}{2x_0} = 1 - \\frac{1 - 2}{2} = 1.5',
      },
    ],
  },
];
