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
        // LocalHost
        //apiURL: "http://localhost:1337",
        //accessToken: "9a065c20476add1c8c2677508fe565c4a49e4e4fc164494baaa2847a72e50e39cdc850cb9fe66bd1cf046fa21242186fd0125a1a105804860624c4bfefeb3c020e04bf8492a13ddeb5c31b646d8b6ced4b1eb0e157f7e6e6ce8da056630b053a6a7aab3fac2da94c08c5f0b80b8eef4a65336838d7c2b60c8aca7a601ec86786",
        
        //Railway 
        
        apiURL: "https://ttbackend-production-d6df.up.railway.app",
        accessToken: "59875099e43a4fd50e3835d6bdbf7fea0086b020821151cc636a3fc360cde7acc69043c038167f36d22c1b85a0a13af788265c339b1b49cba8614d334af5ac46d7effff6607d2267494048b3e91926666b7ad8ce059f5674c3e3cc0becd5f2f1ecb76d06edd2abe14d6d635de1043c0fa11f4beb91158a61f93f961f727d0415",
        
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
            resolve: `gatsby-plugin-netlify`,
            options: {
              headers: {
                '/*': [
                  'Referrer-Policy: origin'
                ]
              }
            }
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

