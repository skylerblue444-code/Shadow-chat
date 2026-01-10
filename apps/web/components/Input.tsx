export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full p-2 rounded bg-black border border-gray-700"
      {...props}
    />
  );
}