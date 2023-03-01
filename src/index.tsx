import React, { useState } from "react";
import ReactDOM from "react-dom";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";

import { RelayEnvironmentProvider } from "./context/relay-environment";
import { useRelayQueryLoader } from "./hooks/use-relay-query-loader";
import { Continents } from "./components/continents";
import { Countries } from "./components/countries";

import { src_Query, src_Query$data } from "./__generated__/src_Query.graphql";

export type ContinentRef = src_Query$data["continents"][number];

const AppQuery = graphql`
  query src_Query {
    continents {
      code
      ...continents_Fragment
      ...countries_Fragment
    }
  }
`;

const AppImpl: React.FC<{
  queryRef: PreloadedQuery<src_Query>;
}> = ({ queryRef }) => {
  const queryData = usePreloadedQuery(AppQuery, queryRef);
  const [continentRef, setContinentRef] = useState<ContinentRef>();

  const onContinentSelectHandler = (code: string) => {
    const continentSelected = queryData.continents.find(
      (continent) => continent.code == code
    );

    setContinentRef(continentSelected);
  };

  if (!queryData) {
    return null;
  }

  return (
    <div>
      <h1>🏴‍☠️ Ahoy! Let's raid some country</h1>

      <h2>🗺 Pick a continent</h2>
      <Continents
        selected={continentRef?.code}
        onSelect={onContinentSelectHandler}
        queryRef={queryData.continents}
      />

      {continentRef && (
        <>
          <h2>💰 These are the countries we can loot 🤑🤑🤑🤑🤑 </h2>
          <Countries queryRef={continentRef} />
        </>
      )}
    </div>
  );
};

const App = () => {
  const { queryRef } = useRelayQueryLoader<src_Query>(AppQuery, {});

  if (!queryRef) {
    return null;
  }

  return <AppImpl queryRef={queryRef} />;
};

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider>
      <React.Suspense fallback={"Loading Continents / Countries data..."}>
        <App />
      </React.Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
