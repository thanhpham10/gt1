import { ChapterData } from '../types/calculus';

export const CHAPTERS_PART_3: ChapterData[] = [
  {
    id: 9,
    sessionRange: 'Buổi 10 - 11',
    title: 'Chương 9: Phương trình Vi phân Cấp 1',
    englishTitle: 'Differential Equations',
    isFocusChapter: false,
    overview:
      'Phương trình vi phân (PTVP) là ngôn ngữ toán học mô tả các hệ thống động lực học biến thiên theo thời gian. Chương này trình bày cách mô hình hóa bài toán thực tế bằng PTVP cấp 1, biểu diễn hình học qua Trường hướng (Direction Fields), xấp xỉ nghiệm số bằng Phương pháp Euler, và giải giải tích chính xác cho PTVP tách biến, mô hình tăng trưởng mũ / Logistic cùng PTVP tuyến tính cấp 1.',
    learningOutcomes: [
      'LLO10.1: Hiểu và vận dụng được các mô hình toán học bằng phương trình vi phân (tăng trưởng, pha trộn, mạch điện).',
      'LLO10.2: Khảo sát dáng điệu của nghiệm qua trường hướng và tính nghiệm xấp xỉ bằng phương pháp Euler.',
      'LLO10.3 & LLO11.1: Giải thành thạo phương trình vi phân tách biến, phương trình Logistic và phương trình vi phân tuyến tính cấp 1.',
    ],
    tableOfContents: [
      { code: '9.1 - 9.2', title: 'Mô hình hóa bằng PTVP, Trường hướng & Phương pháp số Euler' },
      { code: '9.3', title: 'Phương trình vi phân tách biến (Separable Equations) & Bài toán pha trộn' },
      { code: '9.4 - 9.5', title: 'Mô hình tăng trưởng/suy giảm hàm mũ & Phương trình tăng trưởng Logistic' },
      { code: '9.6', title: 'Phương trình vi phân tuyến tính cấp 1 (Phương pháp Thừa số tích phân)' },
    ],
    subSections: [
      {
        code: '9.1 - 9.2',
        title: 'Mô hình hóa bằng PTVP, Trường hướng & Phương pháp số Euler',
        summary:
          'Với bài toán giá trị ban đầu (Initial Value Problem - IVP) y\' = F(x, y), y(x_0) = y_0: tại mỗi điểm (x, y) trên mặt phẳng, ta vẽ một đoạn thẳng ngắn có hệ số góc F(x, y) để tạo thành Trường hướng. Khi không giải được công thức nghiệm giải tích, phương pháp Euler xấp xỉ đường cong nghiệm bằng chuỗi các đoạn tiếp tuyến liên tiếp với bước nhảy h.',
        keyFormulas: [
          {
            label: 'Thuật toán lặp Euler giải gần đúng bài toán Cauchy y\' = F(x, y), y(x_0) = y_0',
            latex: 'x_{n+1} = x_n + h, \\qquad y_{n+1} = y_n + h \\cdot F(x_n, y_n), \\quad n = 0, 1, 2, \\dots',
            note: 'Bước nhảy h càng nhỏ thì sai số tích lũy càng giảm nhưng khối lượng tính toán tăng tỉ lệ nghịch với h.',
          },
        ],
        detailedNotes: [
          'Các nghiệm cân bằng (Equilibrium solutions) của phương trình tự trị y\' = g(y) là các hàm hằng y = c thỏa mãn g(c) = 0.',
        ],
        example: {
          title: 'Tính nghiệm xấp xỉ bằng Phương pháp Euler',
          problem: 'Cho bài toán giá trị ban đầu y\' = x + y, y(0) = 1. Sử dụng phương pháp Euler với bước nhảy h = 0.1 để tính xấp xỉ giá trị y(0.2).',
          problemMath: 'y\' = x + y, \\quad y(0) = 1, \\quad h = 0.1 \\implies y(0.2) \\approx y_2',
          solutionSteps: [
            'Bước 1: Khởi tạo x_0 = 0, y_0 = 1 và hàm F(x, y) = x + y.',
            'Bước 2: Tính bước 1 tại x_1 = 0.1: y_1 = y_0 + h · F(x_0, y_0).',
            'Bước 3: Tính bước 2 tại x_2 = 0.2: y_2 = y_1 + h · F(x_1, y_1).',
          ],
          solutionMath: [
            'y_1 = 1 + 0.1 \\times (0 + 1) = 1.10 \\quad (\\text{tại } x_1 = 0.1)',
            'y_2 = 1.10 + 0.1 \\times (0.1 + 1.10) = 1.10 + 0.12 = 1.22 \\quad (\\text{tại } x_2 = 0.2)',
          ],
          conclusion: 'Giá trị xấp xỉ Euler là y(0.2) ≈ 1.22 (nghiệm đúng là y(x) = 2e^x - x - 1 cho y(0.2) ≈ 1.2428).',
        },
      },
      {
        code: '9.3',
        title: 'Phương trình vi phân tách biến (Separable Equations) & Bài toán pha trộn',
        summary:
          'Phương trình tách biến có dạng dy/dx = g(x)·f(y). Khi f(y) ≠ 0, ta chuyển tất cả các biểu thức chứa y về vế trái đi kèm dy, tất cả biểu thức chứa x về vế phải đi kèm dx, rồi lấy tích phân hai vế.',
        keyFormulas: [
          {
            label: 'Phương pháp giải PTVP Tách biến',
            latex: '\\frac{dy}{dx} = g(x)f(y) \\implies \\int \\frac{dy}{f(y)} = \\int g(x)\\,dx + C',
            note: 'Đừng quên kiểm tra riêng các nghiệm hằng y = y_0 làm cho f(y_0) = 0 trước khi chia hai vế cho f(y).',
          },
          {
            label: 'Mô hình Bài toán Pha trộn dung dịch (Mixing Problems)',
            latex: '\\frac{dA}{dt} = R_{\\text{vào}} - R_{\\text{ra}} = (C_{\\text{vào}} \\cdot v_{\\text{vào}}) - \\left(\\frac{A(t)}{V(t)} \\cdot v_{\\text{ra}}\\right)',
            note: 'Trong đó A(t) là lượng chất tan (kg hoặc gam) trong bồn tại thời điểm t, V(t) là thể tích dung dịch.',
          },
        ],
        detailedNotes: [
          'Định luật làm nguội Newton (Newton\'s Law of Cooling) dT/dt = k(T - T_m) cũng là một phương trình tách biến điển hình, cho nghiệm T(t) = T_m + (T_0 - T_m)e^{kt}.',
        ],
        example: {
          title: 'Giải bài toán giá trị ban đầu của PTVP tách biến',
          problem: 'Giải bài toán giá trị ban đầu: \\frac{dy}{dx} = \\frac{x}{y(1 + x^2)} với điều kiện y(0) = -2.',
          problemMath: '\\frac{dy}{dx} = \\frac{x}{y(1 + x^2)}, \\quad y(0) = -2',
          solutionSteps: [
            'Bước 1: Tách biến về hai vế: y dy = [x / (1 + x^2)] dx.',
            'Bước 2: Lấy nguyên hàm hai vế để tìm nghiệm tổng quát dạng ẩn.',
            'Bước 3: Thay x = 0, y = -2 để tìm hằng số C và chọn nhánh dấu âm phù hợp với y(0) = -2 < 0.',
          ],
          solutionMath: [
            '\\int y\\,dy = \\int \\frac{x}{1 + x^2}\\,dx \\iff \\frac{y^2}{2} = \\frac{1}{2}\\ln(1 + x^2) + C_1 \\iff y^2 = \\ln(1 + x^2) + C',
            '\\text{Thay } x = 0, y = -2 \\implies (-2)^2 = \\ln 1 + C \\implies C = 4 \\implies y(x) = -\\sqrt{\\ln(1 + x^2) + 4}',
          ],
          conclusion: 'Nghiệm duy nhất của bài toán là y(x) = -√(ln(1 + x^2) + 4).',
        },
      },
      {
        code: '9.4 - 9.5',
        title: 'Mô hình tăng trưởng/suy giảm hàm mũ & Phương trình tăng trưởng Logistic',
        summary:
          'Khi tài nguyên dồi dào, quần thể tăng trưởng theo hàm mũ dP/dt = kP. Trong thực tế, môi trường có sức chứa tối đa M (Carrying capacity), nên tốc độ tăng trưởng giảm dần khi P tiến gần tới M, được mô tả chính xác bởi phương trình vi phân Logistic của Verhulst.',
        keyFormulas: [
          {
            label: 'Mô hình Tăng trưởng / Phân rã phóng xạ hàm mũ',
            latex: '\\frac{dP}{dt} = kP \\implies P(t) = P_0 e^{kt}, \\qquad T_{1/2} = \\frac{\\ln 2}{|k|} \\;(\\text{Chu kỳ bán rã khi } k < 0)',
            note: 'Tốc độ biến thiên tức thời tỉ lệ thuận với quy mô hiện tại của đại lượng.',
          },
          {
            label: 'Phương trình vi phân Logistic & Nghiệm giải tích',
            latex: '\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{M}\\right) \\implies P(t) = \\frac{M}{1 + A e^{-kt}}, \\quad \\text{với } A = \\frac{M - P_0}{P_0}',
            note: 'Quần thể tăng nhanh nhất (điểm uốn của đường cong chữ S) khi đạt đúng một nửa sức chứa: P = M / 2.',
          },
        ],
        detailedNotes: [
          'Khi t → +∞ (với k > 0), số hạng e^{-kt} → 0 nên nghiệm Logistic luôn hội tụ về sức chứa cân bằng: lim_{t→∞} P(t) = M bất kể giá trị ban đầu P_0 > 0.',
        ],
        example: {
          title: 'Phân tích mô hình tăng trưởng Logistic',
          problem: 'Số lượng cá thể P(t) trong một khu bảo tồn tuân theo phương trình vi phân \\frac{dP}{dt} = 0.04 P \\left(1 - \\frac{P}{5000}\\right) với P(0) = 1000. Hãy tìm công thức P(t), giới hạn của P(t) khi t \\to \\infty và quy mô quần thể khi tốc độ tăng trưởng đạt cực đại.',
          problemMath: '\\frac{dP}{dt} = 0.04 P \\left(1 - \\frac{P}{5000}\\right), \\quad P(0) = 1000',
          solutionSteps: [
            'Bước 1: Xác định các tham số chuẩn: k = 0.04, sức chứa tối đa M = 5000, và P_0 = 1000.',
            'Bước 2: Tính hằng số A = (M - P_0)/P_0 = (5000 - 1000)/1000 = 4.',
            'Bước 3: Viết nghiệm P(t) và xác định điểm uốn P = M/2.',
          ],
          solutionMath: [
            'P(t) = \\frac{5000}{1 + 4e^{-0.04t}}, \\qquad \\lim_{t \\to +\\infty} P(t) = 5000',
            '\\text{Tốc độ tăng } \\frac{dP}{dt} \\text{ đạt cực đại khi } P = \\frac{M}{2} = \\frac{5000}{2} = 2500 \\text{ (cá thể)}',
          ],
          conclusion: 'Công thức quần thể là P(t) = 5000 / (1 + 4e^{-0.04t}), tăng nhanh nhất khi đạt 2500 cá thể và tiến tới ổn định ở 5000 cá thể.',
        },
      },
      {
        code: '9.6',
        title: 'Phương trình vi phân tuyến tính cấp 1 (Phương pháp Thừa số tích phân)',
        summary:
          'Phương trình vi phân tuyến tính cấp 1 có dạng chuẩn y\' + P(x)y = Q(x). Để giải, ta nhân cả hai vế với Thừa số tích phân (Integrating Factor) I(x) = e^{∫ P(x)dx} nhằm biến vế trái thành đạo hàm đúng của tích [I(x) · y]\'.',
        keyFormulas: [
          {
            label: 'Thừa số tích phân I(x) và Công thức nghiệm tổng quát',
            latex: 'y\' + P(x)y = Q(x) \\implies I(x) = e^{\\int P(x)\\,dx}, \\qquad y(x) = \\frac{1}{I(x)} \\left( \\int I(x)Q(x)\\,dx + C \\right)',
            note: 'Lưu ý: Nếu phương trình có dạng a(x)y\' + b(x)y = c(x), bắt buộc phải chia hai vế cho a(x) để đưa hệ số của y\' về 1 trước khi tìm P(x).',
          },
        ],
        detailedNotes: [
          'Ứng dụng kinh điển trong kỹ thuật điện: Mạch RL nối tiếp tuân theo định luật Kirchhoff L(dI/dt) + RI = E(t), là một PTVP tuyến tính cấp 1 đối với dòng điện I(t).',
        ],
        example: {
          title: 'Giải phương trình vi phân tuyến tính cấp 1 bằng thừa số tích phân',
          problem: 'Tìm nghiệm tổng quát của phương trình vi phân x y\' + 2y = 4x^2 với x > 0.',
          problemMath: 'x y\' + 2y = 4x^2 \\quad (x > 0)',
          solutionSteps: [
            'Bước 1: Chia hai vế cho x > 0 để đưa về dạng chuẩn: y\' + (2/x)y = 4x. Xác định P(x) = 2/x, Q(x) = 4x.',
            'Bước 2: Tính thừa số tích phân I(x) = e^{∫ (2/x)dx} = e^{2 ln x} = x^2.',
            'Bước 3: Nhân hai vế dạng chuẩn với x^2, đưa vế trái về (x^2 y)\' và lấy nguyên hàm.',
          ],
          solutionMath: [
            'y\' + \\frac{2}{x}y = 4x \\xrightarrow{\\times I(x) = x^2} x^2 y\' + 2xy = 4x^3 \\iff (x^2 y)\' = 4x^3',
            'x^2 y = \\int 4x^3\\,dx = x^4 + C \\implies y(x) = x^2 + \\frac{C}{x^2}',
          ],
          conclusion: 'Nghiệm tổng quát của phương trình trên khoảng (0, +∞) là y(x) = x^2 + C / x^2.',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch9-logistic',
      caption: 'Hình 9.1: Trường hướng (Direction Field) và đường cong nghiệm chữ S của Phương trình vi phân Logistic tiến về sức chứa M.',
      svgType: 'direction-field',
      tikzCode: `\\begin{tikzpicture}[scale=1.05, >=stealth]
  % Trục tọa độ
  \\draw[->, thick] (-0.3,0) -- (5.2,0) node[right] {$t$};
  \\draw[->, thick] (0,-0.3) -- (0,3.6) node[above] {$P(t)$};
  
  % Đường tiệm cận ngang sức chứa tối đa M = 2.8
  \\draw[dashed, red!80!black, thick] (0, 2.8) node[left] {$M$} -- (5.0, 2.8);
  \\draw[dotted, teal!80!black] (0, 1.4) node[left] {$M/2$} -- (5.0, 1.4);
  
  % Trường hướng rút gọn (các vector chỉ phương)
  \\foreach \\x in {0.5, 1.3, 2.1, 2.9, 3.7, 4.5} {
    \\foreach \\y in {0.4, 1.0, 1.8, 2.4, 3.2} {
      \\pgfmathsetmacro{\\slope}{0.65*\\y*(1 - \\y/2.8)}
      \\draw[->, gray!60, thin] (\\x-0.12, \\y-0.12*\\slope) -- (\\x+0.12, \\y+0.12*\\slope);
    }
  }
  
  % Đường cong nghiệm Logistic chữ S
  \\draw[domain=0:4.9, smooth, variable=\\t, blue!85!black, very thick] 
    plot ({\\t}, {2.8 / (1 + 6*exp(-1.1*\\t))}) node[below right] {$P(t) = \\frac{M}{1+Ae^{-kt}}$};
    
  \\filldraw[teal!80!black] (1.63, 1.4) circle (2.2pt) node[below right] {Điểm uốn};
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Kỹ thuật Mạch điện (Định luật Kirchhoff) & Dịch tễ học',
      title: 'Quá trình Quá độ trong Mạch điện RL / RC và Mô hình Lan truyền Thông tin',
      description:
        'Khi đóng khóa K trong mạch điện gồm cuộn cảm L và điện trở R mắc vào nguồn một chiều E, dòng điện i(t) không tăng tức thời mà tuân theo PTVP tuyến tính L(di/dt) + Ri = E. Nghiệm giải tích cho thấy dòng điện tiến dần theo hàm mũ về giá trị xác lập E/R với hằng số thời gian τ = L/R.',
      formulaMath: 'L\\frac{di}{dt} + R i = E, \\; i(0) = 0 \\implies i(t) = \\frac{E}{R}\\left(1 - e^{-\\frac{R}{L}t}\\right)',
      exampleCalculation:
        'Với cuộn dây có L = 2 H, điện trở R = 10 Ω và nguồn E = 20 V: Dòng điện xác lập là I_max = 20/10 = 2 A, và sau thời gian t = τ = L/R = 0.2 giây, dòng điện đạt 2(1 - e^{-1}) ≈ 1.264 A (63.2% giá trị cực đại).',
    },
    quiz: [
      {
        id: 'q9-1',
        question: 'Thừa số tích phân I(x) của phương trình vi phân tuyến tính y\' - 3x^2 y = e^{x^3} là:',
        options: [
          { label: 'A', text: 'I(x) = e^{-x^3}', math: 'I(x) = e^{-x^3}' },
          { label: 'B', text: 'I(x) = e^{x^3}', math: 'I(x) = e^{x^3}' },
          { label: 'C', text: 'I(x) = -x^3', math: 'I(x) = -x^3' },
          { label: 'D', text: 'I(x) = e^{-3x^2}', math: 'I(x) = e^{-3x^2}' },
        ],
        correctAnswer: 'A',
        explanation:
          'Phương trình có dạng chuẩn y\' + P(x)y = Q(x) với P(x) = -3x^2. Vậy thừa số tích phân là I(x) = e^{∫ (-3x^2)dx} = e^{-x^3}.',
        explanationMath: 'I(x) = \\exp\\left(\\int -3x^2\\,dx\\right) = e^{-x^3}',
      },
      {
        id: 'q9-2',
        question: 'Nghiệm của bài toán giá trị ban đầu y\' = 2xy, y(0) = 3 là:',
        options: [
          { label: 'A', text: 'y(x) = 3 e^{x^2}', math: 'y(x) = 3e^{x^2}' },
          { label: 'B', text: 'y(x) = e^{x^2} + 2', math: 'y(x) = e^{x^2} + 2' },
          { label: 'C', text: 'y(x) = 3 e^{2x}', math: 'y(x) = 3e^{2x}' },
          { label: 'D', text: 'y(x) = 3 x^2', math: 'y(x) = 3x^2' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tách biến: dy/y = 2x dx ⇒ ln|y| = x^2 + C_1 ⇒ y = C e^{x^2}. Thay y(0) = 3 ⇒ C = 3. Vậy y(x) = 3e^{x^2}.',
        explanationMath: '\\frac{dy}{y} = 2x\\,dx \\implies y = Ce^{x^2} \\xrightarrow{y(0)=3} y = 3e^{x^2}',
      },
      {
        id: 'q9-3',
        question: 'Cho phương trình Logistic dP/dt = 0.2 P (1 - P/1000). Các nghiệm cân bằng (hàm hằng) của phương trình là:',
        options: [
          { label: 'A', text: 'P = 0 và P = 1000', math: 'P = 0 \\text{ và } P = 1000' },
          { label: 'B', text: 'P = 500 và P = 1000', math: 'P = 500 \\text{ và } P = 1000' },
          { label: 'C', text: 'Chỉ có P = 1000', math: 'P = 1000' },
          { label: 'D', text: 'P = 0 và P = 200', math: 'P = 0 \\text{ và } P = 200' },
        ],
        correctAnswer: 'A',
        explanation:
          'Nghiệm cân bằng là các giá trị P làm cho dP/dt = 0 ⇔ 0.2 P (1 - P/1000) = 0 ⇔ P = 0 hoặc P = 1000.',
        explanationMath: '\\frac{dP}{dt} = 0 \\iff 0.2P\\left(1 - \\frac{P}{1000}\\right) = 0 \\iff P = 0 \\text{ hoặc } P = 1000',
      },
    ],
  },
  {
    id: 10,
    sessionRange: 'Buổi 12 - 13',
    title: 'Chương 10: Phương trình Tham số và Tọa độ Cực',
    englishTitle: 'Parametric Equations and Polar Coordinates',
    isFocusChapter: false,
    overview:
      'Nhiều quỹ đạo chuyển động và đường cong hình học phức tạp (như đường Cycloid, đường hình tim Cardioid, đường hoa hồng) không thể viết dưới dạng hàm đơn trị y = f(x). Chương này trang bị phương pháp biểu diễn đường cong bằng Phương trình tham số (x(t), y(t)) và Hệ tọa độ cực (r, θ), cùng các công thức giải tích tính tiếp tuyến, diện tích, độ dài cung và phương trình các đường Conic.',
    learningOutcomes: [
      'LLO12.1: Vận dụng được phương trình tham số của đường cong để giải các bài toán tiếp tuyến, độ dài cung và diện tích.',
      'LLO13.1: Vận dụng thành thạo hệ tọa độ cực để tính diện tích, độ dài cung và thiết lập phương trình các đường conic (Elip, Parabol, Hyperbol).',
    ],
    tableOfContents: [
      { code: '10.1 - 10.2', title: 'Đường cong tham số & Giải tích trên đường cong tham số (Tiếp tuyến, Độ dài cung, Diện tích)' },
      { code: '10.3 - 10.4', title: 'Hệ tọa độ cực (r, θ) & Tính diện tích, độ dài cung trong tọa độ cực' },
      { code: '10.5 - 10.6', title: 'Các đường Conic (Parabol, Elip, Hyperbol) & Phương trình Conic trong tọa độ cực' },
    ],
    subSections: [
      {
        code: '10.1 - 10.2',
        title: 'Đường cong tham số & Giải tích trên đường cong tham số (Tiếp tuyến, Độ dài cung, Diện tích)',
        summary:
          'Khi tọa độ điểm M(x, y) đều là hàm của biến thứ ba t (gọi là tham số, thường là thời gian): x = f(t), y = g(t), ta có thể tính đạo hàm dy/dx, đạo hàm cấp hai d^2y/dx^2, diện tích và độ dài cung trực tiếp theo tham số t mà không cần khử t.',
        keyFormulas: [
          {
            label: 'Đạo hàm cấp 1 và cấp 2 của hàm cho bởi phương trình tham số',
            latex: '\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{y\'(t)}{x\'(t)}, \\qquad \\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{dx/dt} = \\frac{x\'(t)y\'\'(t) - y\'(t)x\'\'(t)}{[x\'(t)]^3}',
            note: 'Tiếp tuyến nằm ngang khi y\'(t) = 0 và x\'(t) ≠ 0; tiếp tuyến thẳng đứng khi x\'(t) = 0 và y\'(t) ≠ 0.',
          },
          {
            label: 'Diện tích và Độ dài cung của đường cong tham số (α ≤ t ≤ β)',
            latex: 'S = \\int_\\alpha^\\beta |y(t) \\cdot x\'(t)|\\,dt, \\qquad L = \\int_\\alpha^\\beta \\sqrt{[x\'(t)]^2 + [y\'(t)]^2}\\,dt',
            note: 'Vi phân cung tổng quát: ds = √(dx^2 + dy^2) = √([x\'(t)]^2 + [y\'(t)]^2) dt.',
          },
        ],
        detailedNotes: [
          'Đường Cycloid (quỹ đạo 1 điểm trên vành bánh xe bán kính R lăn không trượt trên đường thẳng) có phương trình tham số: x = R(t - sin t), y = R(1 - cos t). Độ dài 1 nhịp (0 ≤ t ≤ 2π) bằng đúng 8R.',
        ],
        example: {
          title: 'Tính tiếp tuyến và độ dài cung của đường Cycloid / Đường tham số',
          problem: 'Cho đường cong tham số x(t) = t^2, y(t) = t^3 - 3t. (a) Tìm các điểm trên đường cong mà tiếp tuyến nằm ngang. (b) Tính đạo hàm cấp hai d^2y/dx^2 tại t = 2.',
          problemMath: 'x(t) = t^2, \\quad y(t) = t^3 - 3t',
          solutionSteps: [
            'Bước 1: Tính x\'(t) = 2t và y\'(t) = 3t^2 - 3. Suy ra dy/dx = (3t^2 - 3)/(2t).',
            'Bước 2: Tiếp tuyến nằm ngang khi y\'(t) = 0 (và x\'(t) ≠ 0) ⇔ 3t^2 - 3 = 0 ⇔ t = ±1.',
            'Bước 3: Đạo hàm biểu thức dy/dx = (3/2)t - (3/2)t^{-1} theo t rồi chia cho x\'(t) = 2t.',
          ],
          solutionMath: [
            'y\'(t) = 0 \\iff t = \\pm 1 \\implies \\text{Hai điểm tiếp tuyến ngang là } (1, -2) \\text{ và } (1, 2)',
            '\\frac{d^2y}{dx^2} = \\frac{\\frac{3}{2} + \\frac{3}{2t^2}}{2t} = \\frac{3(t^2 + 1)}{4t^3} \\implies \\left.\\frac{d^2y}{dx^2}\\right|_{t=2} = \\frac{3(4 + 1)}{4(8)} = \\frac{15}{32}',
          ],
          conclusion: 'Hai điểm có tiếp tuyến ngang là (1, -2), (1, 2) và đạo hàm cấp hai tại t = 2 bằng 15/32.',
        },
      },
      {
        code: '10.3 - 10.4',
        title: 'Hệ tọa độ cực (r, θ) & Tính diện tích, độ dài cung trong tọa độ cực',
        summary:
          'Trong hệ tọa độ cực, mỗi điểm P được xác định bởi khoảng cách có hướng r từ gốc cực O và góc định hướng θ hợp với trục cực Ox. Để tính diện tích miền phẳng giới hạn bởi đường cong cực r = r(θ), ta chia miền thành các hình quạt tròn vi phân có diện tích dA = (1/2) r^2 dθ.',
        keyFormulas: [
          {
            label: 'Công thức chuyển đổi giữa Tọa độ Descartes (x, y) và Tọa độ cực (r, θ)',
            latex: 'x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\qquad r^2 = x^2 + y^2, \\quad \\tan\\theta = \\frac{y}{x}',
            note: 'Đường tròn đi qua gốc cực: r = 2a cos θ (tâm (a, 0)) và r = 2a sin θ (tâm (0, a)).',
          },
          {
            label: 'Diện tích hình quạt cực và Độ dài cung của đường cong r = r(θ)',
            latex: 'S = \\frac{1}{2} \\int_\\alpha^\\beta [r(\\theta)]^2\\,d\\theta, \\qquad L = \\int_\\alpha^\\beta \\sqrt{[r(\\theta)]^2 + [r\'(\\theta)]^2}\\,d\\theta',
            note: 'Diện tích miền nằm giữa hai đường cong cực r_ngoài(θ) và r_trong(θ) là (1/2) ∫ ([r_ngoài]^2 - [r_trong]^2) dθ.',
          },
        ],
        detailedNotes: [
          'Đường hoa hồng r = a cos(nθ) hoặc r = a sin(nθ): Nếu n lẻ thì đường cong có đúng n cánh hoa; nếu n chẵn thì đường cong có 2n cánh hoa.',
        ],
        example: {
          title: 'Tính diện tích miền giới hạn bởi đường hình tim (Cardioid)',
          problem: 'Tính diện tích miền phẳng nằm bên trong đường hình tim (Cardioid) r = 1 + \\cos\\theta (với 0 \\le \\theta \\le 2\\pi).',
          problemMath: 'r = 1 + \\cos\\theta \\implies S = \\frac{1}{2}\\int_0^{2\\pi} (1 + \\cos\\theta)^2\\,d\\theta',
          solutionSteps: [
            'Bước 1: Áp dụng công thức diện tích trong tọa độ cực S = (1/2) ∫_0^{2π} (1 + cos θ)^2 dθ.',
            'Bước 2: Khai triển hằng đẳng thức và hạ bậc cos^2 θ = (1 + cos 2θ)/2.',
            'Bước 3: Lấy tích phân trên chu kỳ [0, 2π] (các tích phân của cos θ và cos 2θ trên cả chu kỳ đều bằng 0).',
          ],
          solutionMath: [
            'S = \\frac{1}{2} \\int_0^{2\\pi} \\left(1 + 2\\cos\\theta + \\frac{1 + \\cos 2\\theta}{2}\\right) d\\theta = \\frac{1}{2} \\int_0^{2\\pi} \\left(\\frac{3}{2} + 2\\cos\\theta + \\frac{1}{2}\\cos 2\\theta\\right) d\\theta = \\frac{1}{2}\\left(\\frac{3}{2}\\cdot 2\\pi\\right) = \\frac{3\\pi}{2}',
          ],
          conclusion: 'Diện tích toàn bộ đường hình tim Cardioid là S = 3π/2.',
        },
      },
      {
        code: '10.5 - 10.6',
        title: 'Các đường Conic (Parabol, Elip, Hyperbol) & Phương trình Conic trong tọa độ cực',
        summary:
          'Ba đường Conic (Parabol, Elip, Hyperbol) có thể được định nghĩa thống nhất thông qua tâm sai e (Eccentricity): Tập hợp các điểm M sao cho tỉ số khoảng cách từ M tới tiêu điểm F và khoảng cách từ M tới đường chuẩn l là hằng số e = |MF| / d(M, l).',
        keyFormulas: [
          {
            label: 'Phương trình chính tắc của Elip và Hyperbol trong tọa độ Descartes',
            latex: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\;\\left(c^2 = a^2 - b^2, \\; e = \\frac{c}{a} < 1\\right), \\qquad \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\;\\left(c^2 = a^2 + b^2, \\; e = \\frac{c}{a} > 1\\right)',
            note: 'Với Parabol y^2 = 4px (tiêu điểm F(p, 0), đường chuẩn x = -p), tâm sai luôn bằng e = 1.',
          },
          {
            label: 'Phương trình thống nhất của đường Conic trong Tọa độ cực (Tiêu điểm tại gốc cực O)',
            latex: 'r = \\frac{ed}{1 \\pm e\\cos\\theta} \\quad \\text{hoặc} \\quad r = \\frac{ed}{1 \\pm e\\sin\\theta}',
            note: 'Phân loại nhanh theo tâm sai e: Nếu e < 1 là Elip; nếu e = 1 là Parabol; nếu e > 1 là Hyperbol.',
          },
        ],
        detailedNotes: [
          'Với quỹ đạo hành tinh hình Elip nhận Mặt Trời làm tiêu điểm tại gốc cực O: Khoảng cách cận điểm (Perihelion - gần nhất) là r_min = a(1 - e) và viễn điểm (Aphelion - xa nhất) là r_max = a(1 + e).',
        ],
        example: {
          title: 'Nhận diện đường Conic và tìm các yếu tố hình học trong tọa độ cực',
          problem: 'Cho đường conic có phương trình tọa độ cực r = \\frac{10}{3 - 2\\cos\\theta}. Hãy xác định tâm sai e, tên gọi đường conic và độ dài trục lớn 2a.',
          problemMath: 'r = \\frac{10}{3 - 2\\cos\\theta}',
          solutionSteps: [
            'Bước 1: Chia cả tử và mẫu cho 3 để đưa hằng số đầu tiên ở mẫu về 1 chuẩn tắc.',
            'Bước 2: Đọc hệ số của cos θ để suy ra tâm sai e = 2/3 < 1 (Elip).',
            'Bước 3: Tính r_max (khi θ = 0) và r_min (khi θ = π), từ đó suy ra trục lớn 2a = r_max + r_min.',
          ],
          solutionMath: [
            'r = \\frac{10/3}{1 - \\frac{2}{3}\\cos\\theta} \\implies e = \\frac{2}{3} < 1 \\implies \\text{Đường cong là một Elip}',
            'r_{\\max} = r(0) = \\frac{10}{3 - 2} = 10, \\quad r_{\\min} = r(\\pi) = \\frac{10}{3 + 2} = 2 \\implies 2a = r_{\\max} + r_{\\min} = 12 \\implies a = 6',
          ],
          conclusion: 'Đường đã cho là Elip có tâm sai e = 2/3 và bán trục lớn a = 6.',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch10-polar',
      caption: 'Hình 10.1: Đường hình tim Cardioid r = 1 + cos θ và đường hoa hồng 4 cánh r = 2 cos(2θ) trong hệ tọa độ cực.',
      svgType: 'polar-rose',
      tikzCode: `\\begin{tikzpicture}[scale=1.15, >=stealth]
  % Lưới vòng tròn đồng tâm tọa độ cực
  \\foreach \\r in {0.8, 1.6, 2.4} {
    \\draw[very thin, gray!30] (0,0) circle (\\r);
  }
  \\draw[->, thick] (-2.6,0) -- (2.8,0) node[right] {Trục cực};
  \\draw[->, thick] (0,-2.4) -- (0,2.4) node[above] {$\\theta = \\pi/2$};
  
  % Đường hình tim Cardioid r = 1.1(1 + cos theta)
  \\draw[domain=0:360, samples=120, smooth, variable=\\t, blue!85!black, very thick] 
    plot ({1.1*(1 + cos(\\t))*cos(\\t)}, {1.1*(1 + cos(\\t))*sin(\\t)});
    
  % Đường hoa hồng r = 1.9 cos(2 theta)
  \\draw[domain=0:360, samples=160, smooth, variable=\\t, red!80!black, thick, dashed] 
    plot ({1.9*cos(2*\\t)*cos(\\t)}, {1.9*cos(2*\\t)*sin(\\t)});
    
  \\node[blue!85!black, above right] at (1.3, 1.35) {$r = 1 + \\cos\\theta$};
  \\node[red!80!black, below right] at (1.2, -1.45) {$r = a\\cos(2\\theta)$};
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Cơ học Vũ trụ (Quỹ đạo Vệ tinh) & Kỹ thuật Âm thanh (Microphone)',
      title: 'Định luật Kepler về Quỹ đạo Vệ tinh và Giản đồ Thu âm Cardioid',
      description:
        'Theo Định luật 1 Kepler, mọi vệ tinh nhân tạo và hành tinh đều chuyển động theo quỹ đạo đường Conic trong tọa độ cực r(θ) = ed / (1 + e cos θ) với tâm Trái Đất tại tiêu điểm gốc O. Trong kỹ thuật âm thanh studio, microphone hướng thu Cardioid có độ nhạy theo góc đúng bằng r(θ) = a(1 + cos θ), giúp thu rõ giọng hát phía trước (θ = 0) và triệt tiêu hoàn toàn tạp âm từ phía sau (θ = π).',
      formulaMath: 'r(\\theta) = \\frac{a(1 - e^2)}{1 + e\\cos\\theta}, \\qquad G_{\\text{mic}}(\\theta) = G_0 (1 + \\cos\\theta)',
      exampleCalculation:
        'Vệ tinh có bán trục lớn quỹ đạo a = 10,000 km và tâm sai e = 0.2 sẽ có khoảng cách gần tâm Trái Đất nhất là r_min = 10,000(1 - 0.2) = 8,000 km và xa nhất là r_max = 12,000 km.',
    },
    quiz: [
      {
        id: 'q10-1',
        question: 'Độ dài cung của đường cong tham số x(t) = 3\\cos t, y(t) = 3\\sin t với 0 \\le t \\le \\pi bằng:',
        options: [
          { label: 'A', text: '3π', math: '3\\pi' },
          { label: 'B', text: '6π', math: '6\\pi' },
          { label: 'C', text: '9π', math: '9\\pi' },
          { label: 'D', text: '3', math: '3' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có [x\'(t)]^2 + [y\'(t)]^2 = (-3sin t)^2 + (3cos t)^2 = 9(sin^2 t + cos^2 t) = 9. Do đó L = ∫_0^π √9 dt = 3π (nửa chu vi đường tròn bán kính R = 3).',
        explanationMath: 'L = \\int_0^\\pi \\sqrt{9\\sin^2 t + 9\\cos^2 t}\\,dt = \\int_0^\\pi 3\\,dt = 3\\pi',
      },
      {
        id: 'q10-2',
        question: 'Trong hệ tọa độ cực, phương trình r = 4\\sin\\theta biểu diễn đường cong nào trong hệ tọa độ Descartes?',
        options: [
          { label: 'A', text: 'Đường tròn x^2 + (y - 2)^2 = 4', math: 'x^2 + (y - 2)^2 = 4' },
          { label: 'B', text: 'Đường tròn (x - 2)^2 + y^2 = 4', math: '(x - 2)^2 + y^2 = 4' },
          { label: 'C', text: 'Đường tròn x^2 + y^2 = 16', math: 'x^2 + y^2 = 16' },
          { label: 'D', text: 'Đường thẳng y = 4', math: 'y = 4' },
        ],
        correctAnswer: 'A',
        explanation:
          'Nhân cả hai vế với r: r^2 = 4 r sin θ ⇔ x^2 + y^2 = 4y ⇔ x^2 + (y - 2)^2 = 2^2 (đường tròn tâm (0, 2) bán kính R = 2).',
        explanationMath: 'r^2 = 4r\\sin\\theta \\iff x^2 + y^2 = 4y \\iff x^2 + (y - 2)^2 = 4',
      },
      {
        id: 'q10-3',
        question: 'Đường conic có phương trình tọa độ cực r = \\frac{6}{2 + 3\\sin\\theta} là đường gì?',
        options: [
          { label: 'A', text: 'Hyperbol (vì tâm sai e = 3/2 > 1)', math: '\\text{Hyperbol } (e = 1.5 > 1)' },
          { label: 'B', text: 'Elip (vì tâm sai e = 2/3 < 1)', math: '\\text{Elip } (e = 2/3 < 1)' },
          { label: 'C', text: 'Parabol (vì tâm sai e = 1)', math: '\\text{Parabol } (e = 1)' },
          { label: 'D', text: 'Đường tròn', math: '\\text{Đường tròn}' },
        ],
        correctAnswer: 'A',
        explanation:
          'Chia cả tử và mẫu cho 2: r = 3 / [1 + (3/2)sin θ]. Suy ra tâm sai e = 3/2 = 1.5 > 1, vậy đây là một nhánh của Hyperbol.',
        explanationMath: 'r = \\frac{3}{1 + \\frac{3}{2}\\sin\\theta} \\implies e = \\frac{3}{2} > 1 \\implies \\text{Hyperbol}',
      },
    ],
  },
  {
    id: 11,
    sessionRange: 'Buổi 14 - 15',
    title: 'Chương 11: Dãy số và Chuỗi số (Chuỗi Lũy thừa & Taylor)',
    englishTitle: 'Infinite Sequences and Series',
    isFocusChapter: false,
    overview:
      'Chương cuối cùng của Giải tích 1 nghiên cứu sự hội tụ của dãy số vô hạn, chuỗi số vô hạn cùng bộ tiêu chuẩn kiểm tra sự hội tụ kinh điển (Tích phân, So sánh, Leibniz cho chuỗi đan dấu, D\'Alembert và Cauchy). Đỉnh cao của chương là biểu diễn các hàm giải tích bằng Chuỗi lũy thừa, Chuỗi Taylor và Chuỗi Maclaurin để tính toán xấp xỉ độ chính xác tùy ý.',
    learningOutcomes: [
      'LLO14.1: Giải được các bài tập tìm giới hạn của dãy số bằng định lý đơn điệu bị chặn và định lý kẹp.',
      'LLO14.2: Vận dụng thành thạo các tiêu chuẩn tích phân, so sánh, Leibniz, D\'Alembert và Cauchy để xét sự hội tụ/phân kỳ và hội tụ tuyệt đối của chuỗi số.',
      'LLO15.1: Tìm được miền hội tụ của chuỗi lũy thừa và khai triển thành thạo chuỗi Taylor, Maclaurin của hàm số.',
    ],
    tableOfContents: [
      { code: '11.1 - 11.2', title: 'Dãy số, Chuỗi số, Chuỗi cấp số nhân & Điều kiện cần của sự hội tụ' },
      { code: '11.3 - 11.4', title: 'Chuỗi số dương: Tiêu chuẩn Tích phân & Tiêu chuẩn So sánh' },
      { code: '11.5 - 11.7', title: 'Chuỗi đan dấu (Leibniz), Hội tụ tuyệt đối, Tiêu chuẩn D\'Alembert & Cauchy' },
      { code: '11.8 - 11.11', title: 'Chuỗi lũy thừa, Bán kính hội tụ & Khai triển chuỗi Taylor - Maclaurin' },
    ],
    subSections: [
      {
        code: '11.1 - 11.2',
        title: 'Dãy số, Chuỗi số, Chuỗi cấp số nhân & Điều kiện cần của sự hội tụ',
        summary:
          'Dãy số {a_n} hội tụ nếu tồn tại giới hạn hữu hạn lim_{n→∞} a_n = L. Mọi dãy đơn điệu và bị chặn đều hội tụ (Định lý Weierstrass). Với chuỗi số ∑_{n=1}^∞ a_n, nếu dãy tổng riêng S_n = a_1 + a_2 + ... + a_n có giới hạn hữu hạn S khi n → ∞ thì chuỗi hội tụ và có tổng bằng S.',
        keyFormulas: [
          {
            label: 'Chuỗi Cấp số nhân (Geometric Series) & Điều kiện cần để chuỗi hội tụ',
            latex: '\\sum_{n=0}^\\infty a r^n = \\begin{cases} \\frac{a}{1 - r} & \\text{khi } |r| < 1 \\text{ (Hội tụ)} \\\\ \\text{Phân kỳ} & \\text{khi } |r| \\ge 1 \\end{cases}, \\qquad \\sum_{n=1}^\\infty a_n \\text{ hội tụ} \\implies \\lim_{n \\to \\infty} a_n = 0',
            note: 'Tiêu chuẩn phân kỳ (Test for Divergence): Nếu lim_{n→∞} a_n ≠ 0 (hoặc không tồn tại) thì chuỗi ∑ a_n chắc chắn PHÂN KỲ.',
          },
        ],
        detailedNotes: [
          'Cảnh báo quan trọng: Điều kiện lim a_n = 0 chỉ là điều kiện CẦN, không phải điều kiện đủ! Chuỗi điều hòa (Harmonic series) ∑_{n=1}^∞ (1/n) có lim (1/n) = 0 nhưng PHÂN KỲ.',
        ],
        example: {
          title: 'Tính tổng chuỗi số bằng phân tích vi phân (Chuỗi rút gọn - Telescoping Series)',
          problem: 'Chứng minh chuỗi số \\sum_{n=1}^\\infty \\frac{1}{n(n + 1)} hội tụ và tính tổng chính xác của nó.',
          problemMath: 'S = \\sum_{n=1}^\\infty \\frac{1}{n(n + 1)}',
          solutionSteps: [
            'Bước 1: Phân tích số hạng tổng quát a_n = 1/[n(n + 1)] = 1/n - 1/(n + 1).',
            'Bước 2: Lập tổng riêng thứ N và khử liên tiếp các số hạng đối nhau.',
            'Bước 3: Lấy giới hạn lim_{N→∞} S_N.',
          ],
          solutionMath: [
            'S_N = \\sum_{n=1}^N \\left(\\frac{1}{n} - \\frac{1}{n + 1}\\right) = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{N} - \\frac{1}{N + 1}\\right) = 1 - \\frac{1}{N + 1}',
            'S = \\lim_{N \\to \\infty} S_N = \\lim_{N \\to \\infty} \\left(1 - \\frac{1}{N + 1}\\right) = 1',
          ],
          conclusion: 'Chuỗi hội tụ và có tổng bằng S = 1.',
        },
      },
      {
        code: '11.3 - 11.4',
        title: 'Chuỗi số dương: Tiêu chuẩn Tích phân & Tiêu chuẩn So sánh',
        summary:
          'Với chuỗi số dương (a_n > 0), dãy tổng riêng S_n luôn tăng nên chuỗi hội tụ khi và chỉ khi S_n bị chặn trên. Ta kiểm tra bằng cách so sánh với tích phân suy rộng (Tiêu chuẩn Tích phân Cauchy–Maclaurin) hoặc so sánh với chuỗi chuẩn p-series ∑ 1/n^p.',
        keyFormulas: [
          {
            label: 'Tiêu chuẩn Tích phân & Chuẩn hội tụ của p-Chuỗi (Riemann Series)',
            latex: '\\sum_{n=1}^\\infty a_n \\text{ cùng tính chất hội tụ với } \\int_1^\\infty f(x)\\,dx, \\qquad \\sum_{n=1}^\\infty \\frac{1}{n^p} \\;\\begin{cases} \\text{Hội tụ} & \\text{khi } p > 1 \\\\ \\text{Phân kỳ} & \\text{khi } p \\le 1 \\end{cases}',
            note: 'Trong tiêu chuẩn tích phân, hàm f(x) (với f(n) = a_n) phải liên tục, dương và nghịch biến trên [1, +∞).',
          },
          {
            label: 'Tiêu chuẩn So sánh Giới hạn (Limit Comparison Test)',
            latex: 'a_n, b_n > 0, \\quad \\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c \\in (0, +\\infty) \\implies \\sum a_n \\text{ và } \\sum b_n \\text{ cùng hội tụ hoặc cùng phân kỳ}',
            note: 'Rất hiệu quả cho các chuỗi phân thức đại số hoặc lượng giác khi n → ∞ (ví dụ sin(1/n^2) ~ 1/n^2).',
          },
        ],
        detailedNotes: [
          'Chuỗi Bertrand dạng ∑_{n=2}^∞ 1 / [n (ln n)^p] (xét bằng tiêu chuẩn tích phân với phép đổi biến u = ln x) hội tụ khi và chỉ khi p > 1.',
        ],
        example: {
          title: 'Xét sự hội tụ của chuỗi số bằng Tiêu chuẩn So sánh Giới hạn',
          problem: 'Xét sự hội tụ của chuỗi số \\sum_{n=1}^\\infty \\frac{2n + 1}{\\sqrt{n^5 + 3n^2 + 2}}.',
          problemMath: '\\sum_{n=1}^\\infty a_n = \\sum_{n=1}^\\infty \\frac{2n + 1}{\\sqrt{n^5 + 3n^2 + 2}}',
          solutionSteps: [
            'Bước 1: Khi n → ∞, tử thức tương đương 2n (bậc 1), mẫu thức tương đương √(n^5) = n^{5/2}.',
            'Bước 2: Chọn chuỗi chuẩn so sánh b_n = n / n^{5/2} = 1 / n^{3/2}.',
            'Bước 3: Tính giới hạn lim (a_n / b_n) và kết luận theo p-chuỗi.',
          ],
          solutionMath: [
            '\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = \\lim_{n \\to \\infty} \\frac{(2n + 1)n^{3/2}}{\\sqrt{n^5 + 3n^2 + 2}} = \\lim_{n \\to \\infty} \\frac{2 + 1/n}{\\sqrt{1 + 3/n^3 + 2/n^5}} = 2 \\in (0, +\\infty)',
          ],
          conclusion: 'Vì chuỗi ∑ b_n = ∑ (1/n^{3/2}) là p-chuỗi với p = 3/2 > 1 (hội tụ), nên chuỗi đã cho HỘI TỤ.',
        },
      },
      {
        code: '11.5 - 11.7',
        title: 'Chuỗi đan dấu (Leibniz), Hội tụ tuyệt đối, Tiêu chuẩn D\'Alembert & Cauchy',
        summary:
          'Chuỗi đan dấu ∑ (-1)^{n-1} b_n (b_n > 0) được xét bằng định lý Leibniz. Với chuỗi có dấu bất kỳ, nếu chuỗi trị tuyệt đối ∑ |a_n| hội tụ thì ta nói chuỗi HỘI TỤ TUYỆT ĐỐI (và suy ra chuỗi ban đầu cũng hội tụ). Hai công cụ mạnh nhất để xét hội tụ tuyệt đối là Tiêu chuẩn tỉ số D\'Alembert và Tiêu chuẩn căn Cauchy.',
        keyFormulas: [
          {
            label: 'Tiêu chuẩn Leibniz cho Chuỗi đan dấu ∑ (-1)^{n-1} b_n (với b_n > 0)',
            latex: '\\begin{cases} b_{n+1} \\le b_n \\;(\\text{dãy giảm}) \\\\ \\lim_{n \\to \\infty} b_n = 0 \\end{cases} \\implies \\sum_{n=1}^\\infty (-1)^{n-1}b_n \\text{ hội tụ, và sai số } |R_n| = |S - S_n| \\le b_{n+1}',
            note: 'Chuỗi đan dấu điều hòa ∑ (-1)^{n-1}/n hội tụ (bằng ln 2) nhưng không hội tụ tuyệt đối (gọi là Bán hội tụ / Hội tụ có điều kiện).',
          },
          {
            label: 'Tiêu chuẩn Tỉ số D\'Alembert (Ratio Test) & Tiêu chuẩn Căn Cauchy (Root Test)',
            latex: 'L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| \\quad \\text{hoặc} \\quad L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} \\implies \\begin{cases} L < 1 : \\text{Hội tụ tuyệt đối} \\\\ L > 1 : \\text{Phân kỳ} \\\\ L = 1 : \\text{Chưa kết luận được} \\end{cases}',
            note: 'Kinh nghiệm: Dùng D\'Alembert khi a_n chứa giai thừa (n!) hoặc lũy thừa; dùng Cauchy khi a_n có dạng lũy thừa bậc n tất cả [f(n)]^n.',
          },
        ],
        detailedNotes: [
          'Khi gặp bài toán chuỗi số bất kỳ, chiến lược 4 bước là: (1) Kiểm tra nhanh lim a_n ≠ 0; (2) Nếu có n! hoặc a^n dùng D\'Alembert; (3) Nếu là phân thức của n dùng So sánh giới hạn với 1/n^p; (4) Nếu đan dấu và p ≤ 1 dùng Leibniz.',
        ],
        example: {
          title: 'Xét tính hội tụ tuyệt đối bằng Tiêu chuẩn D\'Alembert và Cauchy',
          problem: 'Xét sự hội tụ của hai chuỗi số: (a) \\sum_{n=1}^\\infty \\frac{(-3)^n n!}{(2n)!} và (b) \\sum_{n=1}^\\infty \\left(\\frac{2n + 3}{3n + 1}\\right)^n.',
          problemMath: '(a)\\; \\sum_{n=1}^\\infty \\frac{(-3)^n n!}{(2n)!}, \\qquad (b)\\; \\sum_{n=1}^\\infty \\left(\\frac{2n + 3}{3n + 1}\\right)^n',
          solutionSteps: [
            'Câu (a): Có chứa giai thừa n! và (2n)!, áp dụng tiêu chuẩn tỉ số D\'Alembert.',
            'Câu (b): Có dạng lũy thừa bậc n, áp dụng tiêu chuẩn căn Cauchy.',
          ],
          solutionMath: [
            'L_a = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\frac{3(n+1)}{(2n+2)(2n+1)} = 0 < 1 \\implies \\text{Chuỗi (a) hội tụ tuyệt đối}',
            'L_b = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} = \\lim_{n \\to \\infty} \\frac{2n + 3}{3n + 1} = \\frac{2}{3} < 1 \\implies \\text{Chuỗi (b) hội tụ tuyệt đối}',
          ],
          conclusion: 'Cả hai chuỗi đều hội tụ tuyệt đối vì giới hạn tiêu chuẩn L < 1.',
        },
      },
      {
        code: '11.8 - 11.11',
        title: 'Chuỗi lũy thừa, Bán kính hội tụ & Khai triển chuỗi Taylor - Maclaurin',
        summary:
          'Chuỗi lũy thừa có dạng ∑_{n=0}^∞ c_n (x - a)^n. Luôn tồn tại Bán kính hội tụ R ≥ 0 sao cho chuỗi hội tụ tuyệt đối khi |x - a| < R và phân kỳ khi |x - a| > R. Nếu hàm f(x) khả vi vô hạn lần tại a, chuỗi Taylor của nó biểu diễn chính xác hàm số thông qua các đạo hàm cấp cao tại tâm a.',
        keyFormulas: [
          {
            label: 'Công thức tìm Bán kính hội tụ R của chuỗi lũy thừa ∑ c_n (x - a)^n',
            latex: 'R = \\lim_{n \\to \\infty} \\left|\\frac{c_n}{c_{n+1}}\\right| \\quad \\text{hoặc} \\quad R = \\frac{1}{\\lim_{n \\to \\infty} \\sqrt[n]{|c_n|}}',
            note: 'Để tìm Tập (Miền) hội tụ hoàn chỉnh, sau khi tìm khoảng (a - R, a + R), bắt buộc phải thay trực tiếp 2 đầu mút x = a - R và x = a + R vào chuỗi để xét riêng!',
          },
          {
            label: 'Công thức Chuỗi Taylor tại x = a và Chuỗi Maclaurin (tại a = 0)',
            latex: 'f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x - a)^n = f(a) + f\'(a)(x - a) + \\frac{f\'\'(a)}{2!}(x - a)^2 + \\cdots',
            note: 'Chuỗi lũy thừa có thể lấy đạo hàm và lấy tích phân từng số hạng bên trong khoảng hội tụ (-R, R).',
          },
        ],
        detailedNotes: [
          'Để tìm khai triển Maclaurin của các hàm phức tạp, KHÔNG nên tính đạo hàm cấp cao trực tiếp mà hãy biến đổi từ 5 khai triển Maclaurin chuẩn (e^x, sin x, cos x, 1/(1-x), ln(1+x)) kết hợp phép thế biến, đạo hàm hoặc tích phân từng số hạng.',
        ],
        example: {
          title: 'Tìm miền hội tụ của chuỗi lũy thừa và khai triển Maclaurin',
          problem: 'Tìm bán kính hội tụ và miền hội tụ của chuỗi lũy thừa \\sum_{n=1}^\\infty \\frac{(x - 2)^n}{n \\cdot 3^n}.',
          problemMath: '\\sum_{n=1}^\\infty \\frac{(x - 2)^n}{n \\cdot 3^n}',
          solutionSteps: [
            'Bước 1: Xác định tâm chuỗi a = 2 và hệ số c_n = 1 / (n · 3^n). Tính bán kính hội tụ R = lim |c_n / c_{n+1}|.',
            'Bước 2: Khoảng hội tụ là (2 - 3, 2 + 3) = (-1, 5).',
            'Bước 3: Xét riêng tại x = -1 (được chuỗi đan dấu điều hòa → hội tụ) và tại x = 5 (được chuỗi điều hòa → phân kỳ).',
          ],
          solutionMath: [
            'R = \\lim_{n \\to \\infty} \\frac{(n + 1)3^{n+1}}{n \\cdot 3^n} = 3 \\implies \\text{Khoảng hội tụ: } |x - 2| < 3 \\iff -1 < x < 5',
            '\\text{Tại } x = -1: \\sum_{n=1}^\\infty \\frac{(-1)^n}{n} \\;(\\text{Hội tụ theo Leibniz}); \\quad \\text{Tại } x = 5: \\sum_{n=1}^\\infty \\frac{1}{n} \\;(\\text{Phân kỳ})',
          ],
          conclusion: 'Bán kính hội tụ R = 3 và miền hội tụ của chuỗi là nửa khoảng [-1, 5).',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch11-taylor',
      caption: 'Hình 11.1: Sự hội tụ của các đa thức Taylor T_1(x), T_3(x), T_5(x) ôm sát đồ thị hàm f(x) = sin(x) khi tăng bậc khai triển.',
      svgType: 'taylor-approx',
      tikzCode: `\\begin{tikzpicture}[scale=0.95, >=stealth]
  % Trục tọa độ
  \\draw[->, thick] (-3.8,0) -- (3.8,0) node[right] {$x$};
  \\draw[->, thick] (0,-2.2) -- (0,2.2) node[above] {$y$};
  
  % Đồ thị chuẩn y = sin(x)
  \\draw[domain=-3.5:3.5, samples=100, smooth, variable=\\x, blue!85!black, very thick] 
    plot ({\\x}, {sin(\\x r)}) node[right] {$\\sin x$};
    
  % Đa thức Taylor bậc 1: T_1(x) = x
  \\draw[domain=-1.9:1.9, smooth, variable=\\x, gray!80, thick, dotted] 
    plot ({\\x}, {\\x}) node[above right] {$T_1(x) = x$};
    
  % Đa thức Taylor bậc 3: T_3(x) = x - x^3/6
  \\draw[domain=-2.7:2.7, smooth, variable=\\x, orange!90!black, thick, dashed] 
    plot ({\\x}, {\\x - (\\x)^3/6}) node[below right] {$T_3(x)$};
    
  % Đa thức Taylor bậc 5: T_5(x) = x - x^3/6 + x^5/120
  \\draw[domain=-3.3:3.3, smooth, variable=\\x, red!80!black, thick] 
    plot ({\\x}, {\\x - (\\x)^3/6 + (\\x)^5/120}) node[above left] {$T_5(x)$};
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Vi xử lý Máy tính (FPU) & Giải tích Số',
      title: 'Cách CPU/Máy tính Cầm tay Tính hàm Siêu việt & Tích phân Không có Nguyên hàm Sơ cấp',
      description:
        'Bộ xử lý toán học trong máy tính chỉ thực hiện trực tiếp các phép cộng, trừ, nhân, chia nên không thể tính trực tiếp sin(x), e^x hay ln(x). Chúng sử dụng đa thức xấp xỉ Taylor/Maclaurin (hoặc đa thức Chebyshev rút gọn từ chuỗi Taylor). Ngoài ra, chuỗi Maclaurin giúp tính dễ dàng các tích phân không có nguyên hàm sơ cấp như tích phân xác suất ∫ e^{-x^2} dx hay tích phân quang học Fresnel ∫ sin(x^2) dx.',
      formulaMath: '\\int_0^x e^{-t^2}\\,dt = \\int_0^x \\sum_{n=0}^\\infty (-1)^n \\frac{t^{2n}}{n!}\\,dt = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{n!(2n+1)} = x - \\frac{x^3}{3} + \\frac{x^5}{10} - \\frac{x^7}{42} + \\cdots',
      exampleCalculation:
        'Để tính ∫_0^{0.5} e^{-t^2} dt: Chỉ cần lấy 3 số hạng đầu của chuỗi Maclaurin ta có 0.5 - (0.5)^3/3 + (0.5)^5/10 = 0.5 - 0.04167 + 0.003125 = 0.46146 (chính xác tới 5 chữ số thập phân!).',
    },
    quiz: [
      {
        id: 'q11-1',
        question: 'Tổng của chuỗi cấp số nhân hội tụ \\sum_{n=1}^\\infty \\frac{3}{4^n} bằng:',
        options: [
          { label: 'A', text: '1', math: '1' },
          { label: 'B', text: '4', math: '4' },
          { label: 'C', text: '3/4', math: '\\frac{3}{4}' },
          { label: 'D', text: '4/3', math: '\\frac{4}{3}' },
        ],
        correctAnswer: 'A',
        explanation:
          'Đây là chuỗi cấp số nhân bắt đầu từ n = 1 có số hạng đầu a = 3/4 và công bội r = 1/4 (< 1). Tổng S = a / (1 - r) = (3/4) / (1 - 1/4) = 1.',
        explanationMath: 'S = \\frac{a_1}{1 - r} = \\frac{3/4}{1 - 1/4} = 1',
      },
      {
        id: 'q11-2',
        question: 'Khai triển Maclaurin của hàm số f(x) = e^{-x^2} là:',
        options: [
          { label: 'A', text: '∑_{n=0}^∞ (-1)^n x^{2n} / n!', math: '\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{n!}' },
          { label: 'B', text: '∑_{n=0}^∞ (-1)^n x^{2n} / (2n)!', math: '\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!}' },
          { label: 'C', text: '∑_{n=0}^∞ x^{2n} / n!', math: '\\sum_{n=0}^\\infty \\frac{x^{2n}}{n!}' },
          { label: 'D', text: '∑_{n=0}^∞ (-1)^n x^n / n!', math: '\\sum_{n=0}^\\infty (-1)^n \\frac{x^n}{n!}' },
        ],
        correctAnswer: 'A',
        explanation:
          'Từ khai triển chuẩn e^u = ∑_{n=0}^∞ u^n / n!, thay u = -x^2 vào ta thu được e^{-x^2} = ∑_{n=0}^∞ (-x^2)^n / n! = ∑_{n=0}^∞ (-1)^n x^{2n} / n!.',
        explanationMath: 'e^u = \\sum_{n=0}^\\infty \\frac{u^n}{n!} \\xrightarrow{u = -x^2} e^{-x^2} = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{n!}',
      },
      {
        id: 'q11-3',
        question: 'Sử dụng khai triển Maclaurin, giới hạn L = \\lim_{x \\to 0} \\frac{\\sin x - x + x^3/6}{x^5} có giá trị bằng:',
        options: [
          { label: 'A', text: '1/120', math: '\\frac{1}{120}' },
          { label: 'B', text: '-1/120', math: '-\\frac{1}{120}' },
          { label: 'C', text: '1/24', math: '\\frac{1}{24}' },
          { label: 'D', text: '0', math: '0' },
        ],
        correctAnswer: 'A',
        explanation:
          'Khai triển Maclaurin của sin x đến bậc 5 là: sin x = x - x^3/3! + x^5/5! - O(x^7) = x - x^3/6 + x^5/120 - ... Thay vào tử thức rồi chia cho x^5 và cho x → 0 ta được ngay 1/120 (nhanh hơn rất nhiều so với 5 lần L\'Hospital).',
        explanationMath: '\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots \\implies \\lim_{x \\to 0} \\frac{\\frac{x^5}{120} + o(x^5)}{x^5} = \\frac{1}{120}',
      },
    ],
  },
];
