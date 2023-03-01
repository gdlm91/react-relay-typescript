/**
 * @generated SignedSource<<9facde5551fabdd62557852585d25158>>
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
  readonly continents: ReadonlyArray<{
    readonly code: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"continents_Fragment" | "countries_Fragment">;
  } | null>;
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
        "alias": null,
        "args": null,
        "concreteType": "Continent",
        "kind": "LinkedField",
        "name": "continents",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "continents_Fragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "countries_Fragment"
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
    "cacheID": "20f4f561355b1ff598ac43377f257195",
    "id": null,
    "metadata": {},
    "name": "src_Query",
    "operationKind": "query",
    "text": "query src_Query {\n  continents {\n    code\n    ...continents_Fragment\n    ...countries_Fragment\n  }\n}\n\nfragment continents_Fragment on Continent {\n  code\n  name\n}\n\nfragment countries_Fragment on Continent {\n  name\n  countries {\n    code\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "15f99c5db3c4a21c31547a7bcb834df1";

export default node;
