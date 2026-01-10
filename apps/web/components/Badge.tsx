export default function Badge({ text }: { text: string }) {
  return (
    <span className="bg-accent/20 text-accent px-2 py-0.5 rounded text-xs">
      {text}
    </span>
  );
}