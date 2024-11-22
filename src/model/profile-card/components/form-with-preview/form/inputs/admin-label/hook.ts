import { useProfileCardFormStore } from "../../../store/hook";

export const useProfileCardAdminLabelInput = () => {
  const value = useProfileCardFormStore((state) => state.adminLabel);
  const setValue = useProfileCardFormStore((state) => state.setAdminLabel);
  const validationPhase = useProfileCardFormStore(
    (state) => state.validationPhase,
  );
  const getErrorMessages = useProfileCardFormStore(
    (state) => state.getAdminLabelErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
