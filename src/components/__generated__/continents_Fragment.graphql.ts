/**
 * @generated SignedSource<<4b1c6a5fd38339b62f41be50eb4664bc>>
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "4c02307ecc92aad108a1ebb8a1dd1ceb";

export default node;
