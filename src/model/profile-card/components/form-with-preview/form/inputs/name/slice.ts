import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";

import type { FormInputSliceCreater } from "@/model/common/store/form";
import {
  validateProfileCardNameOnChange,
  validateProfileCardNameOnSubmit,
} from "./validation";

export type NameSlice = {
  name: string;
  setName: (name: string) => void;
  getNameErrorMessages: (value: string, phase: ValidationPhase) => string[];
  getNameIsValid: () => boolean;
};

export const createNameSlice: FormInputSliceCreater<NameSlice, "name"> =
  (initalValue) => (set, get) => ({
    name: initalValue?.name ?? "",
    setName: (name) => set({ name }),
    getNameErrorMessages: (value, phase) => {
      return getValidationtErrorMessage({
        phase,
        validations: {
          onChange: validateProfileCardNameOnChange(value),
          onConfirmedSubmit: validateProfileCardNameOnSubmit(value),
        },
      });
    },
    getNameIsValid: () => {
      const value = get().name;
      const phase = get().validationPhase;
      const errorMessages = get().getNameErrorMessages(value, phase);
      return errorMessages.length === 0;
    },
  });
