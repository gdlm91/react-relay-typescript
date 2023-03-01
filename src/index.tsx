import React, { useState } from "react";
import ReactDOM from "react-dom";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";

import { RelayEnvironmentProvider } from "./context/relay-environment";
import { useRelayQueryLoader } from "./hooks/use-relay-query-loader";
import { ContinentRef, Continents } from "./components/continents";
import { src_Query } from "./__generated__/src_Query.graphql";

const AppQuery = graphql`
  query src_Query {
    ...continents_Fragment
  }
`;

const AppImpl: React.FC<{
  queryRef: PreloadedQuery<src_Query>;
}> = ({ queryRef }) => {
  const [continentSelected, setContinentSelected] = useState<ContinentRef>();
  const queryData = usePreloadedQuery(AppQuery, queryRef);

  if (!queryData) {
    return null;
  }

  console.log(continentSelected);

  return (
    <div>
      <h1>🏴‍☠️ Ahoy! Let's raid some country</h1>

      <h3>🌎 Pick a continent</h3>
      <Continents
        selected={continentSelected?.code}
        onSelect={setContinentSelected}
        queryRef={queryData}
      />

      <h3>🗺 These are the countries we can invade </h3>
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
