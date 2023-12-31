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
import ToristyEmbed from "../components/toristy-embed"

export default function countryPage ({ data }) {
// declare variables
// base queries
const country = data.strapiCountry 
const countryImage = getImage(country.countryImage.localFile)
const heroImage = getImage(country.heroImage.localFile)
const countryName = country.countryName
const headline = country.headline
const shortDesc = country.shortDesc
const moreCountry = country.longDesc.data.longDesc
const eid = country.eid
const responsiveID = country.responsiveID

// SEO (headline and html title the same, URL includes slug, short desc is also used on the page)
const seo = {
      metaTitle: data.strapiCountry.headline,
      metaDescription: data.strapiCountry.shortDesc,
      //shareImage: data.strapiCountry.countryImage.url
    }
// images from strapi for hero background 
const background = heroImage
const alternativeText = `A pic of something to do in ${countryName}`

// map for cities in each country
const citycards = data.strapiCountry.cities

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
            <div className="md:5/12 lg:w-5/12"><GatsbyImage className="rounded-3xl shadow-2xl" image={countryImage} alt={alternativeText} /></div>
                <div className="md:7/12 lg:w-6/12">
                  <div className="p-2 space-y-4"><Reactmarkdown>{moreCountry}</Reactmarkdown></div>
                </div>
          </div>
        </div>
        <div className="container pt-6 pb-6 px-6 space-y-4 text-2xl text-cyan-900">Explore cities in {countryName}
        </div>
        <div className="container mt-6 px-6 grid grid-cols-3 gap-6">
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
      <div className="container pt-6 pb-6 px-6 space-y-4 text-2xl text-cyan-900">Unique Experiences and Things to Do In {countryName}
        </div>
        <div className="container px-6">
      <ToristyEmbed eid={eid} responsiveID={responsiveID}/>
      </div>
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
    eid
    responsiveID
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
      url
    }
    heroImage {
      localFile {
        childImageSharp {
          gatsbyImageData
          }
        }
      }
    cities {
      headline
      cityName
      id
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
        }
    }
  }`