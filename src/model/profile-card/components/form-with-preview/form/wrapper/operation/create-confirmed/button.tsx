"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCreateConfirmedProfileCardForm } from "./hook";

export const CreateConfirmedProfileCardFormButton: FC = () => {
  const { loading, disabled, formAction } = useCreateConfirmedProfileCardForm();

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
