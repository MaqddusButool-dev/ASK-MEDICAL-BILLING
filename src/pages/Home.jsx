// import BillingAppointmentSection from '../components/BillingAppointmentSection'
import WhyChooseUs from '../components/WhyChooseUs'
import HeroSlider from '../components/hero_section'
import FAQPage from '../components/question'
// import TestimonialSection from '../components/TestimonialSection'

function Home() {
  return (
    <div>
      <HeroSlider />
      {/* <BillingAppointmentSection/> */}
      {/* <TestimonialSection/> */}
      <WhyChooseUs/>
      <FAQPage/>
      
    </div>
  )
}

export default Home
