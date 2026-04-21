import EventsData from "@data/sections/events.json";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const EventsSection = () => {
  return (
      <>
        {/* events */}
        <section id="events" className="mil-dark-bg">
          <div className="mi-invert-fix">
            <div className="mil-animation-frame">
              <div className="mil-animation mil-position-4 mil-scale" data-value-1="2" data-value-2="1" style={{"top": "100px", "left": "-100px"}}>
                <Pentagon />
              </div>
              <div className="mil-animation mil-position-2 mil-scale" data-value-1="1.8" data-value-2="1" style={{"right": "80px", "bottom": "50px"}}>
                <Pentagon />
              </div>
            </div>

            <div className="container mil-p-120-90">
              <div className="row align-items-end mil-mb-90">
                <div className="col-lg-8">
                  <span className="mil-suptitle mil-light-soft mil-up mil-mb-30">{EventsData.description}</span>
                  <h2 className="mil-muted mil-up" dangerouslySetInnerHTML={{__html: EventsData.title}} />
                </div>
              </div>

              <div className="row mil-services-grid m-0">
                {EventsData.events.slice(0, 3).map((event, key) => (
                    <div key={`event-${key}`} className="col-md-6 col-lg-4 mil-services-grid-item p-0">
                      <div className="mil-service-card-sm mil-up" style={{display: "flex", flexDirection: "column", height: "100%"}}>
                        <div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px"}}>
                          <span className="mil-label mil-upper mil-accent">
                            {event.type === 'presencial' ? 'Presencial' : 'Virtual'}
                          </span>
                          <span className="mil-label mil-upper mil-light-soft">{event.month}</span>
                        </div>
                        <h5 className="mil-muted mil-mb-20">{event.title}</h5>
                        <p className="mil-light-soft mil-mb-20" style={{flex: 1}}>{event.description}</p>
                        <p className="mil-accent mil-mb-30" style={{fontSize: "13px"}}>
                          <i className="far fa-calendar-alt" style={{marginRight: "6px"}}></i>
                          {event.date}
                        </p>

                        {/* Botones: solo aparecen si el link existe */}
                        <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
                          {event.platform_link && (
                            <a href={event.platform_link} target="_blank" className="mil-button mil-arrow-place mil-up" style={{fontSize: "12px", padding: "10px 22px"}}>
                              <span>Registrarse</span>
                              <ArrowIcon />
                            </a>
                          )}
                          {event.youtube_link && (
                            <a
                              href={event.youtube_link}
                              target="_blank"
                              className="mil-up"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                fontSize: "12px",
                                padding: "10px 22px",
                                border: "solid 2px rgba(255,255,255,0.3)",
                                borderRadius: "2px",
                                color: "#fff",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                textDecoration: "none"
                              }}
                            >
                              <i className="fab fa-youtube" style={{color: "#ff0000"}}></i>
                              <span>YouTube</span>
                            </a>
                          )}
                        </div>

                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* events end */}
      </>
  );
};

export default EventsSection;