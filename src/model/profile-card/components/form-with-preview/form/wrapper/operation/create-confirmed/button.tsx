import { Button } from "@mantine/core";
import type { FC } from "react";

import { useProfileCardFormCreateConfirmed } from "./hook";

export const ProfileCardFormCreateConfirmedButton: FC = () => {
  const { loading, disabled, onClick } = useProfileCardFormCreateConfirmed();

  return (
    <Button loading={loading} disabled={disabled} onClick={onClick}>
      確定保存
    </Button>
  );
};
