import badge from "../assets/featureBadge.png";

const Feature = () => {
  return (
    <div className="grid grid-cols-1 mx-6 md:grid-cols-2 gap-6 md:mx-10">
      <div className="md:mx-20">
        <img
          src={badge}
          alt="Feature Badge"
          className=" mt-15  w-30 h-10 rounded-full "
        />
        <h1 className="text-[45px] mt-3 font-semibold leading-11.5">
          Features to Drive <br />
          Strategy Into <span className=" text-teal-600">Action</span>
        </h1>
      </div>
      
      <p className="text-md  mt-2  opacity-60 sm:ml-10 md:mt-20 md:ml-50  md:w-100  md:leading-6">
        Our features are designed to turn strategy into disciplined execution.
        Built on an intent-driven, outcome-based execution model, the platform
        enables leaders to set clear priorities, delegate through structured
        task hierarchies, and track performance using measurable outcomes and
        KPIs.
      </p>
     <div className="hidden md:block md:col-span-2 md:mx-20 h-px bg-gray-800 mt-6 opacity-8"></div>
     <hr className="md:hidden mx-6 h-px bg-gray-800 mt-6 opacity-8"></hr>
    
    </div>
  );
};
export default Feature;
