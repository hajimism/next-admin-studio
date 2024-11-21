"use client";

import { NumberInput } from "@/common/components/form/number-input";
import { useProfileCardSearchStore } from "../../store/hook";

export const ProfileCardListSearchLuckyNumberInput = () => {
  const luckyNumber = useProfileCardSearchStore((state) => state.luckyNumber);
  const setLuckyNumber = useProfileCardSearchStore(
    (state) => state.setLuckyNumber,
  );

  return (
    <NumberInput
      label="ラッキーナンバー"
      placeholder="ラッキーナンバー"
      value={luckyNumber}
      onChange={(v) => setLuckyNumber(Number(v))}
      className="max-w-sm"
    />
  );
};
