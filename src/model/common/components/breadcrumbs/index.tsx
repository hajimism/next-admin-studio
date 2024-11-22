import { truncateText } from "@/common/lib/truncate-text";
import { Anchor, Breadcrumbs as MantineBreadcrumbs, Text } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";
import { MODELS, type ModelName, ModelPathMapping } from "../../const";

type Props = {
  current: string;
  modelName: ModelName;
};

export const DetailPageBreadcrumbs: FC<Props> = ({ current, modelName }) => {
  return (
    <MantineBreadcrumbs>
      <Anchor href={ModelPathMapping[modelName].indexPath} component={Link}>
        {MODELS[modelName].label}一覧
      </Anchor>
      <Text>
        {truncateText(current) || <span className="text-gray-5">Untitled</span>}
      </Text>
    </MantineBreadcrumbs>
  );
};
