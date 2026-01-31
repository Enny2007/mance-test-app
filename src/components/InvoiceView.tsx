import { useState } from "react";
import PaymentConfirmationModal from "./PaymentConfirmationModal";
import MissionPlanImg from "../assets/pricingCard1.svg";
import KpiModuleImg from "../assets/pricingCard2.svg";

interface InvoiceViewProps {
  onBack: () => void;
  onCloseAll: () => void;
  plan: {
    title: string;
    users: string;
  } | null;
}

export default function InvoiceView({
  onBack,
  onCloseAll,
  plan,
}: InvoiceViewProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <>
      {/*HEADER INSIDE MODAL*/}
      <h2 className="text-2xl font-semibold mb-1">Complete Payment</h2>
      <p className="text-gray-500 mb-6">
        Select the best type matching your organisation need
      </p>

      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="mb-4 ml-5 flex items-center gap-1 text-md text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>

          <span>Back</span>
        </button>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-sm text-[#008080]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download
          </button>

          <button
            onClick={() => setShowConfirmation(true)}
            className="bg-[#008080] hover:bg-teal-800 text-white px-4 py-1.5 rounded-md text-sm"
          >
            Proceed
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-6">
       
        {/* LEFT COLUMN */}

        <div className="bg-[#FAFAFA] rounded-lg p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-lg font-semibold text-[#008080]">
              {plan?.title}
            </h3>

            <span className="text-sm text-gray-500 bg-[#E5E9EB] px-2 py-0.5 rounded">
              {plan?.users}
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
            <img
              src={MissionPlanImg}
              className="w-full md:w-60"
              alt="Mission Plan Module"
            />
            <img
              src={KpiModuleImg}
              className="w-full md:w-60"
              alt="KPI Module"
            />
          </div>
        </div>

        {/*INVOICE BODY*/}
        <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 space-y-6">
          {/* Invoice Header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p>
                <span className="text-gray-500">Invoice Number:</span>{" "}
                <span>INV-048372918</span>
              </p>
              <p>
                <span className="text-gray-500">Reference ID:</span>{" "}
                <span>1209382</span>
              </p>
            </div>

            <div className="space-y-1 sm:text-right">
              <p>
                <span className="text-gray-500">Issued Date:</span>{" "}
                <span>03 Sept 2025</span>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border border-gray-400 p-2">
           
            <div className="grid grid-cols-2 gap-10 text-sm justify-between">
              <div>
                <p className="font-medium mb-1">FROM</p>
                <p className="text-gray-400">Zojatech LTD</p>
                <p className="text-gray-400">Gbagada, Lagos State, NGN</p>
                <p className="text-gray-400">support@mance.com</p>
              </div>

              <div className="text-right">
                <p className="font-medium mb-1">BILLED TO</p>
                <p className="text-gray-400">ITH Horizons</p>
                <p className="text-gray-400">support@mance.com</p>
              </div>
            </div>

            {/* Invoice Table */}
            <div className="overflow-x-auto mt-5">
              <table className="w-full text-sm  border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="py-2 px-3 font-medium">#</th>
                    <th className="py-2 px-3 font-medium">Item</th>
                    <th className="py-2 px-3 font-medium">QTY</th>
                    <th className="py-2 px-3 font-medium">Cost</th>
                    <th className="py-2 px-3 font-medium text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-400 ">
                    <td className="py-2 px-3">1</td>
                    <td className="py-2 px-3">{plan?.title}</td>
                    <td className="py-2 px-3">40 Users</td>
                    <td className="py-2 px-3">
                      $9 <span className="text-gray-500 text-xs">Per user</span>
                    </td>
                    <td className="py-2 px-3 text-right">$100</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="w-full">
              <div className="w-full md:max-w-md md:ml-auto space-y-2 text-sm mt-5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>$300.00 USD</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Tax</span>
                  <span>$0.00 USD</span>
                </div>

                <div className="flex justify-between border-b border-gray-400 pb-8">
                  <span className="text-gray-500">Billed Total</span>
                  <span>$300.00 USD</span>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="w-full mt-5">
              <div className="w-full md:max-w-md md:ml-auto space-y-2 text-sm">
                <p>PAYMENT INFO</p>

                <div className="flex justify-between">
                  <span className="text-gray-500">Bank:</span>
                  <span>First Bank Nigeria</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Account Name:</span>
                  <span>Mance Technologies Ltd</span>
                </div>

                <div className="flex justify-between border-b border-gray-400 pb-8">
                  <span className="text-gray-500">Account Number:</span>
                  <span>1234567890</span>
                </div>
              </div>
            </div>

            <div className="mt-5 bg-[#E5E9EB]">
              <p className="font-medium mb-1">NOTE</p>
              <p className="text-gray-500">
                Please send your payment receipt along with the{" "}
                <span className="text-black underline">Reference ID </span> to{" "}
                <span className="text-black underline">payment@mance.com</span>.
                Your account will be activated once payment is verified in
                onboarding link will be sent via email to set up their
                organization on Mance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*PAYMENT CONFIRMATION MODAL*/}
      {showConfirmation && (
        <PaymentConfirmationModal
          onBack={() => setShowConfirmation(false)}
          onCloseAll={onCloseAll}
        />
      )}
    </>
  );
}
