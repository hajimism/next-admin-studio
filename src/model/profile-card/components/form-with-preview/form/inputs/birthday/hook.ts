import { useProfileCardFormStore } from "../../../store/hook";

export const useProfileCardBirthdayInput = () => {
  const value = useProfileCardFormStore((state) => state.birthday);
  const setValue = useProfileCardFormStore((state) => state.setBirthday);
  const validationPhase = useProfileCardFormStore(
    (state) => state.validationPhase,
  );
  const getErrorMessages = useProfileCardFormStore(
    (state) => state.getBirthdayErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
