// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next App</title>
        <meta
          name="description"
          content="A simple Next.js app with a landing page and a navbar."
        />
      </Head>

      <main>
        <h1>Welcome to My Next App</h1>
        <p>This is a simple landing page built with Next.js.</p>
      </main>
    </div>
  );
}
