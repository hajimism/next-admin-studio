import { useCallback } from "react";
import { useProfileCardFormOperationState } from "../../../../store/hook";

export const useProfileCardFormCreateConfirmed = () => {
  const { loading, disabled, startOperation } =
    useProfileCardFormOperationState("CREATE_CONFIRMED");

  const handleClick = useCallback(async () => {
    const { settleOperation } = startOperation();

    // 2秒待つ
    await new Promise((resolve) => setTimeout(resolve, 2000));

    settleOperation();
  }, [startOperation]);

  return { loading, disabled, onClick: handleClick };
};
