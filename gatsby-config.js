/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mn2jgcjeonqf`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `TvZqr9I0vb1DNOo84R8Jrh44lc981-vgJtBuIeQghqc`,
      },
    },
  
  ],
}
