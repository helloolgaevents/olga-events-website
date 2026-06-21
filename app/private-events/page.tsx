import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Private Events in Dubai | Celebrations by Olga Events",
  description:
    "Unforgettable private celebrations of every size in Dubai, from intimate gatherings to grand occasions, designed and produced by Olga Events.",
};

export default function PrivateEventsPage() {
  return (
    <ServicePage
      kicker="Private Events"
      title="Private Events in Dubai"
      intro="At Olga Events, we create unforgettable celebrations of every size, from intimate gatherings to grand occasions."
      blocks={[
        {
          kicker: "What we do",
          title: "Celebrations of every size",
          paragraphs: [
            "Birthdays, anniversaries, engagements, baby celebrations, and milestone parties, we design private events that feel personal, warm, and beautifully produced.",
            "Every celebration is fully customised to you: concept, design, décor, florals, lighting, and full coordination on the day, so you can simply enjoy the moment with your guests.",
          ],
        },
        {
          kicker: "How it works",
          title: "Designed around you",
          paragraphs: [
            "We start with your vision and budget, then develop a tailored concept and manage every detail through to execution. With in-house production and a hands-on team, we keep full control over quality and timing.",
            "From intimate dinners at home to large private parties at Dubai's finest venues, we bring the same refined, detail-focused approach to every event.",
          ],
        },
      ]}
      ctaTitle="Plan your celebration"
      ctaText="Tell us about your occasion and we'll create a proposal made for you."
    />
  );
}
