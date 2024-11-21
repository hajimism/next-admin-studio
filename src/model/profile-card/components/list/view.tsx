import { Stack } from "@mantine/core";
import type { FC } from "react";

import { ListTab } from "@/model/common/components/list-tab";

import { ProfileCardListSearchForm } from "./search";

type Props = {
  onCreateNew: () => void;
};

export const ProfileCardListView: FC<Props> = ({ onCreateNew }) => {
  return (
    <Stack>
      <ProfileCardListSearchForm />

      <ListTab
        renderTable={() => <div>テーブル</div>}
        renderPreviewList={() => <div>プレビュー</div>}
        onCreateNew={onCreateNew}
      />
    </Stack>
  );
};
