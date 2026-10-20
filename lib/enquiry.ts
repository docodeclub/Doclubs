import { brands } from "../config/brands";
export type Enquiry = {
  route: string;
  name: string;
  email: string;
  phone: string;
  school: string;
  jobTitle: string;
  arrangement: string;
  message: string;
  programmes: string[];
};
export function validateEnquiry(
  input: unknown,
): { ok: true; value: Enquiry } | { ok: false; message: string } {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { ok: false, message: "Please provide your enquiry details." };
  const p = input as Record<string, unknown>;
  const limits: Record<string, number> = {
    route: 20,
    name: 100,
    email: 254,
    phone: 40,
    school: 150,
    jobTitle: 100,
    arrangement: 80,
    message: 4000,
  };
  const value: Record<string, string> = {};
  for (const [key, max] of Object.entries(limits)) {
    if (p[key] !== undefined && typeof p[key] !== "string")
      return { ok: false, message: "Please check the form fields." };
    value[key] = ((p[key] as string) || "").trim();
    if (value[key].length > max)
      return { ok: false, message: `Please shorten the ${key} field.` };
  }
  if (!["school", "parent", "general"].includes(value.route))
    return { ok: false, message: "Choose an enquiry type." };
  if (
    value.name.length < 2 ||
    !/^\S+@[^\s@]+\.[^\s@]+$/.test(value.email) ||
    value.message.length < 10
  )
    return {
      ok: false,
      message:
        "Please enter your name, a valid email and a message of at least 10 characters.",
    };
  if (value.route === "school" && (!value.school || !value.jobTitle))
    return {
      ok: false,
      message: "Please include your school name and job title.",
    };
  const programmes = p.programmes ?? [];
  if (
    !Array.isArray(programmes) ||
    programmes.length > brands.length ||
    !programmes.every((v) => brands.some(brand => brand.name === v))
  )
    return { ok: false, message: "Please choose a listed programme." };
  const arrangements = [
    "",
    "Not sure yet",
    "Parent-funded club",
    "School-funded enrichment",
    "Lunchtime or after-school",
    "Special event or enrichment day",
  ];
  if (!arrangements.includes(value.arrangement))
    return { ok: false, message: "Choose a listed arrangement." };
  return {
    ok: true,
    value: { ...value, programmes: [...new Set(programmes)] } as Enquiry,
  };
}
