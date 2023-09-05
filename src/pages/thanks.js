//import dependencies
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import Headings from "../components/headings"
import Reactmarkdown from "react-markdown"
import Img from "gatsby-image"

// Add Page Head component and pass in SEO variables from GraphQL
export const Head = ({ data }) => {
  const title = "Steve Things - Thanks"
  const description = data.strapiGlobal.siteDescription 
  return (
    <SEO title={title} description={description} />
  )
}

export default function ThanksPage ({ data })
{  
  return (
    <Layout>
      <div className="container"><Headings title="Thanks for your purchase or interest in my services" /></div>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
      <div className="sm:w-3/12 md:5/12 lg:w-5/12"><Img className="max-w-xs" fluid={data.file.childImageSharp.fluid} /></div>
                <div className="md:7/12 lg:w-6/12">
                  <div className="p-5 text-gray-900"><Reactmarkdown>{data.strapiContact.body.data.body}</Reactmarkdown></div>
                  <div className="space-y-4">
                  <div className="p-6">
                    <form name="contact" method="POST" action="https://usebasin.com/f/abb5c7f0f2d6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col text-red-400">
                        <label htmlFor="first-name">First name*</label>
                        <input type="text" id="first-name" name="first-name" className="form-input px-3 py-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col text-red-400">
                        <label htmlFor="last-name">Last name*</label>
                        <input type="text" id="last-name" name="last-name" className="form-input px-3 py-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col text-red-400">
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" name="email" className="form-input px-3 py-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="phone">
                            <div className="flex align-items">
                            Phone
                            <span className="ml-auto opacity-75">Optional</span>
                            </div>
                        </label>
                        <input type="tel" id="phone" name="phone" className="form-input px-3 py-2 rounded-md" />
                        </div>
                        <div className="flex flex-col col-span-2 text-red-400">
                        <label htmlFor="subject">Subject*</label>
                        <input type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col col-span-2 text-red-400">
                        <label htmlFor="subject">
                            <div className="flex align-items">
                            Message*
                            <span className="ml-auto opacity-75">Max. 500 characters</span>
                            </div>
                        </label>
                        <textarea maxLength="500" rows="4" type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md" required />
                        </div>
                    </div>
                    <div className="flex justify-end py-4">
                        <button type="submit" className="bg-red-400 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-slate-900">
                        Get in touch
                        </button>
                    </div>
                    </form>
                </div>
            </div>
          </div>
        </div>
        </div>
   

    </Layout>
     )
  }

  export const query = graphql`
  query ThanksPage {
    file(relativePath: {eq: "images/logo.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    strapiContact {
      body {
        data {
          body
        }
      }
      headline
    }
    strapiGlobal {
      siteDescription
    }
  }
  `

