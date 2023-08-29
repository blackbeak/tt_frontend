// import the page dependencies
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { BgImage } from "gbimage-bridge"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Reactmarkdown from "react-markdown"
import WhyToristy from "../components/why-toristy"
import SgHeadings from "../components/sg-headings"
import ToristyEmbed from "../components/toristy-embed"

export default function cityPage ({ data }) {
// declare variables
// base queries
const city = data.strapiCity


// SEO (headline and html title the same, URL includes slug, short desc is also used on the page - see also the SEO component)
const seo = {
      metaTitle: data.strapiCity.headline,
      metaDescription: data.strapiCity.shortDesc,
    }

// text for the page from strapi
const headline = city.headline
const cityName = city.cityName
const shortDesc = city.shortDesc
const moreCity = city.longDesc.data.longDesc
const background = getImage(city.cityImage.localFile)
const alternativeText = `A pic of something to do in ${cityName}`
const eid = city.widgetField
const responsiveID = city.widgetResponsiveField

return (
      <Layout> 
          <Seo seo={seo} />
        <div className="relative h-96 w-full h-full bg-gradient-to-r from-black to-cyan-600">
        <BgImage
        image={background}
        alt={alternativeText}
        className="absolute h-96 bg-center object-cover mix-blend-overlay" />
        <div className="container absolute top-0 left-1/2 -translate-x-1/2">
          <SgHeadings title={headline} description={shortDesc} />
        </div>
       </div>
       
        <WhyToristy />
      <div className="container pt-6 pb-6 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12"><GatsbyImage className="rounded-3xl shadow-2xl" image={background} alt={alternativeText} /></div>
                <div className="md:7/12 lg:w-6/12">
                  <div className="p-2 space-y-4"><Reactmarkdown>{moreCity}</Reactmarkdown></div>
                </div>
          </div>
        </div>
        <div className="container pt-6 pb-6 px-6 space-y-4 text-2xl text-cyan-900">Explore every service we have in {cityName}
        </div>
      <ToristyEmbed eid={eid} responsiveID={responsiveID}/>
    </Layout>
      )
    }

// query from Strapi - this needs to cycle based on slug : see gatsby-node.js

export const query = graphql`
query ($slug: String) {
    strapiCity(slug: {eq: $slug}) {
      headline
    cityName
    shortDesc
    slug
    longDesc {
      data {
        longDesc
      }
    }
    cityImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    widgetField
    widgetResponsiveField
    qrImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    }
  }`

