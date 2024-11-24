import type { StateCreator } from "zustand";

import type { OperationSlice } from "../feature/operation/slice";
import type { ValidationPhase } from "../lib/get-validation-error-message";
import type { ValidationSlice } from "./validation";

export type CommonFormSlice = ValidationSlice &
  OperationSlice & {
    getFormIsValid: () => boolean;
  };

export type FormInputSliceCreater<
  T extends Record<string, unknown>,
  S extends keyof T,
> = (
  arg: { [key in S]: T[key] } | undefined,
) => StateCreator<T & { validationPhase: ValidationPhase }, [], [], T>;
