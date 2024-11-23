"use client";

import { Button, Flex, Tooltip } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import type { FC } from "react";

import { ContentFormFooterTamplate } from "@/model/common/components/content-form-footer-template";
import { useContentIdFromPagePath } from "@/model/common/hooks/model-page-path";

import { useProfileCardFormStatus } from "../../hooks/form-status";
import { ProfileCardFormCreateConfirmedButton } from "./operation/create-confirmed/button";
import { ProfileCardFormCreateDraftButton } from "./operation/create-draft/button";

export const ProfileCardFormFooter: FC = () => {
  const contentId = useContentIdFromPagePath("ProfileCard");
  const status = useProfileCardFormStatus(contentId);

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
        <ProfileCardFormCreateDraftButton />
        <ProfileCardFormCreateConfirmedButton />
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
        <Button variant="outline">更新</Button>
        <Button>確定保存</Button>
      </Flex>
    </Flex>
  );
};

const ConfirmedProfileCardFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Button variant="outline" color="red">
          公開停止
        </Button>

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
      <Button>更新</Button>
    </Flex>
  );
};

const TemporarilyClosedProfileCardFormFooter: FC = () => {
  return (
    <Flex bg="white" p="sm" justify="space-between" style={FOOTER_STYLE}>
      <Flex align="center" gap="sm">
        <Button variant="outline">再公開</Button>
        <Tooltip
          label="再公開すると、公開期間内であればアプリ上に現れるようになります😄"
          withArrow
        >
          <IconInfoCircle color="#ccc" />
        </Tooltip>
      </Flex>

      <Button>更新</Button>
    </Flex>
  );
};
