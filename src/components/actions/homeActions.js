export const revalidate = 30

export async function getHeroData() {
    const res = await fetch("https://fatima-code-website.vercel.app/api/getHero")
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
    const res = await fetch("https://fatima-code-website.vercel.app/api/getCategory")
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
    const res = await fetch("https://fatima-code-website.vercel.app/api/getAboutUs")
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
      const res = await fetch("https://fatima-code-website.vercel.app/api/getCourses")
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
      const res = await fetch("https://fatima-code-website.vercel.app/api/getPosts")
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.
     
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
      return res.json()
    }
