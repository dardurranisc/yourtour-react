import Footer from "@commons/Footer";
import Header from "@commons/Header";
import Choice from "./Choice";
import CreateTour from "./CreateTour";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Story from "./Story";
import TravelGallery from "./TravelGallery";
import TravelWithUs from "./TravelWithUs";

const HomePage = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Choice />
				<CreateTour />
				<Reviews />
				<TravelGallery />
				<Story />
				<TravelWithUs />
			</main>
			<Footer />
		</>
	);
};

export default HomePage;
