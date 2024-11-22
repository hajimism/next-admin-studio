import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/types/form-input-slice";

import { validateProfileCardBirthdayOnSubmit } from "./validation";

export type BirthdaySlice = {
  birthday: Date | null;
  setBirthday: (birthday: Date | null) => void;
  getBirthdayErrorMessages: (
    value: Date | null,
    phase: ValidationPhase,
  ) => string[];
  getBirthdayIsValid: () => boolean;
};

export const createBirthdaySlice: FormInputSliceCreater<
  BirthdaySlice,
  "birthday"
> = (initalValue) => (set, get) => ({
  birthday: initalValue?.birthday ?? null,
  setBirthday: (birthday) => set({ birthday }),
  getBirthdayErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onConfirmedSubmit: validateProfileCardBirthdayOnSubmit(value),
      },
    });
  },
  getBirthdayIsValid: () => {
    const value = get().birthday;
    const phase = get().validationPhase;
    const errorMessages = get().getBirthdayErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
