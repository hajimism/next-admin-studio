import type { OperationSlice } from "../feature/operation/slice";

import type { StateCreator } from "zustand";
import type { ValidationPhase } from "../lib/get-validation-error-message";

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

export type CommonFormSlice<T> = ValidationSlice &
  OperationSlice & {
    id: string;
    setId: (id: string) => void;
    getFormIsValid: () => boolean;
    getFormValue: () => T;
    setFormValue: (profileCardForm: T) => void;
  };

export type FormInputSliceCreater<
  T extends Record<string, unknown>,
  S extends keyof T,
> = (
  arg: { [key in S]: T[key] } | undefined,
) => StateCreator<T & { validationPhase: ValidationPhase }, [], [], T>;