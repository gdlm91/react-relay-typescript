import React from "react";
import { graphql, useFragment } from "react-relay";

import { countries_Fragment$key } from "./__generated__/countries_Fragment.graphql";

const CountriesFragment = graphql`
  fragment countries_Fragment on Continent {
    name
    countries {
      code
      name
    }
  }
`;

export const Countries: React.FC<{
  // query ref
  queryRef: countries_Fragment$key;
}> = ({ queryRef }) => {
  const { countries } = useFragment(CountriesFragment, queryRef);

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};
