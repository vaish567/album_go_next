import { getSession } from "@/lib/auth";
import { fetchAlbum } from "@/lib/api";
import { redirect } from "next/navigation";

export default async function AlbumDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const album = await fetchAlbum(params.id);

  return (
    <div>
      <h3>{album.title}</h3>
      <p>Artist: {album.artist}</p>
      <p>Price: ${album.price}</p>
    </div>
  );
}
