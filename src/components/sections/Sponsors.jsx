import SponsorsData from "@data/sections/sponsors.json";

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="mil-p-120-90">
      <div className="container">
        
        {/* Supported By */}
        <div className="mil-mb-120">
          <h3 className="mil-mb-30">{SponsorsData.supported_by.title}</h3>
          <p className="mil-mb-60">{SponsorsData.supported_by.description}</p>
          <div className="row">
            {SponsorsData.supported_by.items.map((item, key) => (
              <div className="col-md-6 col-lg-3 mil-mb-30" key={`supported-${key}`}>
                <a href={item.link} target="_blank" className="mil-partner-frame">
                  <img src={item.logo} alt={item.name} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Aliados */}
        <div className="mil-mb-120">
          <h3 className="mil-mb-30">{SponsorsData.allies.title}</h3>
          <p className="mil-mb-30">{SponsorsData.allies.description}</p>
          <p className="mil-mb-60 mil-accent">{SponsorsData.allies.subtitle}</p>
          <div className="row">
            {SponsorsData.allies.items.map((item, key) => (
              <div className="col-md-6 col-lg-3 mil-mb-30" key={`ally-${key}`}>
                <a href={item.link} target="_blank" className="mil-partner-frame">
                  <img src={item.logo} alt={item.name} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Content Partners */}
        <div className="mil-mb-120">
          <h3 className="mil-mb-30">{SponsorsData.content_partners.title}</h3>
          <p className="mil-mb-60">{SponsorsData.content_partners.description}</p>
          <div className="row">
            {SponsorsData.content_partners.items.map((item, key) => (
              <div className="col-md-6 col-lg-3 mil-mb-30" key={`content-partner-${key}`}>
                <a href={item.link} target="_blank" className="mil-partner-frame">
                  <img src={item.logo} alt={item.name} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div>
          <h3 className="mil-mb-30">{SponsorsData.sponsors.title}</h3>
          <p className="mil-mb-30">{SponsorsData.sponsors.description}</p>
          <p className="mil-mb-60 mil-accent">{SponsorsData.sponsors.subtitle}</p>
          <div className="row">
            {SponsorsData.sponsors.items.map((item, key) => (
              <div className="col-md-6 col-lg-4 mil-mb-30" key={`sponsor-${key}`}>
                <a href={item.link} target="_blank" className="mil-partner-frame">
                  <img src={item.logo} alt={item.name} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SponsorsSection;
