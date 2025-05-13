import Customer from "../../components/Customer/Customer";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurTeam from "../../components/OurTeam/OurTeam";
import FeaturesBar from "../../components/FeaturesBar/FeaturesBar";
import InstagramAbout from "../../components/InstagramAbout/InstagramAbout";
import TrustedCompanies from "../../components/TrustedComapnies/TrastedCompanies";

export const metadata = {
  title: "Rose-AboutUs",
  description: "AboutUs page for rose e-commerce",
};

export default function page() {
  return (
    <>
      <AboutUs />
      <Customer />
      <OurTeam />
      <FeaturesBar />
      <InstagramAbout />
      <TrustedCompanies />
    </>
  );
}
