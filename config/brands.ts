export type Brand = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  accentColour: string;
  logoAsset: string | null;
  launchStatus: "live" | "coming-soon";
  bookingUrl: string | null;
  externalWebsiteUrl: string;
  activities: string[];
  benefit: string;
  audience: string;
};
export const brands: Brand[] = [
  {
    id: "docode",
    name: "Docode",
    tagline: "Create the future.",
    description:
      "Coding, Minecraft Education, AI and digital skills. Big ideas start with a little curiosity.",
    domain: "https://www.docode.co.uk",
    accentColour: "#00cc32",
    logoAsset: "/brands/docode.png",
    launchStatus: "live",
    bookingUrl: "https://www.docode.co.uk/book",
    externalWebsiteUrl: "https://www.docode.co.uk",
    activities: [
      "Coding clubs",
      "Minecraft Education",
      "AI & digital skills",
      "Technology enrichment",
      "Holiday Code Camps",
    ],
    benefit:
      "Children turn ideas into games, animations and digital projects, practising creativity and problem-solving along the way.",
    audience:
      "Ages 5–13; check individual sessions for year groups and availability.",
  },
  {
    id: "dosport",
    name: "DoSport",
    tagline: "Get moving.",
    description:
      "A new way to play, build confidence and enjoy being active. Specialist sports enrichment is on its way.",
    domain: "https://www.dosport.co.uk",
    accentColour: "#df6a35",
    logoAsset: null,
    launchStatus: "coming-soon",
    bookingUrl: null,
    externalWebsiteUrl: "https://www.dosport.co.uk",
    activities: [
      "Multi-sports",
      "Football",
      "Athletics",
      "Team games",
      "Movement & active play",
    ],
    benefit:
      "Planned sessions will encourage teamwork, coordination and the confidence to try something new.",
    audience:
      "Being developed for primary and prep-school communities. Ages and delivery details will be confirmed at launch.",
  },
  {
    id: "dochess",
    name: "DoChess",
    tagline: "Think ahead.",
    description:
      "Small moves. Big possibilities. A new chess programme to spark curiosity and strategic thinking.",
    domain: "https://www.dochess.co.uk",
    accentColour: "#6556ad",
    logoAsset: null,
    launchStatus: "coming-soon",
    bookingUrl: null,
    externalWebsiteUrl: "https://www.dochess.co.uk",
    activities: [
      "Beginner chess",
      "Chess strategy",
      "Problem-solving",
      "Club play",
      "Friendly competitions",
    ],
    benefit:
      "Planned activities will give children space to practise concentration, consider different possibilities and learn from each move.",
    audience:
      "Being developed for primary and prep-school communities. Ages and delivery details will be confirmed at launch.",
  },
];
export function brandHref(b: Brand) {
  return b.launchStatus === "live" ? b.externalWebsiteUrl : `/clubs/${b.id}`;
}
