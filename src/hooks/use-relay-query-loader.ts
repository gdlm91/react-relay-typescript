import { useCallback } from "react";
import type { PreloadedQuery } from "react-relay";
import { useQueryLoader } from "react-relay";
import type { GraphQLTaggedNode, OperationType } from "relay-runtime";

import { useDeepCompareEffect } from "./effects";

export interface useRelayQueryLoaderResponse<TQuery extends OperationType> {
  queryRef: PreloadedQuery<TQuery, Record<string, unknown>> | null | undefined;
  refresh(): void;
}

export const useRelayQueryLoader = <TQuery extends OperationType>(
  query: GraphQLTaggedNode,
  variables: TQuery["variables"]
): useRelayQueryLoaderResponse<TQuery> => {
  const [queryRef, loadQuery] = useQueryLoader<TQuery>(query);

  // use deep compare effect to prevent query rerun on every variable update
  useDeepCompareEffect(() => {
    loadQuery(variables);
  }, [variables, loadQuery]);

  const refresh = useCallback(() => {
    if (!queryRef) {
      return;
    }

    const { variables: queryVars } = queryRef;
    loadQuery(queryVars, { fetchPolicy: "network-only" });
  }, [loadQuery, queryRef]);

  return {
    queryRef,
    refresh,
  };
};
