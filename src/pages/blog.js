import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesGrid from "../components/articles-grid"
import Seo from "../components/seo"
import SgHeadings from "../components/sg-headings"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"


const BlogPage = () => {
  const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
        bgImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

const siteName = strapiGlobal.siteName
const headline = strapiGlobal.siteName
const shortDesc = strapiGlobal.siteDescription
const bgFile = getImage(strapiGlobal.bgImage.localFile)

  return (
    <Layout>
      <Seo seo={{ metaTitle: siteName }} />
      <div className="relative w-full h-full bg-gradient-to-r from-black to-cyan-700">
            <BgImage 
              image={bgFile}
              alt="A view of Finnish Northern Lights reflected off a lake"
              className="absolute h-96 bg-center object-cover mix-blend-overlay" 
            />
              <div className="container absolute top-0 left-1/2 -translate-x-1/2">
                  <SgHeadings title={headline} description={shortDesc} />
              </div>  
      </div>
      <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main>
    </Layout>
  )
}

export default BlogPage
