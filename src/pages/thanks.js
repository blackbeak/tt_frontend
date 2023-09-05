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
      metaDescription: data.strapiThankYou.shortDesc,
    }
const thx = data.strapiThankYou
const background = getImage(thx.backgroundImage.localFile)
const shortDesc = thx.shortDesc
const headline = thx.headline
const body = thx.body.data.body


   
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
query MyQuery {
  strapiThankYou {
    backgroundImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    shortDesc
    headline
    body {
      data {
        body
      }
    }
  }
}`
