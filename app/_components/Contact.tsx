"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORM_ID) {
      setStatus("error");
      setErrorMsg(
        "Form is not configured yet. Set NEXT_PUBLIC_FORMSPREE_FORM_ID in .env.local."
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields, humans don't.
    if (data.get("_gotcha")) {
      setStatus("success"); // pretend it worked
      form.reset();
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const json = (await res.json().catch(() => null)) as
        | { errors?: Array<{ message?: string }> }
        | null;
      const message =
        json?.errors?.map((err) => err.message).filter(Boolean).join(", ") ||
        "Something went wrong. Please try again or email us directly.";
      setStatus("error");
      setErrorMsg(message);
    } catch {
      setStatus("error");
      setErrorMsg(
        "Couldn't reach the server. Check your connection and try again."
      );
    }
  }

  const submitting = status === "submitting";

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="contact-grid">
          <div>
            <h2 className="contact-heading reveal">
              Let&apos;s work together to <em>create your vision.</em>
            </h2>
            <p className="contact-body reveal reveal-delay-1">
              Whether you&apos;d like to donate, sponsor, volunteer, or simply
              learn more — we&apos;d love to hear from you.
            </p>
            <div className="contact-details reveal reveal-delay-2">
              <div className="contact-detail">
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-val">
                  Moreno Valley, California
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Founded</div>
                <div className="contact-detail-val">
                  No Boundaries Dance Foundation, Inc.
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Director</div>
                <div className="contact-detail-val">Suzi Zuppardo</div>
              </div>
            </div>
          </div>
          <form
            className="contact-form reveal reveal-delay-1"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Subject line for the email Formspree sends */}
            <input
              type="hidden"
              name="_subject"
              value="New NBDF website inquiry"
            />
            {/* Honeypot — must stay empty */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-10000px",
                width: 1,
                height: 1,
                opacity: 0,
              }}
            />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  required
                  disabled={submitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Smith"
                  required
                  disabled={submitting}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                required
                disabled={submitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="interest">I&apos;m interested in</label>
              <select
                id="interest"
                name="interest"
                defaultValue=""
                required
                disabled={submitting}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option>Donating</option>
                <option>Volunteering</option>
                <option>Business Sponsorship</option>
                <option>Sponsoring a Dancer</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how you'd like to get involved..."
                required
                disabled={submitting}
              />
            </div>

            {status === "success" && (
              <div className="form-status form-status-success" role="status">
                Thanks — your message is in. We&apos;ll be in touch soon.
              </div>
            )}
            {status === "error" && (
              <div className="form-status form-status-error" role="alert">
                {errorMsg}
              </div>
            )}

            <button
              className="form-submit"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
