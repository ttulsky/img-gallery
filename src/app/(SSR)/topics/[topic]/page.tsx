import { UnsplashImage } from "@/models/unspalsh-image";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Alert } from "@/components/bootstarap";
import { Metadata } from "next";

export const dynamicParams = false;
interface PageProps {
  params: { topic: string };
}

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
  return {
    title: topic + " - NextJS Image Generator",
  };
}
// export function generateStaticParams() {
//   return ["Coffee", "Hiking", "Cycling"].map((topic) => ({ topic }));
// }

export default async function dynamicUrls({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY} `
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <div>
      <Alert>
        This page <strong>Will generate an Array of Images dynamicly. </strong>
        By changing the backslash you will get a new set of related images.
      </Alert>
      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          src={image.urls.raw}
          width={250}
          height={250}
          alt={image.description}
          key={image.urls.raw}
          className={styles.image}
        />
      ))}
    </div>
  );
}
