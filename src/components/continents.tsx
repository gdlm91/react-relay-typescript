import React from "react";
import { graphql, useFragment } from "react-relay";

import { continents_Fragment$key } from "./__generated__/continents_Fragment.graphql";

const ContinentsFragment = graphql`
  fragment continents_Fragment on Continent @relay(plural: true) {
    code
    name
  }
`;

export const Continents: React.FC<{
  // query ref
  queryRef: continents_Fragment$key;
  // Code of the continent selected by default
  selected?: string;
  // callback to be called once the user makes a selection
  onSelect?: (code: string) => void;
}> = ({ queryRef, selected, onSelect }) => {
  const continents = useFragment(ContinentsFragment, queryRef);

  const handleContinentSelected = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedContinentCode = event.target.value;

    onSelect(selectedContinentCode);
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
