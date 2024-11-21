"use client";

import { TextInput } from "@/common/components/form/text-input";
import { useProfileCardSearchStore } from "../../store/hook";

export const ProfileCardListSearchFreeWordInput = () => {
  const freeWord = useProfileCardSearchStore((state) => state.freeWord);
  const setFreeWord = useProfileCardSearchStore((state) => state.setFreeWord);

  return (
    <TextInput
      label="フリーワード"
      placeholder="フリーワード"
      value={freeWord}
      onChange={(event) => setFreeWord(event.currentTarget.value)}
      className="max-w-lg"
    />
  );
};
