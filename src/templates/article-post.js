import React from "react"
import { graphql } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import BlocksRenderer from "../components/blocks-renderer"
import Seo from "../components/seo"
import SgHeadings from "../components/sg-headings"

const ArticlePage = ({ data }) => {
  const article = data.strapiArticle
  const background = getImage(article.cover.localFile)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
  }


  return (
    <Layout as="article">
    <Seo seo={seo} />
    <header className="relative w-full h-full bg-gradient-to-r from-black to-emerald-600">
          <BgImage 
            image={background} 
            alt={seo.metaTitle}
            className="absolute h-96 bg-center object-cover mix-blend-overlay" />
              <div className="container absolute top-0 left-1/2 -translate-x-1/2">
                <SgHeadings title={article.title} description={article.description} />
              </div>  
    </header>
    <main className="mt-8">
      <BlocksRenderer blocks={article.blocks || []} />
    </main>
  </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      id
      slug
      title
      description
      blocks {
        ...Blocks
      }
      cover {
        alternativeText
          url
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
      }
    }
  }
`

export default ArticlePage
