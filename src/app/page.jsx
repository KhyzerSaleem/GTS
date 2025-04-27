import Main from '@/Components/Home1/Main'
import LandScapeD from '@/Components/Home1/LandScapeD';
import WCU from '@/Components/Home1/WCU';
import Form from '@/Components/Home1/Form';
// import Footer from '@/Components/Home1/Footer';
import Services from '@/Components/Home1/Services';
// import PricingTable from '@/Components/Home1/PricingTable';
import Gallery from '@/Components/Home1/Gallary';
import Customers from '@/Components/Home1/Customers';
import FAQ from '@/Components/Home1/FAQ';
import NA from '@/Components/Home1/NA';
import ScrollToTop from '@/Components/ScrollToTop';
// import Header from '@/Components/Home1/Header';






export default function Home() {
    
  return (
    <>


       {/* <Header/> */}
       <ScrollToTop/>
      <Main/>
      <LandScapeD/>
      <WCU/>
      <Services/>
      {/* <PricingTable/> */}
      <Gallery/>
      <Customers/>
      <FAQ/>
      <NA/>
      
      <Form/>
      {/* <Footer/> */}
      




     
      
    











    
    </>
  )
}
