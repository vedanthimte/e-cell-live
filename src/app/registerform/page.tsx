"use client";

export default function Register() {
  return (
    <section className="w-full min-h-screen bg-[#0E001B] flex justify-center items-center pt-20 p-4">
      <div className="bg-[#1C0233] p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-5xl">
        <div className="relative w-full" style={{ paddingTop: "150%" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSegyCTCrP-V_bPBjkD5cGMeost4XZ9BnV0aFLbHXV7ntWYx2Q/viewform?embedded=true"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
