import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

function BlogCard({ posts }) {

  return (
    <>
      {posts.map((item) => (
        <li key={item._id} style={{height: "100%"}}>
          <div className="blog-card" style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <figure
              className="card-banner img-holder has-after"
              style={{ width: "100%", height: 370 }}
            >
              <Image
                src={urlForImage(item.mainImage)}
                width="370"
                height="370"
                loading="lazy"
                alt={item.mainImage.alt}
                className="img-cover"
              />
            </figure>

            <div className="card-content">
              <a href="#" className="card-btn" aria-label="read more">
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>

              <a href="#" className="card-subtitle">
                
            <p style={{display:"flex", gap:"10px"}}><span class="span">By:</span> {item.author?.name}</p>
              </a>

              <h3 className="h3">
                <a href="#" className="card-title">
                  {item.title}
                </a>
              </h3>

              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <ion-icon
                    name="calendar-outline"
                    aria-hidden="true"
                  ></ion-icon>

                  <span className="span">{
                    new Date(item._createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })
                  }</span>
                </li>

                {/* <li className="card-meta-item">
                  <ion-icon
                    name="chatbubbles-outline"
                    aria-hidden="true"
                  ></ion-icon>

                  <span className="span">{item.categories.map((item)=>(
                    <span key={item._id}>{item.title}</span>
                  ))}</span>
                </li> */}
              </ul>

              <p className="card-text">
  {item.body.map((paragraph, paragraphIndex) => (
    <span key={paragraphIndex}>
      {paragraph.children.map((child, childIndex) => (
        <span key={childIndex}>{child.text}</span>
      ))}
      <br /> {/* Add a line break between paragraphs */}
    </span>
  ))}
</p>

            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default BlogCard;
