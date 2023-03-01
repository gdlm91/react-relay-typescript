/**
 * @generated SignedSource<<91b8d6c0c43a69ed04b3a7a476aef99e>>
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

const node: ConcreteRequest = {
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8e96cc0781a296075d3598c1de46e37b",
    "id": null,
    "metadata": {},
    "name": "src_Query",
    "operationKind": "query",
    "text": "query src_Query {\n  ...continents_Fragment\n}\n\nfragment continents_Fragment on Query {\n  continents {\n    code\n    name\n  }\n}\n"
  }
};

(node as any).hash = "f999e243b73077c28a512308b3ae8782";

export default node;
