# Do Clubs design system

## Foundations

- Font: local Helvetica Neue / Helvetica / Arial sans-serif, matching the observed Docode stack. No external font requests.
- Navy `#201b49`: headings, body emphasis and closing section.
- Green `#00cc32`: primary actions; darker `#368941` for large green display text.
- Blue `#4035ff`: visible keyboard focus, matching Docode's secondary colour.
- Backgrounds: white, warm pale `#f7f8f4`, activity-specific soft greens, clay and lavender.
- Body copy: `#626170`; borders `#e6e6e9`.
- Rounded surfaces: 22px; controls: 8px; buttons: pill shapes.
- Content width: 1220px, with mobile 20px side margins. Breakpoints at 1150, 960 and 650px.

## Components

`Intro`, `Button`, `BrandArt`, `BrandName`, `BrandCards`, `Closing`, `Header`, `Footer`, `EnquiryForm`. One h1 per page. Menu uses aria-expanded, Escape handling and closes after selection. Forms have associated labels, required fields, native browser constraints, server validation and live status announcements. FAQ uses native details/summary.

The original Docode logo is an optimised local image. Do Clubs, DoSport and DoChess wordmarks are temporary typographic treatments. Activity graphics are CSS and Lucide vector compositions, not photographs of purported customers or sessions. Lucide is distributed with its ISC licence in the installed dependency.

## Interaction and motion

Use green for the primary next action, outlined pills for secondary actions and arrows for direction. External links use an up-right arrow and stay in the current tab. Upcoming brand cards link internally. Small hover changes are disabled under prefers-reduced-motion, as is smooth scrolling. No analytics or optional cookies are installed.
