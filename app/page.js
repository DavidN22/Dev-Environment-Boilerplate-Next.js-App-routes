import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/hello", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        className="mb-8 dark:invert"
        width={120}
        height={24}
        priority
      />

      <section className="grid gap-4 text-center max-w-2xl w-full sm:grid-cols-2">
        <Card title="Docs" href="https://nextjs.org/docs" />
        <Card title="Learn" href="https://nextjs.org/learn" />
        <Card title="About" href="http://localhost:3000/about" />
        <Card title="Deploy" href="https://vercel.com/new" />
      </section>

      <section className="mt-8 p-4 bg-white dark:bg-gray-800 rounded shadow max-w-2xl w-full">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Server Response:
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {data.message}
        </p>
      </section>

      <section className="mt-8 p-4 bg-white dark:bg-gray-800 rounded shadow max-w-2xl w-full">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {
            "This version is using APP routes as opposed to pages.This is also using next.js v15 so no-store is used as a defaut for api calls"
          }
        </p>
      </section>
    </main>
  );
}

function Card({ title, href }) {
  return (
    <a
      href={href}
      className="p-4 bg-white dark:bg-gray-800 rounded shadow transition-transform transform hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title} <span className="ml-1">-&gt;</span>
      </h2>
    </a>
  );
}
