import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Corporate & Business Events in Dubai | Olga Events",
  description:
    "Powerful, unforgettable corporate events in Dubai — gala dinners, conferences, product launches, award ceremonies, networking events and company parties.",
};

export default function CorporateEventsPage() {
  return (
    <ServicePage
      kicker="Corporate & Business Events"
      title="Corporate & Business Events in Dubai"
      intro="We create powerful and unforgettable corporate events — from elegant gala dinners and professional conferences to product launches, award ceremonies, networking events, and company parties."
      blocks={[
        {
          kicker: "What we do",
          title: "Events that represent your brand",
          paragraphs: [
            "From concept to execution, we design corporate events that reflect your brand and leave a lasting impression on your guests. We handle the full experience — venue, design, production, AV, and on-the-day coordination — so your team can focus on the people in the room.",
            "Whether it is an intimate executive dinner or a large-scale conference, we bring the same structure, attention to detail, and creative direction that define every Olga Events project.",
          ],
        },
        {
          kicker: "Occasions",
          title: "Gala dinners, launches & conferences",
          paragraphs: [
            "Gala dinners, professional conferences, product launches, award ceremonies, networking events, and company celebrations — each is planned with clear logistics, refined design, and seamless production.",
            "We coordinate directly with your venue and suppliers, manage timelines and run-of-show, and deliver a polished event that runs exactly to plan.",
          ],
        },
      ]}
      ctaTitle="Plan your corporate event"
      ctaText="Tell us about your event and we'll put together a tailored proposal."
    />
  );
}
