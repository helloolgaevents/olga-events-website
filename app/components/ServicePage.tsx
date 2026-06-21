import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { PageHeader, Section, SectionTitle, Prose, CTASection } from "./ui";

export type ServiceBlock = {
  kicker: string;
  title: string;
  paragraphs: string[];
};

export default function ServicePage({
  kicker,
  title,
  intro,
  blocks,
  ctaTitle = "Let's plan your event",
  ctaText = "Tell us about your occasion — we'll put together a proposal made for you. Free, no obligation.",
}: {
  kicker: string;
  title: string;
  intro: string;
  blocks: ServiceBlock[];
  ctaTitle?: string;
  ctaText?: string;
}) {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader />

      <PageHeader kicker={kicker} title={title} intro={intro} />

      {blocks.map((b, i) => (
        <Section key={b.title} alt={i % 2 === 0}>
          <div className="mx-auto max-w-3xl">
            <SectionTitle kicker={b.kicker} title={b.title} />
            <div className="mt-8">
              <Prose paragraphs={b.paragraphs} />
            </div>
          </div>
        </Section>
      ))}

      <CTASection title={ctaTitle} text={ctaText} />

      <SiteFooter />
    </div>
  );
}
