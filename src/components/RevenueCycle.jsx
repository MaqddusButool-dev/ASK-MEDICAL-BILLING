import doctorImage from "../assets/hero1.jpg";

const RevenueCycle = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-30">
        {/* Left Side */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-extrabold sm:text-4xl  text-[#1f3b57] mb-4">
            Demand More from Your Revenue Cycle{" "}
            <br className="hidden sm:block" />
            <span className="text-[#03a9f4] text-2xl">
              Maximize Revenue. Minimize Hassle. Exceed Expectations.
            </span>
          </h1>
          <p className="text-gray-600 mb-6">
            Stop settling for inconsistent reimbursements, slow payments, and
            incomplete reporting. At ASK Medical Billing, we don’t just manage
            your revenue cycle — we transform it into a predictable,
            high-performance engine for growth
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#4a6480] text-white px-6 py-3 rounded-full hover:bg-[#3a5166] transition bg-gradient-to-r from-[#e91e63] to-[#e91e63]/90 hover:from-[#e91e63]/90 hover:to-[#e91e63]/80 font-semibold">
              Meet With Us
            </button>
            {/* <button className="bg-white border border-[#4a6480] text-[#4a6480] px-6 py-3 rounded-full hover:bg-[#f3f4f6] transition">
              CALCULATE REVENUE LOSS
            </button> */}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2">
          <img
            src={doctorImage}
            alt="Doctor"
            className="w-full max-w-sm mx-auto lg:mx-0 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default RevenueCycle;
