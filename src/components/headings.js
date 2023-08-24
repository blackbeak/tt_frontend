import React from "react"

// standard heading in Cyan and black
const Headings = ({ title, description }) => {
  return (
    <header>
      <h1 className="pt-10 text-6xl font-bold text-cyan-700">{title}</h1>
      {description && (
        <p className="mt-4 text-l text-black">{description}</p>
      )}
    </header>
  )
}

export default Headings
