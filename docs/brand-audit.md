# Docode reference audit — 20 October 2026

The workspace was empty, with no Docode source code or prior Do Clubs assets. Reviewed the public Docode site without modifying it.

## Pages and journeys inspected

- https://www.docode.co.uk — desktop and 390px mobile screenshots, full rendered document, navigation, hero, programme cards, learning ladder, footer, source HTML and stylesheet.
- https://www.docode.co.uk/schools — rendered school page, programme/year-group descriptions, school responsibilities, booking arrangements, safeguarding wording and enquiry fields. Inspected tablet layout at 768px.
- https://www.docode.co.uk/contact — parent/school/general routing, labelled form, live provider contact link.
- https://www.docode.co.uk/book — verified the live first booking step, school selector and separate clubs/camps choices. Did not enter customer details or complete a booking.
- Opened mobile menu and inspected its routes and expanded state.

## Observed visual system

Computed styles: Helvetica Neue, Helvetica, Arial, sans-serif; navy `rgb(32,27,73)` / `#201b49`; vivid green CTA `rgb(0,204,50)` / `#00cc32`; blue `rgb(64,53,255)` / `#4035ff`; pill buttons with 9999px radius. White navigation, rounded white panels, pale backgrounds, strong bold headings, generous section spacing, compact labels and a multi-column footer. Desktop active navigation uses a blue pill; mobile collapses to a Menu button with prominent booking action. Hero uses classroom imagery with dark navy overlay. The site changes content density at mobile sizes. Initial client loading panels resolve into the full pages.

Read public HTML and `/assets/main-dYaXzS1f.css`; inspected rendered typography, colours, radius and image sources. Only the existing Docode logo was copied as a brand asset, from `/assets/docode-logo-blue-text.png`. Its pixels have not been modified. No customer records, confidential materials or school logos were transferred.

## Adaptation for Do Clubs

Retained the observed font stack, navy and green, pill CTAs, rounded surfaces and roomy layouts. Created an original Do Clubs text wordmark and illustrative activity compositions using CSS and Lucide vector icons. This gives the umbrella brand its own visual identity without suggesting new programmes already have pupils or staff. Muted clay and lavender identify sport and chess; blue is reserved for accessible focus outlines. Docode's original logo is used in the family strip and programme cards.

Verified Docode's age range of 5–13, coding and Minecraft activities, creative technology, holiday camps and direct booking route against its public website. AI and digital skills are also specified in the owner's brief. No new brand testimonials, qualifications, customer lists or achievements were introduced. London and Surrey are presented as Do Clubs' initial enquiry focus, not guaranteed delivery coverage.

Animations are intentionally lighter than Docode's decorative hero treatment: short hover transitions, smooth anchor scrolling and reduced-motion support. No motion is required to understand content.
