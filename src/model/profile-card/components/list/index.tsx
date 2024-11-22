import { Stack } from "@mantine/core";
import { type FC, Suspense } from "react";

import { ProfileCardListPagination } from "./pagination";
import { ProfileCardListSearchForm } from "./search";
import { ProfileCardListTab } from "./tab";
import { ProfileCardTableListContainer } from "./table/container";

export const ProfileCardList: FC = () => {
  return (
    <Stack>
      <ProfileCardListSearchForm />

      <ProfileCardListTab
        table={
          <Suspense>
            <ProfileCardTableListContainer />
          </Suspense>
        }
        preview={<div>プレビュー</div>}
      />

      <Suspense>
        <ProfileCardListPagination />
      </Suspense>
    </Stack>
  );
};
