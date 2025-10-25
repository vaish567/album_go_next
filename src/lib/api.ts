const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

export async function fetchAlbums() {
  const res = await fetch(`${API_BASE}/albums`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch albums");
  return res.json() as Promise<
    Array<{ id: string; title: string; artist: string; price: number }>
  >;
}

export async function fetchAlbum(id: string) {
  const res = await fetch(`${API_BASE}/albums/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Album not found");
  return res.json() as Promise<{
    id: string;
    title: string;
    artist: string;
    price: number;
  }>;
}

export async function fetchUsers() {
  const res = await fetch(`${API_BASE}/users`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json() as Promise<
    Array<{ id: string; name: string; email: string }>
  >;
}
