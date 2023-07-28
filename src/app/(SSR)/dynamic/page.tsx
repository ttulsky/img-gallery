import { UnsplashImage } from "@/models/unspalsh-image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstarap";

export const metadata = {
  title: "Dynamic  fetching - Nextjs - TS img gallery ",
};
// export const revalidate = 0; //this allows the static page to be dyanmic, you can also set it for specific fetch requests vs the entier page.

export default async function dynamicPage() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY,

    { cache: "no-cache" } // this is built into Next.js and does the same thing, by setting the cache to "no-cache" the page dynamicly rendered and is no longer static. "no-store" will also do the same thing

    // next: {revalidate: 0}  this also does the same thing
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw- 100 h-100"
      />
      by{" "}
      <Link href={"/users/" + image.user.username}>{image.user.username} </Link>
    </div>
  );
}
