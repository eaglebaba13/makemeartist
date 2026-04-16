import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";
import trainer5 from "@/assets/trainer-5.jpg";
import trainer6 from "@/assets/trainer-6.jpg";
import trainer7 from "@/assets/trainer-7.jpg";
import trainer8 from "@/assets/trainer-8.jpg";
import trainer9 from "@/assets/trainer-9.jpg";
import trainer10 from "@/assets/trainer-10.jpg";

const trainers = [
  { name: "Master Pankaj", expertise: "Hair Guru", city: "Gujarat", img: trainer1 },
  { name: "Gurpreet Kaur", expertise: "Nail Artist", city: "International", img: trainer2 },
  { name: "Jassi Chhabra", expertise: "Founder Shades Academy", city: "Rajasthan", img: trainer3 },
  { name: "Deepti Gondaliya", expertise: "Make-Up Artist", city: "Gujarat", img: trainer4 },
  { name: "Loukik Shah", expertise: "Hair Magician", city: "LS Academy", img: trainer5 },
  { name: "Kamna Joshi", expertise: "Make-Up Artist", city: "Selfie Academy", img: trainer6 },
  { name: "Kalpana Jaalani", expertise: "PMU Artist", city: "Lucknow", img: trainer7 },
  { name: "Yogesh Srivastava", expertise: "Nail Art Setup", city: "Aveda Education", img: trainer8 },
  { name: "Gauransh", expertise: "BWAI Beauty Association", city: "Surat", img: trainer9 },
  { name: "Vikas Joshi", expertise: "Salon Growth Management", city: "Rajasthan", img: trainer10 },
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Meet Our Expert Trainers
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Learn directly from India's top beauty industry professionals.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading text-sm font-bold text-foreground">{t.name}</h3>
                <p className="text-xs text-primary font-semibold mt-1">{t.expertise}</p>
                <p className="text-xs text-muted-foreground mt-1">📍 {t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
