type DemoModalProps = {
  onClose: () => void;
};

const DemoModal = ({ onClose }: DemoModalProps) => {
  return (
    
    <div
      className=" fixed inset-0 z-50 flex justify-center bg-black/60  py-16 md:py-5 px-10 "
      onClick={onClose}
    >
    
      <div
        className=" relative w-full
                    sm:max-w-480px
                    md:max-w-560px
                    lg:max-w-640px
                    max-h-[75vh] md:max-h-150
                    overflow-y-auto
                    rounded-xl bg-white p-6 md:p-8 md:mx-40 md:my-1
                    "
        onClick={(e) => e.stopPropagation()}
      >
       
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl"
        > <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        
        <h2 className="mb-1 text-center text-2xl font-extrabold text-[#008080]">
          We’ll be in touch to get you started
        </h2>

        
        <p className="mb-7 text-center text-[10px] text-slate-500">
          Provide the details below to enable our team reach out to you
        </p>

       
        <form className="flex flex-col gap-5">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-slate-500">
              Work Email Address
            </label>
            <input
              placeholder="Email Address"
              className="h-11 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus:border-teal-600"
            />
          </div>

          
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-500">First Name</label>
              <input
                placeholder="Enter First Name"
                className="h-11 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus:border-[#008080]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-500">Last Name</label>
              <input
                placeholder="Enter Surname"
                className="h-11 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus:border-[#008080]"
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-500">Company Name</label>
              <input
                placeholder="Enter Company Name"
                className="h-11 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus:border-[#008080]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-500">
                Number of Employees
              </label>
              <input
                placeholder="1–1000"
                className="h-11 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus:border-[#008080]"
              />
            </div>
          </div>

         
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-slate-500">Phone Number</label>
            <input
              placeholder="Enter Phone Number"
              className="h-11 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus:border-[#008080]"
            />
          </div>

         
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-slate-500">Interested Plan</label>
            <select
              defaultValue=""
              className="h-11 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus:border-[#008080]"
            >
              <option value="" disabled className="text-gray-500">
                SMEs
              </option>
              <option>KPI</option>
              <option>Mission Plan</option>
              <option>Mission Plan & KPI</option>
            </select>
          </div>

         
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-slate-500">Country</label>
            <input
              placeholder="Choose Country"
              className="h-11 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus:border-[#008080]"
            />
          </div>

          
          <label className="flex gap-2 text-xs text-slate-500 leading-snug">
            <input type="checkbox" className="mt-1" />
            <span>
              Yes, I would like to receive marketing-related communications
              about Mance products, services, and events.
            </span>
          </label>

          
          <button
            type="submit"
            className="mt-1 h-11 w-full cursor-not-allowed rounded-md bg-slate-200 text-sm text-slate-500"
          >
            Request Demo
          </button>

         
          <p className="mt-3 text-[11px] leading-snug text-slate-500">
            By submitting my personal data, I consent to Mance collecting,
            processing, and storing my information in accordance with the{" "}
            <span className="text-teal-700 underline">
              Mance Privacy Notice
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;
