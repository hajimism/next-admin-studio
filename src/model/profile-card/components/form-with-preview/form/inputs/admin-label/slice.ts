import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateProfileCardAdminLabelOnChange,
  validateProfileCardAdminLabelOnSubmit,
} from "./validation";

export type AdminLabelSlice = {
  adminLabel: string;
  setAdminLabel: (adminLabel: string) => void;
  getAdminLabelErrorMessages: (
    value: string,
    phase: ValidationPhase,
  ) => string[];
  getAdminLabelIsValid: () => boolean;
};

export const createAdminLabelSliceX: FormInputSliceCreater<
  AdminLabelSlice,
  "adminLabel"
> = (initalValue) => (set, get) => ({
  adminLabel: initalValue?.adminLabel ?? "",
  setAdminLabel: (adminLabel) => set({ adminLabel }),
  getAdminLabelErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateProfileCardAdminLabelOnChange(value),
        onConfirmedSubmit: validateProfileCardAdminLabelOnSubmit(value),
      },
    });
  },
  getAdminLabelIsValid: () => {
    const value = get().adminLabel;
    const phase = get().validationPhase;
    const errorMessages = get().getAdminLabelErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
