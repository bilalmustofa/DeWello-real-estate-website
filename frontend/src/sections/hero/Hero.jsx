import heroImg from "../../assets/images/hero-image.png";

function Hero() {
  return (
    <>
      <section className="flex bg-[#F8F2ED] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight">
              Find Your <br /> Dream Home
            </h1>
            <p className="mt-6 text-sm sm:text-base lg:text-lg text-[#2F1D16] max-w-md">
              Explore our curated selection of exquisite properties tailored to
              your dream home.
            </p>

            <button className="mt-8 bg-[#2F1D16] text-white px-6 py-3 rounded-lg hover:bg-[#4A2D22] transition">
              Sign Up
            </button>
          </div>

          <div>
            <img src={heroImg} alt="hero Img" className="w-full max-w-sm hidden lg:block lg:max-w-2xl"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
