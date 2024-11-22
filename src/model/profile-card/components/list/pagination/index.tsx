"use client";

import { Center } from "@mantine/core";
import { type FC, use } from "react";

import { Pagination } from "@/model/common/components/pagination";
import { getProfileCardListTotalPageCountCache } from "./query";

export const ProfileCardListPagination: FC = () => {
  const total = use(getProfileCardListTotalPageCountCache());

  return (
    <Center>
      <Pagination total={total} />
    </Center>
  );
};
