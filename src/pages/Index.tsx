import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import TrainersSection from "@/components/TrainersSection";
import WhyUsSection from "@/components/WhyUsSection";
import WorkshopDetails from "@/components/WorkshopDetails";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MallOfSalonPopup from "@/components/MallOfSalonPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <TrainersSection />
      <WhyUsSection />
      <WorkshopDetails />
      <TestimonialsSection />
      <BookingForm />
      <Footer />
      <WhatsAppFloat />
      <MallOfSalonPopup />
    </div>
  );
};

export default Index;
