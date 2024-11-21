import type { OperationSlice } from "../feature/operation/operation";
import type { ValidationSlice } from "./slice/validation";

export type CommonFormSlice = ValidationSlice &
  OperationSlice & {
    getFormIsValid: () => boolean;
  };
