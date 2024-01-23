import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Hero from "./hero/Hero"



const MainHome = () => {
  return (
    <>
    
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    
    </>
  )
}

export default MainHome
