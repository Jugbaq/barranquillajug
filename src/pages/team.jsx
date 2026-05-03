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
                "link": "https://www.linkedin.com/in/geovannycode/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://geovannycode.com/",
                "icon": "fas fa-globe",
                "title": "Dribbble"
            },
            {
                "link": "https://x.com/geovannycode",
                "icon": "fab fa-twitter",
                "title": "X"
            },
            {
                "link": "https://github.com/geovannymcode",
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
                "link": "https://www.linkedin.com/in/ricardo-cantillo-9a9552119/?skipRedirect=true",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://x.com/recantilloc",
                "icon": "fab fa-twitter",
                "title": "X"
            },
            {
                "link": "https://github.com/recantilloSena/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/customers/3.png",
        "name": "Maicol Ruidiaz",
        "role": "Arquitecto Software",
        "social": [
            {
                "link": "https://www.linkedin.com/in/maicol-r-8365a4b1/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://x.com/macavick",
                "icon": "fab fa-twitter",
                "title": "X"
            },
            {
                "link": "https://github.com/mruidiazb",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/customers/4.png",
        "name": "Betzabe Salas",
        "role": "Software Engineer",
        "social": [
            {
                "link": "https://www.linkedin.com/in/betzabe-maria-salas-vergara-4a3053176/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "http://cv-betzabe-salas.s3-website-us-east-1.amazonaws.com/",
                "icon": "fas fa-globe",
                "title": "Dribbble"
            },
            {
                "link": "https://github.com/betzy-salas",
                "icon": "fab fa-github",
                "title": "Github"
            }
    ]
    },
    {
        "image": "/img/faces/customers/5.png",
        "name": "Joy Viloria",
        "role": "UX/UI Designer",
        "social": [
            {
                "link": "https://www.linkedin.com/in/JoyVilo/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://github.com/JoyVilo",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/customers/6.png",
        "name": "Laureano Lafaurie",
        "role": "Organizador",
        "social": [
            {
                "link": "https://www.linkedin.com/in/laureano-lafaurie/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://github.com/Laureano55",
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