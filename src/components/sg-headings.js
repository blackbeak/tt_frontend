import React from "react"

// heading for Sign up (special styling)
const SgHeadings = ({ title, description }) => {
  return (
    <header>
      <h1 className="pt-24 text-4xl md:text-6xl font-bold text-white">{title}</h1>
      {description && (
        <p className="mt-4 text-l text-white">{description}</p>
      )}
    </header>
  )
}

export default SgHeadings