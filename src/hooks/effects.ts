/**
 * this is a clone of https://github.com/kentcdodds/use-deep-compare-effect/blob/main/src/index.ts
 */

import { useEffect, useMemo, useRef } from "react";

import deepEqual from "fast-deep-equal";

type UseEffectParams = Parameters<typeof useEffect>;
type EffectCallback = UseEffectParams[0];

type PlainOldType = number | string | boolean;
// eslint-disable-next-line @typescript-eslint/ban-types
type PlainOldDependency = PlainOldType | Function;

const useDeepCompareMemoize = <T>(value: T): T => {
  const ref = useRef<T>(value);
  const signalRef = useRef<number>(0);

  if (!deepEqual(value, ref.current)) {
    ref.current = value;
    signalRef.current += 1;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => ref.current, [signalRef.current]);
};

/**
 * A version of useEffect capable to handle Objects
 * @param callback
 * @param dependencies
 */
export const useDeepCompareEffect = (
  callback: EffectCallback,
  dependencies: Array<Record<string, PlainOldType> | PlainOldDependency>
): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, useDeepCompareMemoize(dependencies));
};
