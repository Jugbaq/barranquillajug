import { useState } from "react";
import FaqData from "@data/sections/faq.json";

const FaqSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <>
      {/* faq */}
      <section id="faq" className="mil-soft-bg">
        <div className="container mil-p-120-90">
          <div className="row justify-content-between align-items-start">

            <div className="col-lg-4 mil-mb-60">
              <div style={{position: "sticky", top: "120px"}}>
                <span className="mil-suptitle mil-suptitle-dark mil-up" style={{display: "block", marginBottom: "20px"}}>Preguntas frecuentes</span>
                <h2 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: FaqData.title}} />
                <p className="mil-up">{FaqData.description}</p>
              </div>
            </div>

            <div className="col-lg-7">
              {FaqData.items.map((item, key) => (
                <div
                  key={`faq-item-${key}`}
                  className="mil-up mil-mb-30"
                  style={{
                    borderBottom: "solid 1px rgba(0,0,0,0.1)",
                    paddingBottom: "30px"
                  }}
                >
                  <div
                    onClick={() => toggleItem(key)}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px"
                    }}
                  >
                    <h5 style={{margin: 0, flex: 1}}>{item.question}</h5>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: activeItem === key ? "#ff5e14" : "rgba(0,0,0,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "background 0.3s"
                      }}
                    >
                      <i
                        className={`fas ${activeItem === key ? "fa-minus" : "fa-plus"}`}
                        style={{color: activeItem === key ? "#fff" : "#333", fontSize: "14px"}}
                      />
                    </div>
                  </div>
                  <div style={{height: activeItem === key ? "auto" : "0", overflow: "hidden", transition: "height 0.3s"}}>
                    <p style={{marginTop: "20px", marginBottom: 0}}>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* faq end */}
    </>
  );
};

export default FaqSection;
