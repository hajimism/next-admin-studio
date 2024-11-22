import { useCallback } from "react";
import { useProfileCardFormStore } from "../../../store/hook";

export const useProfileCardLuckyNumberInput = () => {
  const value = useProfileCardFormStore((state) => state.luckyNumber);
  const _setValue = useProfileCardFormStore((state) => state.setLuckyNumber);
  const validationPhase = useProfileCardFormStore(
    (state) => state.validationPhase,
  );
  const getErrorMessages = useProfileCardFormStore(
    (state) => state.getLuckyNumberErrorMessages,
  );
  const errorMessages = getErrorMessages(value, validationPhase);

  const setValue = useCallback(
    (v: string | number) => {
      _setValue(Number(v));
    },
    [_setValue],
  );

  return { value, setValue, errorMessages };
};
