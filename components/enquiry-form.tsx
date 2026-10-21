"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { brands } from "@/config/brands";
export default function EnquiryForm({
  school = false,
  enabled = false,
  programme = "",
}: {
  school?: boolean;
  enabled?: boolean;
  programme?: string;
}) {
  const [route, setRoute] = useState(school ? "school" : "general");
  const schoolFields = school || route === "school";
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  if (!enabled) {
    return (
      <div className="provider-directory">
        <p className="eyebrow">The Do Clubs team</p>
        <h3>{school ? "Bring a specialist club to your school." : "How can we help?"}</h3>
        <p>Find programme information and the right contact through your specialist team.</p>
        <div className="provider-links">
          {brands.map((brand) => (
            <a key={brand.id} href={`${brand.externalWebsiteUrl}/${school ? "schools" : "contact"}`}>
              <span><strong>{brand.name}</strong><small>{brand.tagline}</small></span>
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="provider-help">Already booked? Your confirmation contains the details for your session and provider.</p>
      </div>
    );
  }
  return (
    <form
      aria-label={school ? "School enquiry" : "Contact enquiry"}
      className="enquiry-form"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!enabled || state === "sending") return;
        setMessage("");
        setState("sending");
        const form = e.currentTarget;
        const f = new FormData(form);
        try {
          const response = await fetch("/api/enquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...Object.fromEntries(f),
              programmes: f.getAll("programmes"),
            }),
          });
          const data = await response.json();
          setMessage(data.message);
          setState(response.ok ? "success" : "error");
          if (response.ok) {
            form.reset();
            setRoute(school ? "school" : "general");
          }
        } catch {
          setState("error");
          setMessage(
            "Your enquiry could not be sent. Your details are still here; please try again.",
          );
        }
      }}
    >
      {school ? (
        <input type="hidden" name="route" value="school" />
      ) : (
        <label>
          Enquiry type
          <select
            name="route"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
          >
            <option value="general">General enquiry</option>
            <option value="parent">Parent enquiry</option>
            <option value="school">School partnership</option>
          </select>
        </label>
      )}
      <div className="form-grid">
        {schoolFields && (
          <>
            <label>
              School name
              <input
                name="school"
                required
                maxLength={150}
                autoComplete="organization"
              />
            </label>
            <label>
              Job title
              <input
                name="jobTitle"
                required
                maxLength={100}
                autoComplete="organization-title"
              />
            </label>
          </>
        )}
        <label>
          Contact name
          <input name="name" required maxLength={100} autoComplete="name" />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
          />
        </label>
        <label>
          Telephone <span>(optional)</span>
          <input name="phone" type="tel" maxLength={40} autoComplete="tel" />
        </label>
        {schoolFields && (
          <label>
            Preferred arrangement
            <select name="arrangement" defaultValue="Not sure yet">
              <option>Not sure yet</option>
              <option>Parent-funded club</option>
              <option>School-funded enrichment</option>
              <option>Lunchtime or after-school</option>
              <option>Special event or enrichment day</option>
            </select>
          </label>
        )}
      </div>
      <fieldset>
        <legend>
          Interested programmes <span>(optional)</span>
        </legend>
        <div className="checkboxes">
          {brands.map((brand) => (
            <label key={brand.id}>
              <input
                name="programmes"
                type="checkbox"
                value={brand.name}
                defaultChecked={programme === brand.id}
              />
              {brand.name}
              {brand.launchStatus === 'coming-soon' && <small>Coming soon</small>}
            </label>
          ))}
        </div>
      </fieldset>
      <label>
        Message
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={4000}
          placeholder="Tell us what you have in mind…"
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input tabIndex={-1} name="website" autoComplete="off" />
        </label>
      </div>
      <p className="form-privacy">
        Please don’t include children’s names, medical details or other
        sensitive information. We use your details only to respond to your
        enquiry. <Link href="/privacy">Privacy information</Link>.
      </p>
      <button
        className="button"
        disabled={!enabled || state === "sending"}
        type="submit"
      >
        {state === "sending"
          ? "Sending…"
          : enabled
            ? "Send enquiry"
            : "Enquiries opening soon"}
        <ArrowRight size={18} />
      </button>
      <div role={state === "error" ? "alert" : "status"} aria-live="polite">
        {message && <p className={`form-result ${state}`}>{message}</p>}
      </div>
    </form>
  );
}
