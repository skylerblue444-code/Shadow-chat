import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-56 bg-panel p-4 hidden md:block">
      <ul className="space-y-2">
        <li><Link href="/feed">Feed</Link></li>
        <li><Link href="/messages">Messages</Link></li>
        <li><Link href="/profile/1">Profile</Link></li>
        <li><Link href="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
}