export function clickFeedback() {
  if (typeof window === "undefined") return;
  const audio = new Audio("/click.mp3");
  audio.volume = 0.15;
  audio.play().catch(() => {});
}