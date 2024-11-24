import {
  type inferParserType,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs";

import {
  STATUS_SEARCH_OPTIONS,
  STATUS_SEARCH_OPTIONS_ANY,
} from "@/model/common/const/search-options";

export const profileCardSearchParams = {
  q: parseAsString.withDefault(""),
  ln: parseAsInteger.withDefault(0),
  status: parseAsStringLiteral(
    STATUS_SEARCH_OPTIONS.map((option) => option.value),
  ).withDefault(STATUS_SEARCH_OPTIONS_ANY),
};

export type ProfileCardSearchParams = inferParserType<
  typeof profileCardSearchParams
>;
