import { Button } from "@mantine/core";
import type { FC } from "react";

import { useProfileCardFormCreateDraft } from "./hook";

export const ProfileCardFormCreateDraftButton: FC = () => {
  const { loading, disabled, onClick } = useProfileCardFormCreateDraft();

  return (
    <Button
      variant="outline"
      loading={loading}
      disabled={disabled}
      onClick={onClick}
    >
      下書き保存
    </Button>
  );
};
