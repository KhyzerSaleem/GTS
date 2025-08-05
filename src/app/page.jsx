import Main from "@/Components/Home1/Main";
import LandScapeD from "@/Components/Home1/LandScapeD";
import WCU from "@/Components/Home1/WCU";
import Form from "@/Components/Home1/Form";
import Services from "@/Components/Home1/Services";
import Gallery from "@/Components/Home1/Gallary";
import Customers from "@/Components/Home1/Customers";
import FAQ from "@/Components/Home1/FAQ";
import NA from "@/Components/Home1/NA";
import ScrollToTop from "@/Components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Main />
      <LandScapeD />
      <WCU />
      <Services />
      <Gallery />
      <Customers />
      <FAQ />
      <NA />
      <Form />
    </>
  );
}
