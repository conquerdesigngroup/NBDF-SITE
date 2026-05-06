export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/nbdf-logo-square.png" alt="NBDF" />
            <p>
              Expanding access to dance education for youth in Moreno Valley and
              the Inland Empire through scholarships, sponsorships, and outreach
              programs.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              <li>
                <a href="#mission">About Us</a>
              </li>
              <li>
                <a href="#help">Get Involved</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Follow Us</div>
            <ul className="footer-links">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 No Boundaries Dance Foundation, Inc. · Moreno Valley, CA
          </div>
          <div className="footer-mint-bar" />
        </div>
      </div>
    </footer>
  );
}
