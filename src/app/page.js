import { getAboutUsData, getCategoryData, getCoursesData, getHeroData, getPostsData } from "@/components/actions/homeActions";
import styles from "./page.module.css";
import HomeC from "@/components/home/HomeC";

export default async function Home() {
  const heroData = await getHeroData()
  const hero = heroData.hero[heroData.hero.length - 1];
// categories data
const categoryData = await getCategoryData()
// get about us data
const aboutUsData = await getAboutUsData()
// get courses data
const coursesData = await getCoursesData()
// get posts
const postsData = await getPostsData()
  return (
    <main className={styles.main}>
      <HomeC heroData={hero} categoryData={categoryData} aboutUs={aboutUsData.aboutUs[0]} courses={coursesData.courses} posts={postsData.post.slice(-3)}/>
    </main>
  );
}
