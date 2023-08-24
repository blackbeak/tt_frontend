import React from "react"

// heading with a background image applied in the page or template 
// used in countries and cities

const BgHeadings = ({ title, description }) => {
  return (
    <header>
      <h3 className="pt-24 text-2xl text-white">{description="Things to do in"}</h3>
      {title && (
        <h1 className="pt-4 text-4xl font-bold text-white md:text-6xl">{title}</h1>
      )}
    </header>
  )
}

export default BgHeadings
