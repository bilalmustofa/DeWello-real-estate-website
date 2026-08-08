import aboutImag from '../../assets/images/about-img.png'

function About() {
  return (
    <>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-13">
            <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16'>

                {/* image */}
                <div className='w-full lg:w-1/2'>
                    <img src={aboutImag} alt="House Image" className='w-full rounded-lg object-cover' />
                </div>

                <div>
                    <p className="text-sm sm:text-base leading-6 text-[#4F3527] max-w-lg">
                        From cozy cottages to luxurious estates, our dedicated team
                        guides you through every step of your journey, ensuring your
                        dream home becomes a reality.
                    </p>

                    <div className='flex gap-4 sm:gap-8 mt-8 justify-between'>
                        
                        <div>
                            <h3 className='text-3xl font-bold sm:text-4xl text-[#4F3527]'>8k+</h3>
                            <p className="text-xs sm:text-sm text-[#4F3527]">House Available</p>
                        </div>
                        <div>
                            <h3 className='text-3xl font-bold sm:text-4xl text-[#4F3527]'>6k+</h3>
                            <p className="text-xs sm:text-sm text-[]#4F3527">House Sold</p>
                        </div>
                        <div>
                            <h3 className='text-3xl font-bold sm:text-4xl text-[#4F3527]'>2k+</h3>
                            <p className="text-xs sm:text-sm text-[#4F3527]">Trusted Agents</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About