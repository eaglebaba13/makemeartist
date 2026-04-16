import { useState } from "react";

const courseOptions = [
  "💄 Makeup Artist Workshop",
  "💇 Hair Styling Workshop",
  "✨ Beauty & Skin Workshop",
  "💅 Nail Art Workshop",
  "🧴 Cosmetology Introduction",
];

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: "", mobile: "", city: "", course: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I want to book a seat.\nName: ${formData.name}\nMobile: ${formData.mobile}\nCity: ${formData.city}\nCourse: ${formData.course}`;
    window.open(`https://wa.me/919929720831?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="book" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-3">
            Book Your Workshop Seat
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Fill in your details and we'll confirm your spot!
          </p>

          {submitted ? (
            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground text-sm">Our team will confirm your seat on WhatsApp shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="tel" placeholder="Mobile Number" required value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="text" placeholder="City" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <select required value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select a course</option>
                {courseOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <button type="submit" className="w-full gradient-rose text-primary-foreground py-4 rounded-full font-bold text-lg shadow-glow hover:opacity-90 transition-all">
                🚀 Reserve My Seat
              </button>
            </form>
          )}

          <div className="text-center mt-6">
            <p className="text-muted-foreground text-sm mb-2">Need more details?</p>
            <a href="https://wa.me/919929720831" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-full text-sm font-semibold text-foreground hover:border-primary/30 transition-colors">
              📲 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
