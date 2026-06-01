#!/usr/bin/env node
/**
 * WCAG contrast checker for design tokens in src/styles/tokens.css
 * Run: npm run check-contrast
 */

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function relativeLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(fg, bg) {
  const l1 = relativeLuminance(hexToRgb(fg));
  const l2 = relativeLuminance(hexToRgb(bg));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const pairs = [
  ["tx1 on bg1", "#1a1a18", "#fefefb", 4.5],
  ["tx2 on bg1", "#5a5a55", "#fefefb", 4.5],
  ["tx3 on bg1", "#6b6b64", "#fefefb", 4.5],
  ["red on bg1", "#c42e24", "#fefefb", 4.5],
  ["blue on bg1", "#2d6bc4", "#fefefb", 4.5],
  ["amber on amber-bg", "#8a6a0f", "#fdf6e7", 4.5],
  ["tx2 on card", "#5a5a55", "#ffffff", 4.5],
];

let failed = 0;

for (const [name, fg, bg, min] of pairs) {
  const ratio = contrastRatio(fg, bg);
  const pass = ratio >= min;
  const status = pass ? "PASS" : "FAIL";
  console.log(`${status} ${name}: ${ratio.toFixed(2)}:1 (min ${min}:1)`);
  if (!pass) failed++;
}

if (failed > 0) {
  console.error(`\n${failed} contrast pair(s) failed.`);
  process.exit(1);
}

console.log("\nAll contrast pairs passed WCAG AA for normal text.");
