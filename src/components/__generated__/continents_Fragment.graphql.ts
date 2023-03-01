/**
 * @generated SignedSource<<11e58485b8323b5ec37d94a8f246e5a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type continents_Fragment$data = ReadonlyArray<{
  readonly code: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "continents_Fragment";
}>;
export type continents_Fragment$key = ReadonlyArray<{
  readonly " $data"?: continents_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"continents_Fragment">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "continents_Fragment",
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
  "type": "Continent",
  "abstractKey": null
};

(node as any).hash = "98bc137d00ce96ce9d1181858b4991f3";

export default node;
