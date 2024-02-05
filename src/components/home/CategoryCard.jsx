import React from 'react'
import Image from "next/image"
import { urlForImage } from '../../../sanity/lib/image'

function CategoryCard({category}) {
  let categories = category.category
   
  return (
<>
    {categories.map((item,index)=>(
        <li style={{background: item.background}} key={index}>
        <div className="category-card">
    
          <div className="card-icon">
          <object type="image/svg+xml" data={urlForImage(item.icon)} style={{height:"40px", width:"40px"}}>
</object>
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