import { getValidationtErrorMessage } from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateProfileCardTagsOnChange,
  validateProfileCardTagsOnSubmit,
} from "./validation";

export type TagsSlice = {
  tags: string[];
  setTags: (tags: string[]) => void;
  getTagsErrorMessages: () => string[];
  getTagsIsValid: () => boolean;
};

export const createTagsSlice: FormInputSliceCreater<
  TagsSlice,
  { tags: string[] }
> = (initalValue) => (set, get) => ({
  tags: initalValue.tags,
  setTags: (tags) => set({ tags }),
  getTagsErrorMessages: () => {
    const value = get().tags;
    return getValidationtErrorMessage({
      phase: get().validationPhase,
      validations: {
        onChange: validateProfileCardTagsOnChange(value),
        onConfirmedSubmit: validateProfileCardTagsOnSubmit(value),
      },
    });
  },
  getTagsIsValid: () => {
    const errorMessages = get().getTagsErrorMessages();
    return errorMessages.length === 0;
  },
});
