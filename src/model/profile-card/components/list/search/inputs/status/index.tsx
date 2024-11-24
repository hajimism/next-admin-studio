import { RadioButtonGroup } from "@/common/components/form/radio-input";

import {
  STATUS_SEARCH_OPTIONS,
  type StatusSearchOption,
} from "@/model/common/const/search-options";

import { useProfileCardSearchStore } from "../../store/hook";

export const ProfileCardListStatusSearchInput = () => {
  const status = useProfileCardSearchStore((state) => state.status);
  const setStatus = useProfileCardSearchStore((state) => state.setStatus);

  return (
    <RadioButtonGroup
      label="ステータス"
      description="ステータスで絞り込みます。"
      options={STATUS_SEARCH_OPTIONS}
      onChange={(v) => setStatus(v as StatusSearchOption)}
      value={status}
    />
  );
};
