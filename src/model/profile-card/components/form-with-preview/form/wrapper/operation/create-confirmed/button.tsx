import { Button } from "@mantine/core";
import type { FC } from "react";

import { useProfileCardFormCreateConfirmed } from "./hook";

export const ProfileCardFormCreateConfirmedButton: FC = () => {
  const { loading, disabled, formAction } = useProfileCardFormCreateConfirmed();

  return (
    <Button
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      確定保存
    </Button>
  );
};
