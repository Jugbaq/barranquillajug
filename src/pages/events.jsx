import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import EventsData from "@data/sections/events.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const Events = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"Nuestros <span className=\"mil-thin\">Eventos</span>"}
        breadTitle={"Eventos"}
        anchorLabel={"Ver eventos"}
        anchorLink={"#events"}
      />

      <section id="events">
        <div className="container mil-p-120-90">
          <div className="mil-center mil-mb-90">
            <p className="mil-up mil-mb-30">{EventsData.description}</p>
          </div>

          <div className="row">
            {EventsData.events.map((event, key) => (
              <div className="col-lg-4 mil-mb-60" key={`event-${key}`}>
                <div className="mil-blog-card mil-up">
                  <div className="mil-post-descr">
                    <div className="mil-labels mil-mb-30">
                      <div className={`mil-label ${event.type === "presencial" ? "mil-accent" : "mil-soft-bg"}`}>
                        {event.type === "presencial" ? "Presencial" : "Virtual"}
                      </div>
                      <div className="mil-label mil-soft-bg">{event.month}</div>
                    </div>
                    <h4 className="mil-mb-30">{event.title}</h4>
                    <p className="mil-mb-30">{event.description}</p>
                    <p className="mil-accent mil-mb-30">
                      <i className="far fa-calendar-alt" style={{marginRight: "8px"}}></i>
                      {event.date}
                    </p>
                    <div style={{display: "flex", gap: "15px", flexWrap: "wrap"}}>
                      {event.post_id ? (
                        <Link href={`/eventos/${event.post_id}`} className="mil-button mil-arrow-place mil-up" style={{fontSize: "12px", padding: "10px 22px"}}>
                          <span>Ver detalle</span>
                          <ArrowIcon />
                        </Link>
                      ) : event.platform_link && (
                        <a href={event.platform_link} target="_blank" className="mil-button mil-arrow-place mil-up" style={{fontSize: "12px", padding: "10px 22px"}}>
                          <span>Registrarse</span>
                        </a>
                      )}
                      {event.youtube_link && (
                        <a href={event.youtube_link} target="_blank" rel="noopener noreferrer" className="mil-button mil-arrow-place mil-up" style={{fontSize: "12px", padding: "10px 22px", background: "transparent", border: "solid 2px #ff0000", color: "#ff0000"}}>
                          <i className="fab fa-youtube" style={{marginRight: "6px"}}></i>
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

      <CallToActionSection />
    </Layouts>
  );
};
export default Events;
