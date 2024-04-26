import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: "mrjvfntti08f",
    accessToken: "V99WWsJa_DcxpIFFE1WNoZUD4gcF3F7ZWSr-hmSO7jw",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPosts(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries();
  }, [client]);

  return (
      <div className="blog-list-container">
          <h1 className="content-subhead">Publicaciones</h1>
          <div className="posts-container">
            {blogPosts?.items?.map((post) => (
              <section className="post" key={post.sys.id}>
                <img
                  src={post.fields.blogImage.fields.file.url}
                  title=""
                  alt={post.fields.title}
                  width="325"
                  height="150"
                />
                <header className="post-header">
                  <h2 className="post-title pt-3">
                    Titulo del post{post.fields.title}
                  </h2>
                  <p className="post-datos">
                    Por:{" "}
                    <a href="https://thecodeangle.com/" className="post-author">
                      {post.fields.blogAuthor}
                    </a>
                    <small className="post-date">
                      {" "}
                      -{" "}
                      {new Intl.DateTimeFormat("en-GB", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      }).format(new Date(post.fields.createDate))}
                    </small>
                  </p>
                </header>
                <div className="post-description">
                  <p>{post.fields.blogSummary}</p>
                </div>
                <Link
                  to={`/blogDetails/${post.sys.id}`}
                  className="button-read-more"
                >
                  Seguir Leyendo
                </Link>
              </section>
            ))}
        </div>
      </div>
  );
};

export default BlogList;
