/**
 * @generated SignedSource<<7af0770ee8047106d57a4753d00e36ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pages_index_MarketplaceListings_Query$variables = {
  first?: number | null;
};
export type pages_index_MarketplaceListings_Query$data = {
  readonly marketplaceListings: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly app: {
          readonly name: string;
        } | null;
        readonly fullDescription: string;
        readonly id: string;
      } | null;
    } | null> | null;
  };
};
export type pages_index_MarketplaceListings_Query = {
  response: pages_index_MarketplaceListings_Query$data;
  variables: pages_index_MarketplaceListings_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullDescription",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_index_MarketplaceListings_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MarketplaceListingConnection",
        "kind": "LinkedField",
        "name": "marketplaceListings",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketplaceListingEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MarketplaceListing",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "App",
                    "kind": "LinkedField",
                    "name": "app",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pages_index_MarketplaceListings_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MarketplaceListingConnection",
        "kind": "LinkedField",
        "name": "marketplaceListings",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketplaceListingEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MarketplaceListing",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "App",
                    "kind": "LinkedField",
                    "name": "app",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "36ce9d356f9e44e18418a677a5b83469",
    "id": null,
    "metadata": {},
    "name": "pages_index_MarketplaceListings_Query",
    "operationKind": "query",
    "text": "query pages_index_MarketplaceListings_Query(\n  $first: Int\n) {\n  marketplaceListings(first: $first) {\n    edges {\n      node {\n        id\n        app {\n          name\n          id\n        }\n        fullDescription\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e1f50e1d531e1cb9ee80b75b9edd51c4";

export default node;
