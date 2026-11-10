import { ChapterData } from '../types/calculus';

export const CHAPTERS_PART_2: ChapterData[] = [
  {
    id: 5,
    sessionRange: 'Buổi 5',
    title: 'Chương 5: Tích phân (Trọng tâm)',
    englishTitle: 'Integrals',
    isFocusChapter: true,
    overview:
      'Chương này mở đầu phép tính tích phân từ bài toán tính diện tích miền dưới đường cong và bài toán tính quãng đường từ vận tốc thông qua tổng Riemann. Điểm nhấn quan trọng nhất là Định lý Cơ bản của Giải tích (FTC) kết nối phép tính đạo hàm và phép tính tích phân, cùng quy tắc đổi biến số.',
    learningOutcomes: [
      'LLO5.1: Hiểu và vận dụng được khái niệm tích phân xác định thông qua tổng Riemann, bài toán diện tích và khoảng cách.',
      'LLO5.2: Nắm vững Định lý Cơ bản của Giải tích (phần 1 và phần 2) và giải thành thạo tích phân xác định, tích phân bất định bằng phương pháp đổi biến.',
    ],
    tableOfContents: [
      { code: '5.1 - 5.2', title: 'Bài toán Diện tích, Khoảng cách, Tổng Riemann & Tích phân xác định' },
      { code: '5.3', title: 'Định lý Cơ bản của Giải tích (FTC Phần 1 & Công thức Newton - Leibniz)' },
      { code: '5.4 - 5.5', title: 'Tích phân bất định & Quy tắc đổi biến số (Substitution Rule)' },
    ],
    subSections: [
      {
        code: '5.1 - 5.2',
        title: 'Bài toán Diện tích, Khoảng cách, Tổng Riemann & Tích phân xác định',
        summary:
          'Chia đoạn [a, b] thành n đoạn con đều nhau có bề rộng Δx = (b - a)/n và chọn các điểm mẫu x_i^*. Tổng diện tích các hình chữ nhật xấp xỉ gọi là tổng Riemann. Khi cho n → ∞, giới hạn của tổng Riemann chính là tích phân xác định của f(x) trên [a, b].',
        keyFormulas: [
          {
            label: 'Định nghĩa Tích phân xác định qua Tổng Riemann',
            latex: '\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x, \\qquad \\Delta x = \\frac{b - a}{n}, \\; x_i = a + i\\Delta x',
            note: 'Nếu f(x) nhận cả giá trị âm và dương, tích phân xác định là "diện tích đại số" (phần trên Ox trừ phần dưới Ox).',
          },
          {
            label: 'Tính chất đối xứng của tích phân trên đoạn đối xứng [-a, a]',
            latex: '\\int_{-a}^a f(x)\\,dx = \\begin{cases} 2\\int_0^a f(x)\\,dx & \\text{nếu } f(-x) = f(x) \\text{ (Hàm chẵn)} \\\\ 0 & \\text{nếu } f(-x) = -f(x) \\text{ (Hàm lẻ)} \\end{cases}',
            note: 'Tính chất hàm lẻ giúp tính nhẩm ngay nhiều tích phân phức tạp trên đoạn [-a, a] bằng 0.',
          },
        ],
        detailedNotes: [
          'Trong vật lý, nếu v(t) là hàm vận tốc thì tích phân ∫_a^b v(t)dt là độ dịch chuyển (displacement), còn ∫_a^b |v(t)|dt là tổng quãng đường thực đi được (total distance).',
        ],
        example: {
          title: 'Chuyển giới hạn của tổng về tích phân xác định (Tổng Riemann)',
          problem: 'Tính giới hạn của dãy tổng S = \\lim_{n \\to \\infty} \\sum_{i=1}^n \\frac{n}{n^2 + i^2} bằng cách sử dụng định nghĩa tích phân xác định.',
          problemMath: 'S = \\lim_{n \\to \\infty} \\sum_{i=1}^n \\frac{n}{n^2 + i^2}',
          solutionSteps: [
            'Bước 1: Chia cả tử và mẫu của phân thức cho n^2 để làm xuất hiện Δx = 1/n và điểm mẫu x_i = i/n.',
            'Bước 2: Nhận diện tổng Riemann của hàm f(x) = 1/(1 + x^2) trên đoạn [0, 1].',
            'Bước 3: Tính tích phân xác định tương ứng.',
          ],
          solutionMath: [
            'S = \\lim_{n \\to \\infty} \\sum_{i=1}^n \\frac{1}{1 + (i/n)^2} \\cdot \\frac{1}{n} = \\int_0^1 \\frac{1}{1 + x^2}\\,dx = \\Big[\\arctan x\\Big]_0^1 = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}',
          ],
          conclusion: 'Giới hạn của tổng đã cho bằng π/4.',
        },
      },
      {
        code: '5.3',
        title: 'Định lý Cơ bản của Giải tích (FTC Phần 1 & Công thức Newton - Leibniz)',
        summary:
          'Định lý Cơ bản của Giải tích (Fundamental Theorem of Calculus - FTC) gồm 2 phần: Phần 1 khẳng định đạo hàm của hàm tích phân cận biến thiên bằng chính hàm dưới dấu tích phân; Phần 2 (Newton–Leibniz) cho phép tính tích phân xác định thông qua hiệu giá trị của một nguyên hàm tại hai cận.',
        keyFormulas: [
          {
            label: 'FTC Phần 1: Đạo hàm của hàm tích phân có cận phụ thuộc x (Quy tắc Leibniz)',
            latex: '\\frac{d}{dx} \\left[ \\int_a^x f(t)\\,dt \\right] = f(x), \\qquad \\frac{d}{dx} \\left[ \\int_{u(x)}^{v(x)} f(t)\\,dt \\right] = f(v(x))\\cdot v\'(x) - f(u(x))\\cdot u\'(x)',
            note: 'Công thức tổng quát kết hợp FTC Phần 1 với Quy tắc đạo hàm hàm hợp (Chain Rule).',
          },
          {
            label: 'FTC Phần 2: Công thức Newton - Leibniz',
            latex: '\\int_a^b f(x)\\,dx = F(b) - F(a) = \\Big[F(x)\\Big]_a^b \\quad \\text{với } F\'(x) = f(x)',
            note: 'Định lý tốc độ biến thiên tổng cộng (Net Change Theorem): ∫_a^b F\'(x)dx = F(b) - F(a).',
          },
        ],
        detailedNotes: [
          'Các bài toán tìm giới hạn dạng 0/0 có chứa tích phân xác định ở tử số (ví dụ lim_{x→0} [∫_0^{x^2} sin(t)dt] / x^4) luôn giải cực nhanh bằng cách kết hợp Quy tắc L\'Hospital và FTC Phần 1.',
        ],
        example: {
          title: 'Đạo hàm của hàm tích phân cận biến thiên kết hợp L\'Hospital',
          problem: 'Cho hàm số G(x) = \\int_{\\sin x}^{x^2} \\sqrt{1 + t^3}\\,dt. Hãy tính đạo hàm G\'(x).',
          problemMath: 'G(x) = \\int_{\\sin x}^{x^2} \\sqrt{1 + t^3}\\,dt \\implies G\'(x) = ?',
          solutionSteps: [
            'Bước 1: Xác định hàm dưới dấu tích phân f(t) = √(1 + t^3), cận dưới u(x) = sin x, cận trên v(x) = x^2.',
            'Bước 2: Tính đạo hàm hai cận: u\'(x) = cos x và v\'(x) = 2x.',
            'Bước 3: Áp dụng công thức G\'(x) = f(v(x))·v\'(x) - f(u(x))·u\'(x).',
          ],
          solutionMath: [
            'G\'(x) = \\sqrt{1 + (x^2)^3} \\cdot (x^2)\' - \\sqrt{1 + (\\sin x)^3} \\cdot (\\sin x)\' = 2x\\sqrt{1 + x^6} - \\cos x \\sqrt{1 + \\sin^3 x}',
          ],
          conclusion: 'Đạo hàm của hàm tích phân là G\'(x) = 2x√(1 + x^6) - cos(x)√(1 + sin^3 x).',
        },
      },
      {
        code: '5.4 - 5.5',
        title: 'Tích phân bất định & Quy tắc đổi biến số (Substitution Rule)',
        summary:
          'Quy tắc đổi biến số trong tích phân là phép toán ngược của quy tắc đạo hàm hàm hợp (Chain Rule). Khi gặp tích phân có chứa một biểu thức u = g(x) đi kèm với vi phân du = g\'(x)dx của nó, ta đổi sang biến mới u để đưa về tích phân cơ bản.',
        keyFormulas: [
          {
            label: 'Công thức Đổi biến trong Tích phân bất định và xác định',
            latex: '\\int f(g(x))g\'(x)\\,dx = \\int f(u)\\,du, \\qquad \\int_a^b f(g(x))g\'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du',
            note: 'Khi tính tích phân xác định bằng đổi biến, nhớ ĐỔI CẬN từ x ∈ [a, b] sang u ∈ [g(a), g(b)] để không cần trả lại biến cũ.',
          },
        ],
        detailedNotes: [
          'Kinh nghiệm chọn u = g(x): Thường đặt u bằng biểu thức nằm trong căn thức, biểu thức ở mẫu số, biểu thức trong hàm mũ e^{g(x)}, hoặc đặt u = ln x khi xuất hiện dx/x.',
        ],
        example: {
          title: 'Tính tích phân xác định bằng phương pháp đổi biến và tính chất đối xứng',
          problem: 'Tính tích phân I = \\int_0^{\\pi/2} \\frac{\\sin(2x)}{1 + \\cos^2 x}\\,dx.',
          problemMath: 'I = \\int_0^{\\pi/2} \\frac{\\sin(2x)}{1 + \\cos^2 x}\\,dx',
          solutionSteps: [
            'Bước 1: Đặt u = 1 + cos^2 x, suy ra du = 2 cos x (-sin x) dx = -sin(2x) dx.',
            'Bước 2: Đổi cận: Khi x = 0 thì u = 1 + 1^2 = 2; khi x = π/2 thì u = 1 + 0 = 1.',
            'Bước 3: Thay vào tích phân và tính theo biến u.',
          ],
          solutionMath: [
            'I = \\int_2^1 \\frac{-du}{u} = \\int_1^2 \\frac{du}{u} = \\Big[\\ln|u|\\Big]_1^2 = \\ln 2 - \\ln 1 = \\ln 2',
          ],
          conclusion: 'Giá trị chính xác của tích phân là I = ln 2 ≈ 0.6931.',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch5-riemann',
      caption: 'Hình 5.1: Xấp xỉ diện tích miền phẳng dưới đường cong y = f(x) bằng Tổng Riemann với các hình chữ nhật.',
      svgType: 'riemann-sum',
      tikzCode: `\\begin{tikzpicture}[scale=1.1, >=stealth]
  % Các hình chữ nhật xấp xỉ Riemann
  \\foreach \\x/\\h in {0.6/1.28, 1.3/1.82, 2.0/2.45, 2.7/2.95, 3.4/3.12} {
    \\fill[cyan!20, draw=cyan!70!black, thick] (\\x, 0) rectangle (\\x+0.7, \\h);
  }
  % Trục tọa độ
  \\draw[->, thick] (-0.3,0) -- (4.8,0) node[right] {$x$};
  \\draw[->, thick] (0,-0.3) -- (0,3.8) node[above] {$y$};
  
  % Đồ thị hàm số y = f(x)
  \\draw[domain=0.4:4.3, smooth, variable=\\x, blue!85!black, very thick] 
    plot ({\\x}, {0.8 + 1.6*sin((\\x - 0.3)*38) + 0.22*(\\x)}) node[right] {$y = f(x)$};
    
  % Nhãn cận a, b và bề rộng Delta x
  \\node[below] at (0.6,0) {$a$};
  \\node[below] at (4.1,0) {$b$};
  \\draw[<->, red!80!black, thick] (2.0, -0.35) -- (2.7, -0.35) node[midway, below] {$\\Delta x$};
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Kỹ thuật Năng lượng & Điện tử Công suất',
      title: 'Tích phân Công suất Tức thời thành Điện năng Tiêu thụ (Smart Meter)',
      description:
        'Công tơ điện tử thông minh (Smart Meter) lấy mẫu điện áp u(t) và dòng điện i(t) ở tần số hàng nghìn Hz để tính công suất tức thời p(t) = u(t)·i(t). Tổng điện năng tiêu thụ E (tính bằng kWh) chính là tích phân xác định của p(t) theo thời gian, được vi xử lý tính bằng tổng Riemann hình thang.',
      formulaMath: 'E = \\int_{t_1}^{t_2} p(t)\\,dt = \\int_{t_1}^{t_2} u(t)i(t)\\,dt \\approx \\sum_{k=1}^N p(t_k)\\Delta t',
      exampleCalculation:
        'Nếu công suất phụ tải biến thiên theo ngày là P(t) = 3 + 2sin(πt/12) (kW) từ t = 0h đến t = 12h, thì điện năng tiêu thụ trong 12 giờ là E = ∫_0^{12} [3 + 2sin(πt/12)]dt = [3t - (24/π)cos(πt/12)]_0^{12} = 36 + 48/π ≈ 51.28 kWh.',
    },
    quiz: [
      {
        id: 'q5-1',
        question: 'Giá trị của tích phân xác định I = \\int_{-2}^{2} \\left(x^3 \\cos x + \\sqrt{4 - x^2}\\right) dx bằng:',
        options: [
          { label: 'A', text: '2π', math: '2\\pi' },
          { label: 'B', text: '4π', math: '4\\pi' },
          { label: 'C', text: '0', math: '0' },
          { label: 'D', text: 'π', math: '\\pi' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tách thành 2 tích phân trên đoạn đối xứng [-2, 2]: Hàm g(x) = x^3 cos x là hàm lẻ nên tích phân bằng 0. Hàm h(x) = √(4 - x^2) biểu diễn nửa trên hình tròn tâm O bán kính R = 2 nên diện tích bằng (1/2)πR^2 = 2π.',
        explanationMath: 'I = \\underbrace{\\int_{-2}^2 x^3\\cos x\\,dx}_{=0 \\text{ (hàm lẻ)}} + \\underbrace{\\int_{-2}^2 \\sqrt{4-x^2}\\,dx}_{=\\frac{1}{2}\\pi(2^2) = 2\\pi} = 2\\pi',
      },
      {
        id: 'q5-2',
        question: 'Cho hàm số F(x) = \\int_1^{x^3} \\ln(t)\\,dt với x > 0. Giá trị của F\'(e) bằng:',
        options: [
          { label: 'A', text: '9e^2', math: '9e^2' },
          { label: 'B', text: '3e^2', math: '3e^2' },
          { label: 'C', text: '3', math: '3' },
          { label: 'D', text: '1/e^3', math: 'e^{-3}' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo Định lý Cơ bản của Giải tích Phần 1 kết hợp hàm hợp: F\'(x) = ln(x^3) · (x^3)\' = (3 ln x) · (3x^2) = 9x^2 ln x. Thay x = e ta được F\'(e) = 9e^2 · ln(e) = 9e^2.',
        explanationMath: 'F\'(x) = \\ln(x^3)\\cdot 3x^2 = 9x^2\\ln x \\implies F\'(e) = 9e^2 \\ln e = 9e^2',
      },
      {
        id: 'q5-3',
        question: 'Tính tích phân I = \\int_0^1 x e^{-x^2}\\,dx, ta thu được kết quả:',
        options: [
          { label: 'A', text: '(1 - 1/e) / 2', math: '\\frac{1 - e^{-1}}{2}' },
          { label: 'B', text: '1 - 1/e', math: '1 - e^{-1}' },
          { label: 'C', text: '1 / (2e)', math: '\\frac{1}{2e}' },
          { label: 'D', text: '(e - 1) / 2', math: '\\frac{e - 1}{2}' },
        ],
        correctAnswer: 'A',
        explanation:
          'Đặt u = -x^2 ⇒ du = -2x dx ⇒ x dx = -du/2. Đổi cận x: 0 → 1 thì u: 0 → -1. Khi đó I = -(1/2) ∫_0^{-1} e^u du = (1/2)(1 - e^{-1}).',
        explanationMath: 'I = -\\frac{1}{2}\\Big[e^{-x^2}\\Big]_0^1 = \\frac{1 - e^{-1}}{2}',
      },
    ],
  },
  {
    id: 6,
    sessionRange: 'Buổi 6',
    title: 'Chương 6: Ứng dụng của Tích phân (Trọng tâm)',
    englishTitle: 'Applications of Integration',
    isFocusChapter: true,
    overview:
      'Ứng dụng trực tiếp nguyên lý "Chia nhỏ và Cộng dồn" (Slice and Sum) của tích phân xác định để tính diện tích miền phẳng giới hạn bởi các đường cong, thể tích vật thể tròn xoay bằng phương pháp lát cắt (đĩa/vòng đệm) và phương pháp vỏ hình trụ, tính công cơ học của lực biến thiên và giá trị trung bình của hàm số.',
    learningOutcomes: [
      'LLO6.1: Áp dụng thành thạo tích phân để tính diện tích miền giữa 2 đường cong, thể tích khối tròn xoay, thể tích vỏ hình trụ, công cơ học và giá trị trung bình của hàm số.',
    ],
    tableOfContents: [
      { code: '6.1', title: 'Diện tích miền phẳng giới hạn bởi các đường cong' },
      { code: '6.2 - 6.3', title: 'Thể tích vật thể tròn xoay: Phương pháp Đĩa/Vòng đệm & Vỏ hình trụ' },
      { code: '6.4 - 6.5', title: 'Công của lực biến thiên & Giá trị trung bình của hàm số' },
    ],
    subSections: [
      {
        code: '6.1',
        title: 'Diện tích miền phẳng giới hạn bởi các đường cong',
        summary:
          'Diện tích miền phẳng giới hạn bởi hai đồ thị y = f(x), y = g(x) và hai đường thẳng x = a, x = b được tính bằng tích phân của trị tuyệt đối hiệu hai hàm. Nếu miền giới hạn thuận lợi hơn khi chiếu lên trục tung Oy (x = u(y) và x = v(y)), ta lấy tích phân theo biến y.',
        keyFormulas: [
          {
            label: 'Diện tích miền phẳng chiếu theo trục Ox hoặc trục Oy',
            latex: 'S = \\int_a^b |f(x) - g(x)|\\,dx \\quad (\\text{dải dọc } dx), \\qquad S = \\int_c^d |u(y) - v(y)|\\,dy \\quad (\\text{dải ngang } dy)',
            note: 'Nếu đề bài chưa cho cận a, b thì cần giải phương trình hoành độ giao điểm f(x) = g(x) để tìm cận.',
          },
        ],
        detailedNotes: [
          'Kinh nghiệm chọn vi phân dx hay dy: Nếu đường biên trái và biên phải là hàm đơn giản theo y (ví dụ parabol nằm ngang x = y^2), việc lấy tích phân theo dy giúp tránh phải chia miền thành nhiều tích phân nhỏ.',
        ],
        example: {
          title: 'Tính diện tích miền phẳng giới hạn bởi parabol và đường thẳng',
          problem: 'Tính diện tích miền phẳng D giới hạn bởi parabol y = x^2 - 2x và đường thẳng y = x + 4.',
          problemMath: 'y = x^2 - 2x \\quad \\text{và} \\quad y = x + 4',
          solutionSteps: [
            'Bước 1: Giải phương trình hoành độ giao điểm x^2 - 2x = x + 4 ⇔ x^2 - 3x - 4 = 0 ⇔ x = -1 hoặc x = 4.',
            'Bước 2: Trên đoạn [-1, 4], đường thẳng y = x + 4 nằm phía trên parabol y = x^2 - 2x.',
            'Bước 3: Thiết lập và tính tích phân xác định.',
          ],
          solutionMath: [
            'S = \\int_{-1}^4 \\left[(x + 4) - (x^2 - 2x)\\right] dx = \\int_{-1}^4 (-x^2 + 3x + 4)\\,dx = \\left[-\\frac{x^3}{3} + \\frac{3x^2}{2} + 4x\\right]_{-1}^4 = \\frac{125}{6}',
          ],
          conclusion: 'Diện tích miền phẳng D bằng 125/6 (đơn vị diện tích).',
        },
      },
      {
        code: '6.2 - 6.3',
        title: 'Thể tích vật thể tròn xoay: Phương pháp Đĩa/Vòng đệm & Vỏ hình trụ',
        summary:
          'Có hai phương pháp chuẩn để tính thể tích khối tròn xoay: (1) Phương pháp Đĩa / Vòng đệm (Disk / Washer Method) cắt vật thể bởi các mặt phẳng vuông góc với trục quay; (2) Phương pháp Vỏ hình trụ (Cylindrical Shells) chia vật thể thành các lớp vỏ hình trụ đồng tâm song song với trục quay.',
        keyFormulas: [
          {
            label: 'Phương pháp Vòng đệm (Quay quanh trục Ox)',
            latex: 'V = \\pi \\int_a^b \\left( [R_{\\text{ngoài}}(x)]^2 - [r_{\\text{trong}}(x)]^2 \\right) dx',
            note: 'Nếu miền phẳng áp sát trục quay (r_trong = 0), công thức trở thành phương pháp Đĩa: V = π ∫ [R(x)]^2 dx.',
          },
          {
            label: 'Phương pháp Vỏ hình trụ (Quay quanh trục Oy)',
            latex: 'V = 2\\pi \\int_a^b x \\cdot f(x)\\,dx \\quad \\left(\\text{Chu vi } 2\\pi x \\times \\text{Chiều cao } f(x) \\times \\text{Bề dày } dx\\right)',
            note: 'Nếu quay quanh đường thẳng đứng x = k (với k < a), bán kính vỏ trụ là (x - k).',
          },
        ],
        detailedNotes: [
          'Khi hàm y = f(x) khó rút ngược x theo y (ví dụ y = sin(x^2) hoặc y = x^3 + x) mà yêu cầu quay quanh trục tung Oy, phương pháp Vỏ hình trụ là lựa chọn tối ưu nhất.',
        ],
        example: {
          title: 'Tính thể tích khối tròn xoay bằng cả hai phương pháp',
          problem: 'Cho miền D giới hạn bởi đường cong y = 2x - x^2 và trục hoành y = 0. Tính thể tích khối tròn xoay tạo thành khi quay D quanh trục tung Oy.',
          problemMath: 'D: \\; y = 2x - x^2, \\; y = 0 \\quad (0 \\le x \\le 2), \\text{ quay quanh } Oy',
          solutionSteps: [
            'Bước 1: Giao điểm của y = 2x - x^2 với y = 0 là x = 0 và x = 2.',
            'Bước 2: Áp dụng phương pháp Vỏ hình trụ quay quanh Oy với bán kính r = x và chiều cao h = 2x - x^2.',
            'Bước 3: Khai triển đa thức và tính tích phân từ 0 đến 2.',
          ],
          solutionMath: [
            'V_{Oy} = 2\\pi \\int_0^2 x(2x - x^2)\\,dx = 2\\pi \\int_0^2 (2x^2 - x^3)\\,dx = 2\\pi \\left[\\frac{2x^3}{3} - \\frac{x^4}{4}\\right]_0^2 = 2\\pi\\left(\\frac{16}{3} - 4\\right) = \\frac{8\\pi}{3}',
          ],
          conclusion: 'Thể tích khối tròn xoay tạo thành là V = 8π/3.',
        },
      },
      {
        code: '6.4 - 6.5',
        title: 'Công của lực biến thiên & Giá trị trung bình của hàm số',
        summary:
          'Khi lực tác dụng F(x) biến thiên dọc theo trục chuyển động từ x = a đến x = b (như lực đàn hồi lò xo định luật Hooke F(x) = kx hoặc công bơm chất lỏng ra khỏi bể), công cơ học W được tính bằng tích phân của F(x). Giá trị trung bình f_ave của hàm liên tục trên [a, b] là chiều cao của hình chữ nhật có cùng diện tích với miền dưới đồ thị.',
        keyFormulas: [
          {
            label: 'Công cơ học của lực biến thiên F(x)',
            latex: 'W = \\int_a^b F(x)\\,dx \\quad (\\text{Định luật Hooke cho lò xo: } F(x) = kx)',
            note: 'Đơn vị chuẩn SI: Lực F tính bằng Newton (N), quãng đường x tính bằng mét (m), công W tính bằng Joule (J = N·m).',
          },
          {
            label: 'Giá trị trung bình của hàm số & Định lý Giá trị Trung bình cho Tích phân',
            latex: 'f_{\\text{ave}} = \\frac{1}{b - a} \\int_a^b f(x)\\,dx, \\qquad \\exists c \\in [a, b] : f(c) = f_{\\text{ave}}',
            note: 'Diện tích miền dưới đường cong đúng bằng diện tích hình chữ nhật: ∫_a^b f(x)dx = f(c)(b - a).',
          },
        ],
        detailedNotes: [
          'Trong bài toán bơm nước ra khỏi bể: Chia khối nước thành các lớp mỏng nằm ngang ở độ sâu y có diện tích mặt cắt A(y), thể tích dV = A(y)dy, trọng lượng dF = ρg A(y)dy, và quãng đường nâng lớp nước đó lên miệng bể là h(y).',
        ],
        example: {
          title: 'Tính công kéo giãn lò xo và giá trị trung bình của hàm số',
          problem: 'Một lò xo có chiều dài tự nhiên 20 cm. Cần một lực 30 N để giữ lò xo ở độ dài 25 cm. Tính công cần thiết để kéo lò xo từ độ dài 25 cm đến độ dài 30 cm.',
          problemMath: 'F(x) = kx, \\quad F(0.05) = 30 \\text{ N} \\implies W = \\int_{0.05}^{0.10} kx\\,dx',
          solutionSteps: [
            'Bước 1: Đổi đơn vị sang mét: Độ giãn khi dài 25 cm là x_1 = 0.05 m; khi dài 30 cm là x_2 = 0.10 m.',
            'Bước 2: Tìm độ cứng k từ F(0.05) = 30 ⇒ k · 0.05 = 30 ⇒ k = 600 (N/m).',
            'Bước 3: Tính tích phân công W từ x_1 = 0.05 m đến x_2 = 0.10 m.',
          ],
          solutionMath: [
            'W = \\int_{0.05}^{0.10} 600x\\,dx = \\Big[300x^2\\Big]_{0.05}^{0.10} = 300(0.01 - 0.0025) = 300(0.0075) = 2.25 \\text{ (J)}',
          ],
          conclusion: 'Công cơ học cần thực hiện là W = 2.25 Joule.',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch6-solid',
      caption: 'Hình 6.1: Mô hình Thể tích vật thể tròn xoay quay quanh trục Ox với lát cắt vi phân hình đĩa bán kính R = f(x).',
      svgType: 'solid-revolution',
      tikzCode: `\\begin{tikzpicture}[scale=1.05, >=stealth]
  % Trục tọa độ
  \\draw[->, thick] (-0.5,0) -- (5.2,0) node[right] {$x$};
  \\draw[->, thick] (0,-2.2) -- (0,2.4) node[above] {$y$};
  
  % Đường biên trên và dưới của vật thể tròn xoay
  \\draw[domain=0.8:4.2, smooth, variable=\\x, blue!80!black, very thick] 
    plot ({\\x}, {0.65*sqrt(\\x) + 0.35}) node[above right] {$y = f(x)$};
  \\draw[domain=0.8:4.2, smooth, variable=\\x, blue!60!black, thick, dashed] 
    plot ({\\x}, {-0.65*sqrt(\\x) - 0.35});
    
  % Hai mặt đáy elip ở x = a và x = b
  \\draw[blue!80!black, thick] (0.8,0) ellipse (0.18 and 0.93);
  \\draw[blue!80!black, thick, fill=blue!8, fill opacity=0.4] (4.2,0) ellipse (0.32 and 1.68);
  
  % Lát cắt vi phân hình đĩa tại x
  \\filldraw[fill=red!25, draw=red!80!black, thick, fill opacity=0.7] (2.5,0) ellipse (0.25 and 1.38);
  \\draw[->, red!80!black, thick] (2.5,0) -- (2.5,1.38) node[midway, right] {$R(x)$};
  \\node[below] at (0.8,-1.0) {$x=a$};
  \\node[below] at (4.2,-1.75) {$x=b$};
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Kỹ thuật Điện xoay chiều & Cơ khí Chế tạo (CAD)',
      title: 'Giá trị Hiệu dụng (RMS) của Dòng điện Xoay chiều và Tính Thể tích Chi tiết Tiện CNC',
      description:
        'Giá trị trung bình của dòng điện hình sin i(t) = I_0 sin(ωt) trong một chu kỳ bằng 0, do đó trong kỹ thuật điện người ta dùng Giá trị Hiệu dụng (Root Mean Square - RMS), được định nghĩa bằng căn bậc hai của giá trị trung bình của hàm bình phương i^2(t) trên một chu kỳ T.',
      formulaMath: 'I_{\\text{RMS}} = \\sqrt{\\frac{1}{T} \\int_0^T [I_0 \\sin(\\omega t)]^2\\,dt} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 I_0',
      exampleCalculation:
        'Điện lưới dân dụng tại Việt Nam có điện áp hiệu dụng U_RMS = 220V, nghĩa là biên độ điện áp cực đại thực tế đạt tới U_0 = 220√2 ≈ 311.13 V.',
    },
    quiz: [
      {
        id: 'q6-1',
        question: 'Diện tích miền phẳng giới hạn bởi hai đường cong y = x^2 và y = \\sqrt{x} trên đoạn [0, 1] bằng:',
        options: [
          { label: 'A', text: '1/3', math: '\\frac{1}{3}' },
          { label: 'B', text: '1/2', math: '\\frac{1}{2}' },
          { label: 'C', text: '2/3', math: '\\frac{2}{3}' },
          { label: 'D', text: '1/6', math: '\\frac{1}{6}' },
        ],
        correctAnswer: 'A',
        explanation:
          'Trên đoạn [0, 1], ta có √x ≥ x^2. Do đó S = ∫_0^1 (√x - x^2)dx = [(2/3)x^{3/2} - x^3/3]_0^1 = 2/3 - 1/3 = 1/3.',
        explanationMath: 'S = \\int_0^1 (\\sqrt{x} - x^2)\\,dx = \\left[\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3}',
      },
      {
        id: 'q6-2',
        question: 'Thể tích khối tròn xoay khi quay miền giới hạn bởi y = \\sqrt{x}, y = 0, x = 4 quanh trục hoành Ox là:',
        options: [
          { label: 'A', text: '8π', math: '8\\pi' },
          { label: 'B', text: '4π', math: '4\\pi' },
          { label: 'C', text: '16π', math: '16\\pi' },
          { label: 'D', text: '8', math: '8' },
        ],
        correctAnswer: 'A',
        explanation:
          'Áp dụng công thức phương pháp Đĩa: V = π ∫_0^4 (√x)^2 dx = π ∫_0^4 x dx = π [x^2 / 2]_0^4 = 8π.',
        explanationMath: 'V = \\pi \\int_0^4 (\\sqrt{x})^2\\,dx = \\pi \\left[\\frac{x^2}{2}\\right]_0^4 = 8\\pi',
      },
      {
        id: 'q6-3',
        question: 'Giá trị trung bình của hàm số f(x) = 3x^2 - 2x trên đoạn [1, 4] bằng:',
        options: [
          { label: 'A', text: '16', math: '16' },
          { label: 'B', text: '48', math: '48' },
          { label: 'C', text: '12', math: '12' },
          { label: 'D', text: '21', math: '21' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có f_ave = [1 / (4 - 1)] ∫_1^4 (3x^2 - 2x)dx = (1/3) [x^3 - x^2]_1^4 = (1/3) [(64 - 16) - (1 - 1)] = 48/3 = 16.',
        explanationMath: 'f_{\\text{ave}} = \\frac{1}{4-1} \\Big[x^3 - x^2\\Big]_1^4 = \\frac{48 - 0}{3} = 16',
      },
    ],
  },
  {
    id: 7,
    sessionRange: 'Buổi 7 - 8',
    title: 'Chương 7: Các phương pháp tính Tích phân & Tích phân suy rộng (Trọng tâm)',
    englishTitle: 'Techniques of Integration & Improper Integrals',
    isFocusChapter: true,
    overview:
      'Chương này hoàn thiện hệ thống kỹ thuật tính tích phân nâng cao: Tích phân từng phần, Tích phân hàm lượng giác, Phép thế lượng giác cho căn thức bậc hai, Phân tích hàm hữu tỉ thành tổng các phân thức đơn giản, và mở rộng khái niệm tích phân sang miền không bị chặn hoặc hàm không bị chặn (Tích phân suy rộng loại 1 và loại 2).',
    learningOutcomes: [
      'LLO7.1: Áp dụng thành thạo tích phân từng phần, lượng giác, thế lượng giác và phân tích phân thức hữu tỉ.',
      'LLO8.1: Hiểu định nghĩa tích phân suy rộng loại 1, loại 2 và xét được tính hội tụ / phân kỳ của chúng.',
    ],
    tableOfContents: [
      { code: '7.1', title: 'Phương pháp Tích phân từng phần (Integration by Parts)' },
      { code: '7.2 - 7.3', title: 'Tích phân hàm lượng giác & Phép thay thế lượng giác' },
      { code: '7.4 - 7.5', title: 'Tích phân hàm hữu tỉ (Đồng nhất hệ số) & Chiến lược tính tích phân' },
      { code: '7.6', title: 'Tích phân suy rộng (Loại 1: Cận vô cực & Loại 2: Hàm không bị chặn)' },
    ],
    subSections: [
      {
        code: '7.1',
        title: 'Phương pháp Tích phân từng phần (Integration by Parts)',
        summary:
          'Được suy ra trực tiếp từ quy tắc đạo hàm của tích (uv)\' = u\'v + uv\'. Quy tắc chọn u theo thứ tự ưu tiên LIATE (tiếng Việt: "Nhất Lô - Nhì Đa - Tam Lượng - Tứ Mũ"): Logarithm → Đa thức → Lượng giác → Hàm mũ.',
        keyFormulas: [
          {
            label: 'Công thức Tích phân từng phần',
            latex: '\\int u\\,dv = u v - \\int v\\,du, \\qquad \\int_a^b u\\,dv = \\Big[u v\\Big]_a^b - \\int_a^b v\\,du',
            note: 'Với dạng tích phân từng phần lặp I = ∫ e^{ax} sin(bx)dx hoặc ∫ e^{ax} cos(bx)dx, từng phần 2 lần sẽ thu lại I ở vế phải.',
          },
        ],
        detailedNotes: [
          'Khi tính tích phân của một hàm đứng độc lập như ∫ ln(x)dx, ∫ arctan(x)dx, hoặc ∫ arcsin(x)dx, ta luôn đặt u bằng chính hàm đó và dv = dx.',
        ],
        example: {
          title: 'Tính tích phân từng phần chứa hàm Logarithm và Đa thức',
          problem: 'Tính tích phân xác định I = \\int_1^e x \\ln x\\,dx.',
          problemMath: 'I = \\int_1^e x \\ln x\\,dx',
          solutionSteps: [
            'Bước 1: Theo quy tắc "Nhất Lô - Nhì Đa", đặt u = ln x ⇒ du = dx/x và dv = x dx ⇒ v = x^2 / 2.',
            'Bước 2: Áp dụng công thức tích phân từng phần trên đoạn [1, e].',
          ],
          solutionMath: [
            'I = \\left[ \\frac{x^2}{2} \\ln x \\right]_1^e - \\int_1^e \\frac{x^2}{2} \\cdot \\frac{1}{x}\\,dx = \\frac{e^2}{2} - \\left[\\frac{x^2}{4}\\right]_1^e = \\frac{e^2}{2} - \\left(\\frac{e^2}{4} - \\frac{1}{4}\\right) = \\frac{e^2 + 1}{4}',
          ],
          conclusion: 'Giá trị của tích phân là I = (e^2 + 1)/4.',
        },
      },
      {
        code: '7.2 - 7.3',
        title: 'Tích phân hàm lượng giác & Phép thay thế lượng giác',
        summary:
          'Khi tích phân chứa các căn thức dạng √(a^2 - x^2), √(a^2 + x^2), hoặc √(x^2 - a^2), ta dùng phép thế lượng giác để khử dấu căn nhờ các hằng đẳng thức Pythagoras: 1 - sin^2 θ = cos^2 θ và 1 + tan^2 θ = sec^2 θ.',
        keyFormulas: [
          {
            label: 'Bảng 3 phép thế lượng giác chuẩn (với a > 0)',
            latex: '\\begin{aligned} &\\sqrt{a^2 - x^2} \\implies \\text{Đặt } x = a\\sin\\theta, \\; dx = a\\cos\\theta\\,d\\theta, \\; \\theta \\in [-\\pi/2, \\pi/2] \\\\ &\\sqrt{a^2 + x^2} \\implies \\text{Đặt } x = a\\tan\\theta, \\; dx = a\\sec^2\\theta\\,d\\theta, \\; \\theta \\in (-\\pi/2, \\pi/2) \\\\ &\\sqrt{x^2 - a^2} \\implies \\text{Đặt } x = a\\sec\\theta, \\; dx = a\\sec\\theta\\tan\\theta\\,d\\theta \\end{aligned}',
            note: 'Với tích phân ∫ sin^m(x) cos^n(x)dx: Nếu m hoặc n lẻ thì tách 1 bậc lẻ đưa vào vi phân; nếu cả m, n đều chẵn thì dùng công thức hạ bậc.',
          },
        ],
        detailedNotes: [
          'Công thức hạ bậc lượng giác cần nhớ: sin^2 x = (1 - cos 2x)/2 và cos^2 x = (1 + cos 2x)/2.',
        ],
        example: {
          title: 'Tính tích phân chứa căn thức bằng phép thế lượng giác',
          problem: 'Tính tích phân I = \\int_0^{3/2} \\frac{dx}{(9 - x^2)^{3/2}}.',
          problemMath: 'I = \\int_0^{3/2} \\frac{dx}{(\\sqrt{9 - x^2})^3}',
          solutionSteps: [
            'Bước 1: Nhận diện dạng a^2 - x^2 với a = 3. Đặt x = 3 sin θ ⇒ dx = 3 cos θ dθ.',
            'Bước 2: Đổi cận: x = 0 ⇒ θ = 0; x = 3/2 ⇒ sin θ = 1/2 ⇒ θ = π/6.',
            'Bước 3: Thay vào tích phân, rút gọn cos^2 θ ở mẫu thành sec^2 θ = (tan θ)\'.',
          ],
          solutionMath: [
            'I = \\int_0^{\\pi/6} \\frac{3\\cos\\theta\\,d\\theta}{(3\\cos\\theta)^3} = \\frac{1}{9} \\int_0^{\\pi/6} \\frac{d\\theta}{\\cos^2\\theta} = \\frac{1}{9}\\Big[\\tan\\theta\\Big]_0^{\\pi/6} = \\frac{1}{9} \\cdot \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{27}',
          ],
          conclusion: 'Giá trị của tích phân là I = √3 / 27.',
        },
      },
      {
        code: '7.4 - 7.5',
        title: 'Tích phân hàm hữu tỉ (Đồng nhất hệ số) & Chiến lược tính tích phân',
        summary:
          'Mọi hàm phân thức hữu tỉ thực sự P(x)/Q(x) (với bậc của tử P nhỏ hơn bậc của mẫu Q) đều có thể phân tích thành tổng của các phân thức đơn giản dạng A/(x - a)^k và (Bx + C)/(x^2 + px + q)^m (trong đó Δ = p^2 - 4q < 0).',
        keyFormulas: [
          {
            label: 'Phân tích phân thức hữu tỉ (Phương pháp Heaviside che nghiệm)',
            latex: '\\frac{P(x)}{(x - x_1)(x - x_2)} = \\frac{A}{x - x_1} + \\frac{B}{x - x_2}, \\quad A = \\frac{P(x_1)}{x_1 - x_2}, \\; B = \\frac{P(x_2)}{x_2 - x_1}',
            note: 'Nếu bậc của P(x) ≥ bậc của Q(x), bắt buộc phải thực hiện phép chia đa thức trước khi tách phân thức.',
          },
        ],
        detailedNotes: [
          'Với phân thức có mẫu bậc 2 vô nghiệm thực: Đưa mẫu về dạng bình phương đủ (x + p/2)^2 + a^2 để tách thành ln(mẫu) và arctan.',
        ],
        example: {
          title: 'Tích phân hàm phân thức hữu tỉ bằng tách phân thức đơn giản',
          problem: 'Tính tích phân bất định I = \\int \\frac{x + 5}{x^2 + x - 2}\\,dx.',
          problemMath: 'I = \\int \\frac{x + 5}{(x - 1)(x + 2)}\\,dx',
          solutionSteps: [
            'Bước 1: Phân tích mẫu số x^2 + x - 2 = (x - 1)(x + 2). Giả sử (x + 5)/[(x - 1)(x + 2)] = A/(x - 1) + B/(x + 2).',
            'Bước 2: Dùng quy tắc che nghiệm Heaviside: Tại x = 1 ⇒ A = (1 + 5)/(1 + 2) = 2; tại x = -2 ⇒ B = (-2 + 5)/(-2 - 1) = -1.',
            'Bước 3: Lấy nguyên hàm từng phân thức đơn giản.',
          ],
          solutionMath: [
            'I = \\int \\left( \\frac{2}{x - 1} - \\frac{1}{x + 2} \\right) dx = 2\\ln|x - 1| - \\ln|x + 2| + C = \\ln\\left|\\frac{(x - 1)^2}{x + 2}\\right| + C',
          ],
          conclusion: 'Nguyên hàm là I = 2 ln|x - 1| - ln|x + 2| + C.',
        },
      },
      {
        code: '7.6',
        title: 'Tích phân suy rộng (Loại 1: Cận vô cực & Loại 2: Hàm không bị chặn)',
        summary:
          'Tích phân suy rộng mở rộng tích phân xác định bằng cách lấy giới hạn khi cận tiến ra vô cực (Loại 1) hoặc khi cận tiến tới điểm kỳ dị làm hàm số tiến ra vô cực (Loại 2). Nếu giới hạn tồn tại hữu hạn thì tích phân HỘI TỤ, ngược lại là PHÂN KỲ.',
        keyFormulas: [
          {
            label: 'Định nghĩa Tích phân suy rộng Loại 1 và Chuẩn p-tích phân tại vô cực',
            latex: '\\int_a^\\infty f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx, \\qquad \\int_1^\\infty \\frac{dx}{x^p} \\;\\begin{cases} \\text{Hội tụ bằng } \\frac{1}{p-1} & \\text{khi } p > 1 \\\\ \\text{Phân kỳ} & \\text{khi } p \\le 1 \\end{cases}',
            note: 'Với tích phân suy rộng 2 đầu từ -∞ đến +∞, phải tách tại 1 điểm trung gian c và cả 2 nhánh phải độc lập hội tụ.',
          },
          {
            label: 'Tích phân suy rộng Loại 2 (Điểm kỳ dị tại x = a) & Chuẩn hội tụ',
            latex: '\\int_a^b \\frac{dx}{(x - a)^q} \\;\\begin{cases} \\text{Hội tụ} & \\text{khi } q < 1 \\\\ \\text{Phân kỳ} & \\text{khi } q \\ge 1 \\end{cases} \\quad (\\text{Ngược chiều với chuẩn } p \\text{ ở vô cực!})',
            note: 'Tiêu chuẩn so sánh: Với 0 ≤ f(x) ≤ g(x), nếu ∫ g(x)dx hội tụ thì ∫ f(x)dx hội tụ.',
          },
        ],
        detailedNotes: [
          'Cảnh báo bẫy thường gặp: Khi tính ∫_{-1}^1 (1/x^2)dx, không được áp dụng trực tiếp công thức Newton–Leibniz [-1/x]_{-1}^1 = -2 vì x = 0 là điểm kỳ dị nằm giữa đoạn [-1, 1] làm tích phân PHÂN KỲ.',
        ],
        example: {
          title: 'Xét sự hội tụ và tính giá trị tích phân suy rộng',
          problem: 'Tính các tích phân suy rộng: (a) I_1 = \\int_1^{+\\infty} x e^{-x}\\,dx và (b) I_2 = \\int_0^1 \\frac{dx}{\\sqrt{1 - x}}.',
          problemMath: 'I_1 = \\int_1^{+\\infty} x e^{-x}\\,dx, \\qquad I_2 = \\int_0^1 \\frac{dx}{\\sqrt{1 - x}}',
          solutionSteps: [
            'Câu (a): Là tích phân suy rộng loại 1. Tính nguyên hàm từng phần ∫ x e^{-x} dx = -(x + 1)e^{-x}, sau đó lấy giới hạn khi t → +∞.',
            'Câu (b): Là tích phân suy rộng loại 2 có điểm kỳ dị tại x = 1 (với q = 1/2 < 1 nên hội tụ).',
          ],
          solutionMath: [
            'I_1 = \\lim_{t \\to +\\infty} \\Big[ -(x + 1)e^{-x} \\Big]_1^t = \\lim_{t \\to +\\infty} \\left( -\\frac{t + 1}{e^t} + \\frac{2}{e} \\right) = 0 + \\frac{2}{e} = \\frac{2}{e} \\;(\\text{Hội tụ})',
            'I_2 = \\lim_{t \\to 1^-} \\Big[ -2\\sqrt{1 - x} \\Big]_0^t = \\lim_{t \\to 1^-} \\left( -2\\sqrt{1 - t} + 2 \\right) = 2 \\;(\\text{Hội tụ})',
          ],
          conclusion: 'Cả hai tích phân suy rộng đều hội tụ với I_1 = 2/e và I_2 = 2.',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch7-parts',
      caption: 'Hình 7.1: So sánh tốc độ suy giảm của 1/x (Tích phân suy rộng phân kỳ) và 1/x^2 (Hội tụ về diện tích hữu hạn bằng 1) trên [1, +∞).',
      svgType: 'integration-parts',
      tikzCode: `\\begin{tikzpicture}[scale=1.1, >=stealth]
  % Miền diện tích hội tụ dưới đường y = 1/x^2
  \\fill[emerald!20, fill=teal!20] (1,0) -- plot[domain=1:4.6, smooth, variable=\\x] ({\\x}, {1.6/(\\x*\\x)}) -- (4.6,0) -- cycle;
  
  % Trục tọa độ
  \\draw[->, thick] (-0.3,0) -- (5.0,0) node[right] {$x$};
  \\draw[->, thick] (0,-0.3) -- (0,3.2) node[above] {$y$};
  
  % Đồ thị y = 1/x (Phân kỳ) và y = 1/x^2 (Hội tụ)
  \\draw[domain=0.55:4.6, smooth, variable=\\x, red!80!black, very thick, dashed] 
    plot ({\\x}, {1.6/(\\x)}) node[above right] {$y = \\frac{1}{x}$ (Phân kỳ)};
  \\draw[domain=0.75:4.6, smooth, variable=\\x, teal!85!black, very thick] 
    plot ({\\x}, {1.6/(\\x*\\x)}) node[right] {$y = \\frac{1}{x^2}$ (Hội tụ)};
    
  \\draw[thick] (1,0) node[below] {$1$} -- (1,1.6);
  \\node[teal!85!black] at (2.1, 0.45) {$\\int_1^\\infty \\frac{dx}{x^2} = 1$};
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Xử lý Tín hiệu Số (DSP) & Lý thuyết Điều khiển',
      title: 'Biến đổi Laplace và Biến đổi Fourier qua Tích phân Suy rộng',
      description:
        'Trong kỹ thuật điều khiển và viễn thông, phép Biến đổi Laplace L{f(t)} chuyển phương trình vi phân theo thời gian t sang phương trình đại số trong miền tần số phức s thông qua một tích phân suy rộng loại 1 kết hợp kỹ thuật tích phân từng phần.',
      formulaMath: '\\mathcal{L}\\{f(t)\\}(s) = \\int_0^{+\\infty} f(t) e^{-st}\\,dt, \\qquad \\mathcal{L}\\{f\'(t)\\} = s\\mathcal{L}\\{f(t)\\} - f(0)',
      exampleCalculation:
        'Biến đổi Laplace của tín hiệu bậc thang đơn vị f(t) = 1 (với s > 0) là ∫_0^∞ e^{-st}dt = lim_{T→∞} [-e^{-st}/s]_0^T = 1/s.',
    },
    quiz: [
      {
        id: 'q7-1',
        question: 'Nguyên hàm I = \\int \\arctan x\\,dx bằng:',
        options: [
          { label: 'A', text: 'x arctan(x) - (1/2) ln(1 + x^2) + C', math: 'x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C' },
          { label: 'B', text: 'x arctan(x) + (1/2) ln(1 + x^2) + C', math: 'x\\arctan x + \\frac{1}{2}\\ln(1+x^2) + C' },
          { label: 'C', text: '1 / (1 + x^2) + C', math: '\\frac{1}{1+x^2} + C' },
          { label: 'D', text: 'x / (1 + x^2) - arctan(x) + C', math: '\\frac{x}{1+x^2} - \\arctan x + C' },
        ],
        correctAnswer: 'A',
        explanation:
          'Đặt u = arctan x ⇒ du = dx/(1 + x^2) và dv = dx ⇒ v = x. Khi đó I = x arctan x - ∫ [x / (1 + x^2)]dx = x arctan x - (1/2)ln(1 + x^2) + C.',
        explanationMath: 'I = x\\arctan x - \\int \\frac{x}{1+x^2}\\,dx = x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C',
      },
      {
        id: 'q7-2',
        question: 'Trong các tích phân suy rộng sau đây, tích phân nào HỘI TỤ?',
        options: [
          { label: 'A', text: '∫_1^{+∞} dx / x^{3/2}', math: '\\int_1^{+\\infty} \\frac{dx}{x^{3/2}}' },
          { label: 'B', text: '∫_1^{+∞} dx / √x', math: '\\int_1^{+\\infty} \\frac{dx}{\\sqrt{x}}' },
          { label: 'C', text: '∫_0^1 dx / x^2', math: '\\int_0^1 \\frac{dx}{x^2}' },
          { label: 'D', text: '∫_0^{+∞} cos(x) dx', math: '\\int_0^{+\\infty} \\cos x\\,dx' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tích phân loại 1 dạng ∫_1^∞ dx/x^p hội tụ khi và chỉ khi p > 1. Ở đáp án A, p = 3/2 = 1.5 > 1 nên tích phân hội tụ (và bằng 2). Đáp án B có p = 1/2 < 1 nên phân kỳ; đáp án C là loại 2 tại x = 0 với q = 2 ≥ 1 nên phân kỳ.',
        explanationMath: 'p = \\frac{3}{2} > 1 \\implies \\int_1^{+\\infty} x^{-3/2}\\,dx = \\Big[-2x^{-1/2}\\Big]_1^{+\\infty} = 2',
      },
      {
        id: 'q7-3',
        question: 'Để tính tích phân I = \\int \\sqrt{4 - x^2}\\,dx, phép đổi biến lượng giác chuẩn là:',
        options: [
          { label: 'A', text: 'Đặt x = 2 sin θ với θ ∈ [-π/2, π/2]', math: 'x = 2\\sin\\theta' },
          { label: 'B', text: 'Đặt x = 2 tan θ với θ ∈ (-π/2, π/2)', math: 'x = 2\\tan\\theta' },
          { label: 'C', text: 'Đặt x = 4 sin θ', math: 'x = 4\\sin\\theta' },
          { label: 'D', text: 'Đặt x = 2 / cos θ', math: 'x = 2\\sec\\theta' },
        ],
        correctAnswer: 'A',
        explanation:
          'Với căn thức √(a^2 - x^2) trong đó a^2 = 4 ⇒ a = 2, ta đặt x = 2 sin θ để √(4 - 4sin^2 θ) = 2 cos θ.',
        explanationMath: '\\sqrt{4 - x^2} = \\sqrt{2^2 - x^2} \\implies x = 2\\sin\\theta',
      },
    ],
  },
  {
    id: 8,
    sessionRange: 'Buổi 8 - 9',
    title: 'Chương 8: Các ứng dụng khác của Tích phân',
    englishTitle: 'Further Applications of Integration',
    isFocusChapter: true,
    overview:
      'Mở rộng ứng dụng của tích phân sang hình học vi phân (độ dài đường cong, diện tích mặt tròn xoay) và các bài toán liên ngành: Vật lý & Kỹ thuật (áp lực thủy tĩnh lên đập nước, mô-men và trọng tâm bản phẳng), Kinh tế (thặng dư tiêu dùng), Sinh học (lưu lượng máu Poiseuille & cung lượng tim) và Lý thuyết Xác suất (hàm mật độ xác suất, kỳ vọng và phân phối chuẩn Gauss).',
    learningOutcomes: [
      'LLO8.2: Áp dụng tích phân tính độ dài cung và diện tích bề mặt khối tròn xoay.',
      'LLO9.1: Hiểu và ứng dụng tích phân giải các bài toán thực tế trong vật lý (áp suất thủy tĩnh, trọng tâm), kinh tế (thặng dư tiêu dùng), sinh học và xác suất (giá trị trung bình, phân phối chuẩn).',
    ],
    tableOfContents: [
      { code: '8.1 - 8.2', title: 'Độ dài cung đường cong & Diện tích mặt tròn xoay' },
      { code: '8.3', title: 'Ứng dụng trong Vật lý & Kỹ thuật: Áp lực thủy tĩnh & Trọng tâm (Centroid)' },
      { code: '8.4 - 8.5', title: 'Ứng dụng trong Kinh tế, Sinh học & Xác suất (Phân phối chuẩn)' },
    ],
    subSections: [
      {
        code: '8.1 - 8.2',
        title: 'Độ dài cung đường cong & Diện tích mặt tròn xoay',
        summary:
          'Vi phân độ dài cung ds được xấp xỉ bởi cạnh huyền của tam giác vuông vi phân có hai cạnh góc vuông dx và dy: ds = √(dx^2 + dy^2). Khi quay cung ds quanh trục tọa độ, nó quét nên một dải hình nón cụt có diện tích vi phân dS = 2π r ds.',
        keyFormulas: [
          {
            label: 'Vi phân cung ds và Độ dài cung đường cong y = f(x) trên [a, b]',
            latex: 'ds = \\sqrt{1 + [f\'(x)]^2}\\,dx \\implies L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx',
            note: 'Nếu đường cong cho dưới dạng x = g(y) với c ≤ y ≤ d thì ds = √(1 + [g\'(y)]^2) dy.',
          },
          {
            label: 'Diện tích mặt tròn xoay (Surface Area of Revolution)',
            latex: 'S_{Ox} = 2\\pi \\int_a^b y\\,ds = 2\\pi \\int_a^b f(x)\\sqrt{1 + [f\'(x)]^2}\\,dx, \\qquad S_{Oy} = 2\\pi \\int_a^b x\\,ds',
            note: 'Luôn ghi nhớ công thức tổng quát S = ∫ 2πR ds, trong đó R là khoảng cách từ điểm trên cung tới trục quay.',
          },
        ],
        detailedNotes: [
          'Trong các bài toán tính độ dài cung có kết quả giải tích đẹp, biểu thức 1 + [f\'(x)]^2 thường có dạng bình phương hoàn hảo (như (a + bx)^2 hoặc cosh^2 x).',
        ],
        example: {
          title: 'Tính độ dài cung của đường cong bán lập phương',
          problem: 'Tính độ dài cung của đường cong y = \\frac{2}{3}(x - 1)^{3/2} từ điểm có hoành độ x = 1 đến x = 4.',
          problemMath: 'y = \\frac{2}{3}(x - 1)^{3/2}, \\quad 1 \\le x \\le 4',
          solutionSteps: [
            'Bước 1: Tính đạo hàm y\' = (x - 1)^{1/2} = √(x - 1), suy ra 1 + (y\')^2 = 1 + (x - 1) = x.',
            'Bước 2: Thay vào công thức độ dài cung L = ∫_1^4 √x dx.',
          ],
          solutionMath: [
            'L = \\int_1^4 \\sqrt{1 + (x - 1)}\\,dx = \\int_1^4 x^{1/2}\\,dx = \\left[\\frac{2}{3}x^{3/2}\\right]_1^4 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}',
          ],
          conclusion: 'Độ dài cung của đường cong trên đoạn [1, 4] bằng 14/3.',
        },
      },
      {
        code: '8.3',
        title: 'Ứng dụng trong Vật lý & Kỹ thuật: Áp lực thủy tĩnh & Trọng tâm (Centroid)',
        summary:
          'Áp suất thủy tĩnh tại độ sâu d dưới mặt chất lỏng là P = ρgd. Vì áp suất thay đổi theo độ sâu, tổng lực thủy tĩnh tác dụng lên thành đập thẳng đứng phải được tính bằng tích phân các dải nằm ngang. Trọng tâm (x̄, ȳ) của bản phẳng đồng chất là điểm cân bằng mô-men tĩnh đối với hai trục tọa độ.',
        keyFormulas: [
          {
            label: 'Tổng lực áp suất thủy tĩnh lên bản phẳng thẳng đứng',
            latex: 'F = \\int_a^b \\rho g \\cdot h(y) \\cdot w(y)\\,dy \\quad (\\rho g \\text{ của nước } \\approx 9800 \\text{ N/m}^3)',
            note: 'Trong đó h(y) là độ sâu của dải ngang tính từ mặt thoáng và w(y) là chiều rộng của bản tại vị trí y.',
          },
          {
            label: 'Tọa độ Trọng tâm (Centroid) của miền phẳng D có diện tích A',
            latex: '\\bar{x} = \\frac{1}{A} \\int_a^b x[f(x) - g(x)]\\,dx, \\qquad \\bar{y} = \\frac{1}{A} \\int_a^b \\frac{1}{2}\\left([f(x)]^2 - [g(x)]^2\\right) dx',
            note: 'Định lý Pappus: Thể tích khối tròn xoay bằng diện tích miền phẳng nhân với chu vi đường tròn mà trọng tâm vẽ nên (V = A · 2πd).',
          },
        ],
        detailedNotes: [
          'Nếu miền phẳng D có trục đối xứng thì trọng tâm (x̄, ȳ) bắt buộc phải nằm trên trục đối xứng đó.',
        ],
        example: {
          title: 'Tìm tọa độ trọng tâm của nửa hình tròn',
          problem: 'Tìm tọa độ trọng tâm (\\bar{x}, \\bar{y}) của miền phẳng nửa hình tròn trên: y = \\sqrt{R^2 - x^2}, y \\ge 0.',
          problemMath: 'D: \\; y = \\sqrt{R^2 - x^2} \\quad (-R \\le x \\le R), \\quad A = \\frac{1}{2}\\pi R^2',
          solutionSteps: [
            'Bước 1: Do miền D đối xứng qua trục Oy nên hoành độ trọng tâm x̄ = 0.',
            'Bước 2: Áp dụng công thức tung độ trọng tâm ȳ = (1/A) ∫_{-R}^R (1/2)[f(x)]^2 dx.',
          ],
          solutionMath: [
            '\\bar{y} = \\frac{1}{\\frac{1}{2}\\pi R^2} \\int_{-R}^R \\frac{1}{2}(R^2 - x^2)\\,dx = \\frac{2}{\\pi R^2} \\int_0^R (R^2 - x^2)\\,dx = \\frac{2}{\\pi R^2}\\left(\\frac{2R^3}{3}\\right) = \\frac{4R}{3\\pi}',
          ],
          conclusion: 'Trọng tâm của nửa hình tròn nằm tại điểm (0, 4R / (3π)) ≈ (0, 0.4244 R).',
        },
      },
      {
        code: '8.4 - 8.5',
        title: 'Ứng dụng trong Kinh tế, Sinh học & Xác suất (Phân phối chuẩn)',
        summary:
          'Trong kinh tế học, Thặng dư tiêu dùng (Consumer Surplus) đo tổng lợi ích tiết kiệm được của người mua khi giá thị trường P thấp hơn giá họ sẵn sàng trả p(x). Trong lý thuyết xác suất, biến ngẫu nhiên liên tục X được đặc trưng bởi hàm mật độ xác suất f(x) ≥ 0 thỏa mãn tích phân trên toàn trục số bằng 1.',
        keyFormulas: [
          {
            label: 'Thặng dư Tiêu dùng (Kinh tế) & Lưu lượng máu (Sinh học)',
            latex: '\\text{CS} = \\int_0^X [p(x) - P]\\,dx, \\qquad F_{\\text{flux}} = \\int_0^R 2\\pi r \\cdot v(r)\\,dr = \\frac{\\pi P R^4}{8\\eta l} \\;(\\text{Định luật Poiseuille})',
            note: 'Lưu lượng máu qua động mạch tỉ lệ thuận với lũy thừa bậc 4 của bán kính mạch máu R^4.',
          },
          {
            label: 'Hàm mật độ xác suất (PDF), Giá trị trung bình (Kỳ vọng μ) & Phân phối chuẩn',
            latex: '\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1, \\quad P(a \\le X \\le b) = \\int_a^b f(x)\\,dx, \\quad \\mu = \\int_{-\\infty}^{+\\infty} x f(x)\\,dx, \\quad f_{\\mathcal{N}}(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}',
            note: 'Hàm mật độ mũ (Exponential distribution) mô hình hóa thời gian chờ: f(t) = λ e^{-λt} (với t ≥ 0) có kỳ vọng μ = 1/λ.',
          },
        ],
        detailedNotes: [
          'Với phân phối chuẩn N(μ, σ^2), quy tắc thực nghiệm 68–95–99.7 cho biết khoảng 68.27% dữ liệu nằm trong [μ - σ, μ + σ] và 95.45% nằm trong [μ - 2σ, μ + 2σ].',
        ],
        example: {
          title: 'Kiểm tra hàm mật độ xác suất và tính kỳ vọng tuổi thọ linh kiện',
          problem: 'Tuổi thọ X (tính bằng nghìn giờ) của một vi mạch điện tử có hàm mật độ xác suất f(x) = k e^{-x/5} khi x \\ge 0 (và f(x) = 0 khi x < 0). Tìm hằng số k, xác suất mạch hoạt động trên 5 nghìn giờ và tuổi thọ trung bình \\mu.',
          problemMath: 'f(x) = \\begin{cases} k e^{-x/5} & \\text{khi } x \\ge 0 \\\\ 0 & \\text{khi } x < 0 \\end{cases}',
          solutionSteps: [
            'Bước 1: Giải điều kiện chuẩn hóa ∫_0^{+∞} k e^{-x/5} dx = 1 ⇒ 5k = 1 ⇒ k = 1/5 = 0.2.',
            'Bước 2: Tính xác suất P(X ≥ 5) = ∫_5^{+∞} (1/5)e^{-x/5} dx.',
            'Bước 3: Tính kỳ vọng μ = ∫_0^{+∞} x · (1/5)e^{-x/5} dx bằng tích phân từng phần.',
          ],
          solutionMath: [
            '\\int_0^{+\\infty} k e^{-x/5}\\,dx = 5k = 1 \\implies k = \\frac{1}{5}, \\qquad P(X \\ge 5) = \\int_5^{+\\infty} \\frac{1}{5}e^{-x/5}\\,dx = e^{-1} \\approx 36.79\\%',
            '\\mu = \\int_0^{+\\infty} \\frac{x}{5}e^{-x/5}\\,dx = 5 \\text{ (nghìn giờ)}',
          ],
          conclusion: 'Hằng số k = 1/5, xác suất hoạt động trên 5000 giờ là 1/e ≈ 36.79% và tuổi thọ trung bình là 5000 giờ.',
        },
      },
    ],
    tikzDiagram: {
      id: 'tikz-ch8-arclength',
      caption: 'Hình 8.1: Vi phân độ dài cung ds = √(dx^2 + dy^2) và đường cong phân phối chuẩn Gauss.',
      svgType: 'arc-length',
      tikzCode: `\\begin{tikzpicture}[scale=1.15, >=stealth]
  % Trục tọa độ
  \\draw[->, thick] (-0.3,0) -- (4.8,0) node[right] {$x$};
  \\draw[->, thick] (0,-0.3) -- (0,3.5) node[above] {$y$};
  
  % Đường cong y = f(x)
  \\draw[domain=0.5:4.2, smooth, variable=\\x, blue!80!black, very thick] 
    plot ({\\x}, {0.22*(\\x)^2 + 0.4}) node[above left] {$y = f(x)$};
    
  % Tam giác vi phân ds, dx, dy
  \\draw[dashed, thick, teal!80!black] (1.8, 1.11) -- (3.3, 1.11) node[midway, below] {$dx$};
  \\draw[dashed, thick, teal!80!black] (3.3, 1.11) -- (3.3, 2.80) node[midway, right] {$dy = f'(x)dx$};
  \\draw[red!80!black, very thick] (1.8, 1.11) -- (3.3, 2.80) node[midway, above left] {$ds = \\sqrt{dx^2+dy^2}$};
  
  \\filldraw[black] (1.8, 1.11) circle (2pt) node[left] {$P_i$};
  \\filldraw[black] (3.3, 2.80) circle (2pt) node[above] {$P_{i+1}$};
\\end{tikzpicture}`,
    },
    realWorldApp: {
      field: 'Kỹ thuật Xây dựng Thủy lợi & Khoa học Dữ liệu',
      title: 'Thiết kế Đập Thủy điện và Độ tin cậy Hệ thống Server theo Phân phối Xác suất',
      description:
        'Khi thiết kế đập thủy điện, kỹ sư kết cấu phải tính tích phân áp lực thủy tĩnh để xác định bề dày chân đập và vị trí điểm đặt hợp lực (tâm áp lực) nhằm chống lật đập. Trong Khoa học Dữ liệu và AI, tích phân hàm mật độ chuẩn Gauss (Error Function - erf) là nền tảng của kiểm định giả thuyết thống kê và hàm kích hoạt GELU trong mô hình ngôn ngữ lớn.',
      formulaMath: '\\text{GELU}(x) = x \\cdot \\Phi(x) = x \\int_{-\\infty}^x \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2}\\,dt',
      exampleCalculation:
        'Một cửa van đập nước hình chữ nhật rộng w = 4 m, cao 3 m đặt ngập sát mặt nước chịu tổng lực đẩy thủy tĩnh F = ∫_0^3 9800 · y · 4 dy = 19600 × [y^2]_0^3 = 176,400 N = 176.4 kN.',
    },
    quiz: [
      {
        id: 'q8-1',
        question: 'Công thức tính diện tích mặt tròn xoay tạo thành khi quay đường cong y = e^x (0 ≤ x ≤ 1) quanh trục hoành Ox là:',
        options: [
          { label: 'A', text: 'S = 2π ∫_0^1 e^x √(1 + e^{2x}) dx', math: 'S = 2\\pi \\int_0^1 e^x \\sqrt{1 + e^{2x}}\\,dx' },
          { label: 'B', text: 'S = π ∫_0^1 e^{2x} dx', math: 'S = \\pi \\int_0^1 e^{2x}\\,dx' },
          { label: 'C', text: 'S = 2π ∫_0^1 x √(1 + e^{2x}) dx', math: 'S = 2\\pi \\int_0^1 x \\sqrt{1 + e^{2x}}\\,dx' },
          { label: 'D', text: 'S = ∫_0^1 √(1 + e^{2x}) dx', math: 'S = \\int_0^1 \\sqrt{1 + e^{2x}}\\,dx' },
        ],
        correctAnswer: 'A',
        explanation:
          'Với y = f(x) = e^x ⇒ f\'(x) = e^x. Diện tích mặt tròn xoay quanh Ox là S = 2π ∫_0^1 f(x)√(1 + [f\'(x)]^2)dx = 2π ∫_0^1 e^x √(1 + e^{2x})dx.',
        explanationMath: 'S_{Ox} = 2\\pi \\int_a^b y\\sqrt{1+(y\')^2}\\,dx = 2\\pi \\int_0^1 e^x\\sqrt{1+e^{2x}}\\,dx',
      },
      {
        id: 'q8-2',
        question: 'Hàm số f(x) = c x(2 - x) trên đoạn [0, 2] (và bằng 0 ngoài đoạn đó) là một hàm mật độ xác suất khi hằng số c bằng:',
        options: [
          { label: 'A', text: 'c = 3/4', math: 'c = \\frac{3}{4}' },
          { label: 'B', text: 'c = 4/3', math: 'c = \\frac{4}{3}' },
          { label: 'C', text: 'c = 1/2', math: 'c = \\frac{1}{2}' },
          { label: 'D', text: 'c = 3/2', math: 'c = \\frac{3}{2}' },
        ],
        correctAnswer: 'A',
        explanation:
          'Điều kiện chuẩn hóa của hàm mật độ xác suất: ∫_0^2 c(2x - x^2)dx = 1 ⇔ c [x^2 - x^3/3]_0^2 = 1 ⇔ c(4 - 8/3) = 1 ⇔ (4/3)c = 1 ⇔ c = 3/4.',
        explanationMath: 'c \\int_0^2 (2x - x^2)\\,dx = c\\left(4 - \\frac{8}{3}\\right) = \\frac{4}{3}c = 1 \\implies c = \\frac{3}{4}',
      },
      {
        id: 'q8-3',
        question: 'Độ dài cung của đường dây xích (Catenary) y = \\cosh x từ x = 0 đến x = \\ln 2 bằng:',
        options: [
          { label: 'A', text: '3/4', math: '\\frac{3}{4}' },
          { label: 'B', text: '5/4', math: '\\frac{5}{4}' },
          { label: 'C', text: 'ln 2', math: '\\ln 2' },
          { label: 'D', text: '1/2', math: '\\frac{1}{2}' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có y\' = sinh x, suy ra 1 + (y\')^2 = 1 + sinh^2 x = cosh^2 x. Do đó L = ∫_0^{ln 2} cosh x dx = [sinh x]_0^{ln 2} = (e^{ln 2} - e^{-ln 2})/2 = (2 - 1/2)/2 = 3/4.',
        explanationMath: 'L = \\int_0^{\\ln 2} \\sqrt{1 + \\sinh^2 x}\\,dx = \\Big[\\sinh x\\Big]_0^{\\ln 2} = \\frac{2 - 1/2}{2} = \\frac{3}{4}',
      },
    ],
  },
];
