/**
 * @generated SignedSource<<c772735b9f196afc33a0266d267c8f23>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type countries_Fragment$data = {
  readonly countries: ReadonlyArray<{
    readonly code: string | null;
    readonly name: string | null;
  } | null> | null;
  readonly name: string | null;
  readonly " $fragmentType": "countries_Fragment";
};
export type countries_Fragment$key = {
  readonly " $data"?: countries_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"countries_Fragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "countries_Fragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Country",
      "kind": "LinkedField",
      "name": "countries",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "code",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Continent",
  "abstractKey": null
};
})();

(node as any).hash = "076e44ab6788d1c48820c33e7fc50cb4";

export default node;
