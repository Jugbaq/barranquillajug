import Layouts from "@layouts/Layouts";
import { getAllPostsIds, getPostData, getRelatedPosts } from "@library/posts";
import Date from '@library/date';
import PageBanner from "@components/PageBanner";
import RelatedPostsSection from "@components/sections/RelatedPosts";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const EventoDetail = ( props ) => {
  
  const postData = props.data;

  return (
    <Layouts>
      <PageBanner pageTitle={postData.introTitle} breadTitle={postData.title} align={"center"} headingSize={2} />
      
      {/* evento */}
      <section id="evento">
          <div className="container mil-p-120-90">
              <div className="row justify-content-center">
                  <div className="col-lg-12">

                      <div className="mil-up" style={{ width: "100%", height: "500px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", borderRadius: "15px", overflow: "hidden", marginBottom: "40px" }}>
                          <img src={postData.image} alt={postData.title} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "15px" }} />
                      </div>
                      <div className="mil-info mil-up mil-mb-60">
                          <div>Categoría: &nbsp;<span className="mil-dark">{postData.category}</span></div>
                          <div>Fecha: &nbsp;<span className="mil-dark"><Date dateString={postData.date} /></span></div>
                          <div>Organiza: &nbsp;<span className="mil-dark">{postData.author.name}</span></div>
                      </div>

                      {postData.youtube_link && (
                        <div className="mil-up mil-mb-60">
                          <a
                            href={postData.youtube_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "10px",
                              background: "#ff0000",
                              color: "#fff",
                              padding: "14px 28px",
                              borderRadius: "40px",
                              fontWeight: "600",
                              fontSize: "14px",
                              letterSpacing: "1px",
                              textTransform: "uppercase",
                              textDecoration: "none"
                            }}
                          >
                            <i className="fab fa-youtube" style={{fontSize: "18px"}}></i>
                            Ver en YouTube
                          </a>
                        </div>
                      )}

                  </div>
                  <div className="col-lg-8">

                      <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
                      
                      {typeof postData.gallery != "undefined" &&
                      <>
                        {postData.gallery.enabled == 1 &&
                        <>
                          <div className="row">
                              {postData.gallery.items.map((item, key) => (
                              <div className="col-lg-6" key={`gallery-item-${key}`}>
                                  <div className="mil-image-frame mil-horizontal mil-up mil-mb-30">
                                      <img src={item.image} alt={item.alt} />
                                  </div>
                              </div>
                              ))}
                          </div>
                        </>
                        }
                      </>
                      }

                      {typeof postData.additional != "undefined" &&
                        <>
                          {postData.additional.enabled == 1 &&
                          <div className="mil-text mil-up" dangerouslySetInnerHTML={{__html : postData.additional.content}} />
                          }
                        </>
                      }
                      
                  </div>
              </div>
          </div>
      </section>
      {/* evento end */}

      <RelatedPostsSection items={props.related} />
    </Layouts>
  );
};
export default EventoDetail;

export async function getStaticPaths() {
    const paths = getAllPostsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const relatedPosts = await getRelatedPosts(params.id)

    return {
      props: {
        data: postData,
        related: relatedPosts
      }
    }
}
