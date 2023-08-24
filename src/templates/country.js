// import the page dependencies
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { BgImage } from "gbimage-bridge"
// import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Reactmarkdown from "react-markdown"
import WhyToristy from "../components/why-toristy"
import SgHeadings from "../components/sg-headings"


export default function countryPage ({ data }) {
// declare variables
// base queries
const country = data.strapiCountry 
const bannerImage = getImage(country.countryImage.localFile)
const countryName = country.countryName
const headline = country.headline
const shortDesc = country.shortDesc
const moreCountry = country.longDesc.data.longDesc

// SEO (headline and html title the same, URL includes slug, short desc is also used on the page)
const seo = {
      metaTitle: data.strapiCountry.headline,
      metaDescription: data.strapiCountry.shortDesc,
    }
// images from strapi for hero background 
const background = bannerImage
const alternativeText = `A pic of something to do in ${countryName}`

// map for cities in each country
const citycards = country.cities
   
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
                      <SgHeadings title={headline} description={shortDesc} />
                    </div>
                </div>
            </div>
        <div className="container pt-6 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        
        </div>
        <WhyToristy />

        <div className="container pt-6 pb-6 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                 <div className="md:7/12 lg:w-6/12">
                  <div className="p-2 space-y-4"><Reactmarkdown>{moreCountry}</Reactmarkdown></div>
                </div>
          </div>
        </div>
        <div className="container pt-6 pb-6 px-6 space-y-4 text-2xl text-cyan-900">Explore cities in {countryName}
        </div>
        <div className="container mt-6 px-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {citycards.map(citycard => (
          <Link to={`/city/` + citycard.slug} key={citycard.id} >
          <div className="overflow-hidden shadow rounded-3xl transition-shadow-2xl hover:shadow-lg">
          <GatsbyImage className="h-48 brightness-50" image={citycard.cityImage.localFile.childImageSharp.gatsbyImageData} alt={citycard.headline}/>
              <h3 className="px-4 py-1 font-bold text-neutral-700 hover:text-cyan-700">{citycard.headline}</h3>
              <p className="px-4 py-1 line-clamp-6 mt-2 text-neutral-600">{citycard.shortDesc}</p>
          </div>
          </Link>
        ))}
      </div>
      <div className="container pb-6 mt-8"></div>
    </Layout>
      )
    }

// query from Strapi - this needs to cycle based on slug : see gatsby-node.js

export const query = graphql`
query ($slug: String) {
    strapiCountry(slug: {eq: $slug}) {
    headline
    slug
    countryName
    shortDesc
    longDesc {
      data {
        longDesc
      }
    }
    countryImage {
    localFile {
      childImageSharp {
        gatsbyImageData
        }
      }
    }
    cities {
      headline
      cityName
      shortDesc
      slug
      longDesc {
        data {
          longDesc
        }
      }
      widgetField
      cityImage {
        localFile {
          childImageSharp {
            gatsbyImageData
            }
          }
        }
        }
    }
  }`