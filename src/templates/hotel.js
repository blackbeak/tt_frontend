import React from "react"
import HotelLayout from "../components/hotel-layout"
// import the page dependencies
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { BgImage } from "gbimage-bridge"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Reactmarkdown from "react-markdown"
import WhyHotel from "../components/why-hotel"
import SgHeadings from "../components/sg-headings"
import HotelEmbed from "../components/hotel-embed"


export default function hotelPage ({ data }) {
// declare variables
// base queries
const hotel = data.strapiHotel


// SEO (headline and html title the same, URL includes slug, short desc is also used on the page - see also the SEO component)
const seo = {
      metaTitle: data.strapiHotel.headline,
      metaDescription: data.strapiHotel.shortDesc,
    }

// text for the page from strapi
const headline = hotel.headline
const hotelName = hotel.hotelName
const shortDesc = hotel.shortDesc
const moreHotel = hotel.moreHotel.data.moreHotel
const background = getImage(hotel.hotelImage.localFile)
const alternativeText = `A pic of ${hotelName}`
const eid = hotel.eid
const responsiveID = hotel.responsiveID
const benefitHeadline = hotel.benefitHeadline
const benefitOne = hotel.benefitOne
const benefitTwo = hotel.benefitTwo
const benefitThree = hotel.benefitThree
const benefitFour = hotel.benefitFour
const hotelLogo = hotel.hotelLogo.url
const QRCode = hotel.qrImage.url
const bgColor = hotel.headerFooterBgColor
const hotelURL = hotel.hotelURL


return (
      <HotelLayout hotelLogo={hotelLogo} QRCode={QRCode} bgColor={bgColor} hotelURl={hotelURL} > 
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
       
        <WhyHotel benefitHeadline={benefitHeadline} benefitOne={benefitOne} benefitTwo={benefitTwo} benefitThree={benefitThree} benefitFour={benefitFour} />
      <div className="container pt-6 pb-6 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12"><GatsbyImage className="rounded-3xl shadow-2xl" image={background} alt={alternativeText} /></div>
                <div className="md:7/12 lg:w-6/12">
                  <div className="p-2 space-y-4"><Reactmarkdown>{moreHotel}</Reactmarkdown></div>
                </div>
          </div>
        </div>
        <div className="container pt-6 pb-6 px-6 space-y-4 text-2xl text-cyan-900">Explore every service we have on offer today
        </div>
        <div className="container px-6">
      <HotelEmbed eid={eid} responsiveID={responsiveID}/>
      </div>
    </HotelLayout>
      )
    }

// query from Strapi - this needs to cycle based on slug : see gatsby-node.js

export const query = graphql`
query ($slug: String) {
    strapiHotel(slug: {eq: $slug}) {
    headline
    hotelName
    shortDesc
    slug
    benefitOne
    benefitTwo
    benefitThree
    benefitFour
    benefitHeadline
    hotelURL
    headerFooterBgColor
    moreHotel {
      data {
        moreHotel
      }
    }
    hotelImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    hotelLogo {
        url
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    eid
    responsiveID
    qrImage {
    url
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    }
  }`

