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
    logoAsset: "/brands/docode-primary.svg",
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
      "School sports enrichment that helps children build confidence, develop movement skills and enjoy being active.",
    domain: "https://www.dosport.co.uk",
    accentColour: "#df6a35",
    logoAsset: "/brands/dosport-primary.svg",
    launchStatus: "live",
    bookingUrl: null,
    externalWebsiteUrl: "https://www.dosport.co.uk",
    activities: [
      "Multisport",
      "Ball skills",
      "Throwing & catching",
      "Target games",
      "Movement challenges",
    ],
    benefit:
      "DoSport is developing welcoming multisport sessions with schools, encouraging coordination, teamwork and the confidence to have a go.",
    audience:
      "Reception–Year 2 focus. Visit DoSport for school partnership enquiries and current programme details.",
  },
  {
    id: "dochess",
    name: "DoChess",
    tagline: "Think ahead.",
    description:
      "Small moves. Big possibilities. Explore chess, problem-solving and strategic thinking with DoChess.",
    domain: "https://www.dochess.co.uk",
    accentColour: "#6556ad",
    logoAsset: "/brands/dochess-primary.svg",
    launchStatus: "live",
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
      "Chess gives children space to practise concentration, consider different possibilities and learn from each move.",
    audience:
      "Check the specialist website for year groups, locations and current programme availability.",
  },
];
export function brandHref(b: Brand) {
  return b.launchStatus === "live" ? b.externalWebsiteUrl : `/clubs/${b.id}`;
}
