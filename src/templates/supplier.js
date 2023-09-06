import React from "react"
import SupplierLayout from "../components/supplier-layout"
// import the page dependencies
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { BgImage } from "gbimage-bridge"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Reactmarkdown from "react-markdown"
import SgHeadings from "../components/sg-headings"
import ToristyEmbed from "../components/toristy-embed"


export default function hotelPage ({ data }) {
// declare variables
// base queries
const sup = data.strapiServiceProvider


// SEO (headline and html title the same, URL includes slug, short desc is also used on the page - see also the SEO component)
const seo = {
      metaTitle: sup.headline,
      metaDescription: sup.shortDesc,
    }

// text for the page from strapi
const headline = sup.headline
const supplierName = sup.serviceProviderName
const shortDesc = sup.shortDesc
const longDesc = sup.longDesc.data.longDesc
const background = getImage(sup.serviceProviderImage.localFile)
const alternativeText = `A pic of ${supplierName}`
const eid = sup.eid
const slug = sup.slug
const responsiveID = sup.responsiveID
const logo = sup.serviceProviderLogo.localFile.url
const qrCode = `https://toristy.travel/supplier/${slug}`
const qrImage = sup.qrImage.url
const bgColor = sup.headerBgColor
// const contactName = sup.serviceContactName
// const contactEmail = sup.serviceContactEmail
// const contactDesc = sup.serviceContactDesc

return (
      <SupplierLayout supplierLogo={logo} qrCode={qrCode} bgColor={bgColor} qrImage={qrImage} > 
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
      <div className="container pt-6 pb-6 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12"><GatsbyImage className="rounded-3xl shadow-2xl" image={background} alt={alternativeText} /></div>
                <div className="md:7/12 lg:w-6/12">
                  <div className="p-2 space-y-4"><Reactmarkdown>{longDesc}</Reactmarkdown></div>
                </div>
            </div>
        </div>
        <div className="container pt-6 pb-6 px-6 space-y-4 text-2xl text-cyan-900">Explore every service on offer from {supplierName}
        </div>
        <div className="container px-6">
      <ToristyEmbed eid={eid} responsiveID={responsiveID}/>
      </div>
    </SupplierLayout>
      )
    }

export const query = graphql`
query ($slug: String) {
    strapiServiceProvider(slug: {eq: $slug}) {
       serviceProviderName
       headline
       shortDesc
       eid
       responsiveID
       slug
       serviceContactName
       serviceContactDesc
       serviceContactEmail
       headerBgColor
       longDesc {
        data {
          longDesc
        }
       }
       serviceProviderLogo {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
      }
      serviceProviderImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        url
        }
      }
      qrImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        url
      }

    }
}
`