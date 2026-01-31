import { useEffect, useState } from "react";

type VerifyEmailModalProps = {
  onClose: () => void;
};

const VerifyEmailModal = ({ onClose }: VerifyEmailModalProps) => {
  const [step, setStep] = useState<"otp" | "success">("otp");
  const [showToast, setShowToast] = useState(false);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleResend = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <section className="fixed inset-0 z-500 flex items-center justify-center bg-black/40 px-4">
      {showToast && (
        <div className="fixed inset-0 z-1000 bg-black/60">
          <div className="fixed w-70 top-0 right-0 bg-green-500 text-white text-xs px-4 py-2 rounded-md shadow-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span>Verification link sent again!</span>
            <span onClick={onClose} className="pl-18 cursor-pointer">
              x
            </span>
          </div>
        </div>
      )}

      <div className="relative w-full max-w-sm min-h-360px bg-gray-100 rounded-md px-6 py-6 text-center flex flex-col justify-between">
        {step === "otp" && (
          <p
            className="text-xs text-red-500 absolute top-4 right-5 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </p>
        )}

        {step === "otp" && (
          <>
            <div>
              <h3 className="mt-6 mb-2">Verify your email address</h3>
              <p className="text-xs text-gray-500 mb-4">
                A six digit OTP code has been sent to your email
                <br />
                olade@zojatech.com
              </p>
              <p className="text-xs text-red-500 mb-6">0:20 mins remaining</p>

              <div className="flex justify-center gap-2 mb-6">
                {["5", "1", "0", "2", "2", "1"].map((digit, index) => (
                  <div
                    key={index}
                    className="border border-teal-500 rounded-sm w-8 h-10 flex items-center justify-center text-lg"
                  >
                    {digit}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={() => setStep("success")}
                className="bg-teal-600 px-8 py-2 text-white text-xs rounded-sm mb-4"
              >
                Verify OTP
              </button>

              <p className="text-xs">
                Didn’t get the code?{" "}
                <button
                  onClick={handleResend}
                  className="text-teal-600 cursor-pointer"
                >
                  Resend
                </button>
              </p>
            </div>
          </>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center justify-center flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="currentColor"
              className="w-12 h-12 text-green-600 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <h3 className="mb-2 font-semibold">Email Verified</h3>
            <p className="text-xs text-gray-500 mb-8">
              Your email has been verified successfully
            </p>

            <button
              onClick={onClose}
              className="bg-teal-600 px-10 py-2 text-white text-xs rounded-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VerifyEmailModal;
