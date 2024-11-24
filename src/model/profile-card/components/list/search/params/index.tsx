import { type inferParserType, parseAsInteger, parseAsString } from "nuqs";

export const profileCardSearchParams = {
  q: parseAsString.withDefault(""),
  ln: parseAsInteger.withDefault(0),
};

export type ProfileCardSearchParams = inferParserType<
  typeof profileCardSearchParams
>;
