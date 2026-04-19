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
                {EventsData.events.map((event, key) => (
                    <div key={`event-${key}`} className="col-md-6 col-lg-4 mil-services-grid-item p-0">
                      <div className="mil-service-card-sm mil-up">
                        <div className="mil-mb-20">
                      <span className="mil-label mil-upper mil-accent">
                        {event.type === 'presencial' ? 'Presencial' : 'Virtual'}
                      </span>
                        </div>
                        <h5 className="mil-muted mil-mb-20">{event.title}</h5>
                        <p className="mil-light-soft mil-mb-15">{event.description}</p>
                        <p className="mil-accent mil-mb-30" style={{fontSize: "13px"}}>
                          <i className="far fa-calendar-alt" style={{marginRight: "6px"}}></i>
                          {event.date}
                        </p>

                        {/* Contenedor del botón con lógica condicional */}
                        <div style={{marginTop: "auto"}}>
                          {event.type === 'presencial' ? (
                              <a href={event.platform_link} target="_blank" className="mil-button mil-arrow-place mil-up" style={{fontSize: "12px", padding: "10px 22px"}}>
                                <span>Registrarse</span>
                                <ArrowIcon />
                              </a>
                          ) : (
                              <a href={event.youtube_link} target="_blank" className="mil-button mil-arrow-place mil-up" style={{fontSize: "12px", padding: "10px 22px", backgroundColor: "#1e1e1e", color: "#ffffff"}}>
                                <span>Ver en YouTube</span>
                                <i className="fab fa-youtube" style={{ zIndex: 2, fontSize: "18px", color: "#ff0000" }}></i>
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