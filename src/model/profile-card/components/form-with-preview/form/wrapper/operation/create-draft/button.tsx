import { Button } from "@mantine/core";
import type { FC } from "react";

import { useProfileCardFormCreateDraft } from "./hook";

export const ProfileCardFormCreateDraftButton: FC = () => {
  const { loading, disabled, formAction } = useProfileCardFormCreateDraft();

  return (
    <Button
      variant="outline"
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      下書き保存
    </Button>
  );
};
