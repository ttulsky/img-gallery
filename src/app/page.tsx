export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "calc(100vh - 40px)",
        padding: "20px",
      }}
    >
      <div>
        <h1>Welcome to the NextJS Image Generator</h1>
        <h5>
          <span style={{ color: "mediumorchid" }}>Explore</span>,{" "}
          <span
            style={{
              color: "yellow",

              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            discover
          </span>
          , and <span style={{ color: "forestgreen" }}> enjoy</span> new images
          from artists around the globe.
        </h5>
      </div>
      <div>
        <p>
          Images brought to you by the{" "}
          <a href="https://unsplash.com/" style={{ textDecoration: "none" }}>
            Unsplash.com
          </a>{" "}
          API
        </p>
        <p>
          Powered by Vercel&apos;s
          <a href="https://vercel.com/" style={{ textDecoration: "none" }}>
            <span style={{ color: "mediumorchid" }}> NextJS </span>
          </a>
          13.4.12
        </p>
      </div>
    </div>
  );
}
