import { defineConfig as e } from "tinacms";
const t = process.env.HEAD || "main", n = e({
  branch: t,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        label: "Souvenirs",
        name: "souvenirs",
        path: "content/souvenirs",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: !0
          },
          {
            type: "string",
            name: "title",
            label: "title"
          },
          {
            type: "string",
            name: "teaser",
            label: "teaser"
          },
          {
            type: "string",
            name: "location",
            label: "location"
          },
          {
            type: "datetime",
            name: "startdate",
            label: "startdate"
          },
          {
            type: "datetime",
            name: "enddate",
            label: "enddate"
          },
          {
            type: "string",
            name: "banner",
            label: "banner"
          }
        ]
      },
      {
        label: "Camps",
        name: "camps",
        path: "content/camps",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: !0
          },
          {
            type: "string",
            name: "title",
            label: "title"
          },
          {
            type: "datetime",
            name: "date",
            label: "date de publication"
          },
          {
            type: "boolean",
            name: "open",
            label: "open"
          },
          {
            type: "boolean",
            name: "full",
            label: "full"
          },
          {
            type: "string",
            name: "startdate",
            label: "startdate"
          },
          {
            type: "string",
            name: "enddate",
            label: "enddate"
          },
          {
            type: "string",
            name: "ensavoirplus",
            label: "ensavoirplus"
          },
          {
            type: "string",
            name: "form",
            label: "form"
          },
          {
            type: "string",
            name: "location",
            label: "location"
          },
          {
            type: "string",
            name: "locationlink",
            label: "location link"
          },
          {
            type: "string",
            name: "teaser",
            label: "teaser"
          },
          {
            type: "string",
            name: "age",
            label: "age"
          },
          {
            type: "string",
            name: "price",
            label: "price"
          },
          {
            type: "string",
            name: "banner",
            label: "banner"
          },
          {
            type: "string",
            name: "responsable",
            label: "responsable"
          }
        ]
      },
      {
        label: "Pages",
        name: "pages",
        path: "content",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: !0
          },
          {
            type: "string",
            name: "videolink",
            label: "Link to a vimeo video",
            description: "This is a link to an optional Vimeo video"
          }
        ]
      },
      {
        label: "FAQ",
        name: "faq",
        path: "content/faq",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: !0
          },
          {
            type: "string",
            name: "title",
            label: "title"
          },
          {
            type: "datetime",
            name: "date",
            label: "date"
          },
          {
            type: "string",
            name: "shortanswer",
            label: "shortanswer"
          }
        ]
      }
    ]
  }
});
export {
  n as default
};
