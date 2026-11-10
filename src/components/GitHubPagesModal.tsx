import React, { useState } from 'react';
import { Globe, Copy, Check, X, Terminal, CheckCircle2, FileCode } from 'lucide-react';

export const GITHUB_ACTIONS_WORKFLOW_YAML = `name: Deploy Static Site to GitHub Pages

on:
  push:
    branches: ["main", "master"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js 22
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: "npm"

      - name: Install dependencies
        run: npm install

      - name: Build static production bundle (dist/)
        run: npm run build

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload static artifact from dist/
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist"

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

interface GitHubPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesModal: React.FC<GitHubPagesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedYaml, setCopiedYaml] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);

  if (!isOpen) return null;

  const handleCopyYaml = () => {
    navigator.clipboard.writeText(GITHUB_ACTIONS_WORKFLOW_YAML);
    setCopiedYaml(true);
    setTimeout(() => setCopiedYaml(false), 2000);
  };

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('npm install && npm run build');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gh-pages-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto"
    >
      <div className="bg-white border border-slate-200 rounded-xl max-w-3xl w-full shadow-xl overflow-hidden my-8">
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-sky-700" />
            <h2 id="gh-pages-modal-title" className="text-base font-bold text-slate-900">
              Cấu Hình &amp; Hướng Dẫn Publish Web Tĩnh Lên GitHub Pages
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng hộp thoại GitHub Pages"
            className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto text-xs text-slate-700 leading-relaxed">
          {/* Status checklist showing what has already been configured in this project */}
          <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="font-bold text-emerald-950 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              Dự án này đã được cấu hình 100% Static Web (Zero-Backend) sẵn sàng cho GitHub Pages:
            </div>
            <ul className="space-y-1 text-emerald-900 pl-5 list-disc">
              <li>
                <strong>Đường dẫn tương đối (<code>base: './'</code> trong <code>vite.config.ts</code>):</strong>{' '}
                Tự động chạy đúng trên mọi tên miền <code>https://&lt;user&gt;.github.io/&lt;repo&gt;/</code> mà không cần sửa tên repository.
              </li>
              <li>
                <strong>File <code>public/.nojekyll</code> &amp; <code>public/Giai_Tich_1_UET_MAT1050.tex</code>:</strong>{' '}
                Tắt bộ lọc Jekyll của GitHub để phục vụ trọn vẹn font toán học KaTeX và file <code>.tex</code> tĩnh.
              </li>
              <li>
                <strong>Workflow tự động <code>.github/workflows/deploy.yml</code>:</strong>{' '}
                Tự động build ra thư mục <code>dist/</code> và publish lên GitHub Pages ngay khi bạn push code.
              </li>
            </ul>
          </div>

          {/* Step-by-step instructions */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900">
              Cách 1: Tự động Publish bằng GitHub Actions (Khuyên dùng – 2 phút)
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>
                Đẩy (Push) hoặc đồng bộ toàn bộ mã nguồn dự án này lên một Repository trên GitHub (nhánh <code>main</code> hoặc <code>master</code>).
              </li>
              <li>
                Trên trang GitHub Repository của bạn, vào mục <strong>Settings</strong> &rarr; <strong>Pages</strong> (ở thanh menu bên trái).
              </li>
              <li>
                Tại mục <strong>Build and deployment &rarr; Source</strong>, chọn <strong>GitHub Actions</strong> (thay vì <em>Deploy from a branch</em>).
              </li>
              <li>
                File <code>.github/workflows/deploy.yml</code> có sẵn trong project sẽ tự động chạy lệnh <code>npm run build</code> và xuất bản web tĩnh tại địa chỉ <code>https://&lt;username&gt;.github.io/&lt;ten-repo&gt;/</code>.
              </li>
            </ol>
          </div>

          {/* Workflow file preview & copy */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-sky-700" />
                Nội dung file <code>.github/workflows/deploy.yml</code> (đã tạo sẵn):
              </span>
              <button
                type="button"
                onClick={handleCopyYaml}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded hover:bg-sky-100 transition-colors cursor-pointer"
              >
                {copiedYaml ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedYaml ? 'Đã chép deploy.yml!' : 'Copy deploy.yml'}
              </button>
            </div>
            <pre className="p-3.5 rounded-lg bg-slate-950 text-slate-200 font-mono text-[11px] overflow-x-auto max-h-48">
              {GITHUB_ACTIONS_WORKFLOW_YAML}
            </pre>
          </div>

          {/* Manual static build option */}
          <div className="pt-2 border-t border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-slate-700" />
                Cách 2: Build thư mục tĩnh <code>dist/</code> trên máy (Thủ công / Netlify / Vercel / Surge)
              </h3>
              <button
                type="button"
                onClick={handleCopyCmd}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-300 rounded hover:bg-slate-200 cursor-pointer"
              >
                {copiedCmd ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copiedCmd ? 'Đã chép lệnh' : 'Copy lệnh build'}
              </button>
            </div>
            <p className="text-slate-600">
              Chạy lệnh <code>npm install &amp;&amp; npm run build</code>. Toàn bộ trang web tĩnh hoàn chỉnh (HTML, CSS, JS, KaTeX, TikZ &amp; file <code>.tex</code>) sẽ nằm gọn trong thư mục <code>dist/</code> — bạn có thể kéo thả trực tiếp thư mục <code>dist/</code> lên nhánh <code>gh-pages</code> hoặc bất kỳ static host nào.
            </p>
          </div>
        </div>

        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Đã hiểu &amp; Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
