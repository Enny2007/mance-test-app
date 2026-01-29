import GreenDot from "../../assets/greenDot.svg";
import image1 from "../../assets/ent1.svg";
import image2 from "../../assets/ent2.svg";
import image3 from "../../assets/ent4.png";

const EnterpriseSolutions = () => {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs text-gray-500 mb-2">
            <img src={GreenDot} className="w-2 h-2" />
            BENEFIT
          </span>

          <h2 className="text-2xl md:text-3xl font-semibold">
            How Mance Solves This
          </h2>
        </div>

        <div className="group grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl bg-white p-6 transition-transform duration-500 ease-out md:group-hover:translate-x-6 ">
              <img src={GreenDot} className="w-5 h-5 mb-3" />

              <h3 className="font-semibold mb-2 text-[24px] max-w-260px">
                Unified Strategy Platform
              </h3>

              <p className="text-sm text-gray-400 max-w-sm">
                Bring strategy, tasks, and KPIs together in a single,
                cloud-based system.
              </p>

              <div className="absolute bottom-0 right-0 pointer-events-none">
                <img
                  src={image1}
                  className="
          w-30 h-50
          transition-all duration-500 ease-out
          group-hover:opacity-0
          group-hover:scale-90
        "
                />

                <img
                  src={image1}
                  className="
          absolute bottom-2 right-0
          w-30 h-50
          opacity-0 scale-75
          transition-all duration-500 ease-out
          group-hover:opacity-100
          group-hover:scale-100
        "
                />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white p-6 transform transition-transform duration-500 ease-out md:group-hover:translate-x-12 ">
            <img src={GreenDot} className="w-5 h-3 mb-5" />

            <h3 className="font-semibold mb-2 text-[24px] max-w-260px">
              Clear Ownership & Team Accountability
            </h3>

            <p className="text-sm text-gray-400 max-w-sm">
              Assign tasks and track responsibility to ensure every goal is
              owned and executed.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white p-6 transition-transform duration-500 ease-out md:group-hover:-translate-x-6">
            <img src={GreenDot} className="w-5 h-5 mb-3" />

            <h3 className="font-semibold mb-2 text-[24px] max-w-260px">
              Scalable Workflows
            </h3>

            <p className="text-sm text-gray-400 max-w-sm">
              Easily adapt to growing teams, departments, or organizational
              complexity.
            </p>
          </div>

          <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl bg-white p-6 transition-transform duration-500 ease-out md:group-hover:-translate-x-6">
              <img src={GreenDot} className="w-5 h-5 mb-3" />

              <h3 className="font-semibold mb-2 w-60 text-[24px] max-w-260px">
                Live Dashboards & Automated Reports
              </h3>

              <p className="text-sm text-gray-400 w-60 max-w-sm">
                Get real-time insights without manual effort, enabling faster
                decisions.
              </p>

              <div className="absolute bottom-0 right-0 pointer-events-none">
                <img
                  src={image2}
                  className="
          w-30 h-50
          transition-all duration-500 ease-out
          group-hover:opacity-0
          group-hover:scale-90
        "
                />

                <img
                  src={image3}
                  className="
          absolute right-0 bottom-0 overflow-hidden top-20 
          rounded-xl
         size-30
           -rotate-20
          opacity-0 scale-75
          transition-all duration-500 ease-out
          group-hover:opacity-100
          group-hover:scale-100
        "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
