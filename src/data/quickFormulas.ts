import { QuickFormulaCategory } from '../types/calculus';

export const QUICK_FORMULA_CATEGORIES: QuickFormulaCategory[] = [
  {
    id: 'limits',
    category: '1. Giới hạn cơ bản & Vô cùng bé tương đương (khi x → 0)',
    items: [
      {
        name: 'Giới hạn lượng giác cơ bản',
        formula: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}',
        condition: 'x tính bằng radian, x \\to 0',
      },
      {
        name: 'Giới hạn số e (Chuẩn Euler)',
        formula: '\\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e, \\quad \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e',
        condition: 'Dạng vô định 1^\\infty',
      },
      {
        name: 'Giới hạn mũ và Logarithm',
        formula: '\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1',
        condition: 'Áp dụng quy tắc vô cùng bé tương đương',
      },
      {
        name: 'Vô cùng bé tương đương cấp cao',
        formula: '\\tan x \\sim x, \\quad \\arcsin x \\sim x, \\quad (1+x)^\\alpha - 1 \\sim \\alpha x',
        condition: 'Chỉ thay thế trong tích/thương khi x \\to 0',
      },
    ],
  },
  {
    id: 'derivatives',
    category: '2. Bảng Đạo hàm cơ bản & Quy tắc đạo hàm (Trọng tâm)',
    items: [
      {
        name: 'Quy tắc đạo hàm tích, thương, hàm hợp',
        formula: '(uv)\' = u\'v + uv\', \\quad \\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}, \\quad [f(g(x))]\' = f\'(g(x))\\cdot g\'(x)',
        condition: 'u, v khả vi; v(x) \\neq 0',
      },
      {
        name: 'Đạo hàm lũy thừa, mũ, logarithm',
        formula: '(x^\\alpha)\' = \\alpha x^{\\alpha-1}, \\quad (a^x)\' = a^x \\ln a, \\quad (\\ln |x|)\' = \\frac{1}{x}',
        condition: 'a > 0, a \\neq 1, x \\neq 0',
      },
      {
        name: 'Đạo hàm hàm lượng giác',
        formula: '(\\sin x)\' = \\cos x, \\quad (\\cos x)\' = -\\sin x, \\quad (\\tan x)\' = \\sec^2 x = \\frac{1}{\\cos^2 x}',
        condition: '\\cos x \\neq 0 đối với \\tan x',
      },
      {
        name: 'Đạo hàm hàm lượng giác ngược',
        formula: '(\\arcsin x)\' = \\frac{1}{\\sqrt{1-x^2}}, \\quad (\\arccos x)\' = -\\frac{1}{\\sqrt{1-x^2}}, \\quad (\\arctan x)\' = \\frac{1}{1+x^2}',
        condition: '|x| < 1 với \\arcsin, \\arccos',
      },
      {
        name: 'Đạo hàm hàm Hyperbolic',
        formula: '(\\sinh x)\' = \\cosh x, \\quad (\\cosh x)\' = \\sinh x, \\quad (\\tanh x)\' = \\text{sech}^2 x = \\frac{1}{\\cosh^2 x}',
        condition: '\\sinh x = \\frac{e^x - e^{-x}}{2}, \\cosh x = \\frac{e^x + e^{-x}}{2}',
      },
      {
        name: 'Công thức Leibniz (Đạo hàm cấp n của tích)',
        formula: '(u \\cdot v)^{(n)} = \\sum_{k=0}^{n} C_n^k u^{(n-k)} v^{(k)}',
        condition: 'u, v khả vi đến cấp n',
      },
    ],
  },
  {
    id: 'integrals',
    category: '3. Bảng Nguyên hàm & Tích phân thông dụng (Trọng tâm)',
    items: [
      {
        name: 'Tích phân hàm lũy thừa và phân thức đơn giản',
        formula: '\\int x^\\alpha \\,dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C \\;(\\alpha \\neq -1), \\quad \\int \\frac{dx}{x} = \\ln|x| + C',
        condition: 'x \\neq 0',
      },
      {
        name: 'Tích phân hàm mũ và lượng giác',
        formula: '\\int e^{kx}\\,dx = \\frac{1}{k}e^{kx} + C, \\quad \\int \\sin x\\,dx = -\\cos x + C, \\quad \\int \\cos x\\,dx = \\sin x + C',
        condition: 'k \\neq 0',
      },
      {
        name: 'Tích phân đưa về arctan và ln',
        formula: '\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C, \\quad \\int \\frac{dx}{x^2 - a^2} = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + C',
        condition: 'a > 0',
      },
      {
        name: 'Tích phân chứa căn thức bậc hai',
        formula: '\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C, \\quad \\int \\frac{dx}{\\sqrt{x^2 \\pm a^2}} = \\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right| + C',
        condition: 'a > 0, |x| < a cho arcsin',
      },
      {
        name: 'Công thức Tích phân từng phần',
        formula: '\\int u\\,dv = u\\cdot v - \\int v\\,du, \\quad \\int_a^b u\\,dv = \\Big[u\\cdot v\\Big]_a^b - \\int_a^b v\\,du',
        condition: 'Thứ tự ưu tiên đặt u: Nhất Lô - Nhì Đa - Tam Lượng - Tứ Mũ',
      },
    ],
  },
  {
    id: 'applications',
    category: '4. Ứng dụng Hình học & Vật lý của Tích phân',
    items: [
      {
        name: 'Diện tích miền phẳng & Thể tích tròn xoay (Phương pháp Đĩa/Vòng đệm)',
        formula: 'S = \\int_a^b |f(x) - g(x)|\\,dx, \\quad V_{Ox} = \\pi \\int_a^b \\left|[f(x)]^2 - [g(x)]^2\\right| dx',
        condition: 'Quay quanh trục Ox trên [a, b]',
      },
      {
        name: 'Thể tích vỏ hình trụ (Cylindrical Shells)',
        formula: 'V_{Oy} = 2\\pi \\int_a^b x \\cdot |f(x)|\\,dx',
        condition: 'Miền giới hạn bởi y=f(x), y=0, x=a, x=b (0 \\le a < b) quay quanh Oy',
      },
      {
        name: 'Độ dài cung & Diện tích mặt tròn xoay',
        formula: 'L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx, \\quad S_{Ox} = 2\\pi \\int_a^b |f(x)|\\sqrt{1 + [f\'(x)]^2}\\,dx',
        condition: 'f\'(x) liên tục trên [a, b]',
      },
      {
        name: 'Độ dài cung & Diện tích trong Tọa độ cực r = r(\\theta)',
        formula: 'S = \\frac{1}{2}\\int_\\alpha^\\beta [r(\\theta)]^2\\,d\\theta, \\quad L = \\int_\\alpha^\\beta \\sqrt{[r(\\theta)]^2 + [r\'(\\theta)]^2}\\,d\\theta',
        condition: '\\alpha \\le \\theta \\le \\beta',
      },
    ],
  },
  {
    id: 'ode_series',
    category: '5. Phương trình Vi phân Cấp 1 & Chuỗi Taylor / Maclaurin',
    items: [
      {
        name: 'PTVP Tuyến tính cấp 1: y\' + P(x)y = Q(x)',
        formula: 'y(x) = e^{-\\int P(x)dx} \\left( \\int Q(x) e^{\\int P(x)dx}\\,dx + C \\right)',
        condition: 'Thừa số tích phân I(x) = e^{\\int P(x)dx}',
      },
      {
        name: 'Phương trình tăng trưởng Logistic',
        formula: '\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{M}\\right) \\implies P(t) = \\frac{M}{1 + A e^{-kt}}, \\quad A = \\frac{M - P_0}{P_0}',
        condition: 'M: sức chứa tối đa (carrying capacity)',
      },
      {
        name: 'Khai triển Maclaurin hàm mũ & lượng giác',
        formula: 'e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}, \\quad \\sin x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}, \\quad \\cos x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!}',
        condition: 'Bán kính hội tụ R = \\infty (\\forall x \\in \\mathbb{R})',
      },
      {
        name: 'Khai triển Maclaurin phân thức & Logarithm',
        formula: '\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n, \\quad \\ln(1+x) = \\sum_{n=1}^\\infty (-1)^{n-1}\\frac{x^n}{n}, \\quad (1+x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\cdots',
        condition: '|x| < 1 (riêng \\ln(1+x) hội tụ tại x = 1)',
      },
    ],
  },
];
