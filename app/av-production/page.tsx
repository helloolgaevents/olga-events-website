import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "AV Systems & Event Production in Dubai | Olga Events",
  description:
    "State-of-the-art AV systems and full event production in Dubai, dynamic lighting, LED and projection screens, stage lights, sound, and custom-built structures.",
};

export default function AvProductionPage() {
  return (
    <ServicePage
      kicker="AV & Production"
      title="AV Systems & Event Production in Dubai"
      intro="Bring your event to life with our state-of-the-art AV systems and full production team, from lighting and sound to large custom-built structures."
      blocks={[
        {
          kicker: "AV System",
          title: "Lighting, sound & visuals",
          paragraphs: [
            "Bring your event to life with our state-of-the-art AV systems. We provide dynamic lighting, stunning visual effects, LED and projection screens, professional stage lights, and crystal-clear sound systems.",
            "Our technical team designs and operates every element to match your concept, ensuring the look and atmosphere are perfect from the first guest to the final moment.",
          ],
        },
        {
          kicker: "Event Build & Production",
          title: "Structures & custom installations",
          paragraphs: [
            "We handle the full production of event structures and décor, from stages, catwalks, and exhibition stands to large custom-built installations.",
            "With in-house production, we maintain full control over quality, timelines, and execution, delivering complex builds safely and to a high standard.",
          ],
        },
      ]}
      ctaTitle="Plan your production"
      ctaText="Tell us about your event and we'll put together a tailored proposal."
    />
  );
}
