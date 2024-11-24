"use client";

import { Flex, Tooltip } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import type { FC } from "react";

import { ContentFormFooterTamplate } from "@/model/common/components/content-form-footer-template";
import { NEW_ITEM_ID } from "@/model/common/const/key";
import { profileCardPathMapping } from "@/model/profile-card/path";

import { useProfileCardContentStatus } from "../../hooks/content-status";
import { CancelTemporaryCloseProfileCardButton } from "./operation/cancel-temporary-close/button";
import { ConfirmDraftProfileCardFormButton } from "./operation/confirm-draft/button";
import { CreateConfirmedProfileCardFormButton } from "./operation/create-confirmed/button";
import { CreateDraftProfileCardFormButton } from "./operation/create-draft/button";
import { EditConfirmedProfileCardFormButton } from "./operation/edit-confirmed/button";
import { EditDraftProfileCardFormButton } from "./operation/edit-draft/button";
import { TemporarilyCloseProfileCardFormButton } from "./operation/temporarily-close/button";

export const ProfileCardFormFooter: FC = () => {
  const pathname = usePathname();
  const contentId = profileCardPathMapping.pathToId(pathname) ?? NEW_ITEM_ID;
  const status = useProfileCardContentStatus(contentId);

  return (
    <ContentFormFooterTamplate
      status={status}
      footer={{
        onNew: <NewProfileCardFormFooter />,
        onDraft: <DraftProfileCardFormFooter />,
        onConfirmed: <ConfirmedProfileCardFormFooter />,
        onTemporarilyClosed: <TemporarilyClosedProfileCardFormFooter />,
      }}
    />
  );
};

const FOOTER_STYLE = {
  borderTop: "1px solid #ccc",
};

const NewProfileCardFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Tooltip
          label={
            <span>
              下書きはアプリに表示されません
              <br />
              確定保存の後も一部内容は編集可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <Flex align="center" gap="sm">
        <CreateDraftProfileCardFormButton />
        <CreateConfirmedProfileCardFormButton />
      </Flex>
    </Flex>
  );
};

const DraftProfileCardFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Tooltip
          label={
            <span>
              下書きはアプリに表示されません
              <br />
              確定保存の後も一部内容は編集可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <Flex align="center" gap="sm">
        <EditDraftProfileCardFormButton />
        <ConfirmDraftProfileCardFormButton />
      </Flex>
    </Flex>
  );
};

const ConfirmedProfileCardFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <TemporarilyCloseProfileCardFormButton />

        <Tooltip
          label={
            <span>
              公開停止するとアプリ上に現れなくなります
              <br />
              公開停止後も再公開は可能です😄
            </span>
          }
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>
      <EditConfirmedProfileCardFormButton />
    </Flex>
  );
};

const TemporarilyClosedProfileCardFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <CancelTemporaryCloseProfileCardButton />
        <Tooltip
          label="再公開すると、公開期間内であればアプリ上に現れるようになります😄"
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <EditConfirmedProfileCardFormButton />
    </Flex>
  );
};
