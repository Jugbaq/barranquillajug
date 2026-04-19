import { useState } from "react";
import FaqData from "@data/sections/faq.json";

const FaqSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section id="faq" className="mil-p-120-90">
      <div className="container">
        <div className="mil-center mil-mb-90">
          <h2 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html: FaqData.title}}></h2>
          <p className="mil-up mil-mb-30">{FaqData.description}</p>
        </div>
        
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            {FaqData.items.map((item, key) => (
              <div className={`mil-accordion-item mil-mb-30 ${activeItem === key ? 'mil-active' : ''}`} key={`faq-item-${key}`}>
                <div className="mil-accordion-head" onClick={() => toggleItem(key)} style={{cursor: 'pointer'}}>
                  <h5>{item.question}</h5>
                  <span className="mil-accordion-icon">
                    <i className={`fas ${activeItem === key ? 'fa-minus' : 'fa-plus'}`}></i>
                  </span>
                </div>
                <div className="mil-accordion-content" style={{height: activeItem === key ? 'auto' : '0', overflow: 'hidden'}}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
