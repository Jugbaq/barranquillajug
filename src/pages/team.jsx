import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const TeamData = [
    {
        "image": "/img/faces/customers/1.png",
        "name": "Geovanny Mendoza",
        "role": "Software Engineer",
        "social": [
            {
                "link": "https://www.linkedin.com/in/barranquillajug/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://x.com/barranquillajug",
                "icon": "fab fa-x-twitter",
                "title": "X"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/customers/2.png",
        "name": "Ricardo Cantillo",
        "role": "Software Engineer",
        "social": [
            {
                "link": "https://www.linkedin.com/in/barranquillajug/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://x.com/barranquillajug",
                "icon": "fab fa-x-twitter",
                "title": "X"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/customers/3.png",
        "name": "Betzabe Salas",
        "role": "Software Engineer",
        "social": [
            {
                "link": "https://www.linkedin.com/in/barranquillajug/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://x.com/barranquillajug",
                "icon": "fab fa-x-twitter",
                "title": "X"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/customers/4.png",
        "name": "Lisa Trueman",
        "role": "UI/UX Designer",
        "social": [
            {
                "link": "https://www.linkedin.com/in/barranquillajug/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://x.com/barranquillajug",
                "icon": "fab fa-x-twitter",
                "title": "X"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/customers/5.png",
        "name": "Tom Oldman",
        "role": "Software Engineer",
        "social": [
            {
                "link": "https://www.linkedin.com/in/barranquillajug/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://x.com/barranquillajug",
                "icon": "fab fa-x-twitter",
                "title": "X"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/customers/6.png",
        "name": "Corey Trueman",
        "role": "Technical Director",
        "social": [
            {
                "link": "https://www.linkedin.com/in/barranquillajug/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://x.com/barranquillajug",
                "icon": "fab fa-x-twitter",
                "title": "X"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    }
]

const Team = () => {
  return (
    <Layouts>
        <PageBanner pageTitle={"Nuestro <span className=\"mil-thin\">Equipo</span><br> de <span className=\"mil-thin\">Desarrollo</span>"} breadTitle={"Equipo"} anchorLabel={"Nuestro equipo"} anchorLink={"#team"} />
      
        {/* team */}
        <section id="team">
            <div className="container mil-p-120-90">
                <div className="row">
                    {TeamData.map((item, key) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={`team-item-${key}`}>

                        <div className="mil-team-card mil-up mil-mb-30">
                            <img src={item.image} alt={item.name} />
                            <div className="mil-description">
                                <div className="mil-secrc-text">
                                    <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                    <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                    <ul className="mil-social-icons mil-center">
                                        {item.social.map((social_item, social_key) => (
                                        <li key={`team-item-${key}-${social_key}`}><a href={social_item.link} target="_blank" className="social-icon"><i className={social_item.icon}></i></a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;