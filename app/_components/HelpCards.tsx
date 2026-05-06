export default function HelpCards() {
  return (
    <section id="help">
      <div className="section-inner">
        <div className="help-header">
          <div>
            <h2 className="help-heading reveal">How you can help.</h2>
            <p className="help-sub reveal reveal-delay-1">
              Three ways to make a direct impact on youth in our community.
            </p>
          </div>
        </div>
        <div className="help-cards reveal">
          <div className="help-card">
            <div className="help-card-num">01 / Volunteer</div>
            <div className="help-card-title">Volunteer With Us</div>
            <div className="help-card-body">
              We&apos;re always looking for passionate individuals to help bring
              dance to the community — whether you&apos;re a dancer, teacher, or
              just a believer in our mission.
            </div>
            <ul className="help-card-list">
              <li>Assist in dance classes</li>
              <li>Event support</li>
              <li>Fundraising &amp; community outreach</li>
              <li>Administrative &amp; marketing help</li>
              <li>General assistance</li>
            </ul>
          </div>
          <div className="help-card">
            <div className="help-card-num">02 / Donate</div>
            <div className="help-card-title">Make a Donation</div>
            <div className="help-card-body">
              Your donation helps provide life-changing dance programs to
              individuals who need it most — from scholarships to adaptive
              programs to community outreach.
            </div>
            <ul className="help-card-list">
              <li>One-time contribution</li>
              <li>Monthly giving — sustain year-round</li>
              <li>Sponsor a dancer directly</li>
            </ul>
          </div>
          <div className="help-card">
            <div className="help-card-num">03 / Sponsor</div>
            <div className="help-card-title">Business Sponsorship</div>
            <div className="help-card-body">
              Connect your brand with thousands of community members while
              directly supporting youth development. Bronze, Silver, and Gold
              tiers available.
            </div>
            <ul className="help-card-list">
              <li>Concert production sponsorship</li>
              <li>On-site coordination opportunities</li>
              <li>Vendor coordination</li>
              <li>VIP seating at performances</li>
              <li>Social media &amp; publication features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
