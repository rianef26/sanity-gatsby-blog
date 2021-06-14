export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c6ff403ad464483859ceba",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-havxib9m",
                  apiId: "4413d02d-04a3-46d7-bea0-fa0c46d168b6",
                },
                {
                  buildHookId: "60c6ff409d8db308ce3240dc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-nvm7soqr",
                  apiId: "b7ff50b7-e915-42dc-80db-72a322918ff1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rianef26/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-nvm7soqr.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
