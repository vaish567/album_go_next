import { getSession } from "@/lib/auth";
import { fetchAlbums } from "@/lib/api";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const albums = await fetchAlbums();

  return (
    <div>
      <h2>Albums (Protected)</h2>
      <ul>
        {albums.map((a) => (
          <li key={a.id}>
            <Link href={`/dashboard/${a.id}`}>
              <strong>{a.title}</strong> — {a.artist} (${a.price})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
