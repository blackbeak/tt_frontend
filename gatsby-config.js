/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Toristy Travel`,
    description: `Add tours and activities to your website in a day.`,
    author: `Toristy`,
    siteUrl: `https://toristy.travel`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        accessToken: "9a065c20476add1c8c2677508fe565c4a49e4e4fc164494baaa2847a72e50e39cdc850cb9fe66bd1cf046fa21242186fd0125a1a105804860624c4bfefeb3c020e04bf8492a13ddeb5c31b646d8b6ced4b1eb0e157f7e6e6ce8da056630b053a6a7aab3fac2da94c08c5f0b80b8eef4a65336838d7c2b60c8aca7a601ec86786",
        collectionTypes: [
          {
            singularName: "article",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                cover: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "city",
            queryParams: {
                populate: "*",
            }
          },
          {
            singularName: "country",
            queryParams: {
                populate: "*",
            }
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                bgImage: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-fontawesome-css",
  ],
}
