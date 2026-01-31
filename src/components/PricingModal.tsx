import { useEffect } from "react";
import MissionPlanImg from "../assets/pricingCard1.svg";
import KpiModuleImg from "../assets/pricingCard2.svg";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    title: string;
    users: string;
    price: string;
    features: string[];
  } | null;
  onVerifyEmail: () => void;
}

export default function PricingModal({
  isOpen,
  onClose,
  plan,
  onVerifyEmail,
}: PricingModalProps) {
  // Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !plan) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 px-4">
      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl max-h-[90vh] overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-10 text-gray-400 hover:text-gray-600 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
          
          {/* Header */}
          <h2 className="text-2xl font-semibold mb-1">
            Complete Payment
          </h2>
          <p className="text-gray-500 mb-6">
            Select the best type matching your organisation need
          </p>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-6">
            
            {/* LEFT COLUMN */}
            <div className="bg-[#FAFAFA] rounded-lg p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-4">
                <h3 className="text-lg font-semibold text-[#008080]">
                  {plan.title} Plan
                </h3>

                <span className="text-sm text-gray-500 bg-[#E5E9EB] px-2 py-0.5 rounded">
                  {plan.users}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy.
              </p>

              <span className="inline-block text-xs font-semibold bg-[#F9CF4A] px-2 py-1 rounded mt-6 mb-3">
                PRODUCT OFFERINGS
              </span>

              <div className="space-y-3">
                <img src={MissionPlanImg} alt="Mission Plan Module" />
                <img src={KpiModuleImg} alt="KPI Module" />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="bg-[#FAFAFA] rounded-lg p-4 sm:p-5">
              
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-[#008080]">
                  Yearly Payment
                </h4>
                <p className="text-sm text-gray-600">
                  $9 Monthly - Per User
                </p>
              </div>

              <h4 className="text-sm font-medium mb-3">
                Company Information
              </h4>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Organization Name
                  </p>
                  <input
                    className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm"
                    placeholder="ithorizons"
                  />
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Organization Email
                  </p>
                  <div className="relative">
                    <input
                      className="w-full bg-gray-100 rounded-lg px-3 py-2 pr-28 text-sm"
                      placeholder="ithorizons.com"
                    />
                    <button
                      onClick={onVerifyEmail}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-500 underline opacity-70 hover:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-amber-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                        />
                      </svg>
                      Verify Email
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Sector
                  </p>
                  <select className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm">
                    <option>Select</option>
                    <option>Technology / Software</option>
                    <option>Financial Services</option>
                    <option>Banking</option>
                    <option>Insurance</option>
                  </select>
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Number of Users
                  </p>
                  <input
                    className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm"
                    placeholder="10"
                  />
                </div>
              </div>

              <div className="border-t mt-6 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>$300.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tax</span>
                  <span>$$0.00 USD</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Billed Total</span>
                  <span>$300.00 USD</span>
                </div>
              </div>

              <button className="mt-4 w-full bg-gray-200 text-gray-400 py-2 rounded-lg hover:bg-teal-600 hover:text-white">
                Generate Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
