import React from 'react'
import Image from "next/image"

function Card() {

    const Items = [
        {
            level: "Beginner",
            title: "Web Design",
            img:"course-1",
            rating: 5.0,
            price: 29.00,
            lessons: 8,
            students: 20,
            weeks: 4
        },
        {
            level: "Beginner",
            title: "Python Basics",
            img:"course-2",
            rating: 4.8,
            price: 52.00,
            lessons: 15,
            students: 24,
            weeks: 6
        },
        {
            level: "Intermediate",
            title: "Javascript Basics",
            img:"course-3",
            rating: 4.9,
            price: 29.00,
            lessons: 23,
            students: 40,
            weeks: 6
        },
        {
            level: "Advanced",
            img:"course-4",
            title: "Java",
            rating: 5.0,
            price: 60.00,
            lessons: 35,
            students: 36,
            weeks:5
        },
        {
            level: "Advanced",
            title: "C++",
            img:"course-5",
            rating: 5.0,
            price: 39.00,
            lessons: 6,
            students: 34,
            weeks:7
        },
    ]
  return (
    <>
    {Items.map((item,index)=>(
        <li key={index}>
        <div className="course-card">
          <figure className="card-banner img-holder" style={{width: "100%", height: 220}}>
            <Image src={`/images/${item.img}.jpg`} width="800" height="600" loading="lazy"
              alt="The Complete Camtasia Course for Content Creators" className="img-cover" />
          </figure>
    
          <div className="abs-badge">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
            <span className="span">{item.weeks} weeks</span>
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
    
              <p className="rating-text">({item.rating} /7 Rating)</p>
    
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