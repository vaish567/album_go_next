import { getSession } from "@/lib/auth";
import { fetchUsers } from "@/lib/api";
import { redirect } from "next/navigation";

export default async function UsersPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const users = await fetchUsers();

  return (
    <div>
      <h2>Users (Protected)</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
