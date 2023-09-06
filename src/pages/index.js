import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Reactmarkdown from "react-markdown"
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
  const background = getImage(data.strapiIndex.backgroundImage.localFile)
  const homeImage = getImage(data.strapiIndex.homeImage.localFile)
  const shortDesc = data.strapiIndex.shortDesc
  const longDesc = data.strapiIndex.longDesc.data.longDesc
  const countries = data.allStrapiCountry.nodes

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
          <div className="container pt-6 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12"><GatsbyImage image={homeImage} alt="Toristy Integrations" className="shadow rounded-3xl" /></div>
                <div className="md:7/12 lg:w-6/12">
                  <div className="p-2 space-y-4 prose"><Reactmarkdown>{longDesc}</Reactmarkdown></div>
                  <div className="text-right pt-4">
                <button id="cta" type="submit" className="bg-emerald-900 text-center text-white py-2 px-4 rounded-lg focus:ring focus:ring-blue-300 hover:bg-emerald-600">
                      <Link to="/hotel-signup">Find out more</Link>
                </button>         
                </div>   
            </div>
          </div>
      </div>
      <WhyToristy />
      <div className="container pt-6">
      <p className="text-center text-2xl pb-8 text-cyan-900 font-bold">Select Unique Experiences and Things to Do In Different Countries</p>
      </div>
      <div className="container pb-6 pl-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {countries.map(country => (
          <Link to={`/country/` + country.slug} key={country.id} >
          <div className="overflow-hidden shadow rounded-3xl transition-shadow-2xl hover:shadow-lg">
          <GatsbyImage className="h-48 brightness-50" image={country.countryImage.localFile.childImageSharp.gatsbyImageData} alt={country.headline} />
              <h3 className="px-4 py-1 font-bold text-neutral-700 hover:text-cyan-700">{country.headline}</h3>
              <p className="px-4 py-1 line-clamp-6 mt-2 text-neutral-600">{country.shortDesc}</p>
          </div>
          </Link>
        ))} 
      </div>  
         
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
      backgroundImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allStrapiCountry
    {
    nodes {
      slug
      shortDesc
      longDesc {
        data {
          longDesc
        }
      }
      headline
      countryName
      countryImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
  }
  `

  
 
