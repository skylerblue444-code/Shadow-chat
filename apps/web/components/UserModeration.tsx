const users = ["Alice", "Bob", "Eve"];

export default function UserModeration() {
  return (
    <div className="bg-panel p-4 rounded">
      <h3 className="font-semibold mb-2">User Moderation</h3>
      {users.map(u => (
        <div key={u} className="flex justify-between py-1">
          <span>{u}</span>
          <button className="text-red-400">Ban</button>
        </div>
      ))}
    </div>
  );
}