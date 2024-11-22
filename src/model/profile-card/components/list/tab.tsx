"use client";

import { useRouter } from "next/navigation";
import { type FC, Suspense } from "react";

import { ListTab } from "@/model/common/components/list-tab";
import { ModelPathMapping } from "@/model/common/const";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import { ProfileCardTableListContainer } from "./table/container";
import { ProfileCardTableListLoading } from "./table/loading";

export const ProfileCardListTab: FC = () => {
  const router = useRouter();

  const onCreateNew = () => {
    router.push(ModelPathMapping.ProfileCard.idToPath(NEW_ITEM_ID));
  };

  return (
    <ListTab
      renderTable={() => (
        <Suspense fallback={<ProfileCardTableListLoading />}>
          <ProfileCardTableListContainer />
        </Suspense>
      )}
      renderPreviewList={() => <div>プレビュー</div>}
      onCreateNew={onCreateNew}
    />
  );
};
