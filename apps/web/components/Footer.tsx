import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 py-6 text-sm text-neutral-500">
      <div className="max-w-6xl mx-auto px-4 flex gap-4 flex-wrap">
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/status">Status</Link>
        <Link href="/roadmap">Roadmap</Link>
      </div>
    </footer>
  );
}