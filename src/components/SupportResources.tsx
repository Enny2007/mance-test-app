import faqIcon from "../assets/faq.svg";
import contactIcon from "../assets/contact.svg";
import educationalImg from "../assets/youtube.png";

export default function SupportResources() {
  return (
    <section className=" bg-[#FAFAFA] py-20  max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold md:text-5xl">
          Support & Resources
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto md:w-100">
          Access guides, tutorials, and expert support to help you get the most
          from Mance. Stay informed, solve issues quickly, and make strategy
          execution seamless
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="md:col-span-1 rounded-xl ml-10 overflow-hidden relative md:w-150 md:ml-2">
          <img src={educationalImg} alt="Educational Content" />
        </div>

        <div className="bg-[#FFFFFF] rounded-xl p-6 mx-auto flex flex-col justify-center  w-70 h-130 md:ml-50">
          <img src={faqIcon} alt="FAQ Icon" className="w-20 mb-4" />
          <h3 className="text-4xl font-semibold mb-2">
            Frequently <span className="text-gray-500">Asked Questions</span>
          </h3>
          <p className="text-gray-500 text-xl mb-35">
           Have questions about how Mance works or how it can fit your organization?
          </p>
          <a
            href="#"
            className="text-teal-600 border px-4 py-2 rounded text-center"
          >
            See All
          </a>
        </div>

        <div className="bg-[#FFFFFF] rounded-xl p-6 mx-auto flex flex-col  w-70 h-130 md:ml-20">
          <img src={contactIcon} alt="Contact Icon" className="w-20 mb-4" />
          <h3 className="text-4xl font-semibold mb-2">
            Contact <span className="text-gray-500">Support</span>
          </h3>
          <p className="text-gray-500 text-xl mb-30">
           Need help or have questions? Our support team is ready to assist you and ensure you get the most out of Mance.
          </p> 
          <a
            href="#"
            className="text-teal-600  border px-4 py-2 rounded text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
