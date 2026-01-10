import Link from "next/link";
import Icon from "./Icon";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-panel glass elevated">
      <div className="flex gap-4 items-center">
        <span className="font-semibold">ShadowChat</span>
        <Link href="/feed"><Icon name="Home" /></Link>
        <Link href="/messages"><Icon name="MessageCircle" /></Link>
        <Link href="/streams"><Icon name="Video" /></Link>
        <Link href="/wallet"><Icon name="Wallet" /></Link>
        <Link href="/vr"><Icon name="Box" /></Link>
        <Link href="/admin"><Icon name="Shield" /></Link>
      </div>
    </nav>
  );
}