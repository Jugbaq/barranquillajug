import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import SponsorsData from "@data/sections/sponsors.json";

const SponsorGroup = ({ title, description, subtitle, items }) => (
  <div className="mil-mb-120">
    <div className="mil-mb-60">
      <h3 className="mil-mb-20">{title}</h3>
      <p className="mil-mb-20">{description}</p>
      {subtitle && <p className="mil-accent">{subtitle}</p>}
    </div>
    <div className="row">
      {items.map((item, key) => (
        <div className="col-6 col-md-4 col-lg-3 mil-mb-30" key={`sponsor-${key}`}>
          <a
            href={item.link}
            target="_blank"
            className="mil-partner-frame"
            title={item.name}
            style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "30px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px", minHeight: "140px"}}
          >
            <img src={item.logo} alt={item.name} style={{maxWidth: "200px", maxHeight: "100px", width: "100%", objectFit: "contain"}} />
          </a>
          <p className="mil-center mil-mt-10 mil-light-soft">{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const Sponsors = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"Nuestros <span className=\"mil-thin\">Patrocinadores</span>"}
        breadTitle={"Patrocinadores"}
        anchorLabel={"Ver patrocinadores"}
        anchorLink={"#sponsors"}
      />

      <section id="sponsors">
        <div className="container mil-p-120-90">
          <div className="mil-center mil-mb-90">
            <p className="mil-up mil-mb-30">
              Conoce nuestros patrocinadores. Organizaciones que con sus valiosos aportes permiten que grupos como el nuestro existan y sigan creciendo. Tenemos patrocinadores de auditorios para nuestras reuniones, descuentos en libros, licencias de productos, cursos virtuales, etc. A todos ellos muchas gracias!
            </p>
          </div>

          <SponsorGroup
            title={SponsorsData.supported_by.title}
            description={SponsorsData.supported_by.description}
            items={SponsorsData.supported_by.items}
          />

          <SponsorGroup
            title={SponsorsData.allies.title}
            description={SponsorsData.allies.description}
            subtitle={SponsorsData.allies.subtitle}
            items={SponsorsData.allies.items}
          />

          <SponsorGroup
            title={SponsorsData.content_partners.title}
            description={SponsorsData.content_partners.description}
            items={SponsorsData.content_partners.items}
          />

          <SponsorGroup
            title={SponsorsData.sponsors.title}
            description={SponsorsData.sponsors.description}
            subtitle={SponsorsData.sponsors.subtitle}
            items={SponsorsData.sponsors.items}
          />
        </div>
      </section>

      <CallToActionSection />
    </Layouts>
  );
};
export default Sponsors;
