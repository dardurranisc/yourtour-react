
import Header from "@commons/Header"
import Hero from "./Hero"
import Choice from "./Choice"
import CreateTour from "./CreateTour"
import Reviews from "./Reviews"
import TravelGallery from "./TravelGallery"
import Story from "./Story"
import TravelWithUs from "./TravelWithUs"
import Footer from "@commons/Footer"

const HomePage = () => {
    return(
        <>
            <Header/>
            <main>
                <Hero/>
                <Choice/>
                <CreateTour/>
                <Reviews/>
                <TravelGallery/>
                <Story/>
                <TravelWithUs/>
            </main>
            <Footer/>
        </>
    )
}

export default HomePage