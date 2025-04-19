export default function Contact() {
    return (
      <section className="bg-gray-900 text-white min-h-screen p-8">
        <h2 className="text-4xl font-bold text-pink-300 mb-6">Contact Me 📬</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white" />
          <textarea placeholder="Message" className="w-full p-3 rounded bg-gray-800 text-white" rows={5}></textarea>
          <button className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-2 rounded font-semibold">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  