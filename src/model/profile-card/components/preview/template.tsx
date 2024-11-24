import { Paper, ScrollArea } from "@mantine/core";
import type { FC, ReactNode } from "react";

const IPHONE_SE_SIZE = {
  w: 375,
  h: 667,
};

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
    <Paper
      shadow="md"
      withBorder
      {...IPHONE_SE_SIZE}
      className="animate-preview-fade-in rounded-md"
    >
      <ScrollArea {...IPHONE_SE_SIZE} type="never">
        {name}
        {luckyNumber}
        {tags}
      </ScrollArea>
    </Paper>
  );
};
