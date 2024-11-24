import { Stack } from "@mantine/core";
import type { FC, ReactNode } from "react";

type Props = {
  name: ReactNode;
  luckyNumber: ReactNode;
  tags: ReactNode;
};

export const ProfileCardPreviewTemplate: FC<Props> = ({
  name,
  luckyNumber,
  tags,
}) => {
  return (
    <Stack
      w={400}
      h={270}
      className="animate-preview-fade-in rounded-md border border-gray-200 border-solid p-4 shadow-lg"
    >
      {name}
      {luckyNumber}
      {tags}
    </Stack>
  );
};
