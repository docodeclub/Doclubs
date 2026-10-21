import { Intro, Button, Closing } from "@/components/ui";
import EnquiryForm from "@/components/enquiry-form";
import { enquiriesEnabled } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { brands } from "@/config/brands";
export const metadata = pageMetadata(
  "For Schools",
  "Explore school partnerships for primary and independent prep-school enrichment in London and Surrey, with Docode, DoSport and DoChess.",
  "/schools",
);
export default function Schools() {
  return (
    <>
      <Intro
        eyebrow="For primary & prep schools"
        title="One family of specialist clubs. More opportunities for your pupils."
      >
        <p>
          A thoughtful addition to your enrichment programme. A clear
          conversation about what your pupils need.
        </p>
        <Button href="#enquire">Let’s talk about your school</Button>
      </Intro>
      <section className="shell split-section">
        <div>
          <p className="eyebrow">Specialist enrichment for your school</p>
          <h2>
            Specialist interests.
            <br />A shared plan.
          </h2>
        </div>
        <div>
          <p>
            Do Clubs brings coding, sport and chess together through three
            specialist brands. We work with schools to build an enrichment
            programme that fits their pupils and their school day.
          </p>
          <p>
            Explore DoSport for sports enrichment and DoChess for chess. Each
            specialist website is the place to discuss year groups, locations,
            timings and current availability.
          </p>
          <div className="actions">
            {brands.map((brand) => (
              <Button key={brand.id} href={brand.externalWebsiteUrl} secondary>
                Explore {brand.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
      <section className="section tinted">
        <div className="shell">
          <p className="eyebrow">A fit for your school</p>
          <h2>
            Choose the arrangement.
            <br />
            We’ll discuss the details.
          </h2>
          <p className="measure">
            Choose a partnership model that fits your school. We’ll agree the
            programme, timetable and practical arrangements with you.
          </p>
          <div className="model-grid">
            {[
              [
                "01",
                "Parent-funded clubs",
                "Families book and pay through the relevant specialist provider, with the booking route agreed with your school.",
              ],
              [
                "02",
                "School-funded enrichment",
                "Commission activities as part of your wider enrichment programme, with scope and pricing agreed in advance.",
              ],
              [
                "03",
                "Lunchtime & after-school",
                "Explore a timetable that fits your pupils, room availability and school day.",
              ],
              [
                "04",
                "Events & enrichment days",
                "Discuss a workshop or one-off specialist session for a particular theme or occasion.",
              ],
            ].map(([n, t, p]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="shell split-section">
        <div>
          <p className="eyebrow">The practical things matter</p>
          <h2>
            Clear responsibilities.
            <br />
            From the start.
          </h2>
        </div>
        <div>
          <h3>Planning and organisation</h3>
          <p>
            Before a club starts, agree year groups, dates, equipment, staffing,
            communication and who handles bookings. Each specialist provider
            remains responsible for its own programme.
          </p>
          <h3>Safeguarding and pupil care</h3>
          <p>
            Ask for programme-specific safeguarding information and relevant
            staff assurance. Handover, collection, additional needs and your
            school’s requirements should be agreed with the provider before delivery.
          </p>
        </div>
      </section>
      <section className="shell form-section" id="enquire">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>
            What would you like
            <br />
            your pupils to discover?
          </h2>
          <p>
            Speak to our specialist teams about your school, your pupils’
            interests and the arrangement that works for you.
          </p>
          <p>
            For an existing school club, contact the specialist provider on
            your booking or school partnership confirmation.
          </p>
        </div>
        <EnquiryForm school enabled={enquiriesEnabled()} />
      </section>
    </>
  );
}
