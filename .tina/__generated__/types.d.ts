//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  souvenirs: Souvenirs;
  souvenirsConnection: SouvenirsConnection;
  camps: Camps;
  campsConnection: CampsConnection;
  pages: Pages;
  pagesConnection: PagesConnection;
  faq: Faq;
  faqConnection: FaqConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QuerySouvenirsArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QuerySouvenirsConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<SouvenirsFilter>;
};


export type QueryCampsArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryCampsConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CampsFilter>;
};


export type QueryPagesArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPagesConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PagesFilter>;
};


export type QueryFaqArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryFaqConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FaqFilter>;
};

export type DocumentFilter = {
  souvenirs?: InputMaybe<SouvenirsFilter>;
  camps?: InputMaybe<CampsFilter>;
  pages?: InputMaybe<PagesFilter>;
  faq?: InputMaybe<FaqFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<DocumentFilter>;
};

export type DocumentNode = Souvenirs | Camps | Pages | Faq;

export type Souvenirs = Node & Document & {
  __typename?: 'Souvenirs';
  body?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  teaser?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  startdate?: Maybe<Scalars['String']>;
  enddate?: Maybe<Scalars['String']>;
  banner?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SouvenirsFilter = {
  body?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
  teaser?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  startdate?: InputMaybe<DatetimeFilter>;
  enddate?: InputMaybe<DatetimeFilter>;
  banner?: InputMaybe<StringFilter>;
};

export type SouvenirsConnectionEdges = {
  __typename?: 'SouvenirsConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Souvenirs>;
};

export type SouvenirsConnection = Connection & {
  __typename?: 'SouvenirsConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<SouvenirsConnectionEdges>>>;
};

export type Camps = Node & Document & {
  __typename?: 'Camps';
  body?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  open?: Maybe<Scalars['Boolean']>;
  full?: Maybe<Scalars['Boolean']>;
  startdate?: Maybe<Scalars['String']>;
  enddate?: Maybe<Scalars['String']>;
  ensavoirplus?: Maybe<Scalars['String']>;
  form?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  locationlink?: Maybe<Scalars['String']>;
  teaser?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  banner?: Maybe<Scalars['String']>;
  responsable?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
};

export type CampsFilter = {
  body?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  open?: InputMaybe<BooleanFilter>;
  full?: InputMaybe<BooleanFilter>;
  startdate?: InputMaybe<StringFilter>;
  enddate?: InputMaybe<StringFilter>;
  ensavoirplus?: InputMaybe<StringFilter>;
  form?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  locationlink?: InputMaybe<StringFilter>;
  teaser?: InputMaybe<StringFilter>;
  age?: InputMaybe<StringFilter>;
  price?: InputMaybe<StringFilter>;
  banner?: InputMaybe<StringFilter>;
  responsable?: InputMaybe<StringFilter>;
};

export type CampsConnectionEdges = {
  __typename?: 'CampsConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Camps>;
};

export type CampsConnection = Connection & {
  __typename?: 'CampsConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<CampsConnectionEdges>>>;
};

export type Pages = Node & Document & {
  __typename?: 'Pages';
  body?: Maybe<Scalars['JSON']>;
  videolink?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type PagesFilter = {
  body?: InputMaybe<RichTextFilter>;
  videolink?: InputMaybe<StringFilter>;
};

export type PagesConnectionEdges = {
  __typename?: 'PagesConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Pages>;
};

export type PagesConnection = Connection & {
  __typename?: 'PagesConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PagesConnectionEdges>>>;
};

export type Faq = Node & Document & {
  __typename?: 'Faq';
  body?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  shortanswer?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type FaqFilter = {
  body?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  shortanswer?: InputMaybe<StringFilter>;
};

export type FaqConnectionEdges = {
  __typename?: 'FaqConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Faq>;
};

export type FaqConnection = Connection & {
  __typename?: 'FaqConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<FaqConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateSouvenirs: Souvenirs;
  createSouvenirs: Souvenirs;
  updateCamps: Camps;
  createCamps: Camps;
  updatePages: Pages;
  createPages: Pages;
  updateFaq: Faq;
  createFaq: Faq;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateSouvenirsArgs = {
  relativePath: Scalars['String'];
  params: SouvenirsMutation;
};


export type MutationCreateSouvenirsArgs = {
  relativePath: Scalars['String'];
  params: SouvenirsMutation;
};


export type MutationUpdateCampsArgs = {
  relativePath: Scalars['String'];
  params: CampsMutation;
};


export type MutationCreateCampsArgs = {
  relativePath: Scalars['String'];
  params: CampsMutation;
};


export type MutationUpdatePagesArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};


export type MutationCreatePagesArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};


export type MutationUpdateFaqArgs = {
  relativePath: Scalars['String'];
  params: FaqMutation;
};


export type MutationCreateFaqArgs = {
  relativePath: Scalars['String'];
  params: FaqMutation;
};

export type DocumentUpdateMutation = {
  souvenirs?: InputMaybe<SouvenirsMutation>;
  camps?: InputMaybe<CampsMutation>;
  pages?: InputMaybe<PagesMutation>;
  faq?: InputMaybe<FaqMutation>;
  relativePath?: InputMaybe<Scalars['String']>;
};

export type DocumentMutation = {
  souvenirs?: InputMaybe<SouvenirsMutation>;
  camps?: InputMaybe<CampsMutation>;
  pages?: InputMaybe<PagesMutation>;
  faq?: InputMaybe<FaqMutation>;
};

export type SouvenirsMutation = {
  body?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  teaser?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  startdate?: InputMaybe<Scalars['String']>;
  enddate?: InputMaybe<Scalars['String']>;
  banner?: InputMaybe<Scalars['String']>;
};

export type CampsMutation = {
  body?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  open?: InputMaybe<Scalars['Boolean']>;
  full?: InputMaybe<Scalars['Boolean']>;
  startdate?: InputMaybe<Scalars['String']>;
  enddate?: InputMaybe<Scalars['String']>;
  ensavoirplus?: InputMaybe<Scalars['String']>;
  form?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  locationlink?: InputMaybe<Scalars['String']>;
  teaser?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  banner?: InputMaybe<Scalars['String']>;
  responsable?: InputMaybe<Scalars['String']>;
};

export type PagesMutation = {
  body?: InputMaybe<Scalars['JSON']>;
  videolink?: InputMaybe<Scalars['String']>;
};

export type FaqMutation = {
  body?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  shortanswer?: InputMaybe<Scalars['String']>;
};

export type SouvenirsPartsFragment = { __typename?: 'Souvenirs', body?: any | null, title?: string | null, teaser?: string | null, location?: string | null, startdate?: string | null, enddate?: string | null, banner?: string | null };

export type CampsPartsFragment = { __typename?: 'Camps', body?: any | null, title?: string | null, date?: string | null, open?: boolean | null, full?: boolean | null, startdate?: string | null, enddate?: string | null, ensavoirplus?: string | null, form?: string | null, location?: string | null, locationlink?: string | null, teaser?: string | null, age?: string | null, price?: string | null, banner?: string | null, responsable?: string | null };

export type PagesPartsFragment = { __typename?: 'Pages', body?: any | null, videolink?: string | null };

export type FaqPartsFragment = { __typename?: 'Faq', body?: any | null, title?: string | null, date?: string | null, shortanswer?: string | null };

export type SouvenirsQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type SouvenirsQuery = { __typename?: 'Query', souvenirs: { __typename?: 'Souvenirs', id: string, body?: any | null, title?: string | null, teaser?: string | null, location?: string | null, startdate?: string | null, enddate?: string | null, banner?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type SouvenirsConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<SouvenirsFilter>;
}>;


export type SouvenirsConnectionQuery = { __typename?: 'Query', souvenirsConnection: { __typename?: 'SouvenirsConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'SouvenirsConnectionEdges', cursor: string, node?: { __typename?: 'Souvenirs', id: string, body?: any | null, title?: string | null, teaser?: string | null, location?: string | null, startdate?: string | null, enddate?: string | null, banner?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type CampsQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type CampsQuery = { __typename?: 'Query', camps: { __typename?: 'Camps', id: string, body?: any | null, title?: string | null, date?: string | null, open?: boolean | null, full?: boolean | null, startdate?: string | null, enddate?: string | null, ensavoirplus?: string | null, form?: string | null, location?: string | null, locationlink?: string | null, teaser?: string | null, age?: string | null, price?: string | null, banner?: string | null, responsable?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type CampsConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CampsFilter>;
}>;


export type CampsConnectionQuery = { __typename?: 'Query', campsConnection: { __typename?: 'CampsConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'CampsConnectionEdges', cursor: string, node?: { __typename?: 'Camps', id: string, body?: any | null, title?: string | null, date?: string | null, open?: boolean | null, full?: boolean | null, startdate?: string | null, enddate?: string | null, ensavoirplus?: string | null, form?: string | null, location?: string | null, locationlink?: string | null, teaser?: string | null, age?: string | null, price?: string | null, banner?: string | null, responsable?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type PagesQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PagesQuery = { __typename?: 'Query', pages: { __typename?: 'Pages', id: string, body?: any | null, videolink?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PagesConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PagesFilter>;
}>;


export type PagesConnectionQuery = { __typename?: 'Query', pagesConnection: { __typename?: 'PagesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PagesConnectionEdges', cursor: string, node?: { __typename?: 'Pages', id: string, body?: any | null, videolink?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type FaqQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type FaqQuery = { __typename?: 'Query', faq: { __typename?: 'Faq', id: string, body?: any | null, title?: string | null, date?: string | null, shortanswer?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type FaqConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FaqFilter>;
}>;


export type FaqConnectionQuery = { __typename?: 'Query', faqConnection: { __typename?: 'FaqConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'FaqConnectionEdges', cursor: string, node?: { __typename?: 'Faq', id: string, body?: any | null, title?: string | null, date?: string | null, shortanswer?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

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
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      souvenirs(variables: SouvenirsQueryVariables, options?: C): Promise<{data: SouvenirsQuery, variables: SouvenirsQueryVariables, query: string}> {
        return requester<{data: SouvenirsQuery, variables: SouvenirsQueryVariables, query: string}, SouvenirsQueryVariables>(SouvenirsDocument, variables, options);
      },
    souvenirsConnection(variables?: SouvenirsConnectionQueryVariables, options?: C): Promise<{data: SouvenirsConnectionQuery, variables: SouvenirsConnectionQueryVariables, query: string}> {
        return requester<{data: SouvenirsConnectionQuery, variables: SouvenirsConnectionQueryVariables, query: string}, SouvenirsConnectionQueryVariables>(SouvenirsConnectionDocument, variables, options);
      },
    camps(variables: CampsQueryVariables, options?: C): Promise<{data: CampsQuery, variables: CampsQueryVariables, query: string}> {
        return requester<{data: CampsQuery, variables: CampsQueryVariables, query: string}, CampsQueryVariables>(CampsDocument, variables, options);
      },
    campsConnection(variables?: CampsConnectionQueryVariables, options?: C): Promise<{data: CampsConnectionQuery, variables: CampsConnectionQueryVariables, query: string}> {
        return requester<{data: CampsConnectionQuery, variables: CampsConnectionQueryVariables, query: string}, CampsConnectionQueryVariables>(CampsConnectionDocument, variables, options);
      },
    pages(variables: PagesQueryVariables, options?: C): Promise<{data: PagesQuery, variables: PagesQueryVariables, query: string}> {
        return requester<{data: PagesQuery, variables: PagesQueryVariables, query: string}, PagesQueryVariables>(PagesDocument, variables, options);
      },
    pagesConnection(variables?: PagesConnectionQueryVariables, options?: C): Promise<{data: PagesConnectionQuery, variables: PagesConnectionQueryVariables, query: string}> {
        return requester<{data: PagesConnectionQuery, variables: PagesConnectionQueryVariables, query: string}, PagesConnectionQueryVariables>(PagesConnectionDocument, variables, options);
      },
    faq(variables: FaqQueryVariables, options?: C): Promise<{data: FaqQuery, variables: FaqQueryVariables, query: string}> {
        return requester<{data: FaqQuery, variables: FaqQueryVariables, query: string}, FaqQueryVariables>(FaqDocument, variables, options);
      },
    faqConnection(variables?: FaqConnectionQueryVariables, options?: C): Promise<{data: FaqConnectionQuery, variables: FaqConnectionQueryVariables, query: string}> {
        return requester<{data: FaqConnectionQuery, variables: FaqConnectionQueryVariables, query: string}, FaqConnectionQueryVariables>(FaqConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars,
    });

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "http://localhost:4001/graphql", queries }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

  