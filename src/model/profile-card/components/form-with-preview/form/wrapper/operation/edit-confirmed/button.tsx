"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useEditConfirmedProfileCardForm } from "./hook";

export const EditConfirmedProfileCardFormButton: FC = () => {
  const { loading, disabled, formAction } = useEditConfirmedProfileCardForm();

  return (
    <Button
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      更新
    </Button>
  );
};
