import type { StateCreator } from "zustand";
import type { ValidationPhase } from "../../lib/get-validation-error-message";

export type ValidationSlice = {
  validationPhase: ValidationPhase;
  setValidationPhase: (validationPhase: ValidationPhase) => void;
};

export const createValidationSlice: StateCreator<
  ValidationSlice,
  [],
  [],
  ValidationSlice
> = (set) => ({
  validationPhase: "onChange",
  setValidationPhase: (validationPhase) => set({ validationPhase }),
});
