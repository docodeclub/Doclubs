import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "@/components/contact-form";
import { Intro } from "@/components/ui";
import EnquiryForm from "@/components/enquiry-form";
import { enquiriesEnabled, site } from "@/config/site";
import { brands } from "@/config/brands";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Talk to Do Clubs about school partnerships, specialist programmes or finding the right specialist club for your child.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <Intro
        eyebrow="Let’s talk"
        title="Good things start with a conversation."
      >
        <p>
          Explore a school partnership, discover our programmes or find the
          right place for your question.
        </p>
      </Intro>
      <section className="shell contact-routes">
        <article>
          <span>01 / SCHOOLS</span>
          <h2>More for your pupils.</h2>
          <p>
            Tell us about your school and the activities you would like to
            introduce.
          </p>
          <Link className="text-link" href="/schools#enquire">
            School partnership enquiry →
          </Link>
        </article>
        <article>
          <span>02 / PARENTS</span>
          <h2>Find the right club.</h2>
          <p>
            Explore available programmes or contact your provider about an
            existing booking.
          </p>
          <Link className="text-link" href="/parents">
            Help for parents →
          </Link>
        </article>
        <article>
          <span>03 / GENERAL</span>
          <h2>Something else in mind?</h2>
          <p>Ask about Do Clubs or find the right specialist programme.</p>
          <Link className="text-link" href="#enquiry">
            General enquiry →
          </Link>
        </article>
      </section>
      <section className="shell form-section" id="enquiry">
        <div>
          <p className="eyebrow">Send an enquiry</p>
          <h2>What’s on your mind?</h2>
          <p>
            Choose a route and share a little about what you’re looking for.
          </p>
          {site.email && (
            <p>
              <a className="inline-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          )}
          {site.telephone && (
            <p>
              <a href={`tel:${site.telephone.replace(/\s/g, "")}`}>
                {site.telephone}
              </a>
            </p>
          )}
          <div className="contact-note">
            <h3>Contact your specialist provider</h3>
            <p>
              For programme details or an existing booking, visit the relevant
              brand website to reach its team.
            </p>
            {brands.map((brand) => (
              <p key={brand.id}>
                <a className="text-link" href={brand.externalWebsiteUrl}>
                  Visit {brand.name} ↗
                </a>
              </p>
            ))}
          </div>
        </div>
        <Suspense fallback={<EnquiryForm enabled={false} />}><ContactForm enabled={enquiriesEnabled()} /></Suspense>
      </section>
    </>
  );
}
