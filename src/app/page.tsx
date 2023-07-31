export default function Home() {
  return (
    <div>
      <h1>Welcome to the NextJS Image Genorator!</h1>
      <h2></h2>
      <p>
        Images brought to you by the{" "}
        <a href="https://unsplash.com/" style={{ textDecoration: "none" }}>
          Unspalsh.com
        </a>{" "}
        API
      </p>
      <p>
        Powered by Vercel's
        <a href="https://vercel.com/" style={{ textDecoration: "none" }}>
          <span style={{ color: "mediumorchid" }}> NextJS </span>
        </a>
        13.4.12
      </p>
    </div>
  );
}
