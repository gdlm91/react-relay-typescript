import { useCallback, useState } from "react";
import type { PreloadedQuery } from "react-relay";
import { useQueryLoader, useRelayEnvironment } from "react-relay";
import type { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { fetchQuery } from "relay-runtime";

export interface useRelayQueryOnDemandLoaderResponse<
  TQuery extends OperationType
> {
  queryRef: PreloadedQuery<TQuery, Record<string, unknown>> | null | undefined;
  isLoading: boolean;
  loadQuery: (variables: TQuery["variables"]) => void;
}

/**
 * A hook to load a query only when needed
 * https://relay.dev/docs/next/guided-tour/refetching/refetching-queries-with-different-data/#if-you-need-to-avoid-suspense
 */
export const useRelayQueryOnDemandLoader = <TQuery extends OperationType>(
  query: GraphQLTaggedNode
): useRelayQueryOnDemandLoaderResponse<TQuery> => {
  const environment = useRelayEnvironment();
  const [queryRef, loadQuery] = useQueryLoader<TQuery>(query);
  const [isLoading, setIsLoading] = useState(false);

  const onDemandLoadQuery = useCallback(
    (variables: TQuery["variables"]) => {
      if (isLoading) {
        return;
      }

      setIsLoading(true);

      // fetchQuery will fetch the query and write the data to the Relay store.
      // This will ensure that when we re-render, the data is already cached and we don't suspend
      fetchQuery(environment, query, variables).subscribe({
        complete: () => {
          setIsLoading(false);

          // *After* the query has been fetched, we call loadQuery again to re-render with a new queryRef.
          // At this point the data for the query should be cached, so we use the 'store-only' fetchPolicy
          // to avoid suspending.
          loadQuery(variables, { fetchPolicy: "store-only" });
        },
        error: () => {
          setIsLoading(false);
          // TODO: share some sort of error with the consumer instead of throwing
          throw new Error("Error while loading query...");
        },
      });
    },
    [environment, isLoading, loadQuery, query]
  );

  return {
    queryRef,
    isLoading,
    loadQuery: onDemandLoadQuery,
  };
};
