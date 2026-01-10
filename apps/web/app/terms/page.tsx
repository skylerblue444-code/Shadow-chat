import AnimatedPage from "@/components/AnimatedPage";

export default function TermsPage() {
  return (
    <AnimatedPage>
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-2xl font-semibold">Terms of Service</h1>

        <p className="text-neutral-400 text-sm">
          ShadowChat is provided “as-is” without warranties of any kind.
          By using the platform, you agree not to misuse, abuse, or attempt
          to exploit the system.
        </p>

        <p className="text-neutral-400 text-sm">
          ShadowChat may modify, suspend, or discontinue features at any time
          without notice.
        </p>

        <p className="text-neutral-400 text-sm">
          Wallet, AI, and other advanced features are experimental and provided
          for informational purposes only.
        </p>
      </div>
    </AnimatedPage>
  );
}