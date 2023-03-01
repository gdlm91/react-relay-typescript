import React from "react";
import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";
import { RelayEnvironmentProvider as RelayEnvironmentProviderImpl } from "react-relay";

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
const fetchRelay: FetchFunction = async (params, variables) => {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );

  // Fetch data from Trevor Blades's Countries GraphQL API:
  const response = await fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
};

// Export a singleton instance of Relay Environment configured with our network function:
export const relayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

export const RelayEnvironmentProvider = ({ children }) => (
  <RelayEnvironmentProviderImpl environment={relayEnvironment}>
    {children}
  </RelayEnvironmentProviderImpl>
);
