import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import { Link } from 'react-router-dom'
import './BlogList.css';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const client = createClient({ space: "mrjvfntti08f", accessToken: "V99WWsJa_DcxpIFFE1WNoZUD4gcF3F7ZWSr-hmSO7jw" })


  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPosts(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries()
  }, [])



  return (
    <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <h1 className="content-subhead">Publicaciones</h1>

            {blogPosts?.items?.map((post) => (
              <section className="post" key={post.sys.id}>
                <header className="post-header">
                  <img src={post.fields.blogImage.fields.file.url} title="" alt={post.fields.title} width="578" height="291" />
                  <h2 className="post-title pt-3">{post.fields.title}</h2>
                  <p className="post-meta">
                    By <a href="https://thecodeangle.com/" className="post-author">{post.fields.blogAuthor}</a> Date <span></span>
                    <small>
                      {new Intl.DateTimeFormat('en-GB', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      }).format(new Date(post.fields.createDate))}
                    </small>
                  </p>
                </header>
                <div className="post-description">
                  <p>{post.fields.blogSummary}
                  </p>
                  <Link
                    to={`/blogDetails/${post.sys.id}`}
                    className="button-read-more">
                    Seguir Leyendo
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList