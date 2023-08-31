import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlaneSlash, faScaleBalanced, faHeadSideVirus, faStar } from "@fortawesome/free-solid-svg-icons"

// Hotel benefits
const whyHotel = ({ benefitOne, benefitTwo, benefitThree, benefitFour, benefitHeadline }) => {
  return (
    <><div className="pt-6 m-auto text-gray-600 md:px-12 xl:px-6" key="whytoristy4things">
    <div className="p-2"></div>
    <p className="text-center text-2xl text-cyan-900 font-bold">{benefitHeadline}</p>
</div>
<div className="container grid md:grid-cols-4 pt-6 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div className="p-4 text-center text-cyan-900 text-xl">
        <FontAwesomeIcon icon={faPlaneSlash} />
        <p className="p-4 text-center text-cyan-900 text-sm">{benefitOne}</p>
    </div>
    <div className="p-4 text-center text-cyan-900 text-xl">
        <FontAwesomeIcon icon={faScaleBalanced} />
        <p className="p-4 text-center text-sm">{benefitTwo}</p>
    </div>
    <div className="p-4 text-center text-cyan-900 text-xl">
        <FontAwesomeIcon icon={faHeadSideVirus} />
        <p className="p-4  text-center text-sm">{benefitThree}</p>
    </div>
    <div className="p-4 text-center text-cyan-900 text-xl">
        <FontAwesomeIcon icon={faStar} />
        <p className="p-4 text-center text-sm">{benefitFour}</p>
    </div>      
</div>
</>
  )
}

export default whyHotel