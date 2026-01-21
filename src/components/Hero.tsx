import dashboardImg from "../assets/dashboard.svg";
import badgeImg from "../assets/badge.svg";
import missionPlanning from "../assets/mission-planning1.png";
import kpi from "../assets/KPI1.png";
import heroBg from "../assets/hero-bg.svg";

const Hero = () => {
  return (
    <section className="bg-[#f7f9f8] mt-10 mx-5 px-6 pb-140px pt-60px md:pt-6 md:mx-10">
      <div
        className=
        "relative  mx-auto mt-5 flex max-w-1200px flex-col rounded-[20px] bg-cover bg-center px-6  pt-100px text-center text-white md:px-6 pb-320px"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
      
        <div className="mx-auto w-full max-w-900px">
          <img
            src={badgeImg}
            alt="Hero badge"
            className="mx-auto pt-9 "
          />

          <h1 className="text-[28px] font-medium leading-tight md:text-[30px]">
              Align Strategy to Execution with <br />
              Intent-Driven Planning. <br />
              Cloud-Based, Ready to Scale.
          </h1>


          <p className=" font-bold mt-4  pb-10 text-[12px] opacity-70 md:text-[10px]">
            A SaaS platform for hierarchical task delegation and KPI-driven
            success
          </p>
        </div>

        
        <div className="pt-1 mt-5 z-1000 pb-10">
          <img src={missionPlanning} alt="Mission Planning" className="absolute left-4 top-60px w-25 h-10 flex scale-90 items-center gap-2 md:left-8 md:scale-100 pt-0.2 " />
          <img src={kpi} alt="KPI" className="absolute  right-4 top-60px w-20 h-10 flex scale-90 items-center gap-2 md:right-8 md:scale-100 pt-0.2" />
        </div>

        
        <img
          src={dashboardImg}
          alt="Dashboard"
          className="z-20 mx-auto mt-auto w-full max-w-full rounded-[14px] shadow-[0_30px_60px_rgba(0,0,0,0.35)]  md:w-[85%] md:max-w-950px"
        />
      </div>
    </section>
  );
};

export default Hero;
