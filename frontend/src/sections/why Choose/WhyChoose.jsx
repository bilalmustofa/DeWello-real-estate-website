import { datas } from "../why Choose/data.jsx";

function WhyChoose() {
  return (
    <>
      <section className="w-full max-w-350  px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full  max-w-325 mx-auto px-4">
          <h2 className="text-3xl font-black text-[#2B1B12] uppercase tracking-wider">
            Why Choose Us
          </h2>

          <p className= "mt-4 text-[#2B1B12] text-sm sm:text-base text-center">
            Elevating Your Home Buying Experience with Expertise, integrity, and
            unmatched Personalized Service.
          </p>

          {/* Cards */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
            {datas.map((data, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 bg-[#DDC7BB] text-left w-full rounded-5xl"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-md bg-white text-2xl">
                  {data.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{data.title}</h3>
                <p className="mt-3 text-sm text-black leading-6">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose;
