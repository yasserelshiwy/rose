""
import HomeSwiper from '../components/HomeSwiper/HomeSwiper.jsx';
import CategoryBar from '../components/CategoryBar/CategoryBar.jsx';
import PestSeller from '../components/PestSeller/PestSeller.jsx';
import FeaturesBar from '../components/FeaturesBar/FeaturesBar.jsx';
import AboutUs from '../components/AboutUs/AboutUs.jsx';
import OurGallery from '../components/OurGallery/OurGallery.jsx';
import Customer from '../components/Customer/Customer.jsx';
import TrustedCompanies from '../components/TrustedComapnies/TrastedCompanies.jsx';
import Product from '../components/Product/Product.jsx';

export default function Home() {
  return (
    <>
        <CategoryBar />
        <HomeSwiper />
        <FeaturesBar />
        <PestSeller />
        <Product />
        <AboutUs />
        <OurGallery />
        <Customer />
        <TrustedCompanies />
    </>
  );
}
