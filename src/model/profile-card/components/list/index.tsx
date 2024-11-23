import { Stack } from "@mantine/core";
import { type FC, Suspense } from "react";

import { ProfileCardListPagination } from "./pagination";
import { ProfileCardPreviewListContainer } from "./preview/container";
import { ProfileCardListSearchForm } from "./search";
import { ProfileCardListTab } from "./tab";
import { ProfileCardTableListContainer } from "./table/container";
import { ProfileCardTableListLoading } from "./table/loading";

export const ProfileCardList: FC = () => {
  return (
    <Stack>
      <Suspense>
        <ProfileCardListSearchForm />

        <ProfileCardListTab
          table={
            <Suspense fallback={<ProfileCardTableListLoading />}>
              <ProfileCardTableListContainer />
            </Suspense>
          }
          preview={
            <Suspense>
              <ProfileCardPreviewListContainer />
            </Suspense>
          }
        />

        <Suspense>
          <ProfileCardListPagination />
        </Suspense>
      </Suspense>
    </Stack>
  );
};
