import { Paper, ScrollArea } from "@mantine/core";
import type { FC, ReactNode } from "react";

import { IPHONE_SE_SIZE } from "@/common/const/size";

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
