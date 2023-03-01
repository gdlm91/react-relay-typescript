/**
 * @generated SignedSource<<2f9efb32445126e38a644682ac6b64e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type continents_Fragment$data = {
  readonly continents: ReadonlyArray<{
    readonly code: string | null;
    readonly name: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"countries_Fragment">;
  } | null>;
  readonly " $fragmentType": "continents_Fragment";
};
export type continents_Fragment$key = {
  readonly " $data"?: continents_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"continents_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "continents_Fragment",
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
};

(node as any).hash = "4bea4ca77e395b7e6523823c808c181d";

export default node;
