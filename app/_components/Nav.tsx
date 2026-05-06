export default function Nav() {
  return (
    <nav id="nav">
      <div className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/uploads/nbdf-logo-square.png"
          alt="No Boundaries Dance Foundation"
        />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#mission">About</a>
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
      <a href="#contact" className="nav-cta">
        Donate
      </a>
    </nav>
  );
}
