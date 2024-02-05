import React from 'react'
import Image from "next/image"
import { urlForImage } from '../../sanity/lib/image'

function Card({courses}) {

  return (
    <>
    {courses.map((item,index)=>(
        <li key={index}>
        <div className="course-card">
          <figure className="card-banner img-holder" style={{width: "100%", height: 220}}>
            <Image src={urlForImage(item.mainImage)} width="800" height="600" loading="lazy"
              alt="The Complete Camtasia Course for Content Creators" className="img-cover" />
          </figure>
    
          <div className="abs-badge">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
            <span className="span">{item.duration} weeks</span>
          </div>
    
          <div className="card-content">
    
            <span className="badge">{item.level}</span>
    
            <h3 className="h3">
              <a href="#" className="card-title">{item.title}</a>
            </h3>
    
            <div className="wrapper">
    
              <div className="rating-wrapper">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
    
              <p className="rating-text">({item.rating} /5.0 Rating)</p>
    
            </div>
    
            <data className="price" value="35">{item.price}</data>
    
            <ul className="card-meta-list">
    
              <li className="card-meta-item">
                <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
    
                <span className="span">{item.lessons} Lessons</span>
              </li>
    
              <li className="card-meta-item">
                <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
    
                <span className="span">{item.students} Students</span>
              </li>
    
            </ul>
    
          </div>
    
        </div>
      </li>
    ))}
   </>
  )
}

export default Card