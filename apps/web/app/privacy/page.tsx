import AnimatedPage from "@/components/AnimatedPage";

export default function PrivacyPage() {
  return (
    <AnimatedPage>
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>

        <p className="text-neutral-400 text-sm">
          We collect minimal data required to operate the platform, including
          account credentials and usage metadata.
        </p>

        <p className="text-neutral-400 text-sm">
          ShadowChat does not sell personal data. Data may be processed for
          security, moderation, and service reliability.
        </p>

        <p className="text-neutral-400 text-sm">
          Wallet and AI features do not access private keys or financial
          credentials.
        </p>
      </div>
    </AnimatedPage>
  );
}