// import BillingAppointmentSection from '../components/BillingAppointmentSection'
import GetStartedSection from '../components/GetStartedSection'
import RevenueCycle from '../components/RevenueCycle'
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
      <RevenueCycle/>
      
      <FAQPage/>
      <GetStartedSection/>
      
    </div>
  )
}

export default Home
