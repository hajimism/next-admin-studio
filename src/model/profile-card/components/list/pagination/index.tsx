"use client";

import { Center } from "@mantine/core";
import type { FC } from "react";

import { Pagination } from "@/model/common/components/pagination";

import { useProfileCardListTotalPageCount } from "./query";

export const ProfileCardListPagination: FC = () => {
  const total = useProfileCardListTotalPageCount();

  return (
    <Center>
      <Pagination total={total} />
    </Center>
  );
};
