import React from 'react'
import Image from "next/image"

function CategoryCard() {
    const items = [
        {
            icon:"category-1.svg",
            title:"Online Degree Programs",
            description:"Discover accredited online degree programs providing flexibility and quality education. Earn your degree with convenience through a variety of courses led by experienced instructors.",
            courses: 4,
            background: "hsla(170, 75%, 41%, .1)"
        },
        {
            icon:"category-2.svg",
            title:"Non-Degree Programs",
            description:"Explore specialized non-degree programs designed to enhance your skills and knowledge. Flexible courses cater to your interests and goals, allowing you to upskill or delve into new areas of study.",
            courses: 5,
            background: "hsla(351, 83%, 61%, .1)"
        },
        {
            icon:"category-3.svg",
            title:"Off Campus Programs",
            description:"Access education closer to you with our off-campus programs. Enjoy the benefits of remote learning while receiving support from dedicated faculty. Tailored courses meet your academic and professional needs.",
            courses: 3,
            background: "hsla(229, 75%, 58%, .1)"
        },
        {
            icon:"category-4.svg",
            title:"Hybrid Distance Programs",
            description:"Optimize your learning experience with hybrid distance programs. Blend online flexibility with valuable in-person components for an interactive educational journey. Explore diverse courses for a well-rounded foundation",
            courses: 4,
            background: "hsla(42, 94%, 55%, .1)"
        }
    ]
  return (
<>
    {items.map((item,index)=>(
        <li style={{background: item.background}} key={index}>
        <div className="category-card">
    
          <div className="card-icon">
            <Image src={`/images/${item.icon}`} width="40" height="40" loading="lazy"
              alt="Non-Degree Programs" className="img" />
          </div>
    
          <h3 className="h3">
            <a href="#" className="card-title">{item.title}</a>
          </h3>
    
          <p className="card-text">
          {item.description}
          </p>
    
          <span className="card-badge">{item.courses} Courses</span>
    
        </div>
      </li>
    ))}
   </>
  )
}

export default CategoryCard