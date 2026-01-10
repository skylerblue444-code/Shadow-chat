import AnimatedPage from "@/components/AnimatedPage";

export default function HomePage() {
  return (
    <AnimatedPage>
      <section className="py-20 text-center space-y-6 fade-up">
        <h1 className="text-4xl font-bold tracking-tight">
          Private. Powerful. ShadowChat.
        </h1>
        <p className="text-neutral-400 max-w-xl mx-auto">
          A next-generation social platform built for privacy, creators,
          and communities.
        </p>
      </section>
    </AnimatedPage>
  );
}