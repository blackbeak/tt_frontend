// Import dependencies
import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Headings from "../components/headings"

export default function countryList ( { data } ) {
// declare our query variables from Strapi
// Map query for each country
const countries = data.allStrapiCountry.nodes

// Specific meta for the page
const seo = {
    metaTitle: "Global experiences, search by country - Toristy Travel",
    metaDescription: "Experiences, tour and activities in available globally in a destination near you from Toristy. Pick from hundreds of countries",
  }
  return ( 
    <Layout>
      <Seo seo={seo} />
      <div className="container">
      <Headings 
      title="Which country are you interested in?" 
      description="Search experiences, tour and activities in available globally in a destination near you from Toristy. 
      Select from any of the hundreds of countries below"
      />
      </div>
      <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      <div className="container mt-8"></div>
    </Layout>
  )

}
export const query = graphql`
query allCountries {
  allStrapiCountry(filter: {countryImage: {id: {ne: null}}})
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
