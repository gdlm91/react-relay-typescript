import React from "react";
import { graphql, useFragment } from "react-relay";

import {
  continents_Fragment$key,
  continents_Fragment$data,
} from "./__generated__/continents_Fragment.graphql";

const ContinentsFragment = graphql`
  fragment continents_Fragment on Query {
    continents {
      code
      name
      ...countries_Fragment
    }
  }
`;

export type ContinentRef = continents_Fragment$data["continents"][number];

export const Continents: React.FC<{
  // query ref
  queryRef: continents_Fragment$key;
  // Code of the continent selected by default
  selected?: string;
  // callback to be called once the user makes a selection
  onSelect?: (continentRef: ContinentRef) => void;
}> = ({ queryRef, selected, onSelect }) => {
  const { continents } = useFragment(ContinentsFragment, queryRef);

  const handleContinentSelected = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedContinentCode = event.target.value;
    const _continentSelected = continents.find(
      (continent) => continent.code == selectedContinentCode
    );

    onSelect(_continentSelected);
  };

  return (
    <div>
      <select onChange={handleContinentSelected}>
        <option hidden disabled selected>
          -- available continents --
        </option>
        {continents.map((continent) => (
          <option
            key={continent.code}
            value={continent.code}
            selected={selected && selected === continent.code}
          >
            {continent.name}
          </option>
        ))}
      </select>
    </div>
  );
};
