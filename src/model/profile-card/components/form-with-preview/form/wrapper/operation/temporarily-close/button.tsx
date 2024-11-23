"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useTemporarilyCloseProfileCardForm } from "./hook";

export const TemporarilyCloseProfileCardFormButton: FC = () => {
  const { loading, disabled, formAction } =
    useTemporarilyCloseProfileCardForm();

  return (
    <Button
      variant="outline"
      color="red"
      loading={loading}
      disabled={disabled}
      onClick={formAction}
      type="submit"
    >
      公開停止
    </Button>
  );
};
