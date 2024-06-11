import { Grid } from "@mui/material";
import { FC } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import scrollElementToViewById from "../../utils/scroll-element-to-view";
import About from "./sections/about";
import Benefits from "./sections/benefits";
import ContactUs from "./sections/contact-us";
import FAQs from "./sections/faqs";
import Pricing from "./sections/pricing";
import Services from "./sections/services";

const Home: FC = () => {
  return (
    <Grid container>
      <Header id="home" onImageClick={() => scrollElementToViewById("home")} />
      <About />
      <Benefits />
      <Services />
      <Pricing />
      <FAQs />
      <ContactUs />
      <Footer />
    </Grid>
  );
};

export default Home;
