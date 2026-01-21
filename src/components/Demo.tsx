export default function Demo() {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        Still Want to see Mance in action?
      </h2>

      <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full h-10 border border-gray-300 rounded-md px-4 py-3"
        />

        <a
          href="#"
          className="bg-[#008080] h-10 text-white px-6 py-2 rounded-md text-center hover:bg-gray-400 transition md:w-60"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
}
