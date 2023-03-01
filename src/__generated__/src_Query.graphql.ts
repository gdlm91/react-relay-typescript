/**
 * @generated SignedSource<<35b7306826a1b42e23610f2106bdc8b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type src_Query$variables = {};
export type src_Query$data = {
  readonly " $fragmentSpreads": FragmentRefs<"continents_Fragment">;
};
export type src_Query = {
  response: src_Query$data;
  variables: src_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "src_Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "continents_Fragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "src_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Continent",
        "kind": "LinkedField",
        "name": "continents",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Country",
            "kind": "LinkedField",
            "name": "countries",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fe653d227b237b309422af806d2c7294",
    "id": null,
    "metadata": {},
    "name": "src_Query",
    "operationKind": "query",
    "text": "query src_Query {\n  ...continents_Fragment\n}\n\nfragment continents_Fragment on Query {\n  continents {\n    code\n    name\n    ...countries_Fragment\n  }\n}\n\nfragment countries_Fragment on Continent {\n  name\n  countries {\n    code\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "f999e243b73077c28a512308b3ae8782";

export default node;
