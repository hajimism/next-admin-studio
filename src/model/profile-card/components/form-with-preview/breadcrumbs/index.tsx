"use client";

import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MODELS } from "@/model/common/const";
import { NEW_ITEM_ID } from "@/model/common/const/key";
import { profileCardPathMapping } from "@/model/profile-card/lib/path";

import { truncateText } from "@/common/lib/truncate-text";

import { useProfileCardFormStore } from "../store/hook";

export const ProfileCardFormWithPreviewBreadcrumbs = () => {
  const pathname = usePathname();
  const adminLabel = useProfileCardFormStore((state) => state.adminLabel);

  const contentId = profileCardPathMapping.pathToId(pathname);
  const isNewItemPagePath = contentId === NEW_ITEM_ID;
  const current = isNewItemPagePath ? "新規作成" : adminLabel;

  return (
    <Breadcrumbs>
      <Anchor href={profileCardPathMapping.indexPath} component={Link}>
        {MODELS.ProfileCard.label}一覧
      </Anchor>
      <Text>
        {truncateText(current) || <span className="text-gray-5">Untitled</span>}
      </Text>
    </Breadcrumbs>
  );
};
