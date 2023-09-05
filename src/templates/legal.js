import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Layout from "../components/layout"
import Reactmarkdown from "react-markdown"
import Seo from "../components/seo"
import SgHeadings from "../components/sg-headings"

const legalPage = ({ data }) => {
// declare variables
const legal = data.strapiLegal
const modified = `Last updated ` + legal.modifiedDate
const headline = legal.headline
const legalBody = legal.body.data.body
const background = getImage(legal.backgroundImage.localFile)
const alternativeText = "Toristy Travel - tours and activities - legal page" 
const seo = {
  metaTitle: legal.headline,
  metaDescription: `Toristy travel, tours, activities and experiences in destination. Legal - ${headline}`,
  }
    return (

            <Layout>
              <Seo seo={seo} />
                <div>
                <div className="relative h-96 w-full h-full bg-gradient-to-r from-black to-cyan-600">
                    <BgImage 
                    image={background} 
                    alt={alternativeText} 
                    className="absolute h-96 bg-center object-cover mix-blend-overlay" />
                    <div className="container absolute top-0 left-1/2 -translate-x-1/2">
                      <SgHeadings title={headline} description={modified} /></div>
                  </div>
                </div>
                <div className="container pb-6 pt-6 space-y-4"><Reactmarkdown>{legalBody}</Reactmarkdown></div>
            </Layout>
          )
        }

export const query = graphql`
  query ($slug: String) {
    strapiLegal(slug: { eq: $slug }) {
        headline
        body {
          data {
            body
          }
        }
        slug
        modifiedDate
        backgroundImage {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
        }
    }
    }`

export default legalPage
