const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for different dynamic pages
  const articlePost = path.resolve("./src/templates/article-post.js")
  const countryPost = path.resolve("./src/templates/country.js")
  const cityPost = path.resolve("./src/templates/city.js")
  //const supplierPost = path.resolve("./src/templates/supplier.js")
  //const legalPost = path.resolve("./src/templates/legal.js")

  // query the slug for the dynamic pages
  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            title
            slug
          }
        }
        allStrapiCountry {
          nodes {
            slug
          }
        }
        allStrapiCity {
          nodes {
            slug
          }
        }
      }
    `
  )
  // if an error show us
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading one of your slug queries`,
      result.errors
    )

    return
  }
  // for the blog
  const articles = result.data.allStrapiArticle.nodes

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/article/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      })
    })
  }

  // for the country pages

  const ctry = result.data.allStrapiCountry.nodes

  if (ctry.length > 0) {
    ctry.forEach((country) => {
      createPage({
        path: `/country/${country.slug}`,
        component: countryPost,
        context: {
          slug: country.slug,
        },
      })
    })
  }

  // for the city pages 

  const cit = result.data.allStrapiCity.nodes

  if (cit.length > 0) {
    cit.forEach((city) => {
      createPage({
        path: `/city/${city.slug}`,
        component: cityPost,
        context: {
          slug: city.slug,
        },
      })
    })
  }
  
  // for the experiences
  
  // for the suppliers
  // const sup = result.data.allStrapiServiceProvider.nodes

  // if (sup.length > 0) {
  //   sup.forEach((supplier) => {
  //     createPage({
  //       path: `/supplier/${supplier.slug}`,
  //       component: supplierPost,
  //       context: {
  //         slug: supplier.slug,
  //       },
  //     })
  //   })
  // }
// Legals
// const legals = result.data.allStrapiLegal.nodes

// if (legals.length > 0) {
//   legals.forEach((legal) => {
//     createPage({
//       path: `/legal/${legal.slug}`,
//       component: legalPost,
//       context: {
//         slug: legal.slug,
//       },
//     })
//   })
// }

}

