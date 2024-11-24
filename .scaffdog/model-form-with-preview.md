---
name: 'model-form'
root: './src'
output: '/model/**/components'
ignore: []
questions:
  model: 'モデル名を入力してください (eg. artist)'
---

# `preview/template.tsx`

```tsx
import { Paper, ScrollArea } from "@mantine/core";
import type { FC, ReactNode } from "react";

import { IPHONE_SE_SIZE } from "@/common/const/size";

export const ProfileCardPreviewTemplate: FC<Props> = () => {
  return (
    <Paper
      shadow="md"
      withBorder
      {...IPHONE_SE_SIZE}
      className="animate-preview-fade-in rounded-md"
    >
      <ScrollArea {...IPHONE_SE_SIZE} type="never">
      {/* components here */}
      </ScrollArea>
    </Paper>
  );
};
```
