import fs from "fs";
import path from "path";

function loadSvg(filename: string): string {
  try {
    let content = fs.readFileSync(
      path.join(process.cwd(), "public", "decorative", filename),
      "utf8"
    );
    content = content
      .replace(/<\?xml[^?]*\?>/gi, "")
      .replace(/<!DOCTYPE[^>]*>/gi, "")
      .trim();
    content = content.replace(/<svg(\b[^>]*)>/i, (_match, attrs: string) => {
      const cleaned = attrs
        .replace(/\s+width="[^"]*"/gi, "")
        .replace(/\s+height="[^"]*"/gi, "");
      return `<svg${cleaned} width="100%">`;
    });
    return content;
  } catch {
    return "";
  }
}

export default function SiteBackground() {
  const f1 = loadSvg("canola-flower-1.svg");
  const f2 = loadSvg("canola-flower-2.svg");
  const f3 = loadSvg("canola-flower-3.svg");
  const tn = loadSvg("tangerine.svg");
  const hb = loadSvg("dol-hareubang.svg")
    .replace(/viewBox="0 0 980 980"/i, 'viewBox="0 0 980 885"');

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {/* ── TOP-LEFT CLUSTER ──────────────────────────────── */}
      <div
        className="absolute w-[65px] md:w-[90px]"
        style={{ top: -20, left: -8, transform: "rotate(-12deg)" }}
        dangerouslySetInnerHTML={{ __html: f3 }}
      />
      {/* Secondary — desktop only */}
      <div
        className="absolute hidden md:block md:w-[78px]"
        style={{ top: 35, left: 82, transform: "rotate(-5deg)" }}
        dangerouslySetInnerHTML={{ __html: f1 }}
      />
      {/* Tangerine nestled in top-left cluster */}
      <div
        className="absolute w-[30px] md:w-[36px]"
        style={{ top: 56, left: 20 }}
        dangerouslySetInnerHTML={{ __html: tn }}
      />

      {/* ── TOP-RIGHT CLUSTER ─────────────────────────────── */}
      {/* Primary — partially cut off at corner */}
      <div
        className="absolute w-[65px] md:w-[95px]"
        style={{ top: -18, right: -8, transform: "rotate(10deg)" }}
        dangerouslySetInnerHTML={{ __html: f1 }}
      />
      {/* Secondary — desktop only */}
      <div
        className="absolute hidden md:block md:w-[75px]"
        style={{ top: 38, right: 78, transform: "rotate(4deg)" }}
        dangerouslySetInnerHTML={{ __html: f3 }}
      />

      {/* ── LEFT SIDE ─────────────────────────────────────── */}
      {/* Mid — desktop only */}
      <div
        className="absolute hidden md:block md:w-[80px]"
        style={{ top: "30%", left: -18, transform: "rotate(-8deg)" }}
        dangerouslySetInnerHTML={{ __html: f1 }}
      />
      {/* Lower canola + tangerine pair — desktop only */}
      <div
        className="absolute hidden md:block md:w-[72px]"
        style={{ top: "56%", left: -14, transform: "rotate(-6deg)" }}
        dangerouslySetInnerHTML={{ __html: f2 }}
      />
      <div
        className="absolute hidden md:block md:w-[34px]"
        style={{ top: "67%", left: 18 }}
        dangerouslySetInnerHTML={{ __html: tn }}
      />

      {/* ── RIGHT SIDE ────────────────────────────────────── */}
      {/* Upper */}
      <div
        className="absolute w-[60px] md:w-[80px]"
        style={{ top: "25%", right: -16, transform: "rotate(7deg)" }}
        dangerouslySetInnerHTML={{ __html: f2 }}
      />
      {/* Tangerine — desktop only */}
      <div
        className="absolute hidden md:block md:w-[34px]"
        style={{ top: "42%", right: 36 }}
        dangerouslySetInnerHTML={{ __html: tn }}
      />
      {/* Lower — mobile + desktop */}
      <div
        className="absolute w-[55px] md:w-[72px]"
        style={{ top: "56%", right: -14, transform: "rotate(9deg)" }}
        dangerouslySetInnerHTML={{ __html: f2 }}
      />
      {/* Lower-right cluster — desktop only */}
      <div
        className="absolute hidden md:block md:w-[70px]"
        style={{ top: "68%", right: 40, transform: "rotate(-5deg)" }}
        dangerouslySetInnerHTML={{ __html: f3 }}
      />

      {/* ── BOTTOM-LEFT ───────────────────────────────────── */}
      {/* Canola — mobile + desktop (moved from bottom-right) */}
      <div
        className="absolute w-[62px] md:w-[78px]"
        style={{ bottom: 85, left: 30, transform: "rotate(-5deg)" }}
        dangerouslySetInnerHTML={{ __html: f3 }}
      />
      {/* Tangerine — desktop only (moved from bottom-right) */}
      <div
        className="absolute hidden md:block md:w-[34px]"
        style={{ bottom: 118, left: 110 }}
        dangerouslySetInnerHTML={{ __html: tn }}
      />
      {/* Lower, partially cropped — mobile + desktop */}
      <div
        className="absolute w-[65px] md:w-[85px]"
        style={{ bottom: -30, left: 15, transform: "rotate(-8deg)" }}
        dangerouslySetInnerHTML={{ __html: f1 }}
      />

      {/* ── HAREUBANG — bottom-right, half size, slightly cropped ── */}
      <div
        className="absolute w-[90px] md:w-[140px]"
        style={{ bottom: 0, right: -10, opacity: 0.7, lineHeight: 0 }}
        dangerouslySetInnerHTML={{ __html: hb }}
      />
    </div>
  );
}
