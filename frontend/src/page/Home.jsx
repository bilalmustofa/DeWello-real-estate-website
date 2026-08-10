import About from "../sections/about/About";
import Header from "../sections/header/Header";
import Hero from "../sections/hero/Hero";
import PopularHouse from "../sections/popularHouse/PopularHouse";
import SearchBar from "../sections/searchBar/SearchBar";
import WhyChoose from "../sections/why Choose/WhyChoose";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="relative z-10 -mt-5 sm:-mt-8 lg:-mt-16">
        <SearchBar />
      </div>
      <About />
      <WhyChoose />
      <PopularHouse />
    </>
  )
}

export default Home;