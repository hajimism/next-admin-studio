import { Stack } from "@mantine/core";
import { type FC, Suspense } from "react";

import { ProfileCardListPagination } from "./pagination";
import { ProfileCardListSearchForm } from "./search";
import { ProfileCardListTab } from "./tab";

export const ProfileCardList: FC = () => {
  return (
    <Stack>
      <ProfileCardListSearchForm />

      <ProfileCardListTab />

      <Suspense>
        <ProfileCardListPagination />
      </Suspense>
    </Stack>
  );
};
