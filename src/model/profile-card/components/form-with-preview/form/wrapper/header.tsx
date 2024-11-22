"use client";

import { Divider, Flex, Title } from "@mantine/core";
import type { FC } from "react";

import { FormMenuButton } from "@/model/common/components/form-menu";
import { useIsNewItemPagePath } from "@/model/common/hooks/is-new-item-page-path";

export const ProfileCardFormHeader: FC = () => {
  const isNewItemPagePath = useIsNewItemPagePath("ProfileCard");
  const title = `プロフィールカード ${isNewItemPagePath ? "新規作成" : "詳細"}`;

  return (
    <>
      <Flex justify="space-between" align="center" p="lg">
        <Title order={3}>{title}</Title>
        <FormMenuButton
          // TODO: 実装
          onDelete={() => {}}
          onReset={() => {}}
          isDeletable={false}
        />
      </Flex>
      <Divider />
    </>
  );
};
