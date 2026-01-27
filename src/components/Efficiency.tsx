import efficiencyPeople from "../assets/levelUp.svg";

export default function Efficiency() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#008080] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
          
          <div className="p-10 md:p-14 text-white">
            <h2 className="text-[33px] md:text-[40px] font-semibold mb-6 leading-tight">
              Need To Level Up <br />
              Your Organization's Efficiency?
            </h2>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-[#008080] px-5 py-3 rounded-md font-bold hover:bg-gray-200 transition"
            >
              Learn How
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>

          <div className="h-full flex items-end justify-end">
            <img
              src={efficiencyPeople}
              alt="image"
              className="w-full h-full object-cover md:object-fill "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
