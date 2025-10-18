"use client";

export default function Register() {
  return (
    <section className="w-full min-h-screen bg-[#0E001B] flex justify-center items-center px-4 py-24 md:py-32">
      <div className="bg-gradient-to-br from-[#1C0233] to-[#2A0F4D] p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-5xl border border-[#8B5CF6]/30">
        <div
          className="relative w-full overflow-hidden rounded-lg shadow-md 
                     h-screen " // Full height on mobile, smaller on desktop
        >
          No registration available

          {/* <iframe
            src="https://payments.cashfree.com/forms/finance-masterclass"
            className="absolute top-0 left-0 w-full h-full rounded-lg bg-[#0E001B]"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe> */}
        </div>
      </div>
    </section>
  );
}
