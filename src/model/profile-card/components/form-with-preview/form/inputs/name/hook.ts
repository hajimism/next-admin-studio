import { useProfileCardFormStore } from "../../../store/hook";

export const useProfileCardNameInput = () => {
  const value = useProfileCardFormStore((state) => state.name);
  const setValue = useProfileCardFormStore((state) => state.setName);
  const validationPhase = useProfileCardFormStore(
    (state) => state.validationPhase,
  );
  const getErrorMessages = useProfileCardFormStore(
    (state) => state.getNameErrorMessages,
  );
  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
