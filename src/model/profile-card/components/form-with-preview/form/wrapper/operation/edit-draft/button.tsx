"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useEditDraftProfileCardForm } from "./hook";

export const EditDraftProfileCardFormButton: FC = () => {
  const { loading, disabled, formAction } = useEditDraftProfileCardForm();

  return (
    <Button
      variant="outline"
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      更新
    </Button>
  );
};
