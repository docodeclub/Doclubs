import { Intro, Button, BrandCards, Closing } from "@/components/ui";
import { brands } from "@/config/brands";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "For Parents",
  "Find your child’s next interest. Explore specialist clubs and book available Docode sessions directly with Docode.",
  "/parents",
);
export default function Parents() {
  const docode = brands.find((b) => b.id === "docode")!;
  return (
    <>
      <Intro
        eyebrow="For parents & curious children"
        title="A little curiosity can lead anywhere."
      >
        <p>
          Whether they love making, moving or working out the next move, start
          by exploring what catches their imagination.
        </p>
      </Intro>
      <section className="shell section parents-steps">
        <p className="eyebrow">Finding a club is simple</p>
        <div className="steps">
          {[
            [
              "01",
              "Discover an interest",
              "Explore each specialist brand and check which programmes are available.",
            ],
            [
              "02",
              "Meet the provider",
              "Visit the specialist website for locations, ages, dates, prices and practical details.",
            ],
            [
              "03",
              "Book directly",
              "The specialist provider handles your booking, payment and session information.",
            ],
          ].map(([n, t, p]) => (
            <article key={n}>
              <span>{n}</span>
              <h2>{t}</h2>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <div className="notice">
          <strong>
            Do Clubs helps you discover. Your provider handles the booking.
          </strong>
          <p>
            There is no central checkout here. You’ll always know which provider
            you are booking with.
          </p>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Your next discovery</p>
            <h2>Meet the clubs.</h2>
          </div>
        </div>
        <BrandCards />
      </section>
      <section className="shell booking-panel">
        <div>
          <span className="status live">Available now</span>
          <h2>Ready to get creative?</h2>
          <p>
            Docode offers coding clubs and holiday Code Camps for ages 5–13.
            Choose your school or camp on Docode’s booking website to see
            session availability and the right year groups.
          </p>
          {docode.launchStatus === "live" && docode.bookingUrl && (
            <Button href={docode.bookingUrl}>Find a lesson with Docode</Button>
          )}
        </div>
        <div>
          <h3>Already booked?</h3>
          <p>
            For changes, collection arrangements or a question about your
            child’s session, contact the provider on your booking confirmation.
          </p>
          <Button href="https://www.docode.co.uk/contact" secondary>
            Contact Docode
          </Button>
        </div>
      </section>
      <section className="shell faq section">
        <p className="eyebrow">Good to know</p>
        <h2>A few practical questions.</h2>
        {[
          [
            "Can I book DoSport or DoChess yet?",
            "Not yet. Both are preparing to launch. Their Do Clubs pages will explain availability and link to their booking arrangements once they are ready.",
          ],
          [
            "Which ages are the clubs for?",
            "Docode offers programmes for children aged 5–13, with year groups specified for individual sessions. Age ranges for DoSport and DoChess will be confirmed at launch.",
          ],
          [
            "What if my child needs additional support?",
            "Speak to the specialist provider before booking so you can discuss suitability, support and practical arrangements. Please do not send sensitive information through this website’s general enquiry form.",
          ],
          [
            "Can I request a club at my school?",
            "Yes. Ask your school to explore our schools page and discuss its interests with us. Availability depends on the programme, location and timetable.",
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <Closing />
    </>
  );
}
