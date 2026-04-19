import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import Data from "@data/sections/code-of-conduct.json";

const CodeOfConduct = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"Código de <span className=\"mil-thin\">Conducta</span>"}
        breadTitle={"Código de Conducta"}
        anchorLabel={"Leer código"}
        anchorLink={"#code-of-conduct"}
      />

      <section id="code-of-conduct">
        <div className="container mil-p-120-90">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {Data.sections.map((section, key) => (
                <div className="mil-mb-60" key={`section-${key}`}>
                  <div style={{display: "flex", alignItems: "baseline", gap: "15px", marginBottom: "20px"}}>
                    <span className="mil-accent" style={{fontSize: "32px", fontWeight: "700", lineHeight: 1}}>{section.number}.</span>
                    <h4>{section.title}</h4>
                  </div>

                  {section.content && (
                    <p className="mil-mb-20">{section.content}</p>
                  )}

                  {section.list && (
                    <ul style={{paddingLeft: "20px"}}>
                      {section.list.map((item, i) => (
                        <li key={i} style={{marginBottom: "10px", listStyleType: "disc"}}>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.contact && (
                    <p className="mil-mt-20">
                      📩 Correo de contacto:{" "}
                      <a href={`mailto:${section.contact}`} className="mil-accent">
                        {section.contact}
                      </a>
                    </p>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </Layouts>
  );
};
export default CodeOfConduct;
