import { Stack } from "@mantine/core";
import type { FC, ReactNode } from "react";

type Props = {
  name: ReactNode;
  birthday: ReactNode;
  luckyNumber: ReactNode;
  tags: ReactNode;
};

export const ProfileCardPreviewTemplate: FC<Props> = ({
  name,
  birthday,
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
      {birthday}
      {luckyNumber}
      {tags}
    </Stack>
  );
};
