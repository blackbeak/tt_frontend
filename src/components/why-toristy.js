// component dependencies
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlaneSlash, faScaleBalanced, faHeadSideVirus, faStar } from "@fortawesome/free-solid-svg-icons"

const WhyToristy = () => {
// Div class and font awesome icons for the why toristy section 
// Will turn the paras into variables in Strapi later which allows for different languages
// Can be called using a dependency on the page and the tag <WhyToristy>
// <WhyToristy> can be replaced with your brand name and called accordingly

return (
    <><div className="pt-6 m-auto text-gray-600 md:px-12 xl:px-6" key="whytoristy4things">
        <div className="p-2"></div>
        <p className="text-center text-2xl text-cyan-900 font-bold">Why Toristy?</p>
    </div>
    <div className="container grid md:grid-cols-4 pt-6 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="p-4 text-center text-cyan-900 text-xl">
            <FontAwesomeIcon icon={faPlaneSlash} />
            <p className="p-4 text-center text-cyan-900 text-sm">Cancel anywhere up to 24 hours before the experience (in most cases)</p>
        </div>
        <div className="p-4 text-center text-cyan-900 text-xl">
            <FontAwesomeIcon icon={faScaleBalanced} />
            <p className="p-4 text-center text-sm">We keep all money in escrow till after the service is delivered, guranteeing you get what you paid for</p>
        </div>
        <div className="p-4 text-center text-cyan-900 text-xl">
            <FontAwesomeIcon icon={faHeadSideVirus} />
            <p className="p-4  text-center text-sm">We curate and check tours for quality and autheticity, guranteeing a memorable experience</p>
        </div>
        <div className="p-4 text-center text-cyan-900 text-xl">
            <FontAwesomeIcon icon={faStar} />
            <p className="p-4 text-center text-sm">We only onboard high quality suppliers and vet all of them individually</p>
        </div>      
    </div></>
)    

}
export default WhyToristy