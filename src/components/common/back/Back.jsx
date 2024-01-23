"use client"
import React from "react"
import { usePathname } from "next/navigation"

const Back = ({ title }) => {
  const path = usePathname()

  return (
    <>
      <section className='back' style={{backgroundColor:"black"}}>
        <h2>Home / {path.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
