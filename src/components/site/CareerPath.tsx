import { CAREER_PATH } from "@/data/site";

const CareerPath = () => (
  <ol className="max-w-2xl mx-auto space-y-3">
    {CAREER_PATH.map((step, i) => (
      <li key={step} className="flex items-center gap-4">
        <span className="shrink-0 w-10 h-10 rounded-full gradient-rose text-primary-foreground flex items-center justify-center text-sm font-semibold">
          {i + 1}
        </span>
        <span className="flex-1 bg-card border border-border rounded-xl px-5 py-3 text-foreground font-medium text-sm md:text-base">
          {step}
        </span>
      </li>
    ))}
  </ol>
);

export default CareerPath;
