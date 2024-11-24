import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import { validateProfileCardLuckyNumberOnSubmit } from "./validation";

export type LuckyNumberSlice = {
  luckyNumber: number;
  setLuckyNumber: (luckyNumber: number) => void;
  getLuckyNumberErrorMessages: (
    value: number,
    phase: ValidationPhase,
  ) => string[];
  getLuckyNumberIsValid: () => boolean;
};

export const createLuckyNumberSlice: FormInputSliceCreater<
  LuckyNumberSlice,
  "luckyNumber"
> = (initalValue) => (set, get) => ({
  luckyNumber: initalValue?.luckyNumber ?? 0,
  setLuckyNumber: (luckyNumber) => set({ luckyNumber }),
  getLuckyNumberErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onConfirmedSubmit: validateProfileCardLuckyNumberOnSubmit(value),
      },
    });
  },
  getLuckyNumberIsValid: () => {
    const value = get().luckyNumber;
    const phase = get().validationPhase;
    const errorMessages = get().getLuckyNumberErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
