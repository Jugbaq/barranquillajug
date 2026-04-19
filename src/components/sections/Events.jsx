import EventsData from "@data/sections/events.json";

const EventsSection = () => {
  return (
    <section id="events" className="mil-p-120-90">
      <div className="container">
        <div className="mil-center mil-mb-90">
          <h2 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: EventsData.title}}></h2>
          <p className="mil-up mil-mb-30">{EventsData.description}</p>
        </div>
        
        <div className="row">
          {EventsData.events.map((event, key) => (
            <div className="col-lg-4 mil-mb-60" key={`event-${key}`}>
              <div className="mil-card mil-hover-card">
                <div className="mil-card-body">
                  <div className="mil-mb-30">
                    <span className={`mil-badge ${event.type === 'presencial' ? 'mil-accent' : 'mil-light'}`}>
                      {event.type === 'presencial' ? 'Presencial' : 'Virtual'}
                    </span>
                  </div>
                  <h5 className="mil-mb-20">{event.title}</h5>
                  <p className="mil-mb-20 mil-light-soft">{event.description}</p>
                  <p className="mil-accent mil-mb-30">{event.date}</p>
                  <div className="mil-buttons">
                    <a href={event.platform_link} target="_blank" className="mil-btn mil-sm mil-btn-border">
                      <span>Registrarse</span>
                    </a>
                    {event.youtube_link && (
                      <a href={event.youtube_link} target="_blank" className="mil-btn mil-sm mil-btn-border mil-light">
                        <span>YouTube</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
