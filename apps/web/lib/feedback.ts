export function clickFeedback() {
  if (typeof window === "undefined") return;
  const audio = new Audio("apps/web/public/click.mp3");
  audio.volume = 0.15;
  audio.play().catch(() => {});
}