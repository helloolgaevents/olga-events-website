import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Seasonal & Festive Events in Dubai | Olga Events",
  description:
    "Vibrant, memorable festive celebrations in Dubai, from Ramadan and Eid to New Year, Christmas and National Day, designed and produced by Olga Events.",
};

export default function SeasonalEventsPage() {
  return (
    <ServicePage
      kicker="Seasonal Events"
      title="Seasonal & Festive Events in Dubai"
      intro="We design vibrant and memorable festive celebrations, from the spirit of Ramadan and Eid to the sparkle of New Year, Christmas, and National Day."
      blocks={[
        {
          kicker: "What we do",
          title: "Festive moments, beautifully staged",
          paragraphs: [
            "Ramadan majlis and Iftar gatherings, Eid celebrations, New Year and Christmas parties, and National Day events, we create festive experiences that capture the spirit of each occasion.",
            "From themed décor and florals to lighting, production, and full coordination, every seasonal event is designed to feel special and run effortlessly.",
          ],
        },
        {
          kicker: "For business & home",
          title: "Corporate and private seasonal events",
          paragraphs: [
            "We produce seasonal celebrations for both companies and families, from large corporate festive gatherings to intimate celebrations at home.",
            "Whatever the season, we bring refined design, careful planning, and seamless execution to make the occasion memorable.",
          ],
        },
      ]}
      ctaTitle="Plan your seasonal event"
      ctaText="Tell us about your celebration and we'll put together a tailored proposal."
    />
  );
}
