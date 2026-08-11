import About from "../sections/about/About";
import Footer from "../sections/footer/Footer";
import Header from "../sections/header/Header";
import Hero from "../sections/hero/Hero";
import PeopleComment from "../sections/peopleComment/PeopleComment";
import PopularHouse from "../sections/popularHouse/PopularHouse";
import Questions from "../sections/questions/Questions";
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
      <PeopleComment />
      <Questions />
      <Footer />
    </>
  )
}

export default Home;