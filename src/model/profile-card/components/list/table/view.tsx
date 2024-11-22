import { Anchor, Table } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";

import { truncateText } from "@/common/lib/truncate-text";

import { ModelPathMapping } from "@/model/common/const";

import { ProfileCardTableHead } from "./head";
import type { ProfileCardTableListProps } from "./type";

export const ProfileCardTableListView: FC<ProfileCardTableListProps> = ({
  profileCards,
}) => {
  return (
    <Table>
      <ProfileCardTableHead />

      <Table.Tbody className="animate-table-fade-in">
        {profileCards.map((profileCard, index) => (
          <Table.Tr key={profileCard.id}>
            <Table.Td className="text-center text-gray-6" width={12}>
              {index + 1}
            </Table.Td>
            <Table.Td width={400}>
              <Anchor
                component={Link}
                href={ModelPathMapping.ProfileCard.idToPath(profileCard.id)}
                fw="bold"
              >
                {truncateText(profileCard.adminLabel, { length: 32 })}
              </Anchor>
            </Table.Td>
            <Table.Td width={112}>{profileCard.luckyNumber}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
