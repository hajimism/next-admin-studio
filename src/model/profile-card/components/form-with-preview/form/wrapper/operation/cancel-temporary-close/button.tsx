import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCancelTemporaryCloseProfileCard } from "./hook";

export const CancelTemporaryCloseProfileCardButton: FC = () => {
  const { loading, disabled, formAction } =
    useCancelTemporaryCloseProfileCard();

  return (
    <Button
      variant="outline"
      color="teal"
      loading={loading}
      disabled={disabled}
      onClick={formAction}
      type="submit"
    >
      再公開
    </Button>
  );
};
