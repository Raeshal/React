export default function Projects() {
  return (
    <section className="bg-gray-950 text-white min-h-screen p-8">
      <h2 className="text-4xl font-bold text-pink-300 mb-6">Projects 💻</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-pink-200">Project {i + 1}</h3>
            {i === 0 && (
              <a
                href="https://fakezon.netlify.app"
                className="text-gray-300 mt-2 block underline hover:text-pink-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                fakezon.netlify.app
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
