import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-panel">
      <Link href="/">Home</Link>
      <Link href="/feed">Feed</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/wallet">Wallet</Link>
    </nav>
  );
}