import TipButton from "./TipButton";

export default function StreamControls() {
  return (
    <div className="flex gap-2 mt-2">
      <TipButton />
      <button className="bg-panel px-3 py-1 rounded text-sm">
        Subscribe
      </button>
    </div>
  );
}