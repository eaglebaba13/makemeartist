import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import WhyUsSection from "@/components/WhyUsSection";
import WorkshopDetails from "@/components/WorkshopDetails";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <WhyUsSection />
      <WorkshopDetails />
      <TestimonialsSection />
      <BookingForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
