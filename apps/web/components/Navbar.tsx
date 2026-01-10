import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-panel">
      <div className="flex gap-4">
        <Link href="/">ShadowChat</Link>
        <Link href="/feed">Feed</Link>
        <Link href="/messages">Messages</Link>
        <Link href="/streams">Streams</Link>
        <Link href="/wallet">Wallet</Link>
        <Link href="/vr">VR</Link>
        <Link href="/admin">Admin</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}