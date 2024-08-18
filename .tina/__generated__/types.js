export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const SouvenirsPartsFragmentDoc = gql`
    fragment SouvenirsParts on Souvenirs {
  body
  title
  teaser
  location
  startdate
  enddate
  banner
}
    `;
export const CampsPartsFragmentDoc = gql`
    fragment CampsParts on Camps {
  body
  title
  date
  open
  full
  startdate
  enddate
  ensavoirplus
  form
  location
  locationlink
  teaser
  age
  price
  banner
  responsable
}
    `;
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  body
  videolink
}
    `;
export const FaqPartsFragmentDoc = gql`
    fragment FaqParts on Faq {
  body
  title
  date
  shortanswer
}
    `;
export const SouvenirsDocument = gql`
    query souvenirs($relativePath: String!) {
  souvenirs(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SouvenirsParts
  }
}
    ${SouvenirsPartsFragmentDoc}`;
export const SouvenirsConnectionDocument = gql`
    query souvenirsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SouvenirsFilter) {
  souvenirsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SouvenirsParts
      }
    }
  }
}
    ${SouvenirsPartsFragmentDoc}`;
export const CampsDocument = gql`
    query camps($relativePath: String!) {
  camps(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CampsParts
  }
}
    ${CampsPartsFragmentDoc}`;
export const CampsConnectionDocument = gql`
    query campsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CampsFilter) {
  campsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CampsParts
      }
    }
  }
}
    ${CampsPartsFragmentDoc}`;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const FaqDocument = gql`
    query faq($relativePath: String!) {
  faq(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FaqParts
  }
}
    ${FaqPartsFragmentDoc}`;
export const FaqConnectionDocument = gql`
    query faqConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FaqFilter) {
  faqConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FaqParts
      }
    }
  }
}
    ${FaqPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    souvenirs(variables, options) {
      return requester(SouvenirsDocument, variables, options);
    },
    souvenirsConnection(variables, options) {
      return requester(SouvenirsConnectionDocument, variables, options);
    },
    camps(variables, options) {
      return requester(CampsDocument, variables, options);
    },
    campsConnection(variables, options) {
      return requester(CampsConnectionDocument, variables, options);
    },
    pages(variables, options) {
      return requester(PagesDocument, variables, options);
    },
    pagesConnection(variables, options) {
      return requester(PagesConnectionDocument, variables, options);
    },
    faq(variables, options) {
      return requester(FaqDocument, variables, options);
    },
    faqConnection(variables, options) {
      return requester(FaqConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars
    });
    return { data: data?.data, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(createClient({ url: "http://localhost:4001/graphql", queries }))
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
