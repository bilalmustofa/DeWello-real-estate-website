import { residence } from "../popularHouse/data.jsx";
import { FiMapPin, FiMaximize } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";

function PopularHouse() {
  return (
    <>
      <section className="w-full px-4 sm:px-6 lg:px-10 py-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[#2B1B12] font-black text-3xl pb-8">
            Our Popular Residence
          </h1>
        </div>

        {/* Card */}
        <div className="w-full max-w-350 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
          {residence.map((re, i) => (
            <div key={i} className="w-full rounded-3xl bg-[#DDC7BB]">
              <img
                src={re.image}
                alt="House"
                className="w-full  object-cover rounded-t-3xl"
              />

              {/* Information */}
              <div className="px-5 pt-3">
                <div className="flex items-center gap-2 ">
                  <FiMapPin />
                  <p className="text-md font-bold text-[#2B1B12]">
                    {re.location}
                  </p>
                </div>

                <div className="flex items-center gap-5 text-black py-3">
                  <div className="flex items-center gap-1">
                    <IoBedOutline />
                    <p>{re.room}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMaximize />
                    <p>{re.size}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-3">
                  <button className="bg-[#2B1B12] rounded-md text-white text-sm px-4 py-2 cursor-pointer">Sign Up</button>
                  <p>{re.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PopularHouse;
