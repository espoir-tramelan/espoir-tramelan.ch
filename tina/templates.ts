import type { TinaField } from "tinacms";
export function campsFields() {
  return [
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
      name: "waitinglistform",
      label: "waitinglistform",
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
      type: image
      component: 'list',
      field: {
        component: 'text',
      },
      name: "banner",
      label: "banner",
    },
    {
      type: "string",
      name: "responsable",
      label: "responsable",
    },
  ] as TinaField[];
}
export function faqFields() {
  return [
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
  ] as TinaField[];
}
export function souvenirsFields() {
  return [
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
      type: string
      component: 'list',
      field: {
        component: 'text',
      },
      ui: {
        list: true
      },
      name: "banner",
      label: "banner",
    },
  ] as TinaField[];
}
