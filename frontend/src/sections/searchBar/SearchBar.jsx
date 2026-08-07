import {FiMapPin, FiHome, FiDollarSign} from "react-icons/fi";

function SearchBar() {
  return (
    <>
      <section className="bg-[#e5c4b3] w-full max-w-[75%] mx-auto my-6 rounded-lg">
        <div className="w-full max-w-5xl mx-auto p-4 rounded-xl shadow-lg flex flex-col md:flex-row gap-3">
          <div className="bg-[#FBF5F1] flex items-center gap-3 flex-1 px-4 py-3">
            <input type="text" placeholder="Location" className="w-full outline-none text-sm"/>

            <FiMapPin className="text-gray-500" size={20} />
          </div>

          <div className="bg-[#FBF5F1] flex items-center gap-3 flex-1 px-4 py-3">
            <input type="text" placeholder="Type"  className="w-full outline-none text-sm"/>

            <FiHome className="text-gray-500" size={20}/>
          </div>

          <div className="bg-[#FBF5F1] flex items-center gap-3 flex-1 px-4 py-3">
            <input type="text" placeholder="Price Range" className="w-full outline-none text-sm"/>

            <FiDollarSign className="text-gray-500" size={20}/>
          </div>

          <div>
            <button className="gap-2 w-full md:w-auto px-7 py-3 bg-[#2F1D16] text-white rounded-lg hover:bg-[#4A2D22] transition">Sign in</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBar;
