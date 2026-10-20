import { Intro } from "@/components/ui";
import { site, enquiriesEnabled } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Privacy & Cookies",
  "How this Do Clubs website handles enquiries, technical data, cookies and links to specialist providers.",
  "/privacy",
);
export default function Privacy() {
  return (
    <>
      <Intro eyebrow="Your information" title="Privacy & cookies.">
        <p>Clear information about this website and your choices.</p>
      </Intro>
      <article className="shell legal">
        <h2>Who is responsible?</h2>
        {site.legalEntity && site.privacyEmail ? (
          <p>
            The controller for Do Clubs website enquiries is {site.legalEntity}.
            For privacy questions or to exercise your data rights, email{" "}
            <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
          </p>
        ) : (
          <p>
            Do Clubs is a new umbrella brand. Its legal operator and privacy
            contact are being confirmed before online enquiries open. This
            website does not currently accept enquiry submissions.
          </p>
        )}
        <h2>Enquiries</h2>
        {enquiriesEnabled() ? (
          <>
            <p>
              We use the contact details, school information, programme
              preferences and message you provide to answer your enquiry and
              discuss the services you request. We rely on our legitimate
              interests in responding to relevant enquiries; where you ask us to
              take steps towards a contract, we may also process information for
              that purpose. Enquiries are sent securely to our configured
              enquiry processor and accessed by the team responsible for
              responding.
            </p>
            <p>
              Enquiry retention: {site.retention}. We do not use an enquiry to
              sign you up for marketing.
            </p>
          </>
        ) : (
          <p>
            Online enquiries are disabled. Details entered into the form are not
            submitted or saved by this website. Once the enquiry service opens,
            this notice will explain the operator, processing arrangements and
            retention period.
          </p>
        )}
        <h2>Technical information and cookies</h2>
        <p>
          This implementation does not use advertising, analytics, tracking
          cookies or local storage. The hosting provider may process technical
          request information such as IP addresses and browser details to serve
          and protect the website. No optional cookie consent banner is used
          because no optional cookies are set.
        </p>
        <h2>Specialist websites and bookings</h2>
        <p>
          Links to Docode, DoSport and DoChess take
          you to separate websites. Their own privacy information applies. Do
          Clubs does not take payments or collect children’s booking details
          here.
        </p>
        <h2>Your rights</h2>
        <p>
          Depending on the circumstances, you may ask to access, correct, erase
          or restrict use of your personal information, object to processing, or
          request a portable copy. You can raise concerns with the UK
          Information Commissioner’s Office at{" "}
          <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk</a>.
        </p>
        <h2>Please keep enquiries general</h2>
        <p>
          Do not include children’s names, medical information or other
          sensitive details. Discuss any support requirements directly with the
          specialist provider through an agreed appropriate channel.
        </p>
        <p className="muted">Last updated: 20 October 2026.</p>
      </article>
    </>
  );
}
