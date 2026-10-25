// drawCard paints a reading as a 1200×630 image to save or post: the job,
// how much of a full-time job Kitehand takes, and its biggest tasks.
import { tally, type Diagnosis } from "../lib/diagnosis";
import type { ReaderConfig } from "../lib/reader-config";

const W = 1200;
const H = 630;
const COLOR = { paper: "#f6f3ec", ink: "#1d2027", ink2: "#3d424c", muted: "#6e727b", line: "#e2dcd0", shu: "#c63f2a", ai: "#2c3e63", human: "#c9c3b6" };
const SHARE_COLOR: Record<string, string> = { kitehand: COLOR.ai, approve: COLOR.shu, human: COLOR.human };

function image(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// fit shortens text with an ellipsis until it fits the width.
function fit(ctx: CanvasRenderingContext2D, text: string, width: number): string {
  if (ctx.measureText(text).width <= width) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(`${t}…`).width > width) t = t.slice(0, -1);
  return `${t}…`;
}

// lines breaks text into lines no wider than width: Japanese after its
// commas and periods, so a number keeps its unit, and English between words.
function lines(ctx: CanvasRenderingContext2D, text: string, width: number): string[] {
  const pieces = text.split(/[、。]/.test(text) ? /(?<=[、。])/ : /(?<=\s)/);
  const out: string[] = [];
  let line = "";
  for (const piece of pieces) {
    if (line && ctx.measureText(line + piece).width > width) {
      out.push(line.trimEnd());
      line = piece.trimStart();
    } else {
      line += piece;
    }
  }
  if (line) out.push(line);
  return out;
}

export async function drawCard(d: Diagnosis, config: ReaderConfig): Promise<Blob> {
  await document.fonts.ready;
  const ja = config.lang === "ja";
  const display = ja ? '"Shippori Mincho B1", serif' : '"Gloock", serif';
  const sans = ja ? '"Zen Kaku Gothic New", sans-serif' : '"Hanken Grotesk", sans-serif';
  const canvas = document.createElement("canvas");
  canvas.width = W * 2;
  canvas.height = H * 2;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(2, 2);
  ctx.fillStyle = COLOR.paper;
  ctx.fillRect(0, 0, W, H);

  const logo = await image("/lockup.svg");
  ctx.drawImage(logo, 64, 52, (logo.width / logo.height) * 40, 40);

  const t = tally(d);
  ctx.fillStyle = COLOR.ink;
  ctx.font = `${ja ? 800 : 400} 50px ${display}`;
  ctx.fillText(fit(ctx, d.title, 520), 64, 186);

  ctx.fillStyle = COLOR.ink2;
  ctx.font = `500 24px ${sans}`;
  ctx.fillText(config.words.takes, 64, 250);

  ctx.fillStyle = COLOR.shu;
  ctx.font = `${ja ? 800 : 400} 196px ${display}`;
  const n = String(t.people);
  ctx.fillText(n, 56, 430);
  const nw = ctx.measureText(n).width;
  ctx.font = `700 34px ${sans}`;
  ctx.fillText(fit(ctx, config.words.units[t.people > 1 ? 1 : 0], 600 - nw - 70), 56 + nw + 14, 430);

  ctx.fillStyle = COLOR.muted;
  ctx.font = `500 22px ${sans}`;
  const taken = config.words.taken.replace("{taken}", String(t.taken)).replace("{total}", String(t.total));
  lines(ctx, taken, 540)
    .slice(0, 2)
    .forEach((line, i) => ctx.fillText(line, 64, 486 + i * 32));

  // The biggest tasks, each with who does it.
  const duties = [...d.duties].sort((a, b) => b.hours - a.hours).slice(0, 6);
  const x = 680;
  let y = 150;
  ctx.strokeStyle = COLOR.line;
  ctx.lineWidth = 1;
  for (const duty of duties) {
    ctx.fillStyle = SHARE_COLOR[duty.share];
    ctx.beginPath();
    ctx.arc(x + 6, y - 7, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = COLOR.ink;
    ctx.font = `600 22px ${sans}`;
    ctx.fillText(fit(ctx, duty.name, 330), x + 24, y);
    ctx.fillStyle = COLOR.muted;
    ctx.font = `500 18px ${sans}`;
    ctx.fillText(config.words.shares[duty.share], x + 24, y + 26);
    ctx.font = `500 20px "IBM Plex Mono", monospace`;
    ctx.fillStyle = COLOR.ink2;
    ctx.textAlign = "right";
    ctx.fillText(`${duty.hours}${config.words.hours}`, W - 64, y);
    ctx.textAlign = "left";
    ctx.beginPath();
    ctx.moveTo(x, y + 44);
    ctx.lineTo(W - 64, y + 44);
    ctx.stroke();
    y += 66;
  }

  // The seal, as the result card wears it.
  ctx.save();
  ctx.translate(W - 190, 84);
  ctx.rotate((-8 * Math.PI) / 180);
  ctx.strokeStyle = COLOR.shu;
  ctx.fillStyle = COLOR.shu;
  ctx.lineWidth = 4;
  ctx.font = `${ja ? 800 : 400} 26px ${display}`;
  const stamp = ja ? config.words.stamp : config.words.stamp.toUpperCase();
  const sw = ctx.measureText(stamp).width;
  ctx.strokeRect(-sw / 2 - 16, -26, sw + 32, 44);
  ctx.textAlign = "center";
  ctx.fillText(stamp, 0, 6);
  ctx.restore();

  ctx.fillStyle = COLOR.ink2;
  ctx.font = `500 22px "IBM Plex Mono", monospace`;
  ctx.fillText("kitehand.ai", 64, H - 56);

  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("canvas"))), "image/png"));
}
