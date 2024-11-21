import { useCallback } from "react";
import { useProfileCardFormOperationState } from "../../../../store/hook";

export const useProfileCardFormCreateDraft = () => {
  const { loading, disabled, startOperation } =
    useProfileCardFormOperationState("CREATE_DRAFT");

  const handleClick = useCallback(async () => {
    const { settleOperation } = startOperation();

    // 2秒待つ
    await new Promise((resolve) => setTimeout(resolve, 2000));

    settleOperation();
  }, [startOperation]);

  return { loading, disabled, onClick: handleClick };
};
