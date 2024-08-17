export default function AboutPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-teal-700">About Us - Custom Layout</h1>
      </header>
      <main className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">About Us</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          This is the about page of our Next.js app with a unique Tailwind style!
        </p>
      </main>
      <footer className="mt-8 text-center">
        <p className="text-teal-600">Contact us at about@example.com</p>
      </footer>
    </div>
  );
}
