export const site = {
  name: "Do Clubs",
  url: "https://www.doclubs.co.uk",
  tagline: "Discover. Learn. Play.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  legalEntity: process.env.LEGAL_ENTITY || "",
  privacyEmail: process.env.PRIVACY_EMAIL || "",
  retention: process.env.ENQUIRY_RETENTION || "",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
};
export function bookingHref() {
  try {
    const url = new URL(site.bookingUrl);
    if (url.protocol === "https:") return url.href;
  } catch { /* Use programme discovery until a booking destination is supplied. */ }
  return "/clubs";
}
export const navigation = [
  ["/", "Home"],
  ["/clubs", "Our Clubs"],
  ["/schools", "For Schools"],
  ["/parents", "For Parents"],
  ["/about", "About Us"],
  ["/contact", "Contact"],
];
export function enquiriesEnabled() {
  return process.env.GITHUB_PAGES !== "true" && Boolean(
    process.env.ENQUIRY_WEBHOOK_URL &&
    process.env.ENQUIRY_WEBHOOK_SECRET &&
    site.legalEntity &&
    site.privacyEmail &&
    site.retention,
  );
}
