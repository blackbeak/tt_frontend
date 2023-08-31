import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import SgHeadings from "../components/sg-headings"
import WhyToristy from "../components/why-toristy"



export default function IndexPage ({ data })
{
  const seo = {
    metaTitle: data.strapiIndex.headline,
    metaDescription: data.strapiIndex.shortDesc,
  }

  // background image with headline, custom text and a custom search on the main page
  const headline = data.strapiIndex.headline
  const background = getImage(data.strapiIndex.homeImage.localFile)
  const shortDesc = data.strapiIndex.shortDesc
  const alternativeText = "Toristy travel experiences"
  //
  return (

    <Layout>
      <Seo seo={seo} />
          <div className="relative h-96 w-full h-full bg-gradient-to-r from-purple-900 to-cyan-900">
            <BgImage 
              image={background}
              alt={alternativeText} 
              className="absolute h-96 bg-center object-cover mix-blend-overlay" />
                <div className="container absolute top-0 left-1/2 -translate-x-1/2">
                  <SgHeadings title={headline} description={shortDesc} />
            </div>
          </div>
          <WhyToristy />  
         
    </Layout>
  )
}

export const query = graphql`
  query{
    strapiIndex {
      headline
      shortDesc
      longDesc {
        data {
          longDesc
        }
      }
      homeImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  `

  
 
