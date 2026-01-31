interface Props {
  onBack: () => void;
  onCloseAll: () => void;
}

export default function PaymentConfirmationModal({
  onBack,
  onCloseAll,
}: Props) {
  return (
    <div
      onClick={onCloseAll}
      className="fixed inset-0 z-70 flex items-center justify-center bg-black/40 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-md p-6 w-full max-w-sm text-center"
      >
        <div className=" inline ">
        <button
  onClick={onBack}
  className="mb-4 flex items-center gap-1 text-sm text-gray-500"
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

        </div>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mb-4">
          <span className="w-2 h-2  border border-amber-500 rounded-full animate-bounce" />
          <span className="w-2 h-2 border border-amber-500 rounded-full animate-bounce delay-150" />
          <span className="w-2 h-2 border border-amber-500 rounded-full animate-bounce delay-300" />
        </div>

        <h3 className="font-semibold mb-2">Payment Confirmation Required</h3>

        <p className="text-sm text-gray-500 mb-4">
          To complete this process, please send the paymet receipt along with
          the
          <span> </span>
          <span className="text-teal-600 font-medium">Refrence ID</span>
          <span> </span>
          to
          <span> </span>
          <span className="text-teal-600 font-medium">payment@mance.com.</span>
          This helps us to verify your payment quickly and proceed without
          delays.
        </p>

        <button
          onClick={onCloseAll}
          className="border border-teal-60 mt-4 text-teal-600 px-4 py-1.4 font-semibold rounded-sm text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}
