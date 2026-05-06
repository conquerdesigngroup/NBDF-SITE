"use client";

export default function Contact() {
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
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: wire to backend (Netlify Forms / API route / Formspree)
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" placeholder="Jane" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" placeholder="Smith" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="jane@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="interest">I&apos;m interested in</label>
              <select id="interest" name="interest" defaultValue="">
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
              />
            </div>
            <button className="form-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
