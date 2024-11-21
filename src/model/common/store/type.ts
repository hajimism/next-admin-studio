import type { OperationSlice } from "../feature/operation/slice";
import type { ValidationSlice } from "./slice/validation";

export type CommonFormSlice = ValidationSlice &
  OperationSlice & {
    getFormIsValid: () => boolean;
  };
