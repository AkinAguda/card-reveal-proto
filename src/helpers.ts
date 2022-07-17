export type ConditionalClass = [
  boolean,
  ...(string | undefined | ConditionalClass)[]
];

export const mc = (
  ...args: (string | undefined | ConditionalClass)[]
): string => {
  return args.reduce((accumulator: string, currentValue) => {
    if (Array.isArray(currentValue)) {
      const bool = currentValue.shift();
      if (bool)
        return `${accumulator} ${mc(
          ...(currentValue as (string | undefined | ConditionalClass)[])
        )}`;
      return accumulator;
    }
    if (!currentValue) return accumulator;
    return `${accumulator ? `${accumulator} ` : ""}${currentValue}`;
  }, "");
};
