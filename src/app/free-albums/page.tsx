import { fetchAlbums } from "@/lib/api";

export default async function FreeAlbumsPage() {
  const albums = await fetchAlbums();

  return (
    <div>
      <h2>Free Albums (Public)</h2>
      <ul>
        {albums.map((a) => (
          <li key={a.id}>
            <strong>{a.title}</strong> — {a.artist} (${a.price})
          </li>
        ))}
      </ul>
    </div>
  );
}
