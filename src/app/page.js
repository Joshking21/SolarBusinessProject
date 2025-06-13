import Image from "next/image";
import Nav from "./Components/navigation/navigation";
import Header from "./Components/header/header";
import Solar from "./Components/solar/solar";
import Products from "./Components/productsAndServices/products";
import Services from "./Components/productsAndServices/services";
import ContactUs from "./Components/contactUs/contactUs"
import Newsletter from "./Components/newsLetter/newsletter";
import Partners from "./Components/partners/partners";
import Footer from "./Components/footer/footer";
import AboutUs from "./Components/aboutUs/aboutUs";
import FAQ from "./Components/faq/faq";
import Testimonial from "./Components/testimonial/testimonial";
import LightbulbLoader from "./Components/lightbulbLoader/lightbulb";
export default function Home() {
  return (
    <LightbulbLoader>
    <div className="overflow-hidden">
      <Nav />
      <Header />
      <Solar />
      <AboutUs/>
      <Products />
      <Services />
      <ContactUs />
      <Newsletter/>
      <FAQ/>
      <Testimonial/>
      <Partners/>
      <Footer/>
      
      
    </div>
    </LightbulbLoader>
  );
}
