export default function Comment({ author, text }: any) {
  return (
    <div className="text-sm text-gray-300 pl-4 border-l border-gray-700">
      <span className="font-semibold">{author}</span>: {text}
    </div>
  );
}