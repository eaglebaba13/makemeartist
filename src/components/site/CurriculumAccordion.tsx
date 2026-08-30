import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { CurriculumMonth } from "@/data/curriculum";

const CurriculumAccordion = ({ months }: { months: CurriculumMonth[] }) => (
  <Accordion type="single" collapsible className="space-y-3">
    {months.map((m) => (
      <AccordionItem
        key={m.month}
        value={m.month}
        className="bg-card border border-border rounded-2xl px-5 data-[state=open]:border-primary/30"
      >
        <AccordionTrigger className="text-left hover:no-underline py-5">
          <span>
            <span className="block text-xs tracking-[0.2em] uppercase text-primary mb-1">{m.month}</span>
            <span className="font-heading text-lg font-bold text-foreground">{m.theme}</span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {m.modules.map((mod) => (
              <div key={mod.title}>
                <h4 className="font-semibold text-foreground text-sm mb-2">{mod.title}</h4>
                <ul className="space-y-1">
                  {mod.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-gold">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {m.practicals && (
            <div className="mt-6">
              <h4 className="font-semibold text-foreground text-sm mb-2">Practical Work</h4>
              <div className="flex flex-wrap gap-2">
                {m.practicals.map((p) => (
                  <span key={p} className="text-xs bg-rose-light/50 text-foreground px-3 py-1.5 rounded-full">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {m.assessment && (
            <div className="mt-6">
              <h4 className="font-semibold text-foreground text-sm mb-2">Assessment</h4>
              <ul className="space-y-1">
                {m.assessment.map((a) => (
                  <li key={a} className="text-sm text-muted-foreground">✔ {a}</li>
                ))}
              </ul>
            </div>
          )}

          {m.note && (
            <p className="mt-6 text-xs text-muted-foreground bg-secondary rounded-xl p-4 border border-border">
              <strong className="text-foreground">Important:</strong> {m.note}
            </p>
          )}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default CurriculumAccordion;
