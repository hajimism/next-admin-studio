import type { ContentOperation } from "@/model/common/feature/operation/const";
import { getOperationState } from "@/model/common/feature/operation/lib";
import { useContext } from "react";
import { useStore } from "zustand";
import { ProfileCardFormStoreContext } from "./provider";
import type { ProfileCardFormStore } from "./type";

export const useProfileCardFormStore = <T>(
  selector: (store: ProfileCardFormStore) => T,
): T => {
  const profileCardFormStoreContext = useContext(ProfileCardFormStoreContext);

  if (!profileCardFormStoreContext) {
    throw new Error(
      "useProfileCardFormStore must be used within ProfileCardFormStoreProvider",
    );
  }

  return useStore(profileCardFormStoreContext, selector);
};

export const useProfileCardFormOperationState = (
  operationType: ContentOperation,
) => {
  const isPending = useProfileCardFormStore((state) => state.isPending);
  const current = useProfileCardFormStore((state) => state.current);
  const dispatchOperation = useProfileCardFormStore(
    (state) => state.dispatchOperation,
  );

  return getOperationState({
    isPending,
    current,
    operationType,
    dispatchOperation,
  });
};
