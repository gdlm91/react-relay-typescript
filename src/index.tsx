import React, { useState } from "react";
import ReactDOM from "react-dom";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";

import { RelayEnvironmentProvider } from "./context/relay-environment";
import { useRelayQueryLoader } from "./hooks/use-relay-query-loader";
import { ContinentRef, Continents } from "./components/continents";
import { Countries } from "./components/countries";

import { src_Query } from "./__generated__/src_Query.graphql";

const AppQuery = graphql`
  query src_Query {
    ...continents_Fragment
  }
`;

const AppImpl: React.FC<{
  queryRef: PreloadedQuery<src_Query>;
}> = ({ queryRef }) => {
  const queryData = usePreloadedQuery(AppQuery, queryRef);
  const [continentRef, setContinentRef] = useState<ContinentRef>();

  if (!queryData) {
    return null;
  }

  return (
    <div>
      <h1>🏴‍☠️ Ahoy! Let's raid some country</h1>

      <h2>🗺 Pick a continent</h2>
      <Continents
        selected={continentRef?.code}
        onSelect={setContinentRef}
        queryRef={queryData}
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
      <React.Suspense fallback={"Loading Continents / Countries Data..."}>
        <App />
      </React.Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
