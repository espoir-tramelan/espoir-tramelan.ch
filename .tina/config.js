import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "bc2b4034-2b97-46eb-a5d1-6983dae65efb", // Get this from tina.io
  token: "67187ec407dbd931baf940eb3df9ba4f983f8bcf", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
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
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "teaser",
            label: "teaser",
          },
          {
            type: "string",
            name: "location",
            label: "location",
          },
          {
            type: "datetime",
            name: "startdate",
            label: "startdate",
          },
          {
            type: "datetime",
            name: "enddate",
            label: "enddate",
          },
          {
            type: "string",
            name: "banner",
            label: "banner",
          },
        ],
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
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date de publication",
          },
          {
            type: "boolean",
            name: "open",
            label: "open",
          },
          {
            type: "boolean",
            name: "full",
            label: "full",
          },
          {
            type: "string",
            name: "startdate",
            label: "startdate",
          },
          {
            type: "string",
            name: "enddate",
            label: "enddate",
          },
          {
            type: "string",
            name: "ensavoirplus",
            label: "ensavoirplus",
          },
          {
            type: "string",
            name: "form",
            label: "form",
          },
          {
            type: "string",
            name: "location",
            label: "location",
          },
          {
            type: "string",
            name: "locationlink",
            label: "location link",
          },
          {
            type: "string",
            name: "teaser",
            label: "teaser",
          },
          {
            type: "string",
            name: "age",
            label: "age",
          },
          {
            type: "string",
            name: "price",
            label: "price",
          },
          {
            type: "string",
            name: "banner",
            label: "banner",
          },
          {
            type: "string",
            name: "responsable",
            label: "responsable",
          },
        ],
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
            isBody: true,
          },
          {
            type: "string",
            name: "videolink",
            label: "Link to a vimeo video",
            description: "This is a link to an optional Vimeo video",
          },
        ],
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
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "string",
            name: "shortanswer",
            label: "shortanswer",
          },
        ],
      },
    ],
  },
});
