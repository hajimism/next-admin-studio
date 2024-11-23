"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useConfirmDraftProfileCardForm } from "./hook";

export const ConfirmDraftProfileCardFormButton: FC = () => {
  const { loading, disabled, formAction } = useConfirmDraftProfileCardForm();

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
