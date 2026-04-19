import SponsorsData from "@data/sections/sponsors.json";
import Pentagon from "@layouts/pentagon/Index";

const SponsorGroup = ({ title, description, subtitle, items, groupKey }) => (
  <div className="mil-mb-90">
    <div className="row align-items-end mil-mb-60">
      <div className="col-lg-7">
        <h3 className="mil-muted mil-up mil-mb-20">{title}</h3>
        <p className="mil-light-soft mil-up">{description}</p>
        {subtitle && <p className="mil-accent mil-up" style={{marginTop: "10px"}}>{subtitle}</p>}
      </div>
    </div>
    <div className="row">
      {items.map((item, key) => (
        <div className="col-6 col-md-4 col-lg-3 mil-mb-30" key={`${groupKey}-${key}`}>
          <a
            href={item.link}
            target="_blank"
            className="mil-up"
            title={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "130px",
              padding: "28px 20px",
              borderRadius: "6px",
              background: "#ffffff",
              transition: "box-shadow 0.3s",
              textDecoration: "none"
            }}
          >
            <img
              src={item.logo}
              alt={item.name}
              style={{maxWidth: "180px", maxHeight: "90px", width: "100%", objectFit: "contain"}}
            />
          </a>
          <p className="mil-light-soft mil-up" style={{marginTop: "10px", fontSize: "11px", textAlign: "center", textTransform: "uppercase", letterSpacing: "1px"}}>{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const SponsorsSection = () => {
  return (
    <>
      {/* sponsors */}
      <section id="sponsors" className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.2" data-value-2="1.2" style={{"top": "200px", "right": "-80px"}}>
              <Pentagon />
            </div>
          </div>

          <div className="container mil-p-120-90">
            <div className="row mil-mb-90">
              <div className="col-lg-10">
                <span className="mil-suptitle mil-light-soft mil-up mil-mb-30">Nuestros aliados</span>
                <h2 className="mil-muted mil-up">Patrocinadores <span className="mil-thin">& Aliados</span></h2>
              </div>
            </div>

            <SponsorGroup
              title={SponsorsData.supported_by.title}
              description={SponsorsData.supported_by.description}
              items={SponsorsData.supported_by.items}
              groupKey="supported"
            />

            <div style={{borderBottom: "solid 1px rgba(255,255,255,0.08)", marginBottom: "60px"}} />

            <SponsorGroup
              title={SponsorsData.allies.title}
              description={SponsorsData.allies.description}
              subtitle={SponsorsData.allies.subtitle}
              items={SponsorsData.allies.items}
              groupKey="allies"
            />

            <div style={{borderBottom: "solid 1px rgba(255,255,255,0.08)", marginBottom: "60px"}} />

            <SponsorGroup
              title={SponsorsData.content_partners.title}
              description={SponsorsData.content_partners.description}
              items={SponsorsData.content_partners.items}
              groupKey="content"
            />

            <div style={{borderBottom: "solid 1px rgba(255,255,255,0.08)", marginBottom: "60px"}} />

            <SponsorGroup
              title={SponsorsData.sponsors.title}
              description={SponsorsData.sponsors.description}
              subtitle={SponsorsData.sponsors.subtitle}
              items={SponsorsData.sponsors.items}
              groupKey="sponsors"
            />
          </div>
        </div>
      </section>
      {/* sponsors end */}
    </>
  );
};

export default SponsorsSection;
