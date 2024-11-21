import { useQueryStates } from "nuqs";
import { profileCardSearchParams } from ".";

export const useProfileCardSearchParams = () => {
  return useQueryStates(profileCardSearchParams);
};
