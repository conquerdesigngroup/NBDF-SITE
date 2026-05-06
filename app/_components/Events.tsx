export default function Events() {
  return (
    <section id="events">
      <div className="section-inner">
        <div className="events-header reveal">
          <h2 className="events-heading">
            <em>Upcoming</em> events.
          </h2>
        </div>
        <div className="events-list">
          <div className="event-row reveal">
            <div className="event-num">01</div>
            <div className="event-info">
              <div className="event-title">
                Annual Dance Concert — &ldquo;Create&rdquo;
              </div>
              <div className="event-desc">
                Three performances celebrating the dedication and growth of our
                dancers. Approx. 2,500 attendees from Moreno Valley and
                surrounding communities.
              </div>
            </div>
            <div className="event-date">June 26–27, 2026</div>
          </div>
          <div className="event-row reveal reveal-delay-1">
            <div className="event-num">02</div>
            <div className="event-info">
              <div className="event-title">Annual Fundraiser Gala</div>
              <div className="event-desc">
                Support our cause and enjoy an evening of performances, live
                music, and silent auctions.
              </div>
            </div>
            <div className="event-date">Date TBA</div>
          </div>
          <div className="event-row reveal reveal-delay-2">
            <div className="event-num">03</div>
            <div className="event-info">
              <div className="event-title">Inclusive Dance Showcase</div>
              <div className="event-desc">
                A celebration of talent and diversity — featuring adaptive
                dancers, scholarship recipients, and community members.
              </div>
            </div>
            <div className="event-date">Date TBA</div>
          </div>
          <div className="event-row reveal reveal-delay-3">
            <div className="event-num">04</div>
            <div className="event-info">
              <div className="event-title">Community Dance Day</div>
              <div className="event-desc">
                A free event where everyone is welcome to participate in dance
                classes, workshops, and performances.
              </div>
            </div>
            <div className="event-date">Date TBA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
