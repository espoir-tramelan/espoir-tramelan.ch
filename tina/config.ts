import { defineConfig } from "tinacms";
import { campsFields } from "./templates";
import { faqFields } from "./templates";
import { souvenirsFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
// const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID!, // Get this from tina.io
  token: process.env.TINA_TOKEN!, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
//    basePath: "espoir-tramelan.ch",
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
        format: "json",
        label: "Menu",
        name: "menu",
        path: "data",
        match: { include: "menu" },
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            name: "main",
            label: "Menu principal",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name }),
            },
            fields: [
              { name: "name", label: "Nom affiché", type: "string", required: true },
              { name: "url", label: "URL", type: "string", required: true },
              { name: "identifier", label: "Identifiant", type: "string" },
              { name: "weight", label: "Ordre", type: "number" },
            ],
          },
        ],
      },
      {
        format: "md",
        label: "Souvenirs",
        name: "souvenirs",
        path: "content/souvenirs",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...souvenirsFields(),
        ],
      },
      {
        format: "md",
        label: "Camps",
        name: "camps",
        path: "content/camps",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...campsFields(),
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "FAQ",
        name: "faq",
        path: "content/faq",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...faqFields(),
        ],
      },
    ],
  },
});
