import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          ShadowChat
        </Link>

        <div className="flex gap-4 text-sm text-neutral-300">
          <Link href="/feed">Feed</Link>
          <Link href="/messages">Messages</Link>
          <Link href="/profile/me">Profile</Link>
        </div>
      </div>
    </nav>
  );
}