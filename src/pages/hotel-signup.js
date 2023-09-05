import React from  "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { BgImage } from "gbimage-bridge"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SgHeadings from "../components/sg-headings"
import Reactmarkdown from "react-markdown"
import WhyToristy from "../components/why-toristy"



export default function SignUpPage ({ data })
{
  const seo = {
    metaTitle: data.strapiSignUp.headline,
    metaDescription: data.strapiSignUp.shortDesc,
  }

  // background image with headline, custom text and a custom search on the main page
 const sqry = data.strapiSignUp
 const background = getImage(sqry.backgroundImage.localFile)
 const headline = sqry.headline
 const shortDesc = sqry.shortDesc
 const heroImage = getImage(sqry.heroImage.localFile)
 const howItWorksHeadline = sqry.howItWorksHeadline
 const howItWorks = sqry.howItWorks.data.howItWorks
 const alternativeText = "How it works for Hotels - Toristy" 
 const testimonials = data.allStrapiTestimonial.nodes
 const formHeadline = sqry.formHeadline
 const formLongDesc = sqry.formLongDesc.data.formLongDesc

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="relative h-96 w-full h-full bg-gradient-to-r from-purple-900 to-cyan-900">
        <BgImage 
        image={background} 
        alt={alternativeText} 
        className="absolute h-96 bg-center object-cover mix-blend-overlay" />
        <div className="container absolute top-0 left-1/2 -translate-x-1/2">
          <SgHeadings title={headline} description={shortDesc} /></div>
      </div>
      <div className="container pt-6 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12"><GatsbyImage image={heroImage} alt="Toristy Integrations" className="shadow rounded-3xl" /></div>
                <div className="md:7/12 lg:w-6/12">
                  <h2 className="p-1 text-2xl text-cyan-900 md:text-4xl">{howItWorksHeadline}</h2>
                  <div className="p-2 space-y-4"><Reactmarkdown>{howItWorks}</Reactmarkdown></div>
                <div className="text-right">
                <button id="cta" type="submit" className="bg-emerald-900 text-center text-white py-2 px-4 rounded-lg focus:ring focus:ring-blue-300 hover:bg-emerald-600">
                      <Link to="#form">Find out more</Link>
                </button>         
                </div>
            </div>
          </div>
      </div>
      <WhyToristy />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
      {testimonials.map(testimonial => (
      <figure key={testimonial.id} className="container mt-12 bg-slate-100 shadow-md rounded-2xl pt-2 relative">
            <GatsbyImage className="w-24 h-24 md:w-36 md:h-auto rounded-full float-right" 
            image={testimonial.headshot.localFile.childImageSharp.gatsbyImageData} 
            alt="Testimonial Toristy Travel" 
            />
            <div className="pt-6 md:p-6 space-y-4">
                <blockquote>
                <div className="text-base font-normal">
                   <Reactmarkdown>{testimonial.body.data.body}</Reactmarkdown>
                 </div>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-slate-700">
                    {testimonial.name}
                </div>
                <div className="text-sky-500">
                    <a href={testimonial.url}>{testimonial.title}</a>
                </div>
                </figcaption>
            </div>
        </figure>
      ))}
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
      <div className="pt-6 md:p-6 space-y-4" id="form">
        <h2 className="text-2xl font-normal">{formHeadline}</h2>
        <p><Reactmarkdown>{formLongDesc}</Reactmarkdown></p>
      </div>
      <div className="p-8 bg-slate-100 shadow-md rounded-2xl">
      <span className="text-xs">* Required field</span>
      <form method="post" action="put_action_here">
        <input type="hidden" name="source" value="Toristy.travel Hotel request"></input>
        <div className="space-x-4 pb-2">
        <label htmlFor="firstName" className="text-cyan-700">Signatory's First Name* <input className="rounded-lg w-full" type="text" name="firstName" /></label>
        </div>
        <div className="space-x-4 pb-2">
        <label htmlFor="lastName" className="text-cyan-700">Signatory's Last Name* <input className="rounded-lg w-full" type="text" name="lastName" /></label>
        </div>
        <div className="space-x-4 pb-2">
        <label htmlFor="title" className="text-cyan-700">Signatory's Title* <input className="rounded-lg w-full" type="text" name="lastName" /></label>
        </div>
        <div className="col-span-1 pb-2">
        <label htmlFor="email" className="text-cyan-700">Email* <input className="rounded-lg w-full" type="email" name="email" />
        </label>
        </div>
        <div className="space-x-4 pb-2">
        <label htmlFor="businessName" className="text-cyan-700">
        Business/Hotel Name* <input className="rounded-lg w-full" type="text" name="businessName" /></label>
        </div>
        <div className="space-x-4 pb-2">
        <label htmlFor="vatNumber" className="text-cyan-700">
        VAT or Business ID <input className="rounded-lg w-full" type="text" name="vatNumber" /></label>
        </div>
        <div className="space-x-4 pb-2">
        <input type="checkbox" id="fifteenPercent" name="fifteenPercent" defaultChecked />
        <label htmlFor="fifteenPercent">*I agree to the Hotel <Link to="/legal/hotel-terms" className="text-cyan-700 hover:text-emerald-500">terms of service</Link>
        </label>
        </div>
        <div className="space-x-4 pb-2">
        <label htmlFor="websiteAddress" className="text-cyan-700">
        Hotel Website address <input className="rounded-lg w-full" type="text" name="websiteAddress" />
        </label>
        </div>
        <div className="space-x-4 pb-2">
        <label htmlFor="annualBookings" className="text-cyan-700">My estimated annual guests are <input className="rounded-lg w-full" type="text" name="annualBookings" />
        </label>
        </div>
        <span className="text-cyan-700">Please select your preference</span>
        <ul className="list-none pb-2">
        <li><input type="hidden" name="ownWidget" value="no" /><input type="checkbox" name="ownWidget" id="ownWidget" key="ownWidget" value="yes" /><label htmlFor="ownWidget"> I'd prefer the widget on our own website </label></li>
        <li><input type="hidden" name="onToristy" value="no" /><input type="checkbox" name="onToristy" id="onToristy" key="onToristy" value="yes" /><label htmlFor="ownWidget"> I'd prefer to send you our logo and you host the services </label></li>
        
        </ul>
         <button className="bg-emerald-800 text-center text-white py-2 px-4 rounded-lg focus:ring focus:ring-blue-300 hover:bg-emerald-600" 
        type="submit">Join us</button>
      </form>
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query{
    strapiSignUp {
    headline
    shortDesc
    formHeadline
    formLongDesc {
      data {
        formLongDesc
      }
    }
    heroImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    howItWorksHeadline
    howItWorks {
      data {
        howItWorks
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
  allStrapiTestimonial {
    nodes {
      headshot {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      name
      body {
        data {
          body
        }
      }
      title
      url
      id
    }
  }
  }
  `

  