import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allEntriesLoaded, setAllEntriesLoaded] = useState(false);
  const [skip, setSkip] = useState(0);
  const limit = 5;
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_NAME,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const response = await client.getEntries({ limit, skip });
        if (response.items.length === 0) {
          setAllEntriesLoaded(true);
        }
        if (skip === 0) {
          setBlogPosts(response.items);
        } else {
          setBlogPosts((prevPosts) => [...prevPosts, ...response.items]);
        }
        setLoading(false);
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };

    if (!allEntriesLoaded) {
      setLoading(true);
      getAllEntries();
    }
  }, [skip]);

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + limit);
  };
  return (
    <div className="blog-list-container">
      <h1 className="content-subhead">Publicaciones</h1>
      <div className="posts-container">
        {blogPosts.map((post) => (
          <section className="post" key={post.sys.id}>
            <img
              src={post.fields.blogImage.fields.file.url}
              title=""
              alt={post.fields.blogTittle}
              width="325"
              height="150"
            />
            <header className="post-header">
              <h2 className="post-title pt-3">{post.fields.blogTittle}</h2>
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
      {!allEntriesLoaded && (
        <button
          onClick={handleLoadMore}
          className="load-more-button"
          disabled={loading}
        >
          {loading ? "Cargar Más" : "Cargando..."}
        </button>
      )}
    </div>
  );
};

export default BlogList;
