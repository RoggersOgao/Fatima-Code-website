export async function getHeroData() {
    const res = await fetch("https://fatima-code-website.vercel.app/api/getHero", { next: { revalidate: 30 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  // categories

  export async function getCategoryData() {
    const res = await fetch("https://fatima-code-website.vercel.app/api/getCategory", { next: { revalidate: 30 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


   // about us

   export async function getAboutUsData() {
    const res = await fetch("https://fatima-code-website.vercel.app/api/getAboutUs", { next: { revalidate: 30 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


     // courses

     export async function getCoursesData() {
      const res = await fetch("https://fatima-code-website.vercel.app/api/getCourses", { next: { revalidate: 30 } })
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.
     
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
      return res.json()
    }


     // posts

     export async function getPostsData() {
      const res = await fetch("https://fatima-code-website.vercel.app/api/getPosts", { next: { revalidate: 30 } })
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.
     
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
      return res.json()
    }
