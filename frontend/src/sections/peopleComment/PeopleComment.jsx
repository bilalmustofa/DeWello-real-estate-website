import { comments } from '../peopleComment/CardData.jsx';
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function PeopleComment() {

  return (
    <>
        <section className="w-full bg-[#FEF7F2] px-4 sm:px-6 lg:px-15 py-10">

            {/* heading */}
            <div className="text-center text-3xl">
                <h1 className="text-[#2B1B12] font-black leading-tight mb-8">
                    What People Say <br /> About Dwello
                </h1>
            </div>

            {/* Card */}
            <div className="w-full max-w-350 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                {comments.map((comment, i) => (
                    <div key={i} className='w-full overflow-hidden'>
                        
                        <img src={comment.image} alt="House" className='w-full rounded-t-3xl object-cover'/>

                        <div className='bg-[#DDC7BB] p-5 rounded-b-3xl'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center justify-between gap-2'>
                                    <img src={comment.profile} alt={comment.name} className="w-12 h-12 rounded-full object-cover "/>
                                    <div>
                                        <p className="text-sm font-semibold">{comment.name}</p>
                                        <p className="text-xs text-gray-600">{comment.city}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className='bg-white px-1'>
                                    <p>{comment.rate}</p>
                                </div>
                            </div>

                            {/* Review */}
                            <div>
                                <p>{comment.review}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

                {/* buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button className='flex items-center justify-center rounded-full bg-[#2B1B12] text-white w-10 h-10 cursor-pointer'>
                    <FaLessThan />
                </button>
                <button className='flex items-center justify-center rounded-full bg-[#2B1B12] text-white w-10 h-10 cursor-pointer'>
                    <FaGreaterThan />
                </button>
            </div>

        </section>
    </>
  )
}

export default PeopleComment