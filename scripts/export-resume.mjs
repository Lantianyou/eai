import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';

const chromeCandidates = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
];
const chrome = chromeCandidates.find(existsSync);
if (!chrome) {
  console.error('未找到 Google Chrome，请安装 Chrome 后重试。');
  process.exit(1);
}

const output = 'docs/.vuepress/public/resume/resume.pdf';
await mkdir('docs/.vuepress/public/resume', { recursive: true });
const child = spawn(chrome, [
  '--headless',
  '--no-pdf-header-footer',
  '--disable-gpu',
  `--print-to-pdf=${output}`,
  'http://localhost:8081/resume/',
], { stdio: 'inherit' });
child.on('error', (error) => {
  console.error(`导出失败：${error.message}`);
  process.exit(1);
});
child.on('exit', (code) => process.exit(code ?? 1));
