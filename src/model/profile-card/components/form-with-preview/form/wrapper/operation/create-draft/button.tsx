"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCreateDraftProfileCardForm } from "./hook";

export const CreateDraftProfileCardFormButton: FC = () => {
  const { loading, disabled, formAction } = useCreateDraftProfileCardForm();

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
