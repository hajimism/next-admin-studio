import { Table } from "@mantine/core";

export const ProfileCardTableHead = () => (
  <Table.Thead>
    <Table.Tr>
      <Table.Th w={12} className="text-center">
        No.
      </Table.Th>
      <Table.Th w={400}>管理名称</Table.Th>
      <Table.Th w={112}>ラッキーナンバー</Table.Th>
    </Table.Tr>
  </Table.Thead>
);
