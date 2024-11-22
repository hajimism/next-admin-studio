import {
  createSearchParamsCache,
  type inferParserType,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const profileCardSearchParams = {
  q: parseAsString.withDefault(""),
  ln: parseAsInteger.withDefault(0),
};

export const profileCardSearchParamsCache = createSearchParamsCache(
  profileCardSearchParams,
);

export type ProfileCardSearchParams = inferParserType<
  typeof profileCardSearchParams
>;
