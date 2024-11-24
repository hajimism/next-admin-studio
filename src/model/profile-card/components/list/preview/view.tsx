import { Anchor, Center, SimpleGrid, Stack } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";

import { truncateText } from "@/common/lib/truncate-text";

import { profileCardPathMapping } from "@/model/profile-card/path";

import { ProfileCardLuckyNumberPreviewView } from "../../preview/lucky-number";
import { ProfileCardNamePreviewView } from "../../preview/name";
import { ProfileCardTagsPreviewView } from "../../preview/tags";
import { ProfileCardPreviewTemplate } from "../../preview/template";
import type { ProfileCardPreviewList } from "./type";

type Props = {
  profileCards: ProfileCardPreviewList;
};

export const ProfileCardPreviewListView: FC<Props> = ({ profileCards }) => {
  return (
    <SimpleGrid
      cols={2}
      spacing={0}
      verticalSpacing={0}
      className="border-gray-4 border-t-0 border-r-0 border-b-0 border-solid"
    >
      {profileCards.map((profileCard, index) => (
        <Center
          key={profileCard.id}
          pt="md"
          pb="xl"
          className="border-gray-4 border-t-0 border-l-0 border-solid"
        >
          <Stack>
            <Anchor
              component={Link}
              href={profileCardPathMapping.idToPath(profileCard.id)}
              fw="bold"
              underline="never"
              className="w-fit"
            >
              {index + 1}. {truncateText(profileCard.name, { length: 20 })}
            </Anchor>
            <ProfileCardPreviewTemplate
              name={<ProfileCardNamePreviewView value={profileCard.name} />}
              luckyNumber={
                <ProfileCardLuckyNumberPreviewView
                  value={profileCard.luckyNumber}
                />
              }
              tags={<ProfileCardTagsPreviewView value={profileCard.tags} />}
            />
          </Stack>
        </Center>
      ))}
    </SimpleGrid>
  );
};
