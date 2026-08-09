import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 900 } });
await page.goto('http://localhost:4322/about', { waitUntil: 'networkidle' });

const video = page.locator('[data-video-wrap] video');
await video.waitFor({ state: 'attached' });

await page.waitForTimeout(2000);

const info = await video.evaluate((v) => ({
  readyState: v.readyState,
  videoWidth: v.videoWidth,
  videoHeight: v.videoHeight,
  currentTime: v.currentTime,
  currentSrc: v.currentSrc,
}));
console.log('video info:', JSON.stringify(info));

await page.locator('[data-video-wrap]').screenshot({ path: '_video-frame.png' });
console.log('screenshot saved');

await browser.close();
