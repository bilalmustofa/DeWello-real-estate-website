import { FaCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Questions() {
  return (
    <>
        <section className="w-full max-w-7xl flex items-center justify-center">
            <div className="py-30">

                <div className="text-center text-[#2B1B12] font-black text-4xl ">
                    <h1>Do You Have Any Questions? <br /> Get Help Form Us</h1>
                </div>

                <div className="flex items-center justify-between py-10">
                    <div className="flex items-center gap-2">
                        <FaCheckCircle />
                        <p>Chat live with Our Support team</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheckCircle />
                        <p>Browse Our FAQ</p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-5">
                    <div className="flex items-center gap-2 bg-[#DDC7BB] px-4 rounded-md">
                        <MdEmail />
                        <input type="text" placeholder="Enter Your Email Address" className=" py-1.5 "/>
                    </div>

                    <button className="px-5 py-1.5 bg-[#2F1D16] text-white rounded-md">Submit</button>
                    
                </div>
            </div>

        </section>
    </>

  )
}

export default Questions