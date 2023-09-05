import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SgHeadings from "../components/sg-headings"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"




export default function ThanksPage ( { data } ) {
const seo = {
      metaTitle: "Toristy Travel - Thanks for your request",
      metaDescription: data.strapiGlobal.defaultSeo.metaDescription,
    }

const background = getImage(data.thxBg)
const shortDesc = "Thanks for letting us know about your hotel."
const headline = "Thanks for your submission"
const body = "One of our staff will be in touch in due course about onboarding your hotel to the platform."


   
return (
        <Layout>
          <Seo seo={seo} />
          <div className="relative w-full h-full bg-gradient-to-r from-black to-cyan-700">
            <BgImage 
              image={background} 
              alt="A view of Finnish Northern Lights reflected off a lake" 
              className="absolute h-96 bg-center object-cover mix-blend-overlay" />
                <div className="container absolute top-0 left-1/2 -translate-x-1/2">
                  <SgHeadings title={headline} description={shortDesc} />
                </div>  
          </div>
            <div className="container mt-4 space-y-4 pb-6">
              {body}
            </div>
        </Layout>
      )
    }

// query from Strapi

export const query = graphql`    
query ContactQuery {
    strapiGlobal {
        defaultSeo {
          metaTitle
          metaDescription
        }
      }
      thxBg: file(relativePath: {eq: "images/tt_background.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
  }
  `
