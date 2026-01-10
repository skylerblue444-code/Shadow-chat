export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Login</h2>
      <input className="w-full p-2 mb-2 bg-panel" placeholder="Email" />
      <input className="w-full p-2 mb-4 bg-panel" placeholder="Password" />
      <button className="w-full bg-accent p-2">Sign In</button>
    </div>
  );
}