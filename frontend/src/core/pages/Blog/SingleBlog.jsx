import './SingleBlog.css';
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const SingleBlog = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([]);

  let { id } = useParams();

  const client = createClient({
    space: "mrjvfntti08f",
    accessToken: "V99WWsJa_DcxpIFFE1WNoZUD4gcF3F7ZWSr-hmSO7jw",
  });

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setSingleBlogPost(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById();
  }, [id]);

  return (
    <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="post-detail">
            <Link to="/blogList" >
            <button className="back-button">
              Volver al blog
            </button>
            </Link>

            <section className="detail-section">
              <header>
                <img
                  src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
                  title=""
                  alt={singleBlogPost?.fields?.title}
                  width="100%"
                  height="290"
                />
                <h2 className="post-title pt-3">
                  {singleBlogPost?.fields?.title}
                </h2>
                <p className="post-detail-datos">
                  Por: {" "}
                  <a href="https://thecodeangle.com/" className="post-author">
                    {singleBlogPost?.fields?.blogAuthor}
                  </a>{" "}
                  
                  <small className="post-date">
                  {" "}
                      -{" "}
                    {singleBlogPost?.fields?.createDate === undefined
                      ? "loading"
                      : new Intl.DateTimeFormat("en-GB", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        }).format(new Date(singleBlogPost?.fields?.createDate))}
                  </small>
                </p>
              </header>
              <div className="detail-text">
                {/* <MD source={singleBlogPost?.fields?.blogContent} /> */}
                <ReactMarkdown children={singleBlogPost?.fields?.postContent} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
