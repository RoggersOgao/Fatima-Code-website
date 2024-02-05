import { getAboutUsData, getCategoryData, getCoursesData, getHeroData, getPostsData } from "@/components/actions/homeActions";
import styles from "./page.module.css";
import HomeC from "@/components/home/HomeC";

export default async function Home() {
  try {
    // Fetch all data concurrently
    const [heroData, categoryData, aboutUsData, coursesData, postsData] = await Promise.all([
      getHeroData(),
      getCategoryData(),
      getAboutUsData(),
      getCoursesData(),
      getPostsData()
    ]);

    // Extract necessary information from the fetched data
    const hero = heroData.hero[heroData.hero.length - 1];

    // Render the UI with the fetched data
    return (
      <main className={styles.main}>
        <HomeC
          heroData={hero}
          categoryData={categoryData}
          aboutUs={aboutUsData.aboutUs[0]}
          courses={coursesData.courses}
          posts={postsData.post.slice(-3)}
        />
      </main>
    );
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    // Handle errors as needed
    return (
      <main className={styles.main}>
        <p>An error occurred while fetching data. Please try again later.</p>
      </main>
    );
  }
}
