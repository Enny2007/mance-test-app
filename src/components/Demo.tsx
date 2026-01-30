type DemoProps = {
  onRequestDemo: () => void;
};

export default function Demo({ onRequestDemo }: DemoProps) {
  return (
    <section className="py-20 px-4 text-center bg-[#FAFAFA]">
      <h2 className="text-3xl md:text-5xl font-semibold mb-8">
        Still Want to see Mance in action?
      </h2>

      <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Input your email"
          className="w-full h-10 border border-gray-400 rounded-sm px-4 py-6 md:w-450"
        />

        {/*handler */}
        <button
          onClick={onRequestDemo}
          className="bg-[#008080] text-white px-6 py-3 rounded-md text-sm hover:opacity-60 transition md:w-150"
        >
          Request a Demo
        </button>
      </div>
    </section>
  );
}
