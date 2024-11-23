"use client";

import { Divider, Flex, Title } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import type { FC } from "react";

import { FormMenuButton } from "@/model/common/components/form-menu";
import { NEW_ITEM_ID } from "@/model/common/const/key";
import { profileCardPathMapping } from "@/model/profile-card/lib/path";

import { profileCardConverter } from "../../converter";
import { useProfileCardServerState } from "../../server-state/hook";
import { PROFILE_CARD_FORM_STORE_INITIAL_STATE } from "../../store/const";
import { useProfileCardFormStore } from "../../store/hook";
import { deleteProfileCard } from "./operation/delete/query";

export const ProfileCardFormHeader: FC = () => {
  const pathname = usePathname();
  const contentId = profileCardPathMapping.pathToId(pathname) ?? NEW_ITEM_ID;
  const router = useRouter();
  const serverState = useProfileCardServerState(contentId);
  const setFormValue = useProfileCardFormStore((state) => state.setFormValue);

  const isNewItem = contentId === NEW_ITEM_ID;
  const title = `プロフィールカード ${isNewItem ? "新規作成" : "詳細"}`;

  const isDraft = serverState?.creationStatus === "DRAFT";

  const onDelete = async () => {
    await deleteProfileCard(contentId);
  };

  const onReset = () => {
    setFormValue(PROFILE_CARD_FORM_STORE_INITIAL_STATE);
    if (!isNewItem) {
      // もともとの値を復元する
      setFormValue(profileCardConverter.toClient(serverState));
    }
  };

  const onCopyAndNew = () => {
    router.push(
      `${profileCardPathMapping.idToPath(NEW_ITEM_ID)}?base=${contentId}`,
    );
  };

  return (
    <>
      <Flex justify="space-between" align="center" p="lg">
        <Title order={3}>{title}</Title>
        <FormMenuButton
          onDelete={onDelete}
          onReset={onReset}
          isDeletable={isDraft}
          isCopyable={!isNewItem}
          onCopyAndNew={onCopyAndNew}
        />
      </Flex>
      <Divider />
    </>
  );
};
