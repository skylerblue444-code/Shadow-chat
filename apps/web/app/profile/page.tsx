import { VoiceButton } from "@/components/VoiceButton";
import { WalletConnectButton } from "@/components/WalletConnectButton";

export default function ProfilePage() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-lg">Profile</h1>
      <WalletConnectButton />
      <VoiceButton />
    </main>
  );
}